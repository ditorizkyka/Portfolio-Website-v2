import React from 'react';

const MyStats = () => {
  const stats = [
    {
      number: "52+",
      label: "Happy Clients"
    },
    {
      number: "6+",
      label: "Years of Experience"
    },
    {
      number: "40+",
      label: "Completed Tasks"
    },
    {
      number: "10+",
      label: "Awards Received"
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