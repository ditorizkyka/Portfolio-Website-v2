import React, { useState, useEffect } from 'react';
import digistarClub from '../../assets/digistar-club.png';
import telkomUniv from '../../assets/telkom-university.png';
import gdgoc from '../../assets/gdgoc.png';

const SocialMediaSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logos = [
    { href: 'https://www.digistartelkom.id/', src: digistarClub, alt: 'Digistar Club' },
    { href: 'https://telkomuniversity.ac.id/', src: telkomUniv, alt: 'Telkom University' },
    { href: 'https://gdg.community.dev/', src: gdgoc, alt: 'GDG Community' },
  ];

  const logoSize = isMobile ? 'w-20 h-20' : 'w-30 h-30';

  return (
    <>
      <div className="mb-10 overflow-hidden">
        <div className="flex animate-marquee space-x-14">
          {[...logos, ...logos].map((logo, index) => (
            <a
              key={index}
              href={logo.href}
              className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap"
            >
              <img src={logo.src} alt={logo.alt} className={`${logoSize} object-contain`} />
            </a>
          ))}
        </div>
      </div>

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
