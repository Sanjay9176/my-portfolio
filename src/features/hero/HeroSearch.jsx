import { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowDown, Command, ArrowRight, Sparkles } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

// 🧠 CONFIG: Map user keywords to your specific Tab IDs
const NAV_INTENTS = [
  { 
    id: 'projects', 
    label: 'Projects',
    keywords: ['project', 'work', 'build', 'app', 'code', 'portfolio', 'case'] 
  },
  { 
    id: 'about', 
    label: 'Experience & Skills',
    keywords: ['experience', 'skill', 'about', 'resume', 'history', 'stack', 'education', 'job','Credentials'] 
  },
  { 
    id: 'playground', 
    label: 'AI Demo',
    icon: '⚡',
    keywords: ['ai', 'demo', 'play', 'bot', 'gpt', 'model', 'gen', 'smart'] 
  },
  { 
    id: 'contact', 
    label: 'Profile',
    keywords: ['profile', 'contact', 'mail', 'email', 'hire', 'hello', 'social', 'link'] 
  },
];

const SUGGESTIONS = [
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'Credentials' },
  { id: 'playground', label: 'AI Demo', icon: '⚡' },
  { id: 'contact', label: 'Profile' },
];

const PLACEHOLDERS = [
  "Type 'Projects'...",
  "Type 'AI Demo'...",
  "Type 'Profile'...",
  "Type 'Skills'...",
  "Type 'Specs'...",
];

const HeroSearch = () => {
  const { setSearchQuery, setActiveTab, activeTab, projects } = usePortfolio();
  const [localInput, setLocalInput] = useState("");
  const [matchCount, setMatchCount] = useState(0);
  const [placeholder, setPlaceholder] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [detectedIntent, setDetectedIntent] = useState(null); // Stores the tab we think the user wants
  const inputRef = useRef(null);

  // ⌨️ SHORTCUT: Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // ⌨️ TYPEWRITER EFFECT
  useEffect(() => {
    let currentStrIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const currentStr = PLACEHOLDERS[currentStrIndex];
      
      if (isDeleting) {
        setPlaceholder(currentStr.substring(0, currentCharIndex - 1));
        currentCharIndex--;
      } else {
        setPlaceholder(currentStr.substring(0, currentCharIndex + 1));
        currentCharIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentCharIndex === currentStr.length) {
        isDeleting = true;
        typeSpeed = 2000;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentStrIndex = (currentStrIndex + 1) % PLACEHOLDERS.length;
        typeSpeed = 500;
      }

      timeout = setTimeout(type, typeSpeed);
    };

    type();
    return () => clearTimeout(timeout);
  }, []);

  // 🧠 ADVANCED PREDICTIVE LOGIC
  useEffect(() => {
    const query = localInput.toLowerCase().trim();
    setSearchQuery(localInput);

    // 1. Search Matching in Projects (for filtering)
    if (query) {
      const count = projects.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.tech.some(t => t.toLowerCase().includes(query))
      ).length;
      setMatchCount(count);
    } else {
      setMatchCount(0);
    }

    // 2. Intent Detection (Navigation)
    if (query.length >= 2) {
      let foundIntent = null;

      // Check against our mapped keywords
      for (const intent of NAV_INTENTS) {
        // Check label match (e.g. "Experience & Skills")
        if (intent.label.toLowerCase().includes(query)) {
          foundIntent = intent.id;
          break;
        }
        // Check keywords match (e.g. "resume", "bot")
        if (intent.keywords.some(k => k.startsWith(query) || query.includes(k))) {
          foundIntent = intent.id;
          break;
        }
      }

      if (foundIntent) {
        setDetectedIntent(foundIntent);
        if (activeTab !== foundIntent) {
          setActiveTab(foundIntent);
        }
      } else {
        setDetectedIntent(null);
        // Default to projects search if no navigation intent is found
        if (activeTab !== 'projects' && matchCount > 0) {
          setActiveTab('projects');
        }
      }
    } else {
      setDetectedIntent(null);
    }

  }, [localInput, setActiveTab, setSearchQuery, activeTab, projects, matchCount]);

  // 🖱️ SCROLL & ACTIVATE HANDLER
  const handleNavigation = (id) => {
    setActiveTab(id);
    setLocalInput(""); // Clear input on navigation
    setDetectedIntent(null);
    
    // Smooth Scroll
    setTimeout(() => {
      const element = document.getElementById(id); // Ensure your sections have these IDs
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  // Handle "Enter" key to confirm navigation
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && detectedIntent) {
      handleNavigation(detectedIntent);
      inputRef.current?.blur();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 md:mt-20 relative z-20 px-4">
      
      {/* Search Bar Container */}
      <div className={`relative group transition-transform duration-300 ${isFocused ? 'scale-[1.02]' : ''}`}>
        
        {/* Glow Effect */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-1000 ${isFocused ? 'opacity-60' : ''}`}></div>
        
        <div className="relative flex items-center bg-[#0a0a0a] border border-white/10 rounded-xl p-4 shadow-2xl">
          
          {/* Dynamic Icon: Changes to Arrow when intent detected */}
          <div className="mr-4 transition-all duration-300">
            {detectedIntent ? (
               <ArrowRight className="w-5 h-5 text-blue-400 animate-pulse" />
            ) : (
               <Search className={`w-5 h-5 transition-colors ${isFocused ? 'text-blue-400' : 'text-gray-500'}`} />
            )}
          </div>
          
          <input
            ref={inputRef}
            type="text"
            value={localInput}
            onChange={(e) => setLocalInput(e.target.value)}
            onKeyDown={handleInputKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="w-full bg-transparent text-lg md:text-xl text-white placeholder-gray-600 focus:outline-none font-light font-mono"
          />
          
          <div className="flex items-center gap-3">
            {/* Search Match Counter */}
            {localInput && activeTab === 'projects' && matchCount > 0 && !detectedIntent && (
               <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-blue-400 border border-blue-500/30 bg-blue-500/10 px-2 py-1 rounded animate-in fade-in">
                 <span>{matchCount} FOUND</span>
                 <ArrowDown size={10} />
               </div>
            )}

            {/* Intent Badge (Visual Feedback) */}
            {detectedIntent && (
               <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-green-400 border border-green-500/30 bg-green-500/10 px-2 py-1 rounded animate-in slide-in-from-right-2">
                 <Sparkles size={10} />
                 <span>GO TO {SUGGESTIONS.find(s => s.id === detectedIntent)?.label.toUpperCase()}</span>
               </div>
            )}

            {/* Clear Button or Shortcut Hint */}
            {localInput ? (
               <button 
                 onClick={() => { setLocalInput(""); setSearchQuery(""); setDetectedIntent(null); }} 
                 className="p-1 hover:text-white text-gray-600 transition-colors"
               >
                 <X size={18} />
               </button>
            ) : (
              <div className="hidden md:flex items-center gap-1 text-xs text-gray-600 border border-white/10 px-2 py-1 rounded bg-white/5 font-mono">
                <Command size={12} />
                <span>Ctrl+K</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Suggestion Chips */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {SUGGESTIONS.map((chip) => (
          <button
            key={chip.id}
            onClick={() => handleNavigation(chip.id)}
            className={`flex items-center space-x-2 px-4 py-2 border rounded-full transition-all duration-300 ${
              activeTab === chip.id 
                ? 'bg-blue-600 border-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]' 
                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/30 hover:scale-105'
            }`}
          >
            <span className="text-sm">{chip.icon}</span>
            <span className="text-sm">{chip.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSearch;