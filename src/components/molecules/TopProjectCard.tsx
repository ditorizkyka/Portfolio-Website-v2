import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/src/types/project';


interface ProjectTechBadgeProps {
  tech: string;
  isPrimary?: boolean;
}

const ProjectTechBadge = ({ tech, isPrimary = true }: ProjectTechBadgeProps) => (
  <span
    className={`px-2 py-1 text-xs rounded-md border ${
      isPrimary 
        ? "bg-blue-500/10 text-blue-400 border-blue-500/20" 
        : "bg-[#1f1f1f] text-[#999999] border-transparent"
    }`}
  >
    {tech}
  </span>
);

const ProjectCard = ({ project }: { project: Project }) => {

  return (
    <div className="group relative rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.01] flex flex-col md:flex-row bg-[#0A0A0B] backdrop-blur-xl border border-white/10">
      {/* Project Image Container */}
      <div className="w-full md:w-1/2 p-4">
        <div className="relative h-48 md:h-64 lg:h-72 w-full overflow-hidden rounded-2xl">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Project Info */}
      <div className="w-full md:w-1/2 px-6 py-6 md:py-8 flex flex-col justify-center">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-white line-clamp-2">
            {project.title}
          </h3>
          <a
            href={project.repo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#141415] border border-[#1f1f1f] rounded-md text-sm text-[#999999] hover:bg-[#1f1f20] hover:text-white transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            GitHub
          </a>
        </div>

        {/* Badges & Meta */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-[#1f1f1f] text-[#999999] text-[10px] md:text-xs px-2 py-1 rounded-full">
            {project.category}
          </span>
          <span className="bg-[#1f1f1f] text-[#999999] text-[10px] md:text-xs px-2 py-1 rounded-full">
            {project.duration}
          </span>
        </div>

        <p className="text-sm md:text-base text-[#999999] line-clamp-2 mb-6">
          {project.short_description}
        </p>

        {/* Tech Stack List */}
        <div className="flex flex-wrap gap-2">
          {project.tech_stack.slice(0, 3).map((tech, idx) => (
            <ProjectTechBadge key={idx} tech={tech} />
          ))}
          {project.tech_stack.length > 3 && (
            <ProjectTechBadge tech={`+${project.tech_stack.length - 3} more`} isPrimary={false} />
          )}
        </div>

        {/* Mobile-only GitHub Link */}
        <a
          href={project.repo_link}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden mt-6 flex items-center justify-center gap-2 px-4 py-3 bg-[#141415] border border-[#1f1f1f] rounded-xl text-sm text-[#999999]"
        >
          <ExternalLink className="w-4 h-4" />
          View on {project.demo_link}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;