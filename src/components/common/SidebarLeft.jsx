import React from 'react';
import { Shapes, Zap, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import profile from '../../assets/profile.jpg'; // Adjust the path as necessry

const SidebarLeft = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
  <div className="hidden md:flex fixed left-0 top-0 h-full w-16 pl-20 pr-15 bg-black border-r border-[#1f1f1f] flex-col items-center z-30 py-6">
      {/* Avatar Section */}
      <Avatar />

      {/* Icon Section */}
      <div className="flex flex-col items-center justify-center flex-grow space-y-6">
        {/* Home */}
        <Link to="/">
          <div
            className={`w-16 h-16 flex items-center justify-center rounded-lg transition-colors cursor-pointer group ${
              isActive('/') ? 'bg-[#0A0A0B]' : 'hover:bg-[#0A0A0B]'
            }`}
          >
            <User
              className={`w-8 h-8 ${
                isActive('/') ? 'text-white' : 'text-[#CCCCCC] group-hover:text-white'
              } transition-colors`}
            />
          </div>
        </Link>

        {/* Projects */}
        <Link to="/projects">
          <div
            className={`w-16 h-16 flex items-center justify-center rounded-lg transition-colors cursor-pointer group ${
              isActive('/projects') ? 'bg-[#0A0A0B]' : 'hover:bg-[#0A0A0B]'
            }`}
          >
            <Shapes
              className={`w-8 h-8 ${
                isActive('/projects') ? 'text-white' : 'text-[#CCCCCC] group-hover:text-white'
              } transition-colors`}
            />
          </div>
        </Link>

        {/* Zap (optional route placeholder) */}
        <Link to="/skills">
          <div
            className={`w-16 h-16 flex items-center justify-center rounded-lg transition-colors cursor-pointer group ${
              isActive('/contact') ? 'bg-[#0A0A0B]' : 'hover:bg-[#0A0A0B]'
            }`}
          >
            <Zap
              className={`w-8 h-8 ${
                isActive('/contact') ? 'text-white' : 'text-[#CCCCCC] group-hover:text-white'
              } transition-colors`}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

const Avatar = () => {
  return (
    <div className="  bg-black">
      <div className="relative">
        {/* Outer circle - dark background */}
        <div className="w-15 h-15 rounded-full  bg-[#1f1f1f] flex items-center justify-center shadow-2xl">
          {/* Inner circle - white background for image */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
            {/* Profile image placeholder */}
            <div className="w-10 h-10 rounded-full  flex items-center justify-center">
              {/* SVG Person Icon */}
              <img 
                src={profile}
                // alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
