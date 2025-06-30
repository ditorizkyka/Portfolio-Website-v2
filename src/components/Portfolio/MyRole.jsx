import React, { useState, useEffect } from "react";
import aiEng from "../../assets/ai-eng.png"; // Adjust path as necessary

const MyRole = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M16 18l6-6-6-6M8 6l-6 6 6 6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Mobile Developer",
      description:
        "Building responsive, high-performance mobile apps that deliver seamless user experiences across platforms.",
    },
    {
      icon: <img src={aiEng} alt="AI Engineer Icon" className="w-8 h-8" />,
      title: "AI Engineer",
      description:
        "Designing and integrating AI systems to solve complex problems through data-driven intelligent solutions.",
    },
  ];

  return (
    <div className="bg-black text-white text-left" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-6xl mx-auto mb-15">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <h1 className="text-lg font-bold">My Skills/Role</h1>
          </div>
          <p className="text-[#999999] text-[12px] md:text-xl leading-relaxed max-w-4xl">
            Contributions across various roles—from developer to mentor—driving innovation and collaboration in every project.
          </p>
        </div>

        {/* Conditional Layout */}
        {isMobile ? (
          // === MOBILE UI ===
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-xl p-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#999999] p-2 rounded-lg">{service.icon}</div>
                  <h3 className="text-base font-semibold">{service.title}</h3>
                </div>
                <p className="text-[#999999] text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        ) : (
          // === DESKTOP UI ===
          <div className="grid grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-2xl p-8 hover:bg-[#0A0A0B]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#999999] p-3 rounded-xl">{service.icon}</div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-[#999999] leading-relaxed text-base">{service.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRole;
