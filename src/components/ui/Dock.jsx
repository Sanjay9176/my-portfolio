import { useState, useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
// FIX: Imported Briefcase for Experience, kept User for Profile
import { Home, Code, User, Cpu, Briefcase } from 'lucide-react';

const Dock = () => {
  const { activeTab, setActiveTab } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Detect Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      // Trigger "Ghost Mode" after scrolling 50px down
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Navigation Logic (With Delay Fix)
  const handleNavigation = (tab) => {
    setActiveTab(tab);
    
    if (tab === 'home') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       setActiveTab('all');
    } else {
       // Wait 100ms for the new section to render, then scroll to it
       setTimeout(() => {
         const element = document.getElementById(tab);
         if (element) {
           // Offset by 120px so the header doesn't cover the title
           const y = element.getBoundingClientRect().top + window.scrollY - 120;
           window.scrollTo({ top: y, behavior: 'smooth' });
         }
       }, 100);
    }
  };

  const dockItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'projects', icon: Code, label: 'Projects' },
    // CHANGE 1: Profile -> Experience (with Briefcase icon)
    { id: 'about', icon: Briefcase, label: 'Experience,Skill & Certificate' }, 
    { id: 'playground', icon: Cpu, label: 'AI Lab' },
    // CHANGE 2: Contact -> Profile (with User icon)
    { id: 'contact', icon: User, label: 'Profile' }, 
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center pointer-events-none">
      
      {/* Dock Container */}
      <div 
        className={`
          pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl ring-1 
          transition-all duration-500 ease-in-out
          ${isScrolled 
            ? 'bg-black/10 backdrop-blur-[2px] border-white/5 opacity-40 hover:opacity-100 hover:bg-[#0a0a0a]/90 hover:backdrop-blur-xl hover:border-white/10 scale-90 hover:scale-100 shadow-none hover:shadow-2xl' 
            : 'bg-[#0a0a0a]/70 backdrop-blur-xl border-white/10 opacity-100 scale-100 shadow-2xl'
          }
        `}
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id || (item.id === 'home' && activeTab === 'all');

          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className="group relative p-2 sm:p-3 rounded-xl transition-all duration-300 hover:bg-white/10 focus:outline-none"
              aria-label={item.label}
            >
              <Icon 
                size={20} 
                className={`sm:w-6 sm:h-6 transition-all duration-300 ${
                  isActive ? 'text-blue-400 -translate-y-1' : 'text-gray-400 group-hover:text-white group-hover:-translate-y-1'
                }`} 
              />
              
              {isActive && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              )}

              {/* Tooltip (Only shows on hover) */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border border-white/10 text-gray-200 text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-50">
                {item.label}
              </span>
            </button>
          );
        })}

      </div>
    </div>
  );
};

export default Dock;