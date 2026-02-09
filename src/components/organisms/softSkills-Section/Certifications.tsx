"use client";
import React, { useState, useEffect } from "react";
import { FileBadge2 } from "lucide-react";
import { Certification } from "@/src/types/certification";
import Image from "next/image";

const Certifications: React.FC<{ certifications: Certification[] }> = ({ certifications }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile UI
  if (isMobile) {
    return (
      <div className="bg-black text-white text-left font-space-grotesk">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <FileBadge2 className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">
              Certifications
            </h2>
          </div>
          <p className="text-[#999999] text-xs leading-relaxed">
            A collection of certifications that demonstrate my commitment to continuous learning and technical excellence in software, AI, and agile development.
          </p>
        </div>

        <div className="space-y-8">
          {certifications.map((cert) => (
            <a 
              key={cert.id} 
              href={cert.credential_link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group"
            >
              <div className="bg-[#0A0A0B] rounded-2xl border border-[#1f1f1f] overflow-hidden shadow-lg hover:border-gray-700 transition-all duration-300 active:scale-[0.98]">
                {/* Image Container with fixed aspect ratio */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={cert.image_url}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="100vw"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white text-lg font-bold mb-3">
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-[#1f1f1f] text-[#999999] text-xs px-3 py-1 rounded-full border border-white/5">
                      {cert.issuer}
                    </span>
                  </div>
                  <p className="text-[#999999] text-sm leading-relaxed">
                    {cert.short_description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }

  // Desktop UI
  return (
    <div className="bg-black text-white text-left font-space-grotesk">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <FileBadge2 className="w-8 h-8 text-[#6DD33D]" />
          <h2 className="text-3xl font-bold text-white">
            Certifications
          </h2>
        </div>
        <p className="text-[#999999] text-lg leading-relaxed max-w-4xl">
          A collection of certifications that demonstrate my commitment to continuous learning and technical excellence in software, AI, and agile development.
        </p>
      </div>

      <div className="space-y-6">
        {certifications.map((cert) => (
          <a 
            key={cert.id} 
            href={cert.credential_link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group block"
          >
            <div className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.01] flex flex-col lg:flex-row bg-[#0A0A0B] border border-[#1f1f1f] hover:border-blue-500/30">
              {/* Image Section */}
              <div className="lg:w-2/5 p-4">
                <div className="relative w-full h-64 lg:h-full lg:min-h-[250px] overflow-hidden rounded-xl">
                  <Image
                    src={cert.image_url}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
                <h2 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h2>
                
                <div className="mb-4">
                  <span className="bg-[#1f1f1f] text-[#999999] text-xs px-3 py-1 rounded-full border border-white/5">
                    {cert.issuer} - {new Date(cert.issued_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                </div>

                <p className="text-sm lg:text-base text-[#999999] leading-relaxed mb-4 lg:mb-6 line-clamp-2">
                  {cert.short_description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills_learned.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 lg:px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;