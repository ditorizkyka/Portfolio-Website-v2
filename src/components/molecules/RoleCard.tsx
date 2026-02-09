import React from 'react';

export interface RoleData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const RoleCard = ({ role }: { role: RoleData }) => (
  <div className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-xl md:rounded-2xl p-4 md:p-8 
                  hover:bg-[#0A0A0B]/50 transition-all duration-300 hover:border-[#333333]">
    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
      <RoleIconWrapper>{role.icon}</RoleIconWrapper>
      <h3 className="text-base md:text-2xl font-semibold text-white">
        {role.title}
      </h3>
    </div>
    <p className="text-[#999999] text-sm md:text-base leading-relaxed">
      {role.description}
    </p>
  </div>
);

interface RoleIconWrapperProps {
  children: React.ReactNode;
}

const RoleIconWrapper = ({ children }: RoleIconWrapperProps) => (
  <div className="bg-[#999999] p-2 md:p-3 rounded-lg md:rounded-xl flex items-center justify-center">
    <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
      {children}
    </div>
  </div>
);

export default RoleCard;