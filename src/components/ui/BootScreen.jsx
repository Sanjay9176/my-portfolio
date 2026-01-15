import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const BootScreen = ({ onComplete }) => {
  const [lines, setLines] = useState([
    "> Initializing Context OS v4.0...",
  ]);

  useEffect(() => {
    const bootSequence = [
      { text: "> Loading Neural Modules...", delay: 400 },
      { text: "> Connecting to Resume Database...", delay: 800 },
      { text: "> Verifying Security Protocols...", delay: 1400 },
      { text: "> ACCESS GRANTED.", delay: 2000, color: "text-green-500" },
    ];

    let timeouts = [];

    // Add lines one by one
    bootSequence.forEach(({ text, delay, color }, index) => {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, <span key={index} className={color || "text-gray-400"}>{text}</span>]);
      }, delay);
      timeouts.push(timeout);
    });

    // Finish sequence
    const finishTimeout = setTimeout(() => {
      onComplete();
    }, 2500);
    timeouts.push(finishTimeout);

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center font-mono text-sm sm:text-base cursor-wait">
      <div className="w-full max-w-md p-6 space-y-2">
        <div className="flex items-center gap-2 text-blue-500 mb-4 border-b border-blue-500/20 pb-2">
          <Terminal size={18} />
          <span className="font-bold tracking-widest">SYSTEM BOOT</span>
        </div>
        
        <div className="flex flex-col space-y-2">
          {lines.map((line, i) => (
            <div key={i} className="animate-in fade-in slide-in-from-left-2 duration-300">
              {line}
            </div>
          ))}
          <div className="animate-pulse text-blue-500 mt-2">_</div>
        </div>

        {/* Loading Bar */}
        <div className="w-full h-1 bg-gray-800 rounded-full mt-8 overflow-hidden">
          <div className="h-full bg-blue-600 animate-[loading_2s_ease-in-out_forwards] w-0"></div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0% }
          50% { width: 70% }
          100% { width: 100% }
        }
      `}</style>
    </div>
  );
};

export default BootScreen;