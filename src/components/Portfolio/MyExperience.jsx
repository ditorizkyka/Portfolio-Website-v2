import React from 'react';
import kontent from '../../assets/kontent.jpeg';
import humiceng from '../../assets/humiceng.jpeg'; // Adjust the path as necessary
import motionlab from '../../assets/motionlab.jpeg'; // Adjust the path as necessary
import { BackpackIcon } from 'lucide-react';

const MyExperience = () => {
  
  const experiences = [
  {
    company: "CoE Human Centric Engineering",
    website: "humic.telkomuniversity.ac.id",
    role: "Mobile Developer Flutter",
    description:
      "Developed and deployed Flutter features using GoRouter and Riverpod for pelvic education. Designed a responsive UI that improved user engagement and reduced navigation errors.",
    duration: "Sept – Oct 2024",
    category: "Internship",
    logo: humiceng,
  },
  {
    company: "Mobile Innovation Labolatory (Motion Lab)",
    website: "motionlaboratory.com",
    role: "Mobile Programmer Flutter",
    description:
      "Led and contributed to study groups, built real-world mobile solutions, and collaborated via GitHub to enhance development workflow and version control.",
    duration: "Sept 2024 – May 2025",
    category: "Internship",
    logo: motionlab,
  },
  {
    company: "Komunitas Tentor HIMA IF (Kontent HIMAIF)",
    website: "himaiftelkom.com",
    role: "Data Structure Mentor",
    description:
      "Taught fundamental Algorithm Programming and Data Structures including Linked Lists, Queue, Stack, and MLL. Helped mentees prepare for technical assessments.",
    duration: "Sept 2024 – Jan 2025",
    category: "Mentorship",
    logo: kontent,
  }
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
            My Work/Internship Experience
          </h2>
        </div>

        {/* Geser paragraf sejajar ke ikon */}
        <div className="">
          <p 
            className="text-[#999999] mb-12 leading-relaxed text-xl text-left"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Real-world experience in mobile development and AI integration through impactful internships and team collaboration.
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

export default MyExperience;