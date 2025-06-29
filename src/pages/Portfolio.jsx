
import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Rocket, 
  PenTool, 
  ExternalLink, 
  ArrowRight 
} from "lucide-react";

import SidebarLeft from '../components/common/SidebarLeft';
import SidebarRight from '../components/common/SidebarRight';
import StatusBar from '../components/common/StatusBar';
import HeroSection from '../components/Portfolio/HeroSection';
import SocialMediaSection from '../components/Portfolio/SocialMediaSection';
import MyStats from '../components/Portfolio/MyStats';
import MyAcademics from '../components/Portfolio/MyAcademics';
import MyStacks from '../components/Portfolio/MyStacks';
import MyRole from '../components/Portfolio/MyRole';
import MyTopProjects from '../components/Portfolio/MyTopProjects';
import FooterBar from '../components/common/FooterBar';
import MyExperience from '../components/Portfolio/MyExperience';
import MobileTopNav from '../components/common/MobileTopNav';

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  // ⏱️ Deteksi ukuran layar (mobile / desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check saat pertama kali mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 👇 IF ELSE untuk tampilan
  if (isMobile) {
    // 👉 TAMPILAN MOBILE
    return (
      <div className="min-h-screen bg-black text-white">
        <MobileTopNav />
        <div className=" pt-6 pb-16">
          <HeroSection />
          <SocialMediaSection />
          <MyStats />
          <MyAcademics />
          <MyStacks />
          <MyExperience />
          <MyRole />
          <MyTopProjects />
        </div>
        <FooterBar />
      </div>
    );
  } else {
    // 👉 TAMPILAN DESKTOP
    return (
      <div className="min-h-screen bg-black text-white">
        <SidebarLeft />
        <SidebarRight />
        <StatusBar />
        <div className="px-40 pt-30 pb-32">
          <div className="max-w-6xl">
            <HeroSection />
            <SocialMediaSection />
            <MyStats />
            <MyAcademics />
            <MyStacks />
            <MyExperience />
            <MyRole />
            <MyTopProjects />
          </div>
        </div>
        <FooterBar />
      </div>
    );
  }
};

export default Portfolio;
