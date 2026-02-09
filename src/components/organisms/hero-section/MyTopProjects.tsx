"use Client"
import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ScrambleText from '../../atoms/buttonAnimation';
import ProjectCard from '../../molecules/TopProjectCard';
import { Project } from '@/src/types/project';



const MyTopProjects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <section className="bg-black text-white  font-space-grotesk text-left">
      <div className="container mx-auto md:px-0">
        {/* Header Section */}
        <div className="mb-10 md:mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Star className="w-7 h-7 text-white" />
            <h2 className="text-xl md:text-3xl font-bold">My Top Projects</h2>
          </div>
          <p className="text-[#999999] leading-relaxed text-sm md:text-xl max-w-3xl">
            Selected impactful projects showcasing my technical skills, creativity, and real-world problem-solving capabilities.
          </p>
        </div>

       {/* Project List */}
        <div className="space-y-8 md:space-y-12 mb-12">
          {projects
            .filter((project) => project.is_featured === true) // Hanya ambil yang is_featured true
            .map((project) => ( 
              <ProjectCard key={project.id} project={project} />
            ))
          }
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link href="/projects" className="w-full md:w-auto">
            <button className="w-full flex items-center space-x-2 bg-[#141415] hover:bg-[#1f1f20] px-8 py-4 rounded-xl transition-all justify-center group border border-[#1f1f1f]">
              <ScrambleText
                text="VIEW ALL PROJECTS"
                className="text-md text-[#CCCCCC] group-hover:text-white"
              />
              <ArrowRight className="w-4 h-4 text-[#CCCCCC] group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyTopProjects;