import { useState } from "react";
import ScrambleText from "../widget/buttonAnimation"; // Adjust the path as necessary
import {
    Dumbbell,
    Rocket,
    PenTool,
    ExternalLink,
    ArrowRight
} from "lucide-react";

/* eslint-disable no-unused-vars */
const MyTopProjects = () => {
  // ✅ Perbaiki useState - tambahkan hoveredProject state
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: "devcraft",
      title: "Devcraft",
      url: "devcraft.com",
      category: "Portfolio",
      pages: "4 Pages",
      theme: "Dark Theme",
      description: "Showcasing expertise, passion, and innovation in the realm of development.",
      bgColor: "from-blue-900 via-purple-900 to-indigo-900",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      id: "zenith",
      title: "Zenith Gym", 
      url: "zenith.com",
      category: "Fitness",
      pages: "5 Pages",
      theme: "Light Theme",
      description: "Empowering fitness enthusiasts with an immersive online experience.",
      bgColor: "from-purple-100 via-pink-50 to-purple-200",
      icon: <Dumbbell className="w-6 h-6" />,
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="relative z-10 container mx-auto py-12">
        {/* Header */}
        <div>
            <div className="flex items-center space-x-3 mb-4">
            <PenTool className="w-7 h-7" />
            <h2
                className="text-3xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
                My Top Projects
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
        {/* Projects Grid */}
        <div className="space-y-12 mb-10 text-left" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="group h-40 lg:h-56 relative rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.02] flex flex-col lg:flex-row gap-0 bg-[#0A0A0B] backdrop-blur-xl border border-white/10"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Section - Container */}
              <div className="lg:w-1/2 my-4 ml-4 relative overflow-hidden rounded-3xl lg:rounded-3xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} opacity-90`}></div>
                <div className="absolute inset-0 bg-black/10"></div>
                
                {/* Placeholder for future image content */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      {project.icon}
                    </div>
                    <p className="text-white/60 text-sm">Image Container</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 px-6 py-8 flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-row gap-3 justify-between mb-6">
                    <h2 className="text-2xl lg:text-2xl font-bold text-white">
                      {project.title}
                    </h2>
                    <a
                      href={`https://${project.url}`}
                      className="inline-flex text-[#999999] font-semibold border-[#1f1f1f] items-center gap-2 px-4 py-2 bg-[#141415] rounded-md text-md transition-all duration-300 border w-fit"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.url}
                    </a>
                  </div>
 
                  <div className="flex flex-wrap gap-3 text-sm mb-6">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-[#999999]">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-[#999999]">
                      {project.pages}
                    </span>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-[#999999]">
                      {project.theme}
                    </span>
                  </div>

                  <p className="text-base leading-relaxed text-[#999999]">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <button className="w-full flex items-center space-x-2 bg-[#141415] hover:bg-[#1f1f20] px-6 py-3 rounded-lg transition-colors justify-center group">
            <ScrambleText
              text="VIEW ALL PROJECTS"
              className="text-md text-[#CCCCCC] group-hover:text-[#FFFFFF] transition-colors"
            />
            <ArrowRight className="w-4 h-4 text-[#CCCCCC] group-hover:text-[#FFFFFF] transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTopProjects;