import React from 'react';
import { BackpackIcon } from 'lucide-react';

const MyAcademics = () => {
  const experiences = [
    {
      company: "Vortex",
      website: "vortex.co",
      role: "Product Designer",
      description: "Headed product design initiatives, defined design strategy, and ensured alignment with business objectives for market-leading products.",
      duration: "2023 - Present",
      category: "Tech Firm",
      logo: "V"
    },
    {
      company: "Vortex",
      website: "vortex.co", 
      role: "Product Designer",
      description: "Headed product design initiatives, defined design strategy, and ensured alignment with business objectives for market-leading products.",
      duration: "2023 - Present",
      category: "Tech Firm",
      logo: "V"
    },
    {
      company: "Vortex",
      website: "vortex.co",
      role: "Product Designer", 
      description: "Headed product design initiatives, defined design strategy, and ensured alignment with business objectives for market-leading products.",
      duration: "2023 - Present",
      category: "Tech Firm",
      logo: "V"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto pb-20">
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
            Navigating diverse environments with adaptability and expertise for holistic solutions.
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
                <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
                  <span className="text-black font-bold text-lg">{experience.logo}</span>
                </div>
                
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