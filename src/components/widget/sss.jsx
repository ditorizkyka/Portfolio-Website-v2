import React from 'react';

import { Zap, Mail, Calendar, Github, Twitter, Youtube, MessageCircle, ExternalLink, User, BackpackIcon, PenTool, Rocket } from 'lucide-react';
import ScrambleText from './buttonAnimation'; // sesuaikan path

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Left Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 pl-20 pr-15 bg-black border-r border-gray-900 flex flex-col items-center z-30 py-6">
        {/* Avatar Section */}
        <div className="w-10 h-10 rounded-full bg-[#6DD33D] flex items-center justify-center text-black font-bold text-sm mb-6">
          A
        </div>
        {/* Icon Section (centered vertically) */}
        <div className="flex flex-col items-center justify-center flex-grow space-y-6">
          <div className="w-16 h-16 flex items-center justify-center hover:bg-[#0A0A0B] rounded-lg transition-colors cursor-pointer group">
            <User className="w-8 h-8 text-[#CCCCCC] group-hover:text-white transition-colors" />
          </div>
          <div className="w-16 h-16 bg-[#0A0A0B] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-colors cursor-pointer">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center hover:bg-[#0A0A0B] rounded-lg transition-colors cursor-pointer group">
            <Mail className="w-8 h-8 text-[#CCCCCC] group-hover:text-white transition-colors" />
          </div>
        </div>  
      </div>    



      {/* Right Sidebar */}
      <div className="fixed right-0 top-0 h-full w-16 pr-20 pl-15 py-6 bg-black border-l border-gray-900 flex flex-col items-center justify-center space-y-6 z-30">
        {/* Icon Section (centered vertically) */}
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-black font-bold text-sm mb-6">
          
        </div>
        <div className="flex flex-col items-center justify-center flex-grow space-y-6">
          <div className="w-16 h-16 bg-[#0A0A0B] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-colors cursor-pointer">
            <User className="w-8 h-8 text-[#CCCCCC] font-light" />
          </div>
          <div className="w-16 h-16 bg-[#0A0A0B] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-colors cursor-pointer">
            <Github className="w-8 h-8 text-[#CCCCCC]" />
          </div>
          <div className="w-16 h-16 bg-[#0A0A0B] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-colors cursor-pointer">
            <Mail className="w-8 h-8 text-[#CCCCCC]" />
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed top-0 left-0 right-0 h-16  bg-black border-b border-gray-900 flex items-center justify-between px-40 py-10 z-20">
        {/* STATUS AVAILABILITY */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-[#141415] px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-[#6DD33D] rounded-full"></div>
            <span
              className="text-sm text-[#CCCCCC]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Available For Work
            </span>
          </div>
        </div>
        {/* STATUS AVAILABILITY */}

        {/* STATUS TIME */}
        <div className="text-sm text-[#CCCCCC]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Local Time ( IST )
           <span className="bg-[#141415] px-6 py-3 rounded-full ml-4">23:03:27</span>
        </div>
        {/* STATUS TIME */}
      </div>

      

      
      {/* Main Content */}
      <div className="px-40 pt-30 pb-32  bg-black">
        <div className="max-w-6xl ">
          {/* Hero Section */}
          <div className="flex items-center space-x-8 mb-16">
            {/* Photo Container */}
            <div className="w-90 h-65  border border-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-[#CCCCCC]" style={{display: 'none'}}>
                <span className="text-2xl">📷</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex justify-start text-left">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xl">👋</span>
                <span
                  className="text-lg text-[#CCCCCC]"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    wordSpacing: '-1px',
                  }}
                >
                  Hello I Am
                </span>
              </div>

              <h1
                className="text-4xl font-bold mb-4"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  wordSpacing: '-1px',
                }}
              >
                <span className="text-white rounded">
                  Andito Rizkyka R.
                </span>
              </h1>

              <p
                className="text-lg text-[#CCCCCC] mb-5 leading-relaxed max-w-2xl"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  wordSpacing: '-2px',
                }}
              >
                Experienced web developer from Tamil Nadu, India, 
                with a passion for crafting seamless digital 
                experiences and a proven track record.
              </p>

              <div className="flex space-x-4">
                {/* <ScrambleButton /> */}
                <button className="w-55 flex items-center space-x-2 bg-[#141415] px-6 py-3 rounded-lg transition-colors justify-center">
                  <Calendar className="w-4 h-4 text-[#CCCCCC]" />
                  <ScrambleText
                    text="EMAIL ME"
                    className="text-sm text-[#CCCCCC] font-medium"
                  />

                </button>

                <button className="w-55 flex items-center space-x-2 bg-[#141415] px-6 py-3 rounded-lg transition-colors justify-center">
                  <Calendar className="w-4 h-4 text-[#CCCCCC]" />
                  <ScrambleText
                    text="SCHEDULE CALL"
                    className="text-sm text-[#CCCCCC] font-medium"
                  />

                </button>
              </div>
            </div>
          </div>


          </div>

          {/* Social Links - Animated Marquee */}
          <div className="mb-13 overflow-hidden">
            <div className="flex animate-marquee space-x-12">
              <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
                <Github className="w-5 h-5" />
                <span>github</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
                <Twitter className="w-5 h-5" />
                <span>twitter</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
                <Youtube className="w-5 h-5" />
                <span>youtube</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
                <MessageCircle className="w-5 h-5" />
                <span>discord</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
                <ExternalLink className="w-5 h-5" />
                <span>dribbble</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
                <ExternalLink className="w-5 h-5" />
                <span>facebook</span>
              </a>
              {/* Duplicate for seamless loop */}
              <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
                <Github className="w-5 h-5" />
                <span>github</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
                <Twitter className="w-5 h-5" />
                <span>twitter</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
                <Youtube className="w-5 h-5" />
                <span>youtube</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
                <MessageCircle className="w-5 h-5" />
                <span>discord</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
                <ExternalLink className="w-5 h-5" />
                <span>dribbble</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap">
                <ExternalLink className="w-5 h-5" />
                <span>facebook</span>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-4 gap-8 mb-32">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      
                    }}>52+</div>
              <div  className="text-[#CCCCCC] "
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      
                    }}>Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      
                    }}>6+</div>
              <div  className="text-[#CCCCCC] "
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      
                    }}>Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      
                    }}>40+</div>
              <div  className="text-[#CCCCCC] "
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      
                    }}>Completed Tasks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      
                    }}>10+</div>
              <div  className="text-[#CCCCCC] "
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      
                    }}>Awards Received</div>
            </div>
          </div>

          {/* Additional content sections for scrolling */}
          {/* Additional content sections for scrolling */}
