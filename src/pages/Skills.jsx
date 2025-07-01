import React, { useState, useEffect } from 'react';

// Icons & Components
import SidebarLeft from '../components/common/SidebarLeft';
import SidebarRight from '../components/common/SidebarRight';
import StatusBar from '../components/common/StatusBar';
import FooterBar from '../components/common/FooterBar';
import AutoCarousel from '../components/ProjectsShowcase/CarouselSection';
// import ProjectsSection from '../components/ProjectsShowcase/ShowcaseProjects';
import MobileTopNav from '../components/common/MobileTopNav';
import SocialSkills from '../components/Skills/ShowcaseSocialSkills';
import Certifications from '../components/Skills/ShowcaseHardSkills';
import AutoCarouselSkills from '../components/Skills/CarouselSection';

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  // 🔍 Deteksi lebar layar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Cek saat pertama mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 📱 Tampilan Mobile
  if (isMobile) {
    return (
      <div className="min-h-screen bg-black text-white">
        <MobileTopNav />
        <div className="pt-6 pb-16">
          <AutoCarouselSkills />
          <SocialSkills />
          <Certifications />
        </div>
        <FooterBar />
      </div>
    );
  }

  // 💻 Tampilan Desktop
  return (
    <div className="min-h-screen bg-black text-white">
      <SidebarLeft />
      <SidebarRight />
      <StatusBar />
      <div className="px-40 pt-20 pb-32 bg-black">
        <AutoCarouselSkills />
        <SocialSkills />
        <Certifications />
      </div>
      <FooterBar />
    </div>
  );
};

export default Skills;
