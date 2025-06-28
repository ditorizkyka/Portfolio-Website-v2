import React from 'react';
import { Github, Mail, User } from 'lucide-react';

const SidebarRight = () => {
  return (
    <div className="fixed right-0 top-0 h-full w-16 pr-20 pl-15 py-6 bg-black border-l border-[#1f1f1f] flex flex-col items-center justify-center space-y-6 z-30">
      {/* Icon Section (centered vertically) */}
      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-black font-bold text-sm mb-6">
      </div>
      
      <div className="flex flex-col items-center justify-center flex-grow space-y-6">
        <div className="w-16 h-16 bg-[#0A0A0B] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-colors cursor-pointer">
          <User className="w-8 h-8 text-[#CCCCCC] font-light" />
        </div>
        <div className="w-16 h-16 bg-[#0A0A0B] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-colors cursor-pointer">
          <Github className="w-8 h-8 text-[#CCCCCC]" />
        </div>
        <div className="w-16 h-16 bg-[#0A0A0B] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-colors cursor-pointer">
          <Mail className="w-8 h-8 text-[#CCCCCC]" />
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;