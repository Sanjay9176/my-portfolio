import { useState, useRef, useEffect } from 'react';
import { Send, User, RefreshCcw, Sparkles } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const INITIAL_MESSAGE = {
  id: 1,
  sender: 'ai',
  text: "System Online. I am Sanjay's Neural Assistant. 🧠\n\nI can analyze his Resume, Projects, and Skills in real-time. Try asking:\n\n• \"Who is Sanjay?\"\n• \"Tell me about Gen-Vidhik?\"\n• \"Does he know Python?\""
};

const ChatInterface = () => {
  const { profile, projects, experience } = usePortfolio();
  
  // STATE
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  // 🧠 MEMORY: Stores what we are currently talking about
  const [activeContext, setActiveContext] = useState(null); 

  const chatContainerRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Add User Message
    const userText = input;
    const userMsg = { id: Date.now(), sender: 'user', text: userText };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // 2. Simulate Thinking
    const delay = Math.min(800 + Math.random() * 800, 2000);

    setTimeout(() => {
      const { text, newContext } = generateAdvancedResponse(userText, activeContext);
      
      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text }]);
      
      if (newContext) setActiveContext(newContext);
      
      setIsTyping(false);
    }, delay);
  };

  // 🧠 THE FINAL UPGRADED BRAIN
  const generateAdvancedResponse = (query, context) => {
    const text = query.toLowerCase();
    
    // --- 1. HANDLE CONTEXTUAL FOLLOW-UPS ---
    if (context && (text.includes('more') || text.includes('tech') || text.includes('stack') || text.includes('detail') || text.includes('tell me'))) {
      
      // PROJECT CONTEXT
      if (context.type === 'project') {
        if (text.includes('tech') || text.includes('stack')) {
           return { 
             text: `🛠 **${context.data.title} Tech Stack:**\n\n${context.data.tech.join(', ')}.\n\nSanjay selected these tools to ensure scalability and performance.`,
             newContext: context 
           };
        }
        return {
          text: `Here is more about **${context.data.title}**:\n\n${context.data.description.split('\n')[0]}\n\nIt features advanced capabilities like **${context.data.tagline}**.`,
          newContext: context
        };
      }

      // JOB CONTEXT
      if (context.type === 'job') {
         return {
           text: `At **${context.data.company}**, Sanjay worked as a ${context.data.role}.\n\nKey Highlight:\n${context.data.description.split('\n')[0]}\n\nHe worked there from ${context.data.period}.`,
           newContext: context
         };
      }
    }

    // --- 2. ENTITY RECOGNITION ---

    // A. "BEST PROJECT" / "FLAGSHIP"
    if (text.includes('best') || text.includes('flagship') || text.includes('top') || text.includes('proud')) {
      const bestProject = projects.find(p => p.id === 'gen-vidhik') || projects[0];
      return {
        text: `🏆 **Flagship Project Detected:**\n\nSanjay's most impressive work is **${bestProject.title}** (${bestProject.tagline}).\n\nIt is an AI-powered legal assistant featuring RAG, Reasoning Engines, and Document Automation.`,
        newContext: { type: 'project', data: bestProject }
      };
    }

    // B. RESUME / CV REQUEST (Gap Closed)
    if (text.includes('resume') || text.includes('cv') || text.includes('download')) {
      return {
        text: `📄 **Resume Access:**\n\nYou can view and download Sanjay's Resume from the Profile card below, or by clicking the "Download CV" button in the contact section.`,
        newContext: null
      };
    }

    // C. SPECIFIC PROJECT SEARCH
    const foundProject = projects.find(p => {
        const words = p.title.toLowerCase().split(' ');
        return words.some(w => text.includes(w)) || text.includes(p.id);
    });

    if (foundProject) {
      return {
        text: `📂 **Loaded Project: ${foundProject.title}**\n\n${foundProject.tagline}\n\n${foundProject.description.split('\n')[0]}...\n\n(Ask "Tell me more" or "What tech?" to continue)`,
        newContext: { type: 'project', data: foundProject }
      };
    }

    // D. JOB / COMPANY SEARCH
    const foundJob = experience.find(job => text.includes(job.company.toLowerCase().split(' ')[0]));
    if (foundJob) {
      return {
        text: `🏢 **Experience Log:**\n\nCompany: **${foundJob.company}**\nRole: ${foundJob.role}\nPeriod: ${foundJob.period}\n\n${foundJob.description.substring(0, 100)}...`,
        newContext: { type: 'job', data: foundJob }
      };
    }

    // E. SKILL CHECK (Gap Closed: Robust Matching)
    // 1. Create a clean list of all skills from everywhere, lowercased
    const allSkills = [...new Set([
        ...projects.flatMap(p => p.tech), 
        ...profile.skills
    ].map(s => s.toLowerCase()))];

    // 2. Find matches
    const matchedSkill = allSkills.find(s => text.includes(s));
    
    if (matchedSkill) {
      // Find projects that use this skill (Partial Match Allowed, e.g. "Python" matches "Python (FastAPI)")
      const related = projects.filter(p => 
        p.tech.some(t => t.toLowerCase().includes(matchedSkill))
      );
      
      // Sort: Featured (Gen-Vidhik) first
      related.sort((a, b) => (b.featured === true ? 1 : 0) - (a.featured === true ? 1 : 0));

      const relatedTitles = related.map(p => p.title).join(', ');
      
      let responseText = `✅ **Verified Skill: ${matchedSkill.toUpperCase()}**\n\nYes, Sanjay is proficient in ${matchedSkill}.`;
      
      if (related.length > 0) {
          responseText += `\n\nHe utilized it in ${related.length} projects, notably: **${relatedTitles}**.`;
      } else {
          responseText += `\n\nIt is listed as a core competency in his technical arsenal.`;
      }

      return {
        text: responseText,
        newContext: null 
      };
    }

    // F. CONTACT INFO
    if (text.includes('contact') || text.includes('email') || text.includes('hire') || text.includes('reach')) {
        return {
            text: `📞 **Contact Sanjay:**\n\nYou can reach him via email at: **${profile.email}**\n\nOr connect on LinkedIn via the Profile section.`,
            newContext: null
        };
    }

    // --- 3. GENERAL CHIT-CHAT ---
    if (['hi', 'hello', 'hey'].some(w => text.includes(w))) {
      return { 
        text: `Hello! I am ready to answer queries about **${profile.name}**. \n\nI have analyzed his resume (Prodigy, Personifwy, EbixCash) and his AI projects. What do you want to know?`,
        newContext: null 
      };
    }

    if (text.includes('who are you')) {
      return { text: "I am a context-aware AI simulation running on React state logic. I persist conversation memory to answer follow-up questions about Sanjay's portfolio.", newContext: null };
    }
    
    if (text.includes('who is sanjay')) {
      return { 
          text: `**Sanjay Kumar Purohit** is a Full Stack Developer & AI Engineer based in Chennai.\n\nHe specializes in building context-aware AI systems (like Gen-Vidhik) and scalable MERN applications.`,
          newContext: null
      };
    }

    // FALLBACK
    return { 
      text: "I didn't quite catch that. \n\nTry asking about:\n• **Projects** (Gen-Vidhik, Lexpo)\n• **Experience** (Prodigy, Personifwy)\n• **Skills** (React, Python, RAG)",
      newContext: null 
    };
  };

  return (
    <div className="flex flex-col h-[500px] border border-white/10 rounded-xl bg-black/40 overflow-hidden relative shadow-2xl backdrop-blur-sm">
      
      {/* Header */}
      <div className="p-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-green-500 rounded-full animate-[pulse_2s_infinite]"></div>
           <span className="text-xs font-mono text-blue-400">NEURAL_CORE // {activeContext ? `CONTEXT: ${activeContext.type.toUpperCase()}` : 'IDLE'}</span>
        </div>
        <button 
          onClick={() => { setMessages([INITIAL_MESSAGE]); setActiveContext(null); }}
          className="p-1.5 hover:bg-white/10 rounded-lg text-gray-400 transition-colors"
          title="Reset Memory"
        >
          <RefreshCcw size={14} />
        </button>
      </div>

      {/* Chat Area */}
      <div 
        ref={chatContainerRef} 
        className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar scroll-smooth"
      >
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-2 duration-300`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10 ${msg.sender === 'ai' ? 'bg-blue-600/20' : 'bg-gray-700/50'}`}>
              {msg.sender === 'ai' ? <Sparkles size={14} className="text-blue-400" /> : <User size={14} className="text-gray-300" />}
            </div>
            
            <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
              msg.sender === 'ai' 
                ? 'bg-[#151515] border border-white/5 text-gray-200 rounded-tl-none shadow-lg' 
                : 'bg-blue-600 text-white rounded-tr-none shadow-blue-900/20'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-gray-500 text-xs ml-12">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></span>
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-100"></span>
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-200"></span>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-[#0a0a0a] flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={activeContext ? `Ask follow-up about ${activeContext.data.title || activeContext.data.company}...` : "Ask AI about Sanjay..."}
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-all font-light placeholder-gray-600"
        />
        
        <button 
          type="submit"
          disabled={!input.trim() || isTyping}
          className="p-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50 transition-all shadow-lg active:scale-95"
        >
          <Send size={18} />
        </button>
      </form>

    </div>
  );
};

export default ChatInterface;