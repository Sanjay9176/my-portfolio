import { usePortfolio } from '../../context/PortfolioContext';
import { Github, Linkedin, Mail, Code, Terminal, Cpu, ArrowRight, MapPin, Download, ShieldCheck, Layers } from 'lucide-react';

const ProfileCard = () => {
  const { profile, activeTab, setActiveTab } = usePortfolio();

  if (activeTab !== 'contact') return null;

  // Helper for smooth navigation
  const handleNav = (tab, sectionId) => {
    setActiveTab(tab);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // 🟢 SMART EMAIL LOGIC
  const handleEmailClick = (e) => {
    e.preventDefault();
    
    // Check if user is on Mobile (iPhone, Android, etc.)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // 📱 On Mobile: Open default mail app (Outlook, Apple Mail)
      window.location.href = `mailto:${profile.email}`;
    } else {
      // 💻 On Desktop: Open Gmail in a new tab
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`, 
        '_blank'
      );
    }
  };

  const skillPreview = profile.skills ? profile.skills.slice(0, 3).join(', ') : "React, Node, Python";
  const skillCount = profile.skills ? profile.skills.length - 3 : 0;

  return (
    <div id="contact" className="w-full max-w-5xl mx-auto mt-20 px-4 pb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      <div className="relative bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          
          {/* Identity Column */}
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 bg-black/20 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="relative w-32 h-32 mb-6 group">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <img 
                src="/profile.jpeg"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"; 
                }}
                alt={profile.name}
                className="relative w-full h-full object-cover rounded-full border-2 border-white/10"
              />
              
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-black rounded-full" title="Online / Open to Work"></div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">{profile.name}</h2>
            <p className="text-blue-400 font-mono text-sm mb-4">{profile.role}</p>
            <div className="flex items-center gap-2 text-gray-500 text-xs font-mono mb-6">
              <MapPin size={12} />
              {profile.location}
            </div>
            <a 
              href={profile.social.find(s => s.name === "Resume")?.url || "#"} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 flex items-center justify-center gap-2 bg-white text-black rounded-lg font-bold text-sm hover:bg-gray-200 transition-colors"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

          {/* Content Column */}
          <div className="col-span-1 md:col-span-2 p-8 md:p-10">
            
            <div className="mb-8">
              <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">// System Summary</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {profile.about || profile.bio} 
              </p>
            </div>

            <div className="mb-8">
               <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">// Quick Access</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Projects */}
                <button 
                  onClick={() => handleNav('projects', 'projects')}
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all text-left group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Code className="text-blue-400" size={20} />
                    <ArrowRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="font-bold text-white text-sm">Project Modules</div>
                  <div className="text-xs text-gray-500">View MERN & AI Systems</div>
                </button>

                {/* Experience - 🟢 UPDATED to target 'experience-section' */}
                <button 
                  onClick={() => handleNav('about', 'experience-section')}
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/30 transition-all text-left group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Terminal className="text-purple-400" size={20} />
                    <ArrowRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="font-bold text-white text-sm">Experience Log</div>
                  <div className="text-xs text-gray-500">Timeline & History</div>
                </button>

                {/* Credentials - 🟢 UPDATED to target 'vault' */}
                <button 
                  onClick={() => handleNav('about', 'vault')}
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-green-500/30 transition-all text-left group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <ShieldCheck className="text-green-400" size={20} />
                    <ArrowRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="font-bold text-white text-sm">Credentials Vault</div>
                  <div className="text-xs text-gray-500">Verified Certifications</div>
                </button>

                {/* Skills - 🟢 UPDATED to target 'skills-section' */}
                <button 
                  onClick={() => handleNav('about', 'skills-section')}
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/30 transition-all text-left group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Layers className="text-cyan-400" size={20} />
                    <ArrowRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="font-bold text-white text-sm">Technical Skills</div>
                  <div className="text-xs text-gray-500 truncate">
                    {skillPreview} {skillCount > 0 && <span className="text-cyan-500">+{skillCount} more</span>}
                  </div>
                </button>

                {/* AI Demo */}
                <button 
                  onClick={() => handleNav('playground', 'playground')}
                  className="sm:col-span-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-yellow-500/30 transition-all text-left group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Cpu className="text-yellow-400" size={20} />
                    <ArrowRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="font-bold text-white text-sm">AI Demo Lab</div>
                  <div className="text-xs text-gray-500">Test Live Inference</div>
                </button>

              </div>
            </div>

            {/* Connect Section */}
            <div>
              <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">// Connect</h3>
              <div className="flex flex-wrap gap-4">
                <a href={profile.social.find(s => s.name === "GitHub")?.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-black border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-white/30 transition-all">
                  <Github size={18} /> <span className="text-sm">GitHub</span>
                </a>
                <a href={profile.social.find(s => s.name === "LinkedIn")?.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#0077b5]/10 border border-[#0077b5]/30 rounded-lg text-blue-400 hover:text-blue-300 transition-all">
                  <Linkedin size={18} /> <span className="text-sm">LinkedIn</span>
                </a>
                
                {/* 🟢 SMART BUTTON */}
                <button 
                  onClick={handleEmailClick}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 hover:text-red-300 transition-all cursor-pointer"
                >
                  <Mail size={18} /> <span className="text-sm">Email</span>
                </button>
                
                <a href={profile.social.find(s => s.name === "LeetCode")?.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#ffa116]/10 border border-[#ffa116]/30 rounded-lg text-[#ffa116] hover:text-yellow-400 transition-all">
                  <Code size={18} /> <span className="text-sm">LeetCode</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;