const MyRole = () => {
  const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M7 4h10M7 20h10M5 8h14M5 16h14M9 12h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Mobile Developer",
    description: "Building responsive, high-performance mobile apps that deliver seamless user experiences across platforms."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path d="M8 15s1.5-2 4-2 4 2 4 2" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 9h.01M15 9h.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "AI Engineer",
    description: "Designing and integrating AI systems to solve complex problems through data-driven intelligent solutions."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M3 12l2-2m0 0l7-7 7 7m-9 2v7m4-7v7m4 0h4v4H4v-4h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Leadership Skill",
    description: "Inspiring collaboration, guiding teams with vision, and driving success through clear direction and initiative."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Time Management",
    description: "Efficiently prioritizing tasks and managing schedules to meet goals and maintain productivity under pressure."
  }
];


  return (
    <div className="bg-black text-white text-left "  style={{fontFamily: "'Space Grotesk', sans-serif"}}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <h1 className="text-4xl font-bold">My Role</h1>
          </div>
          <p className="text-[#999999] text-lg max-w-4xl leading-relaxed">
Contributions across various roles—from developer to mentor—driving innovation and collaboration in every project.          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-2xl p-8 hover:bg-[#0A0A0B]/50 transition-all duration-300 "
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#999999] p-3 rounded-xl text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-[#999999] leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyRole;