import React, { useState, useEffect } from 'react';
import kontent from '../../assets/kontent.jpeg';
import humiceng from '../../assets/humiceng.jpeg';
import motionlab from '../../assets/motionlab.jpeg';
import telkomLogo from '../../assets/telkomindo.png';
import { BackpackIcon } from 'lucide-react';

const MyExperience = () => {
  const [isMobile, setIsMobile] = useState(false);

  const experiences = [
      {
        company: "PT. Telkom Indonesia",
        website: "https://www.telkom.co.id",
        role: "Data & Automation Analyst Intern",
        description:
          "Developed an AI-agent system using n8n and Azure OpenAI to classify employee feedback by brand equity. Automated event workflows via chatbot (Dify) with WhatsApp API integration, and built analytical dashboards with Looker Studio for business insights.",
        duration: "July – August 2025",
        category: "Internship",
        logo: telkomLogo,
      }
  ,
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="max-w-6xl mx-auto mb-15 text-left" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Header */}
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <BackpackIcon className="w-7 h-7" />
          <h2 className="text-lg md:text-3xl font-bold">My Work/Internship Experience</h2>
        </div>
        <p className="text-[#999999] mb-12 leading-relaxed text-[12px] md:text-xl text-left">
          Real-world experience in mobile development and AI integration through impactful internships and team collaboration.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-xl text-left">
            {isMobile ? (
              // === MOBILE UI ===
              <div className='p-2'>
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
                  <span className="bg-[#1f1f1f] text-[#999999] text-[9px] px-2 py-1 text-center rounded-full line-clamp-1">
                    {exp.category}
                  </span>
                </div>

                <div className="text-white mb-3 font-bold px-2 text-sm tracking-wide border-t border-[#1f1f1f] pt-3">
                  {exp.duration}
                </div>

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

export default MyExperience;
