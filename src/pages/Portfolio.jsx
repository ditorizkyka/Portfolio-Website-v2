/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// ✅ TAMBAHKAN SEMUA IMPORT YANG HILANG
import { 
  Dumbbell, 
  Rocket, 
  PenTool, 
  ExternalLink, 
  ArrowRight 
} from "lucide-react";

// Import komponen lainnya
import SidebarLeft from '../components/common/SideBarLeft';
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

// ✅ PERBAIKI SHOWCASE PROJECT COMPONENT


// ✅ PORTFOLIO COMPONENT
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SidebarLeft />
      <SidebarRight />
      <StatusBar />
      
      <div className="px-40 pt-30 pb-32 bg-black">
        <div className="max-w-6xl">
          <HeroSection />
          <SocialMediaSection />
          <MyStats />
          <MyAcademics />
          <MyStacks />
          <MyRole />
          
          {/* ✅ ShowcaseProject akan muncul sekarang */}
          <MyTopProjects />
        
        </div>
      </div>
      <FooterBar />
    </div>
  );
};

export default Portfolio;