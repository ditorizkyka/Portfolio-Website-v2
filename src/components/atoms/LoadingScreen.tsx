// components/LoadingScreen.tsx
import React from 'react';

interface LoadingScreenProps {
  progress: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress }) => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6DD33D]/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
      
      <div className="relative z-10 text-center space-y-8">
        {/* Logo or Name */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            <span className="inline-block animate-fade-in">M</span>
            <span className="inline-block animate-fade-in delay-100">u</span>
            <span className="inline-block animate-fade-in delay-200">h</span>
            <span className="inline-block animate-fade-in delay-300">a</span>
            <span className="inline-block animate-fade-in delay-400">m</span>
            <span className="inline-block animate-fade-in delay-500">m</span>
            <span className="inline-block animate-fade-in delay-600">a</span>
            <span className="inline-block animate-fade-in delay-700">d</span>
          </h1>
          <p className="text-[#6DD33D] text-sm animate-pulse">Loading Portfolio...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-96 mx-auto">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-linear-to-r from-[#6DD33D] to-blue-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-gray-500 text-xs mt-2 font-mono">{Math.round(progress)}%</p>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-[#6DD33D] rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-[#6DD33D] rounded-full animate-bounce delay-100" />
          <div className="w-2 h-2 bg-[#6DD33D] rounded-full animate-bounce delay-200" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;