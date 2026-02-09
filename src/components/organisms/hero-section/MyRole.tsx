import React from 'react';
import Image from 'next/image';
import RoleCard, { RoleData } from '../../molecules/RoleCard';
import aiProfile from '../../../../assets/logos/ai-eng.png';

const services: RoleData[] = [
  {
    icon: (
      <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M16 18l6-6-6-6M8 6l-6 6 6 6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Mobile Developer",
    description: "Building responsive, high-performance mobile apps that deliver seamless user experiences across platforms.",
  },
  {
    icon: (
      <div className="relative w-full h-full">
        <Image src={aiProfile} alt="AI Engineer Icon" fill className="object-contain" />
      </div>
    ),
    title: "AI Engineer",
    description: "Designing and integrating AI systems to solve complex problems through data-driven intelligent solutions.",
  },
];

const MyRole: React.FC = () => {
  return (
    <section className="bg-black text-white text-left font-space-grotesk">
      <div className="max-w-6xl mx-auto mb-20 md:mb-32">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <h2 className="text-lg md:text-3xl font-bold">My Skills/Role</h2>
          </div>
          <p className="text-[#999999] text-[12px] md:text-xl leading-relaxed max-w-4xl">
            Contributions across various roles—from developer to mentor—driving innovation and collaboration in every project.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <RoleCard key={index} role={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyRole;