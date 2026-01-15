import { useState } from 'react';
import { X, Github, ExternalLink, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) return null;

  // Logic: Use gallery if available, otherwise fallback to placeholder
  const images = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : ["https://via.placeholder.com/800"];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Content */}
      <div className="bg-[#0f0f0f] border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl relative flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-red-500/20 text-white rounded-full transition-colors backdrop-blur-md"
        >
          <X size={20} />
        </button>

        {/* LEFT SIDE: Image Carousel */}
        <div className="w-full md:w-3/5 bg-black relative min-h-[300px] md:min-h-full flex items-center justify-center bg-grid-white/[0.02]">
          
          <img 
            src={images[currentImage]} 
            alt={project.title} 
            className="w-full h-full object-contain max-h-[60vh] md:max-h-full"
          />
          
          {/* Slider Buttons (Only show if > 1 image) */}
          {images.length > 1 && (
            <>
              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-blue-600 transition-colors backdrop-blur-md">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-blue-600 transition-colors backdrop-blur-md">
                <ChevronRight size={24} />
              </button>
              
              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-full text-xs text-white font-mono backdrop-blur-md border border-white/10">
                {currentImage + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* RIGHT SIDE: Content & Details */}
        <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col overflow-y-auto custom-scrollbar bg-[#111]">
          
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{project.title}</h2>
            <p className="text-blue-400 font-mono text-sm border-b border-white/10 pb-4">{project.tagline}</p>
          </div>

          {/* Description with Bullet Points */}
          <div className="text-gray-300 text-sm leading-relaxed space-y-3 mb-8 flex-grow">
            {project.description.split('\n').map((line, index) => (
              <p key={index} className={line.trim().startsWith('•') ? 'pl-4 border-l-2 border-blue-500/30' : ''}>
                {line}
              </p>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Skills Development</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300 font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-white/10">
            
            <div className="flex gap-3">
              {/* Live Demo */}
              {project.links.demo && project.links.demo !== '#' && (
                <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-sm transition-colors shadow-lg shadow-blue-900/20">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
              
              {/* Code */}
              <a href={project.links.code} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-bold text-sm transition-colors">
                <Github size={16} /> Code
              </a>
            </div>

            {/* 🟢 NEW: LinkedIn Post Button (Full Width) */}
            {project.links.post && project.links.post !== '#' && (
              <a href={project.links.post} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0077b5]/10 border border-[#0077b5]/30 text-[#0077b5] hover:bg-[#0077b5]/20 rounded-lg font-bold text-sm transition-colors">
                <Linkedin size={16} /> View Featured Post
              </a>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;