<div className="space-y-32">
      {/* My Experience Section */}
      <div>
        <div>
        <div className="flex items-center space-x-3 mb-4">
          <BackpackIcon className="w-7 h-7" />
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            My Experience
          </h2>
        </div>

      {/* Geser paragraf sejajar ke ikon */}
      <div className=""> {/* Sesuaikan padding agar teks sejajar dengan ikon */}
        <p className="text-[#999999] mb-12  leading-relaxed text-xl text-left"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Navigating diverse environments with adaptability and expertise for holistic solutions.
        </p>
      </div>
    </div>

    
    <div className="space-y-8">
      {/* Vortex Experience */}
      <div className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-xl p-6 mb-6">
        <div className="flex items-start justify-between mb-6">
          {/* Left: Logo & Company Info */}
          <div className="flex items-start space-x-4">
            {/* Logo */}
            <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-lg">V</span>
            </div>
            
            <div className="text-left">
              <div className="flex items-center space-x-3 ">
                <h3 className="text-white font-semibold text-lg">
                  Vortex
                </h3>
                <span className="bg-[#1f1f1f] text-[#999999] text-xs px-2 py-1 rounded-full">
                  Tech Firm
                </span>
              </div>
              <div className="text-text-sm text-[#999999]">
                vortex.co
              </div>
            </div>
          </div>
          
          {/* Right: Duration */}
          <div className="text-right">
            <span className="text-white font-semibold text-lg">
              2023 - Present
            </span>
          </div>
        </div>
        
        {/* Role & Description */}
        <div className="mt-6 bg-black rounded-lg p-4 text-start">
          <h4 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Product Designer
          </h4>
          <p className="text-[#999999] text-sm leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Headed product design initiatives, defined design strategy, and ensured alignment with
            business objectives for market-leading products.
          </p>
        </div>
      </div>

      <div className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-xl p-6 mb-6">
        <div className="flex items-start justify-between mb-6">
          {/* Left: Logo & Company Info */}
          <div className="flex items-start space-x-4">
            {/* Logo */}
            <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-lg">V</span>
            </div>
            
            <div className="text-left">
              <div className="flex items-center space-x-3 ">
                <h3 className="text-white font-semibold text-lg">
                  Vortex
                </h3>
                <span className="bg-[#1f1f1f] text-[#999999] text-xs px-2 py-1 rounded-full">
                  Tech Firm
                </span>
              </div>
              <div className="text-text-sm text-[#999999]">
                vortex.co
              </div>
            </div>
          </div>
          
          {/* Right: Duration */}
          <div className="text-right">
            <span className="text-white font-semibold text-lg">
              2023 - Present
            </span>
          </div>
        </div>
        
        {/* Role & Description */}
        <div className="mt-6 bg-black rounded-lg p-4 text-start">
          <h4 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Product Designer
          </h4>
          <p className="text-[#999999] text-sm leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Headed product design initiatives, defined design strategy, and ensured alignment with
            business objectives for market-leading products.
          </p>
        </div>
      </div>


      {/* Athon Experience */}
      <div className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-xl p-6 mb-6">
        <div className="flex items-start justify-between mb-6">
          {/* Left: Logo & Company Info */}
          <div className="flex items-start space-x-4">
            {/* Logo */}
            <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-lg">V</span>
            </div>
            
            <div className="text-left">
              <div className="flex items-center space-x-3 ">
                <h3 className="text-white font-semibold text-lg">
                  Vortex
                </h3>
                <span className="bg-[#1f1f1f] text-[#999999] text-xs px-2 py-1 rounded-full">
                  Tech Firm
                </span>
              </div>
              <div className="text-text-sm text-[#999999]">
                vortex.co
              </div>
            </div>
          </div>
          
          {/* Right: Duration */}
          <div className="text-right">
            <span className="text-white font-semibold text-lg">
              2023 - Present
            </span>
          </div>
        </div>
        
        {/* Role & Description */}
        <div className="mt-6 bg-black rounded-lg p-4 text-start">
          <h4 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Product Designer
          </h4>
          <p className="text-[#999999] text-sm leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Headed product design initiatives, defined design strategy, and ensured alignment with
            business objectives for market-leading products.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* About Section */}
  <div className="text-left">
    <MyStacks />
    <ServicesSection />
    <ShowcaseProject />
  </div>
    </div>

    {/* Footer */}

          
        </div>
      </div>
      {/* Custom CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>

  );
};

import { ArrowRight } from 'lucide-react';

const MyStacks = () => {
  const stacks = [
    {
      name: 'Figma',
      category: 'Interface Design Tool',
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center">
          <div className="relative">
            <div className="w-3 h-3 bg-red-500 rounded-full absolute top-0 left-0"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full absolute top-0 left-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full absolute top-2 left-0"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full absolute top-2 left-2"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full absolute top-4 left-1"></div>
          </div>
        </div>
      )
    },
    {
      name: 'Notion',
      category: 'Productivity Tool',
      icon: (
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
          <span className="text-black text-xl font-bold">N</span>
        </div>
      )
    },
    {
      name: 'Webflow',
      category: 'No Code Design Tool',
      icon: (
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
          <span className="text-white text-xl font-bold">W</span>
        </div>
      )
    },
    {
      name: 'Framer',
      category: 'No Code Design Tool',
      icon: (
        <div className="w-12 h-12 bg-black border border-white rounded-xl flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-sm transform rotate-45"></div>
        </div>
      )
    },
    {
      name: 'Slack',
      category: 'Productivity Tool',
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center relative">
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-lg"></div>
            <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      )
    },
    {
      name: 'Asana',
      category: 'Productivity Tool',
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center">
          <div className="relative">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full absolute -bottom-1 -right-1"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full absolute -bottom-2 left-1"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            
            <div className="flex items-center space-x-3 mb-4">
              <PenTool className="w-7 h-7" />
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                My Stacks
              </h2>
          </div>
          </div>
          <p className="text-gray-400  text-lg md:text-xl leading-relaxed max-w-3xl">
            Commitment to staying updated with the latest design trends and techniques.
          </p>
        </div>

        {/* Stacks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stacks.map((stack, index) => (
            <div
              key={stack.name}
              className="group relative  bg-[#0A0A0B] backdrop-blur-sm border border-[#1f1f1f]  rounded-2xl px-3 py-4 hover:bg-[#0A0A0B]/50 hover:border-[#1f1f1f] transition-all duration-300 cursor-pointer overflow-hidden"
              style={{fontFamily: "'Space Grotesk', sans-serif",
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {stack.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors t">
                      {stack.name}
                    </h3>
                    <p className="text-[#999999] text-sm group-hover:text-gray-300 transition-colors">
                      {stack.category}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 group-hover:bg-gray-700/50 transition-all duration-300">
                  <ArrowRight 
                    className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" 
                  />
                </div>
              </div>

              {/* Subtle bottom border animation */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Floating particles background effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
          <line x1="9" y1="9" x2="15" y2="9" strokeWidth="2"/>
          <line x1="9" y1="15" x2="15" y2="15" strokeWidth="2"/>
        </svg>
      ),
      title: "Web Design",
      description: "Crafting visually captivating and user-friendly websites for online success."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
          <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2"/>
        </svg>
      ),
      title: "Web Development",
      description: "Bringing ideas to life with robust and scalable web solutions."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" strokeWidth="2"/>
          <path d="M12 1v6m0 6v6" strokeWidth="2"/>
          <path d="M9 12H1m8 0h14" strokeWidth="2"/>
        </svg>
      ),
      title: "Graphic Design",
      description: "Creating visually stunning designs that captivate and engage audiences."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2"/>
        </svg>
      ),
      title: "SEO Optimization",
      description: "Elevating online visibility and driving organic traffic through strategies."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen"  style={{fontFamily: "'Space Grotesk', sans-serif"}}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <h1 className="text-4xl font-bold">My Services</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
            Formulating comprehensive strategies to meet your design goals and exceed expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-2xl p-8 hover:bg-[#0A0A0B]/50 transition-all duration-300 "
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#999999] p-3 rounded-xl text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-[#999999] leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



import { useState } from "react";
import {   Dumbbell } from "lucide-react";

const ShowcaseProject = () => {
  const [ setHoveredProject] = useState(null);

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
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            
            <div className="flex items-center space-x-3 mb-4">
              <PenTool className="w-7 h-7" />
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Top 5 Projects
              </h2>
          </div>
          </div>
          <p className="text-gray-400  text-lg md:text-xl leading-relaxed max-w-3xl">
            Commitment to staying updated with the latest design trends and techniques.
          </p>
        </div>


        {/* Projects Grid */}
        <div className="space-y-12 mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="group h-40 lg:h-56 relative rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.02] flex flex-col lg:flex-row gap-0 bg-[#0A0A0B] backdrop-blur-xl border border-white/10"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Section - Container */}
              <div className="lg:w-1/2 my-4 ml-4 relative overflow-hidden rounded-3xl lg:rounded-3xl ">
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
                      className="inline-flex text-[#999999] font-semibold border-[#1f1f1f] items-center gap-2 px-4 py-2  bg-[#141415]  rounded-md text-md transition-all duration-300 border  w-fit"
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




export default Portfolio;