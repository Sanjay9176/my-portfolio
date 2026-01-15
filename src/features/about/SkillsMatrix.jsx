import { usePortfolio } from '../../context/PortfolioContext';
import { Cpu, Globe, Database, Server } from 'lucide-react';

const SkillsMatrix = () => {
  const { skills } = usePortfolio();

  const getIcon = (category) => {
    const cat = category.toLowerCase();
    if (cat.includes("front")) return Globe;
    if (cat.includes("back")) return Server;
    if (cat.includes("data")) return Database;
    return Cpu;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skillGroup, idx) => {
        const Icon = getIcon(skillGroup.category);
        return (
          <div 
            key={idx} 
            className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/[0.07] h-full flex flex-col"
          >
            {/* Header */}
            <div className="flex flex-col items-start gap-3 mb-4 border-b border-white/5 pb-3">
              <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                <Icon size={20} />
              </div>
              
              {/* FIX: Removed 'tracking-wider', added 'leading-snug' for better fit */}
              <h4 className="text-sm md:text-[13px] lg:text-sm font-bold text-gray-200 uppercase leading-snug w-full">
                {skillGroup.category}
              </h4>
            </div>

            {/* Skills Chips */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {skillGroup.items.map((item, i) => (
                <span 
                  key={i} 
                  className="text-xs font-mono text-gray-400 bg-black/40 px-3 py-1.5 rounded-md border border-white/5 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all cursor-default select-none"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsMatrix;