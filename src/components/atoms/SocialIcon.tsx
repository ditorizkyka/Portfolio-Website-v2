import React from 'react';

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

const SocialIcon = ({ href, children }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-16 h-16 bg-black rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-colors cursor-pointer group"
  >
    <div className="w-8 h-8 text-[#CCCCCC] group-hover:text-white transition-colors">
      {children}
    </div>
  </a>
);

export default SocialIcon;