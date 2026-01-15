import { usePortfolio } from '../../context/PortfolioContext';
import { Github, Linkedin, Mail, FileText, Code, ChevronUp } from 'lucide-react';

const Footer = () => {
  const { profile } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 🟢 SMART EMAIL LOGIC (Consistent with ProfileCard)
  const handleEmailClick = (e) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Mobile: Open App
      window.location.href = `mailto:${profile.email}`;
    } else {
      // Desktop: Open Gmail in new tab
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`, 
        '_blank'
      );
    }
  };

  // Map social names to Lucide Icons
  const SocialIcons = {
    "GitHub": Github,
    "LinkedIn": Linkedin,
    "Resume": FileText,
    "LeetCode": Code, 
    "Email": Mail
  };

  return (
    <footer className="w-full border-t border-white/10 bg-black/20 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <div className="text-gray-500 text-sm font-mono text-center md:text-left">
          <p>© {new Date().getFullYear()} {profile.name}. All systems normal.</p>
          <p className="text-xs opacity-50 mt-1">Built with React + Tailwind + Context OS</p>
        </div>

        {/* Dynamic Social Links */}
        <div className="flex items-center gap-6">
          
          {/* Existing Links from Data (GitHub, LinkedIn, Resume, LeetCode) */}
          {profile.social.map((link) => {
            const IconComponent = SocialIcons[link.name] || Mail; 

            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                title={link.name}
              >
                <IconComponent size={20} />
              </a>
            );
          })}
          
          {/* 🟢 ADDED: Smart Email Button */}
          <button
            onClick={handleEmailClick}
            className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            title="Send Email"
          >
            <Mail size={20} />
          </button>
          
          {/* Scroll Top Button */}
          <button 
            onClick={scrollToTop}
            className="ml-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-blue-400 transition-all border border-white/5 hover:border-blue-500/30"
            title="Return to Top"
          >
            <ChevronUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;