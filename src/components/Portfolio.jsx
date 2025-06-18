import React from 'react';
import { Mail, Calendar, Github, Twitter, Youtube, MessageCircle, ExternalLink, User, BackpackIcon } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Left Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 pl-20 pr-10 bg-black border-r border-gray-900 flex flex-col items-center z-30 py-6">
        {/* Avatar Section */}
        <div className="w-10 h-10 rounded-full bg-[#6DD33D] flex items-center justify-center text-black font-bold text-sm mb-6">
          A
        </div>

        {/* Icon Section (centered vertically) */}
        <div className="flex flex-col items-center justify-center flex-grow space-y-5">
          <div className="w-12 h-12 flex items-center justify-center">
            <User className="w-6 h-6 text-[#CCCCCC] font-light" />
          </div>
          <div className="w-12 h-12 flex items-center justify-center">
            <Github className="w-6 h-6 text-[#CCCCCC]" />
          </div>
          <div className="w-12 h-12 flex items-center justify-center">
            <Mail className="w-6 h-6 text-[#CCCCCC]" />
          </div>
        </div>
      </div>



      {/* Right Sidebar */}
      <div className="fixed right-0 top-0 h-full w-16 pr-20 pl-10 py-6 bg-black border-l border-gray-900 flex flex-col items-center justify-center space-y-6 z-30">
       {/* Icon Section (centered vertically) */}

       <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-black font-bold text-sm mb-6">
          
        </div>
        <div className="flex flex-col items-center justify-center flex-grow space-y-5">
          <div className="w-12 h-12 flex items-center justify-center">
            <User className="w-6 h-6 text-[#CCCCCC] font-light" />
          </div>
          <div className="w-12 h-12 flex items-center justify-center">
            <Github className="w-6 h-6 text-[#CCCCCC]" />
          </div>
          <div className="w-12 h-12 flex items-center justify-center">
            <Mail className="w-6 h-6 text-[#CCCCCC]" />
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
                <button className="w-55 flex items-center space-x-2 bg-[#141415] px-6 py-3 rounded-lg transition-colors justify-center">
                  <Mail className="w-4 h-4 text-[#CCCCCC]" />
                  <span
                    className="text-sm text-[#CCCCCC] leading-relaxed max-w-2xl"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      wordSpacing: '-1px',
                    }}
                  >
                    EMAIL ME
                  </span>
                </button>

                <button className="w-55 flex items-center space-x-2 bg-[#141415] px-6 py-3 rounded-lg transition-colors justify-center">
                  <Calendar className="w-4 h-4 text-[#CCCCCC]" />
                  <span
                    className="text-sm text-[#CCCCCC] leading-relaxed max-w-2xl"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      wordSpacing: '-1px',
                    }}
                  >
                    SCHEDULE CALL
                  </span>
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
    <h2 className="text-3xl font-bold mb-8">About Me</h2>
    <p className="text-[#CCCCCC] max-w-3xl leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
  </div>

  {/* Services Section */}
  <div className="text-left">
    <h2 className="text-3xl font-bold mb-8">Services</h2>
    <div className="grid grid-cols-3 gap-8">
      <div className="bg-gray-800 p-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Web Development</h3>
        <p className="text-[#999999]">Creating modern and responsive web applications</p>
      </div>
      <div className="bg-gray-800 p-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
        <p className="text-[#999999]">Designing intuitive and beautiful user interfaces</p>
      </div>
      <div className="bg-gray-800 p-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Mobile Apps</h3>
        <p className="text-[#999999]">Building cross-platform mobile applications</p>
      </div>
    </div>
  </div>

  {/* Portfolio Section */}
  <div className="text-left">
    <h2 className="text-3xl font-bold mb-8">Recent Work</h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="h-48 bg-gray-700"></div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Project One</h3>
          <p className="text-[#CCCCCC]">Description of the project</p>
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="h-48 bg-gray-700"></div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Project Two</h3>
          <p className="text-[#CCCCCC]">Description of the project</p>
        </div>
      </div>
    </div>
  </div>

  {/* Contact Section */}
  <div className="text-left pb-32">
    <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
    <p className="text-[#CCCCCC] mb-8 max-w-2xl">
      Ready to start your next project? Let's work together to create something amazing.
    </p>
    <div className="flex space-x-4">
      <button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg transition-colors">
        <Mail className="w-5 h-5" />
        <span>Contact Me</span>
      </button>
    </div>
  </div>
</div>

          
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

export default Portfolio;