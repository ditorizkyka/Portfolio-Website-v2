import React from 'react';


const FooterBar: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white text-center py-6 mt-auto border-t border-[#1f1f1f] z-10 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-0 flex flex-col items-center justify-center">
        <CopyrightText 
          year={currentYear} 
          author="Dito Portfolio" 
        />
        
        {/* Opsional: Tambahkan status koneksi atau tech stack singkat di sini */}
        <div className="mt-2 flex items-center space-x-2">
          <div className="w-1 h-1 rounded-full bg-[#333333]" />
          <span className="text-[10px] text-[#333333] uppercase tracking-[0.2em]">
            Built with Next.js & TypeScript
          </span>
        </div>
      </div>
    </footer>
  );
};

interface CopyrightTextProps {
  year: number;
  author: string;
}

const CopyrightText = ({ year, author }: CopyrightTextProps) => (
  <p className="text-[#999999] text-xs md:text-sm font-space-grotesk tracking-wide">
    © {year} {author}. All rights reserved.{" "}
    <span className="font-bold text-[#CCCCCC] hover:text-white transition-colors cursor-default">
      Designed/Inspired by Praha
    </span>
  </p>
);


export default FooterBar;