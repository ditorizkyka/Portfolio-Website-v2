import React, { useState, useEffect } from 'react';
import { Calendar, Mail } from 'lucide-react';
import ScrambleText from '../widget/buttonAnimation';
import profile from '../../assets/AI-Engineer.jpg';

// WhatsApp logo (SVG as a React component)
const WhatsAppIcon = () => (
  <svg
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 32 32"
    className="text-[#CCCCCC]"
  >
    <path d="M16 .5C7.439.5.5 7.439.5 16c0 2.826.739 5.479 2.027 7.812L.5 31.5l7.906-2.027A15.418 15.418 0 0016 31.5c8.561 0 15.5-6.939 15.5-15.5S24.561.5 16 .5zm0 28.062a12.446 12.446 0 01-6.395-1.77l-.459-.271-4.688 1.203 1.25-4.562-.298-.47A12.356 12.356 0 013.938 16c0-6.682 5.38-12.062 12.062-12.062S28.062 9.318 28.062 16 22.682 28.562 16 28.562zm7.07-9.454c-.393-.197-2.312-1.14-2.67-1.271-.359-.132-.62-.197-.88.197-.26.393-1.01 1.27-1.24 1.534-.23.264-.459.296-.85.099-.393-.198-1.66-.611-3.166-1.949-1.17-1.043-1.96-2.336-2.19-2.729-.23-.393-.024-.604.173-.801.178-.178.393-.46.59-.693.197-.23.263-.394.393-.658.132-.264.066-.494-.033-.693-.098-.198-.88-2.123-1.205-2.912-.317-.76-.642-.658-.88-.67l-.75-.012c-.264 0-.693.099-1.056.494-.362.394-1.38 1.349-1.38 3.292 0 1.943 1.411 3.817 1.61 4.088.197.264 2.773 4.232 6.719 5.935.94.405 1.673.646 2.245.827.943.3 1.8.258 2.478.157.755-.113 2.312-.943 2.641-1.857.327-.914.327-1.701.23-1.857-.098-.157-.362-.26-.755-.459z" />
  </svg>
);

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // inisialisasi saat mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className=" md:px-0" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {isMobile ? (
        // === MOBILE UI ===
        <div className='text-left mb-10'>
          <div className="flex mt-10 mb-5 space-x-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {/* Foto */}
            <div className="w-25 h-25 rounded-xl overflow-hidden border border-[#333333]">
              <img src={profile} className="w-full h-full object-cover" alt="Profile" />
            </div>

            {/* Sapaan dan Nama */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-xl">🖐️</span>
                <span className="text-sm text-gray-400 font-medium">Hello I Am</span>
              </div>
              <h1 className="text-xl font-bold text-white">Andito Rizkyka R.</h1>
            </div>
          </div>
          <p className="text-xs text-[#CCCCCC] mb-5 leading-relaxed max-w-2xl">
              I'm a final-semester Informatics student at Telkom University, focusing on AI to become an AI Engineer. Passionate about applying AI in mobile apps, I aim to build solutions that create real social impact.
          </p>
          <div className="flex flex-col space-y-4 w-full">
            {/* Email Button */}
            <a
              href="mailto:rizkykandito@gmail.com"
              className="bg-[#141415] px-10 py-3 rounded-lg flex items-center space-x-2 justify-center"
            >
              <Mail className="w-5 h-5 text-[#CCCCCC]" />
              <ScrambleText text="EMAIL ME" className="text-md text-[#CCCCCC]" />
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/6281389018701"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141415] px-10 py-3 rounded-lg flex items-center space-x-2 justify-center"
            >
              <WhatsAppIcon />
              <ScrambleText text="CONTACT ME" className="text-md text-[#CCCCCC]" />
            </a>
          </div>
        </div>

          
      ) : (
        // === DESKTOP UI ===
        <div className="flex flex-row items-center space-x-8 text-left mb-16">
          <div className="w-90 h-70 border border-gray-900 rounded-lg overflow-hidden">
            <img src={profile} className="w-full h-full object-cover" />
          </div>

          <div style={{ fontFamily: "'Space Grotesk', sans-serif", wordSpacing: '-1px' }}>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xl">👋</span>
              <span className="text-lg text-[#CCCCCC]">Hello I Am</span>
            </div>

            <h1 className="text-4xl font-bold mb-4 text-white">Andito Rizkyka R.</h1>

            <p className="text-lg text-[#CCCCCC] mb-5 leading-relaxed max-w-2xl">
              I'm a final-semester Informatics student at Telkom University, focusing on AI to become an AI Engineer. Passionate about applying AI in mobile apps, I aim to build solutions that create real social impact.
            </p>

            <div className="flex space-x-4">
              <a
                href="mailto:rizkykandito@gmail.com"
                className="bg-[#141415] px-10 py-3 rounded-lg flex items-center space-x-2"
              >
                <Mail className="w-5 h-5 text-[#CCCCCC]" />
                <ScrambleText text="EMAIL ME" className="text-md text-[#CCCCCC]" />
              </a>

              <a
                href="https://wa.me/6281389018701"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#141415] px-10 py-3 rounded-lg flex items-center space-x-2"
              >
                <WhatsAppIcon />
                <ScrambleText text="CONTACT ME" className="text-md text-[#CCCCCC]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
