import React from 'react';
import { ArrowRight, PenTool } from 'lucide-react';

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
    <div className="pb-20 bg-black text-white text-left" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-6xl mx-auto">
        
        <div>
            <div className="flex items-center space-x-3 mb-4">
            <PenTool className="w-7 h-7" />
            <h2
                className="text-3xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
                My Stacks
            </h2>
            </div>

            {/* Geser paragraf sejajar ke ikon */}
            <div className="">
            <p 
                className="text-[#999999] mb-12 leading-relaxed text-xl text-left"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
                Navigating diverse environments with adaptability and expertise for holistic solutions.
            </p>
            </div>
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
                
                <div className="flex items-center justify-center w-12 h-12 rounded-full  transition-all duration-300">
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

export default MyStacks;