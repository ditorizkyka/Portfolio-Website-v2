"use client";
import { useState , useEffect } from 'react';

// Common Components (Layout)
import SidebarLeft from '../components/organisms/common/SidebarLeft';
import SidebarRight from '../components/organisms/common/SidebarRight';
import StatusBar from '../components/organisms/common/StatusBar';
import MobileTopNav from '../components/organisms/common/MobileTopNav';
import FooterBar from '../components/organisms/common/FooterBar';
import HeroSection from '../components/organisms/hero-section/HeroSection';
import SocialMediaSection from '../components/organisms/hero-section/SocialMediaSection';
import MyStats from '../components/organisms/hero-section/MyStats';
import MyAcademics from '../components/organisms/hero-section/MyAcademics';
import MyStacks from '../components/organisms/hero-section/MyStacks';
import MyExperience from '../components/organisms/hero-section/MyExperience';
import MyRole from '../components/organisms/hero-section/MyRole';
import "./globals.css";
import { Project } from '../types/project';
import supabase from '../lib/supabase/client';
import { Academic } from '../types/academic';
import { TechStack } from '../types/techStack';
import { Experience } from '../types/experience';
import { Profile } from '../types/profile';
import MyTopProjects from '../components/organisms/hero-section/MyTopProjects';
import { Certification } from '../types/certification';
import { SoftSkill } from '../types/softSkills';

// import MyTopProjects from '../components/organisms/hero-section/MyTopProjects';




const PortfolioPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [academics, setAcademics] = useState<Academic[]>([]);
  const [techStacks, setTechStacks] = useState<TechStack[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [profile, setProfile] = useState<Profile>();
  const [isLoading, setIsLoading] = useState(true); // Default true karena awal-awal pasti loading
  const [certifications, setCertificates] = useState<Certification[]>([]);
  const [organizations, setOrganizations] = useState<SoftSkill[]>([]);

  useEffect(() => {

    const fetchSoftSkills = async () => {
      const { data, error } = await supabase.from('social_projects').select('*');
      if (error) 
        console.error('Error fetching soft skills:', error);
      else 
        setOrganizations(data);
    };
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*');
      if (error) 
        console.error('Error fetching projects:', error);
      else 
        setProjects(data);
      
    };

    const fetchAcademics = async () => {
      const { data, error } = await supabase.from('academics').select('*');
      if (error) 
        console.error('Error fetching academics:', error);
      else 
        setAcademics(data);
      
    };

    const fetchTechStacks = async () => {
      const { data, error } = await supabase.from('tech_stacks').select('*');
      if (error) 
        console.error('Error fetching tech stacks:', error);
      else 
        setTechStacks(data);
      
    };

    const fetchExperiences = async () => {
      const { data, error } = await supabase.from('experiences').select('*');
      if (error) 
        console.error('Error fetching experiences:', error);
      else 
        setExperiences(data);
      
    };

    const fetchProfile = async () => {
      const { data, error } = await supabase.from('profile').select('*');
      if (error) 
        console.error('Error fetching profile:', error);
      else 
        setProfile(data[0]);
      
    };

     const fetchCertificates = async () => {
      const { data, error } = await supabase.from('certifications').select('*');
      if (error) 
        console.error('Error fetching certificates:', error);
      else 
        setCertificates(data);
    };


    const fetchAllData = async () => {
      try {
        // Jalankan semua fetch secara paralel
        await Promise.all([
          fetchProjects(),
          fetchAcademics(),
          fetchTechStacks(),
          fetchExperiences(),
          fetchProfile(),
          fetchCertificates(),
          fetchSoftSkills(),
        ]);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // Matikan loading setelah selesai (baik sukses maupun error)
        
        setIsLoading(false);
      }
    };

    
    fetchAllData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center z-50 fixed inset-0">
        <div className="w-12 h-12 border-4 border-[#333333] border-t-[#6DD33D] rounded-full animate-spin mb-4"></div>
        <span className="text-[#CCCCCC] font-space-grotesk tracking-widest text-sm animate-pulse">LOADING ASSETS...</span>
      </div>
    );
  }

  console.log('Fetched projects:', profile);

  return (
    <div className="min-h-screen  bg-black text-white font-space-grotesk selection:bg-[#6DD33D] selection:text-black">
      
      {/* 📱 Mobile Navigation (Hanya muncul di layar kecil) */}
      <div className="block  md:hidden">
        <MobileTopNav  />
      </div>

      {/* 💻 Desktop Navigation & UI (Sidebar & StatusBar) */}
      <div className="hidden md:block">
        <SidebarLeft profile ={profile as Profile} />
        <SidebarRight />
        <StatusBar />
      </div>

      {/* 🚀 Main Content Container */}
      {/* Padding disesuaikan: 
          - Mobile: px-4 pt-6
          - Desktop: md:px-40 md:pt-32 (memberi ruang untuk StatusBar & Sidebars)
      */}
      <main className="relative z-10 px-6 pt-20 pb-20 md:px-50 md:pt-32 md:pb-32">
        <div className="max-w-5xl  mx-auto space-y-20 md:space-y-32">
          
          {/* Top Section */}
          <section id="hero">
            <HeroSection profile={profile as Profile} />
            <SocialMediaSection />
            {/* Metrics & Identity */}
            <MyStats projectsCount={projects.length} organizationCount={organizations.length} certificationCount={certifications.length} worksCount={experiences.length} />
          </section>

          
          
          <div className="grid grid-cols-1">
            <MyRole />
            <MyStacks stacks={techStacks as TechStack[]} />
          </div>

          {/* Timeline & Achievements */}
          <section id="experience" className="">
            <MyExperience experiences={experiences as Experience[]} />
            <MyAcademics academics={academics as Academic[]} />
          </section>

          {/* Showcase */}
          <section id="projects">
            <MyTopProjects projects={projects as Project[]} />
          </section>

        </div>
      </main>

      {/* 🏁 Footer */}
      <FooterBar />

      {/* Background Decorator (Optional - Soft Glow) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6DD33D]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
};

export default PortfolioPage;