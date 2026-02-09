import React from 'react';

interface Stat {
  number: string;
  label: string;
}



const MyStats: React.FC<{ projectsCount: number, organizationCount: number, certificationCount: number, worksCount: number }> = ({ projectsCount, organizationCount, certificationCount, worksCount }) => {

  const statsData: Stat[] = [
  { number: `${projectsCount-2} + `, label: "Projects Completed" },
  { number: `${organizationCount}`, label: "Organizations" },
  { number: `${certificationCount}`, label: "Certifications Earned" },
  { number: `${worksCount}`, label: "Works Experienced" }
];
  return (
    <section className="bg-black  md:py-0">
      <div className="max-w-6xl  mx-auto">
        {/* Mobile: grid-cols-2 (2 baris)
          Desktop: md:grid-cols-4 (1 baris)
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8  md:mb-32">
          {statsData.map((stat, index) => (
            <StatItem 
              key={index} 
              number={stat.number} 
              label={stat.label} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem = ({ number, label }: StatItemProps) => (
  <div className="text-center group">
    <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-white font-space-grotesk group-hover:text-[#6DD33D] transition-colors duration-300">
      {number}
    </div>
    <div className="text-sm md:text-base text-[#CCCCCC] font-space-grotesk">
      {label}
    </div>
  </div>
);

export default MyStats;