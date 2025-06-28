import React from 'react';
import { Github, Twitter, Youtube, MessageCircle, ExternalLink } from 'lucide-react';

const SocialMediaSection = () => {
  return (
    <>
      <div className="mb-13 overflow-hidden">
        <div className="flex animate-marquee space-x-12">
          <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <Github className="w-5 h-5" />
            <span>github</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <Twitter className="w-5 h-5" />
            <span>twitter</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <Youtube className="w-5 h-5" />
            <span>youtube</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <MessageCircle className="w-5 h-5" />
            <span>discord</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <ExternalLink className="w-5 h-5" />
            <span>dribbble</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <ExternalLink className="w-5 h-5" />
            <span>facebook</span>
          </a>
          {/* Duplicate for seamless loop */}
          <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <Github className="w-5 h-5" />
            <span>github</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <Twitter className="w-5 h-5" />
            <span>twitter</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <Youtube className="w-5 h-5" />
            <span>youtube</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <MessageCircle className="w-5 h-5" />
            <span>discord</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <ExternalLink className="w-5 h-5" />
            <span>dribbble</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
            <ExternalLink className="w-5 h-5" />
            <span>facebook</span>
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
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default SocialMediaSection;