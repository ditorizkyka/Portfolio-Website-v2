import React from 'react';
import { Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "E-Commerce Dashboard",
      label: "SEAL Projects",
      description: "A comprehensive e-commerce dashboard built with React and Node.js. This project includes user authentication, product management, order tracking, and real-time analytics with beautiful UI components and responsive design for optimal user experience across all devices.",
      githubUrl: "https://github.com/username/ecommerce-dashboard"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Data Visualization Tool",
      label: "DSIS Projects",
      description: "An advanced data visualization platform that transforms complex datasets into interactive charts and graphs. Features include real-time data processing, multiple chart types, custom filtering options, and export capabilities for business intelligence and analytics teams.",
      githubUrl: "https://github.com/username/data-viz-tool"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Task Management App",
      label: "SEAL Projects",
      description: "A collaborative task management application designed for teams and individuals. Features include drag-and-drop functionality, deadline tracking, team collaboration tools, file attachments, progress monitoring, and integration with popular productivity tools for seamless workflow management.",
      githubUrl: "https://github.com/username/task-manager"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Task Management App",
      label: "SEAL Projects",
      description: "A collaborative task management application designed for teams and individuals. Features include drag-and-drop functionality, deadline tracking, team collaboration tools, file attachments, progress monitoring, and integration with popular productivity tools for seamless workflow management.",
      githubUrl: "https://github.com/username/task-manager"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Task Management App",
      label: "SEAL Projects",
      description: "A collaborative task management application designed for teams and individuals. Features include drag-and-drop functionality, deadline tracking, team collaboration tools, file attachments, progress monitoring, and integration with popular productivity tools for seamless workflow management.",
      githubUrl: "https://github.com/username/task-manager"
    }
  ];

  const truncateText = (text, maxLines = 2) => {
    const words = text.split(' ');
    const maxWords = maxLines * 15; // Approximate words per line
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  const getLabelColor = (label) => {
    return label === 'SEAL Projects' 
      ? 'bg-blue-100 text-blue-800 border-blue-200'
      : 'bg-green-100 text-green-800 border-green-200';
  };

  return (
    <section className="py-16 bg-black min-h-screen text-left" style={{ fontFamily: "'Space Grotesk', sans-serif" }} >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <h1 className="text-4xl font-bold">My Role</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
            Formulating comprehensive strategies to meet your design goals and exceed expectations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-30 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                
                {/* Floating Label */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm bg-opacity-90 ${getLabelColor(project.label)}`}>
                    {project.label}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Project Title */}
                <h3 className="text-md font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-3">
                  {truncateText(project.description)}
                </p>

                {/* GitHub Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors duration-200 group/btn"
                >
                  <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-200" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
}