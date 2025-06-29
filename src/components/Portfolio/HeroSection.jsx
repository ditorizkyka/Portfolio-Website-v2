import React from 'react';
import { Calendar } from 'lucide-react';
import ScrambleText from '../widget/buttonAnimation'; // Adjust the path as necessary
import profile from '../../assets/AI-Engineer.jpg'; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <div className="flex items-center space-x-8 mb-16">
      {/* Photo Container */}
      <div className="w-90 h-70 border border-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
        <img 
                src={profile}
                // alt="Profile"
                className="w-full h-full  object-cover"
              />
      </div>
      
      {/* Content */}
      <div className="flex justify-start text-left" style={{
                fontFamily: "'Space Grotesk', sans-serif",
                wordSpacing: '-1px',
              }}>
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
            I'm a final-semester Informatics student at Telkom University, focusing on AI to become an AI Engineer. Passionate about applying AI in mobile apps, I aim to build solutions that create real social impact.
          </p>

          <div className="flex space-x-4">
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
  );
};

export default HeroSection;