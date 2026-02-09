import React from 'react';
import { Briefcase } from 'lucide-react'; // Menggunakan Briefcase agar lebih umum, atau tetap BackpackIcon
import ExperienceCard from '../../molecules/ExperienceCard';
import { Experience } from '@/src/types/experience';





const MyExperience: React.FC<{ experiences : Experience[] }> = ({ experiences }) => {
  return (
    <section className="max-w-6xl mx-auto mb-20 font-space-grotesk text-left md:mb-32">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <Briefcase className="w-7 h-7 text-white" />
          <h2 className="text-xl md:text-3xl font-bold text-white">My Work/Internship Experience</h2>
        </div>
        <p className="text-[#999999] leading-relaxed text-xs md:text-xl max-w-3xl">
          Real-world experience in mobile development and AI integration through impactful internships and team collaboration.
        </p>
      </div>

      {/* Experience List */}
      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>
    </section>
  );
};

export default MyExperience;