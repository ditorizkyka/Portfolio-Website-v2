import React from 'react';
import telkomuniv from '../../assets/telkomuniv.jpg';
import swiss from '../../assets/swiss.jpg'; // Adjust the path as necessary
import { BackpackIcon } from 'lucide-react';

const MyAcademics = () => {
  const experiences = [
  {
    company: "SMA Negeri 2 Gunungputri",
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
    role: "Informatics / Computer Science (AI Focus)",
    description: "Pursuing a Bachelor's in Informatics with a GPA of 3.92/4.00. Focused on Artificial Intelligence with related coursework in Machine Learning, Computer Vision, Digital Image Processing, and Data Science.",
    duration: "2022 - 2026 (Expected)",
    category: "Bachelor's Degree",
    logo: telkomuniv
  },
];


  return (
    <div className="max-w-6xl mx-auto pb-20" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <BackpackIcon className="w-7 h-7" />
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            My Academics
          </h2>
        </div>

        {/* Geser paragraf sejajar ke ikon */}
        <div className="">
          <p 
            className="text-[#999999] mb-12 leading-relaxed text-xl text-left"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            A journey of continuous learning with strong academic achievements and technical growth in Computer Science.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-xl p-6 mb-6">
            <div className="flex items-start justify-between mb-6">
              {/* Left: Logo & Company Info */}
              <div className="flex items-start space-x-4">
                {/* Logo */}
                <img src={experience.logo} className="w-12 h-12 rounded-lg" alt="" />
                
                <div className="text-left">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-white font-semibold text-lg">
                      {experience.company}
                    </h3>
                    <span className="bg-[#1f1f1f] text-[#999999] text-xs px-2 py-1 rounded-full">
                      {experience.category}
                    </span>
                  </div>
                  <div className="text-text-sm text-[#999999]">
                    {experience.website}
                  </div>
                </div>
              </div>
              
              {/* Right: Duration */}
              <div className="text-right">
                <span className="text-white font-semibold text-lg">
                  {experience.duration}
                </span>
              </div>
            </div>
            
            {/* Role & Description */}
            <div className="mt-6 bg-black rounded-lg p-4 text-start">
              <h4 
                className="text-white font-semibold text-sm mb-1" 
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {experience.role}
              </h4>
              <p 
                className="text-[#999999] text-sm leading-relaxed" 
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAcademics;