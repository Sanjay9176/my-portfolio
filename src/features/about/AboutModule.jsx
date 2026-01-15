import { usePortfolio } from '../../context/PortfolioContext';
import ExperienceTimeline from './ExperienceTimeline';
import SkillsMatrix from './SkillsMatrix';
import CertificatesVault from './CertificatesVault';
import { Terminal } from 'lucide-react';

const AboutModule = () => {
  const { activeTab } = usePortfolio();

  // ONLY show this module if the user selected "About" or "Resume"
  if (activeTab !== 'about' && activeTab !== 'resume') return null;

  return (
    <div id="about" className="w-full max-w-5xl mx-auto mt-20 px-4 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
          <Terminal className="text-blue-400 w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">System Architecture & Logs</h2>
          <p className="text-gray-500 font-mono text-sm">Reviewing capabilities and runtime history...</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Skills (Capabilities) */}
        {/* 🟢 ADDED id="skills-section" HERE */}
        <div id="skills-section" className="lg:col-span-1 space-y-6">
          <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest border-b border-white/10 pb-2">
            // Skills Modules
          </h3>
          <SkillsMatrix />
          
          {/* Education Mini-Block */}
          <div className="pt-6">
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest border-b border-white/10 pb-2 mb-4">
              // Other Info
            </h3>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="text-white font-bold">B.E. Computer Science</h4>
              <p className="text-xs text-gray-400 mt-1">Misrimal Navajee Munoth Jain Engineering College</p>
              <p className="text-xs text-blue-400 font-mono mt-2">2022 - 2026</p>
            </div>
          </div>
        </div>

        {/* Right Column: Experience (Timeline) */}
        {/* 🟢 ADDED id="experience-section" HERE */}
        <div id="experience-section" className="lg:col-span-2">
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest border-b border-white/10 pb-2 mb-6">
            // Experience Log
          </h3>
          <ExperienceTimeline />
        </div>

      </div>

      {/* NEW SECTION: Certificates Vault */}
      <div id="vault" className="mt-16">
        <CertificatesVault />
      </div>

    </div>
  );
};

export default AboutModule;