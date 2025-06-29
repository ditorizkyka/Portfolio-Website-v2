import React from 'react';

const MyStats = () => {
  const stats = [
    {
      number: "15+",
      label: "Projects Completed"
    },
    {
      number: "3",
      label: "Organizations Involved"
    },
    {
      number: "4",
      label: "Certifications Earned"
    },
    {
      number: "3",
      label: "Works Experienced"
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-8 mb-32">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div 
            className="text-4xl font-bold mb-2" 
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {stat.number}
          </div>
          <div  
            className="text-[#CCCCCC]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyStats;