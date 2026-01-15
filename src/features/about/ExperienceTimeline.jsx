import { useState, useEffect } from 'react';
import { Calendar, ChevronRight, FileText, BadgeCheck, ChevronLeft, Briefcase, MapPin } from 'lucide-react';
// Make sure this path is correct based on your folder structure
import { EXPERIENCE } from '../../lib/data'; 
import Modal from '../../components/ui/Modal';

const ExperienceTimeline = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Reset image slider when a new job is opened
  useEffect(() => {
    if (selectedJob) {
      setCurrentImage(0);
    }
  }, [selectedJob]);

  // Helper to safely get images
  const getImages = (job) => {
    if (job?.gallery && job.gallery.length > 0) return job.gallery;
    if (job?.credentials) return [job.credentials]; // Fallback for old data
    return []; 
  };

  const images = selectedJob ? getImages(selectedJob) : [];

  // Slider Handlers
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="space-y-8 relative max-w-5xl mx-auto">
        {/* Vertical Guide Line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10 md:left-[8.5rem]"></div>

        {EXPERIENCE.map((job, index) => (
          <div key={job.id || index} className="relative flex flex-col md:flex-row gap-4 md:gap-10 group">
            
            {/* Timeline Node */}
            <div className="absolute left-4 md:left-[8.5rem] -ml-[5px] mt-1.5 w-2.5 h-2.5 rounded-full bg-gray-600 border border-[#0a0a0a] group-hover:bg-blue-500 group-hover:scale-125 transition-all z-10"></div>

            {/* Date Stamp */}
            <div className="pl-10 md:pl-0 md:w-32 md:text-right flex-shrink-0">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 group-hover:text-blue-400 transition-colors bg-white/5 md:bg-transparent px-2 py-1 rounded">
                <Calendar size={12} />
                {job.period}
              </span>
            </div>

            {/* Content Card */}
            <div className="pl-10 md:pl-0 flex-grow">
              <div 
                className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 transition-all hover:bg-white/[0.07] cursor-pointer group/card"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2 group-hover/card:text-blue-400 transition-colors">
                      {job.role}
                      <ChevronRight size={16} className="text-gray-600 group-hover/card:translate-x-1 transition-transform" />
                    </h3>
                    <p className="text-blue-400 font-mono text-sm">{job.company}</p>
                  </div>
                </div>
                
                {/* Truncated Description */}
                <div className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {job.description.split('\n')[0]}
                </div>

                {/* Footer: Tech + Action */}
                <div className="flex justify-between items-center mt-4">
                  <div className="flex flex-wrap gap-2">
                    {job.tech.slice(0,3).map((t, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider text-gray-500 border border-gray-700/50 px-2 py-0.5 rounded bg-black/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Badge if images exist */}
                  {(job.gallery?.length > 0 || job.credentials) && (
                      <div className="flex items-center gap-1 text-xs text-green-500 font-mono opacity-60 group-hover/card:opacity-100 transition-opacity">
                        <BadgeCheck size={12} />
                        <span>Verified</span>
                      </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL FOR JOB DETAILS */}
      <Modal 
        isOpen={!!selectedJob} 
        onClose={() => setSelectedJob(null)} 
        title={selectedJob?.company || "Experience Log"}
      >
        {selectedJob && (
          <div className="space-y-6">
            
            {/* Header Info */}
            <div className="border-b border-white/10 pb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{selectedJob.role}</h2>
              <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-gray-400">
                <span className="text-blue-400 flex items-center gap-1"><Briefcase size={14}/> {selectedJob.company}</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1"><Calendar size={14}/> {selectedJob.period}</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1"><MapPin size={14}/> {selectedJob.location}</span>
              </div>
            </div>

            {/* --- IMAGE CAROUSEL INSIDE MODAL --- */}
            {images.length > 0 ? (
              <div className="relative h-64 sm:h-80 bg-black rounded-xl border border-white/10 overflow-hidden group">
                 <img 
                    src={images[currentImage]} 
                    alt="Experience Gallery" 
                    className="w-full h-full object-contain" 
                  />
                  
                  {/* Slider Buttons (Only if > 1 image) */}
                  {images.length > 1 && (
                    <>
                      <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 text-white rounded-full hover:bg-blue-600 transition-colors">
                        <ChevronLeft size={20} />
                      </button>
                      <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 text-white rounded-full hover:bg-blue-600 transition-colors">
                        <ChevronRight size={20} />
                      </button>
                      <div className="absolute bottom-2 right-2 px-3 py-1 bg-black/60 rounded-full text-xs text-white font-mono border border-white/10">
                        {currentImage + 1} / {images.length}
                      </div>
                    </>
                  )}
              </div>
            ) : (
               <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-gray-500 text-sm font-mono text-center">
                  No visual records attached to this file.
               </div>
            )}

            {/* Full Description with Bullet Points */}
            <div>
              <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-3">
                // System Logs
              </h3>
              <div className="text-gray-300 leading-relaxed space-y-2 text-sm">
                {selectedJob.description.split('\n').map((line, index) => (
                  <p key={index} className={line.trim().startsWith('•') ? 'pl-4 border-l-2 border-blue-500/30' : ''}>
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="pt-4 border-t border-white/10">
                 <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Technologies</h3>
                 <div className="flex flex-wrap gap-2">
                    {selectedJob.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300 font-mono">
                          {t}
                        </span>
                    ))}
                 </div>
            </div>

          </div>
        )}
      </Modal>
    </>
  );
};

export default ExperienceTimeline;