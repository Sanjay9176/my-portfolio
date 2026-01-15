import { Github, ExternalLink, Linkedin, Cpu, Layout, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, onOpenDetails }) => {
  const TypeIcon = project.type && project.type.includes('AI') ? Cpu : Layout;

  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
      
      {/* Decorative Gradient */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>

      <div className="p-6 pb-2 relative z-10 flex-grow flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-lg bg-white/5 text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-colors shadow-lg">
            <TypeIcon size={20} />
          </div>
          {project.featured && (
            <span className="text-[10px] font-mono border border-yellow-500/30 text-yellow-500 px-2 py-0.5 rounded uppercase tracking-wide bg-yellow-500/10">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 font-mono mb-4 uppercase tracking-wider">
          {project.tagline}
        </p>

        {/* Description Preview (First line only for the card) */}
        <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
          {project.description.split('\n')[0]} 
        </p>
        
        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Tech Stack */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t, i) => (
            <span key={i} className="text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5 whitespace-nowrap">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[10px] text-gray-500 px-1 py-1">+{project.tech.length - 3}</span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 bg-black/20 border-t border-white/5 flex justify-between items-center relative z-10">
        
        {/* System Details Button */}
        <button 
          className="text-sm text-white font-medium flex items-center gap-2 group/btn hover:text-blue-400 transition-colors"
          onClick={onOpenDetails} 
        >
          <span>Read System Details</span>
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>

        {/* Links */}
        <div className="flex gap-2">
          
          {/* 🟢 FIXED: Only shows if link exists AND is not just a placeholder # */}
          {project.links.post && project.links.post !== '#' && (
            <a href={project.links.post} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-white transition-colors" title="View LinkedIn Post">
              <Linkedin size={18} />
            </a>
          )}

          {/* Code Button */}
          <a href={project.links.code} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" title="View Code">
            <Github size={18} />
          </a>
          
          {/* Demo Button */}
          {project.links.demo && project.links.demo !== '#' && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" title="Live Demo">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;