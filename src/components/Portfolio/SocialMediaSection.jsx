import React from 'react';
import { Github, Twitter, Youtube, MessageCircle, ExternalLink } from 'lucide-react';
import digistarClub from '../../assets/digistar-club.png';
import telkomUniv from '../../assets/telkom-university.png'; 
import gdgoc from '../../assets/gdgoc.png'; // Adjust the path as necessary

const SocialMediaSection = () => {
  return (
    <>
      <div className="mb-13 overflow-hidden">
        <div className="flex animate-marquee space-x-14">
          <a href="https://www.digistartelkom.id/" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <img src={digistarClub} alt="Logo" className="w-30 h-30" />
          </a>
          <a href="https://telkomuniversity.ac.id/" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <img src={telkomUniv} alt="Logo" className="w-30 h-30" />
          </a>
          <a href="https://gdg.community.dev/" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <img src={gdgoc} alt="Logo" className="w-30 h-30" />
          </a>
          
          {/* Duplicate for seamless loop */}
          <a href="https://www.digistartelkom.id/" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <img src={digistarClub} alt="Logo" className="w-30 h-30" />
          </a>
          <a href="https://telkomuniversity.ac.id/" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <img src={telkomUniv} alt="Logo" className="w-30 h-30" />
          </a>
          <a href="https://gdg.community.dev/" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <img src={gdgoc} alt="Logo" className="w-30 h-30" />
          </a>

          
        </div>
      </div>

      {/* Custom CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
       
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: max-content;
        }
       
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default SocialMediaSection;