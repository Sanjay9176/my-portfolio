import { useState } from 'react';
import { Calendar, MapPin, ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';

const ExperienceItem = ({ exp }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // 🛡️ Safety Check: If exp is missing, return nothing to prevent crash
  if (!exp) return null;

  // 1. Safety Check for Images
  const images = exp.gallery && exp.gallery.length > 0 
    ? exp.gallery 
    : ["https://via.placeholder.com/800"];

  // 2. Navigation Handlers
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative pl-8 md:pl-0 grid md:grid-cols-2 gap-8 items-center group">
      
      {/* Timeline Dot (Center) */}
      <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 border-2 border-black z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

      {/* LEFT SIDE (or Top on mobile): Image Card */}
      <div className={`md:text-right ${exp.id % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
         <div className="relative h-48 sm:h-56 bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 group-hover:shadow-2xl">
          <img 
            src={images[currentImage]} 
            alt={exp.company}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          
          {/* Carousel Buttons (Only show if > 1 image) */}
          {images.length > 1 && (
            <>
              <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 text-white rounded-full hover:bg-blue-600 transition-colors z-20">
                <ChevronLeft size={16} />
              </button>
              <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 text-white rounded-full hover:bg-blue-600 transition-colors z-20">
                <ChevronRight size={16} />
              </button>
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 rounded text-[10px] text-white font-mono z-10">
                {currentImage + 1} / {images.length}
              </div>
            </>
          )}

           {/* Company Overlay */}
           <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
              <h3 className="text-lg font-bold text-white">{exp.company}</h3>
              <div className="flex items-center gap-2 text-blue-400 text-xs font-mono">
                <Briefcase size={12} /> {exp.role}
              </div>
           </div>
         </div>
      </div>

      {/* RIGHT SIDE (or Bottom on mobile): Text Content */}
      <div className={`bg-[#0f0f0f]/50 p-6 rounded-xl border border-white/5 hover:bg-[#0f0f0f] transition-colors ${exp.id % 2 === 0 ? 'md:order-2' : 'md:order-1 md:text-right'}`}>
         
          {/* Meta Info */}
          <div className={`flex flex-wrap gap-4 mb-4 text-xs text-gray-500 font-mono ${exp.id % 2 === 0 ? '' : 'md:justify-end'}`}>
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              {exp.period}
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={12} />
              {exp.location}
            </div>
          </div>

          {/* Description */}
          <div className="text-gray-400 text-sm leading-relaxed mb-4 space-y-2">
            {exp.description.split('\n').map((line, index) => (
              <p key={index} className={line.trim().startsWith('•') ? 'pl-2 text-gray-300' : ''}>
                {line}
              </p>
            ))}
          </div>

          {/* Tech Stack */}
          <div className={`flex flex-wrap gap-2 ${exp.id % 2 === 0 ? '' : 'md:justify-end'}`}>
            {exp.tech.map((t, i) => (
              <span key={i} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                {t}
              </span>
            ))}
          </div>
      </div>

    </div>
  );
};

export default ExperienceItem;