"use client";

import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

// Import assets (Pastikan path benar sesuai struktur folder Next.js kamu)
import digistarClub from '../../../../assets/logos/digistar-club.png';
import telkomUniv from '../../../../assets/logos/telkom-university.png';
import gdgoc from '../../../../assets/logos/gdgoc.png';

interface LogoItem {
  href: string;
  src: StaticImageData;
  alt: string;
}

const SocialMediaSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logos: LogoItem[] = [
    { href: 'https://www.digistartelkom.id/', src: digistarClub, alt: 'Digistar Club' },
    { href: 'https://telkomuniversity.ac.id/', src: telkomUniv, alt: 'Telkom University' },
    { href: 'https://gdg.community.dev/', src: gdgoc, alt: 'GDG Community' },
  ];

  // Ukuran logo dalam pixel untuk komponen Image Next.js
  const size = isMobile ? 80 : 120;

  return (
    <section className="py-10 bg-black overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        {/* Container Utama Marquee */}
        <div className="flex animate-marquee space-x-14 items-center">
          {/* Kita gandakan array logos agar loopnya tidak putus (seamless) */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <Link
              key={index}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={size}
                height={size}
                className="object-contain"
                // Priority true jika section ini ada di bagian atas (above the fold)
                priority={index < 3} 
              />
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Geser setengah total lebar container */
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SocialMediaSection;