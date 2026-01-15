import { usePortfolio } from '../../context/PortfolioContext';
import { Cpu, Sparkles } from 'lucide-react';
import ChatInterface from './ChatInterface';

const NeuralPlayground = () => {
  const { activeTab } = usePortfolio();

  // Only render if tab is 'playground'
  if (activeTab !== 'playground') return null;

  return (
    <div id="playground" className="w-full max-w-4xl mx-auto mt-20 px-4 pb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
            <Cpu className="text-purple-400 w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Neural Inference Chat</h2>
            <p className="text-gray-500 font-mono text-sm flex items-center gap-2">
              <Sparkles size={12} className="text-yellow-500" />
              Live Context-Aware Agent
            </p>
          </div>
        </div>
      </div>

      {/* The Chat Container */}
      <ChatInterface />
      
      {/* Disclaimer */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-600 font-mono">
          * This is a client-side simulation trained on my portfolio data. No actual legal advice provided.
        </p>
      </div>

    </div>
  );
};

export default NeuralPlayground;