"use client";
import React from 'react';
import Image from 'next/image';
import { Project } from '@/src/types/project';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  isMobile: boolean;
  truncateText: (text: string) => string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, isMobile, truncateText }) => {
  return (
    <div
      className="bg-[#0A0A0B] border border-[#1f1f1f] text-[#999999] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className={`relative overflow-hidden w-full ${isMobile ? 'h-28' : 'h-48'}`}>
  <Image
    src={project.images[0]}
    alt={project.title}
    // Menggunakan fill agar gambar mengikuti ukuran div pembungkus
    fill 
    // object-cover memastikan gambar memenuhi area tanpa menjadi penyok
    className="object-cover group-hover:scale-105 transition-transform duration-300"
    // Membantu browser memilih ukuran gambar yang paling efisien
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
  
  {!isMobile && (
    <div className="absolute top-3 right-3 z-10">
      <ProjectBadge label={project.category} />
    </div>
  )}
</div>
      <div className="p-4">
        <h3 className={`font-bold text-white mb-2 group-hover:text-blue-500 transition-colors duration-200 truncate ${isMobile ? 'text-sm' : 'text-md'}`}>
          {project.title}
        </h3>
        <p className={`${isMobile ? 'text-[10px]' : 'text-xs'} leading-relaxed mb-3 line-clamp-2`}>
          {truncateText(project.short_description)}
        </p>
        <button
          className="inline-flex items-center gap-2 px-3 py-2 bg-[#1f1f1f] text-[#CCCCCC] hover:bg-gray-800 text-xs font-medium rounded-lg transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            window.open(project.repo_link, '_blank');
          }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </button>
      </div>
    </div>
  );
};

interface ProjectBadgeProps {
  label: string;
}

const ProjectBadge: React.FC<ProjectBadgeProps> = ({ label }) => {
  const labelStyles = label === 'Software Development' 
    ? 'bg-blue-100 text-blue-800 border-blue-200'
    : 'bg-green-100 text-green-800 border-green-200';

  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm bg-opacity-90 ${labelStyles}`}>
      {label}
    </span>
  );
};

export { ProjectCard, ProjectBadge };