import { Award, Eye, ShieldCheck } from 'lucide-react';
import { CERTIFICATES } from '../../lib/data'; 

const CertificatesVault = () => {
  return (
    <div id="vault" className="mt-20 pt-10 border-t border-white/10">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
          <ShieldCheck className="text-green-400" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Credentials Vault</h3>
          <p className="text-sm text-gray-400">Verified Certifications & Licenses</p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CERTIFICATES.map((cert) => (
          <a 
            key={cert.id}
            href={cert.image} 
            target="_blank" 
            rel="noopener noreferrer"
            // Safety: If image fails, don't crash, just log it
            onError={(e) => console.error("Missing image:", cert.image)}
            className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-green-500/30 transition-all duration-300 hover:shadow-lg block cursor-pointer"
          >
            <div className="p-5 flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0a0a0a] rounded-lg border border-white/10 flex items-center justify-center">
                <Award className="text-yellow-500" size={24} />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-white font-medium truncate group-hover:text-green-400 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                    {cert.date}
                  </span>
                  <span className="text-xs font-mono text-green-500/70 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/10">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
              <div className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-bold text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <Eye size={16} /> View Certificate
              </div>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
};

export default CertificatesVault;