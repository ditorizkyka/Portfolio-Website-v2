
// Import komponen lainnya
import SidebarLeft from '../components/common/SidebarLeft';
import SidebarRight from '../components/common/SidebarRight';
import StatusBar from '../components/common/StatusBar';
import FooterBar from '../components/common/FooterBar';
import AutoCarousel from '../components/ProjectsShowcase/CarouselSection';
import ProjectsSection from '../components/ProjectsShowcase/ShowcaseProjects';

// ✅ PERBAIKI SHOWCASE PROJECT COMPONENT


// ✅ PORTFOLIO COMPONENT
const ProjectShowcase = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SidebarLeft />
      <SidebarRight />
      <StatusBar />
      
      <div className="px-40 pt-20 pb-32 bg-black">
        <AutoCarousel />
        <ProjectsSection />
        
      </div>
      <FooterBar />
    </div>
  );
};

export default ProjectShowcase;