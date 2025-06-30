import React, { useState, useEffect } from 'react';

const MyStats = () => {
  const [isMobile, setIsMobile] = useState(false);

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "3", label: "Organizations" },
    { number: "4", label: "Certifications Earned" },
    { number: "3", label: "Works Experienced" }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    // === MOBILE UI ===
    return (
      <div className="grid grid-cols-2 gap-6  mb-20">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div
              className="text-3xl font-bold mb-1 text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {stat.number}
            </div>
            <div
              className="text-sm text-[#CCCCCC]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    // === DESKTOP UI ===
    return (
      <div className="grid grid-cols-4 gap-8 mb-32">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div
              className="text-4xl font-bold mb-2 text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {stat.number}
            </div>
            <div
              className="text-base text-[#CCCCCC]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default MyStats;
