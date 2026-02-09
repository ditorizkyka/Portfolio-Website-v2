  import React from 'react';
  import { GraduationCap } from 'lucide-react';
  import AcademicCard from '../../molecules/AcademicCard';
import { Academic } from '@/src/types/academic';


  

  const MyAcademics: React.FC<{ academics: Academic[]}> = ({ academics }) => {
    return (
      <section className="max-w-6xl mx-auto  font-space-grotesk">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <GraduationCap className="w-7 h-7 text-white" />
            <h2 className="text-xl md:text-3xl font-bold text-white">My Academics</h2>
          </div>
          <p className="text-[#999999] leading-relaxed text-xs md:text-xl max-w-3xl">
            A journey of continuous learning with strong academic achievements and technical growth in Computer Science.
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {academics.map((academic, index) => (
            <AcademicCard key={index} academics={academic} />
          ))}
        </div>
      </section>
    );
  };



  export default MyAcademics;