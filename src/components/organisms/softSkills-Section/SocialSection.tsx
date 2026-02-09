'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Calendar, UsersRound } from 'lucide-react';
import { SoftSkill } from '@/src/types/softSkills';
import Image from 'next/image';

export default function SocialSkills({ social }: { social: SoftSkill[] }) {
  const [selectedSocial, setSelectedSocial] = useState<SoftSkill | null>(null);
  const [, setIsMobile] = useState<boolean>(false);

  // Window Resize Handler
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    
    checkMobile();
    
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Disable Body Scroll saat Modal terbuka
  useEffect(() => {
    if (selectedSocial) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { 
      document.body.style.overflow = 'unset'; 
    };
  }, [selectedSocial]);

  const truncateText = (text: string, maxLines: number = 2): string => {
    const words = text.split(' ');
    const maxWords = maxLines * 15;
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  const getLabelColor = (label: string): string => {
    return label === 'Organization'
      ? 'bg-blue-100 text-blue-800 border-blue-200'
      : 'bg-green-100 text-green-800 border-green-200';
  };

  const closeDialog = () => setSelectedSocial(null);

  const ProjectCard = ({ social }: { social: SoftSkill }) => (
    <div
      className="bg-[#0A0A0B]  border border-[#1f1f1f] rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:border-gray-700 transition-all duration-300 group cursor-pointer flex flex-col h-full"
      onClick={() => setSelectedSocial(social)}
    >
      <div className="relative h-40 md:h-48 w-full overflow-hidden">
        <Image
          src={social.image_url}
          alt={social.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3 z-10">
          <span className={`inline-block px-3 py-1 text-[10px] md:text-xs font-bold rounded-full border backdrop-blur-md shadow-sm ${getLabelColor(social.label)}`}>
            {social.label}
          </span>
        </div>
      </div>

      <div className="p-3 md:p-4 flex flex-col grow">
        <h3 className="text-white text-sm md:text-lg font-bold mb-2 line-clamp-1 group-hover:text-blue-500 transition-colors">
          {social.title}
        </h3>
        
        <div className="mb-3">
          <span className="inline-block bg-[#1f1f1f] text-[#999999] text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-lg border border-white/5 truncate max-w-full">
            {social.role}
          </span>
        </div>
       
        <p className="text-[#999999] text-[10px] md:text-xs leading-relaxed line-clamp-2 md:line-clamp-3">
          {truncateText(social.description)}
        </p>
      </div>
    </div>
  );

  return (
    <section className="bg-black mb-20 md:mb-20 text-left font-space-grotesk">
      <div className="w-full">
        <div className="mb-6 md:mb-10">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <UsersRound className="w-6 h-6 md:w-8 md:h-8 text-white" />
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">
              Social Projects
            </h1>
          </div>
          <p className="text-[#999999] text-xs md:text-sm lg:text-lg max-w-2xl leading-relaxed">
            Leading initiatives and building communities through impactful organizations.
          </p>
        </div>

        {/* Grid: 2 kolom di mobile, 2 di tablet, 3 di desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-10">
          {social.map((item) => (
            <ProjectCard key={item.id} social={item} />
          ))}
        </div>
      </div>

      {/* Portal Modal */}
      {typeof window !== 'undefined' && selectedSocial && createPortal(
        <div className="fixed inset-0 z-9999 flex items-center justify-center py-3 px-6 md:p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={closeDialog}
          />

          <div className="relative z-10000 bg-[#0A0A0B] border border-[#333] rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-all border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-48 md:h-56 lg:h-72">
              <Image
                src={selectedSocial.image_url}
                alt={selectedSocial.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0B] via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 md:left-6 right-4 md:right-6">
                <span className={`inline-block px-2 md:px-3 py-1 text-[10px] md:text-xs font-bold rounded-full border backdrop-blur-md mb-2 md:mb-3 ${getLabelColor(selectedSocial.label)}`}>
                  {selectedSocial.label}
                </span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                  {selectedSocial.title}
                </h2>
              </div>
            </div>

            <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
              <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-8 pb-4 md:pb-6 border-b border-[#1f1f1f]">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#6DD33D]" />
                  <span className="text-xs md:text-sm font-medium">{selectedSocial.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <UsersRound className="w-3 h-3 md:w-4 md:h-4 text-[#6DD33D]" />
                  <span className="text-xs md:text-sm font-medium">{selectedSocial.role}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs md:text-sm font-semibold text-gray-500 mb-2 md:mb-3 uppercase tracking-wider">Soft Skills Earned</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSocial.skills_learned?.map((tech, index) => (
                    <span key={index} className="px-2 md:px-3 py-1 bg-[#1A1A1A] text-gray-300 text-[10px] md:text-sm rounded-md border border-[#333]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs md:text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Deskripsi</h4>
                <p className="text-gray-300 text-xs md:text-sm lg:text-base leading-6 md:leading-7 whitespace-pre-line">
                  {selectedSocial.description}
                </p>
              </div>

              <button
                onClick={closeDialog}
                className="w-full py-2.5 md:py-3 bg-[#1f1f1f] hover:bg-[#2a2a2a] text-white font-medium rounded-xl transition-colors mt-4 border border-white/5 text-sm md:text-base"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}