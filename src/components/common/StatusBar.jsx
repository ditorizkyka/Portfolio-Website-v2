import React from 'react';

const StatusBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-black border-b border-[#1f1f1f] flex items-center justify-between px-40 py-10 z-20">
      {/* STATUS AVAILABILITY */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-[#141415] px-6 py-3 rounded-full border  border-[#1f1f1f]" >
          <div className="w-2 h-2 bg-[#6DD33D] rounded-full"></div>
          <span
            className="text-sm text-[#CCCCCC]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Available For Work
          </span>
        </div>
      </div>

      {/* STATUS TIME */}
      <div 
        className="text-sm text-[#CCCCCC]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Local Time ( IST )
        <span className="bg-[#141415] px-6 py-3 rounded-full ml-4 border border-[#1f1f1f]">23:03:27</span>
      </div>
    </div>
  );
};

export default StatusBar;