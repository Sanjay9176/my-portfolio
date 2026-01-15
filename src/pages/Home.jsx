import { usePortfolio } from '../context/PortfolioContext';
import HeroSearch from '../features/hero/HeroSearch';
import ProjectGrid from '../features/projects/ProjectGrid';
import AboutModule from '../features/about/AboutModule';
import NeuralPlayground from '../features/playground/NeuralPlayground';
import ProfileCard from '../features/contact/ProfileCard';
import Dock from '../components/ui/Dock';

const Home = () => {
  // 🟢 Get activeTab from context to control what shows up
  const { profile, activeTab } = usePortfolio();

  return (
    <div className="flex flex-col items-center min-h-[80vh] w-full">
      
      {/* 1. Dock is Fixed */}
      <Dock />

      {/* 2. Hero Section (Always Visible) */}
      <div className="w-full flex flex-col items-center justify-center pt-24 md:pt-32"> 
        
        <div className="text-center space-y-2 max-w-4xl mx-auto animate-in fade-in zoom-in duration-700 px-4">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs text-blue-400 font-mono tracking-wider">AVAILABLE FOR HIRE</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
            {profile.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
            {profile.role}
          </p>
          
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            {profile.bio}
          </p>
        </div>

        <HeroSearch />
      </div>

      {/* 3. DYNAMIC MODULES (The Fix) */}
      {/* Only render the component that matches the activeTab */}
      
      <div className="w-full">
        {activeTab === 'projects' && <ProjectGrid />}
        
        {/* Handle both 'about' and 'resume' for the About/Experience section */}
        {(activeTab === 'about' || activeTab === 'resume') && <AboutModule />}
        
        {activeTab === 'playground' && <NeuralPlayground />}
        
        {activeTab === 'contact' && <ProfileCard />}
      </div>

    </div>
  );
};

export default Home;