import React, { useState, useEffect } from 'react';
import telkomuniv from '../../assets/telkomuniv.jpg';
import swiss from '../../assets/swiss.jpg';
import { BackpackIcon } from 'lucide-react';

const MyAcademics = () => {
  const [isMobile, setIsMobile] = useState(false);

  const experiences = [
    {
      company: "SMAN 2 Gunungputri",
      website: "smanegeri2gunungputriswiss.com",
      role: "Science Class (MIPA)",
      description: "Achieved Top 3 in Science Class with a final score of 92.00. Developed strong foundational skills in mathematics, physics, and biology.",
      duration: "2019 - 2022",
      category: "High School",
      logo: swiss
    },
    {
      company: "Telkom University",
      website: "telkomuniversity.ac.id", 
      role: "Informatics(AI Focus)",
      description: "Pursuing a Bachelor's in Informatics with a GPA of 3.92/4.00. Focused on Artificial Intelligence with related coursework in Machine Learning, Computer Vision, Digital Image Processing, and Data Science.",
      duration: "2022 - 2026 (Expected)",
      category: "Bachelor's Degree",
      logo: telkomuniv
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="max-w-6xl mx-auto mb-15" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Header */}
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <BackpackIcon className="w-7 h-7" />
          <h2 className="text-lg md:text-3xl font-bold">My Academics</h2>
        </div>
        <p className="text-[#999999] mb-12 leading-relaxed text-[12px] md:text-xl text-left">
          A journey of continuous learning with strong academic achievements and technical growth in Computer Science.
        </p>
      </div>

      {/* Experiences */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-xl text-left">
            {isMobile ? (
              // === MOBILE UI ===
                            // === MOBILE UI ala screenshot ===
                <div className='p-2'>
                  
                  {/* Header: Logo, Title, Category */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3 mb-3">
                      <img src={exp.logo} className="w-10 h-10 rounded-md" alt="" />
                      <div className='w-40'>
                        <div className="text-white font-semibold text-sm line-clamp-2">
                          {exp.company}
                        </div>
                        <div className="text-[#999999] text-[10px] truncate w-28">
                          {exp.website}
                        </div>
                      </div>
                    </div>

                    <span className="bg-[#1f1f1f] text-[#999999] text-[9px] px-2 py-1 text-center  rounded-full line-clamp-1">
                      {exp.category}
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="text-white mb-3 font-bold px-2 text-sm tracking-wide border-t border-[#1f1f1f] pt-3">
                    {exp.duration}
                  </div>

                  {/* Role and Description Box */}
                  <div className="bg-black border border-[#1a1a1a] rounded-xl py-4 px-2 space-y-2">
                    <div className="text-white font-semibold text-sm">{exp.role}</div>
                    <p className="text-[#999999] text-[12px] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                </div>
            ) : (
              // === DESKTOP UI ===
              <div className='p-6'>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <img src={exp.logo} className="w-12 h-12 rounded-lg" alt="" />
                    <div className="text-left">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-white font-semibold text-lg">{exp.company}</h3>
                        <span className="bg-[#1f1f1f] text-[#999999] text-xs px-2 py-1 rounded-full">{exp.category}</span>
                      </div>
                      <div className="text-sm text-[#999999]">{exp.website}</div>
                    </div>
                  </div>
                  <div className="text-white font-semibold text-lg">{exp.duration}</div>
                </div>

                <div className="bg-black rounded-lg p-4 text-start">
                  <h4 className="text-white font-semibold text-sm mb-1">{exp.role}</h4>
                  <p className="text-[#999999] text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAcademics;
