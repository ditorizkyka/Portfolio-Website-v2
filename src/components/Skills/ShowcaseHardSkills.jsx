import { useState, useEffect } from "react";
import ScrambleText from "../widget/buttonAnimation";
import dcd from "../../assets/certificate/dcd.jpg";
import agile from "../../assets/certificate/agile.jpg";
import microsoft from "../../assets/certificate/ai-900.jpg";
import hki from "../../assets/certificate/hki.jpg";

import {
  ExternalLink,
  ArrowRight,
  FileBadge2,
} from "lucide-react";
import { Link } from "react-router-dom";


const certifications = [
  {
    id: 1,
    image: agile, // logo Agile / Scrum
    title: "Agile Scrum Fundamentals",
    organizer: "MindMagine Asia Sdn. Bhd.",
    description:
      "Certified with 90% score, demonstrating strong grasp of Agile principles, Scrum roles, events, and artifacts.",
    stack: ["Scrum", "Agile", "Project Management"],
    linkDrive: "https://drive.google.com/file/d/1FB68mxkxPlbcX8Y_D5IW6VR4Fb5b5Web/view?usp=drive_link", // sertifikat bisa disisipkan jika ada
  },
  {
    id: 2,
    image: microsoft, // logo Microsoft
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    organizer: "Microsoft",
    description:
      "Covered core AI concepts, ML, CV, NLP, and Azure AI services. Completed in May 2025.",
    stack: ["AI Fundamentals", "Azure", "ML", "NLP"],
    linkDrive: "https://drive.google.com/file/d/1iTVWhhE6zGG-jUj9bZ-1TGgKylDuf6FW/view?usp=sharing",
  },
  {
    id: 3,
    image: dcd, // logo IDCamp
    title: "Developing Android Apps Beginner",
    organizer: "IDCamp 2023 - Indosat Ooredoo Hutchison",
    description:
      "Learned Kotlin basics, control flow, OOP, and Android Studio for building apps.",
    stack: ["Android", "Kotlin", "Android Studio"],
    linkDrive: "https://drive.google.com/file/d/1VuJrFGtLtnfN8RadLDgi_9p8bXZh7ng2/view?usp=drive_link",
  },
  {
    id: 4,
    image: hki, // logo DJKI (HKI)
    title: "Intellectual Property Rights (HKI) – MedPelvis Mobile",
    organizer: "Direktur Jenderal Kekayaan Intelektual",
    description:
      "MedPelvis Mobile registered under HKI. Educational anatomy app with videos, visualizations, and GIFs.",
    stack: ["Flutter", "Mobile App", "Legal Protection"],
    linkDrive: "https://drive.google.com/file/d/1yX77oFxqJxHpgtv9ghdceXKamm3E_m_I/view?usp=sharing",
  },
];





// Komponen utama
const Certifications = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  // Mobile UI
  if (isMobile) {
    return (
      <div className="min-h-screen bg-black text-white py-8 space-y-8 text-left" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <div className="mb-8">
          <h2 className="text-lg font-bold flex items-center gap-2 mb-2">
            <FileBadge2 className="w-6 h-6" />
            Certifications
          </h2>
          <p className="text-[#999999] text-[12px] text-base ">
            A collection of certifications that demonstrate my commitment to continuous learning and technical excellence in software, AI, and agile development.
            </p>
        </div>

        {certifications.map((certification) => (
          <a href={certification.linkDrive}>
            <div
            key={certification.id}
            className="bg-[#0A0A0B] rounded-2xl my-4 border border-[#1f1f1f] p-4 shadow-lg transition-transform hover:scale-[1.015]"
          >
            {/* Image */}
            <img
              src={certification.image}
              alt={certification.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            {/* Title & Link in One Row */}
            <div className="flex justify-between items-center mb-3">
              {/* Title */}
              <h3 className="text-white text-md font-semibold ">
                {certification.title}
              </h3>
            </div>


            {/* Meta: label, pages (dummy), theme */}
            <div className="flex items-start flex-wrap text-xs text-[#999999] gap-2 mb-2">
              
              <span className="bg-[#1f1f1f] text-[#999999] text-xs px-2 py-1 rounded-full">
                {certification.organizer}
                </span>
            </div>

            {/* Description */}
            <p className="text-[#999999] text-[12px] leading-relaxed line-clamp-3 ">
              {certification.description}
            </p>
          </div>
          </a>
        ))}
      </div>
    );
  }

  // Desktop UI
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden text-left">
      <div className="relative z-10 container mx-auto py-12">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <FileBadge2 className="w-7 h-7" />
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Certifications
            </h2>
          </div>
          <p className="text-[#999999] mb-12 leading-relaxed text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            A collection of certifications that demonstrate my commitment to continuous learning and technical excellence in software, AI, and agile development.
          </p>
        </div>

        <div className="space-y-12 mb-10 text-left mx-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {certifications.map((certification) => (
            <a href={certification.linkDrive} target="_blank" rel="noopener noreferrer" className="block" key={certification.id}>
                <div
              key={certification.id}
              className="group h-40 lg:h-70 relative rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.02] flex flex-col lg:flex-row gap-0 bg-[#0A0A0B] backdrop-blur-xl border border-white/10"
            >
              <div className="lg:w-1/2 my-4 ml-4 relative overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br opacity-90" />
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10 w-full h-full">
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>

              <div className="lg:w-1/2 px-6 py-4 flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-row gap-3 justify-between mb-4">
                    <h2 className="text-2xl lg:text-2xl font-bold text-white line-clamp-2">
                      {certification.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm mb-4">
                    <span className="bg-[#1f1f1f] text-[#999999] text-xs px-2 py-1 rounded-full">
                      {certification.organizer}
                    </span>
                    
                  </div>

                  <p className="text-base leading-relaxed text-[#999999] line-clamp-2">
                    {certification.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {certification.stack.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {certification.stack.length > 3 && (
                      <span className="px-2 py-1 bg-[#1f1f1f] text-[#999999] text-xs rounded-md">
                        +{certification.stack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Certifications;
