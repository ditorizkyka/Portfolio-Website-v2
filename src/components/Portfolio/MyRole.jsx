const MyRole = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
          <line x1="9" y1="9" x2="15" y2="9" strokeWidth="2"/>
          <line x1="9" y1="15" x2="15" y2="15" strokeWidth="2"/>
        </svg>
      ),
      title: "Web Design",
      description: "Crafting visually captivating and user-friendly websites for online success."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
          <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2"/>
        </svg>
      ),
      title: "Web Development",
      description: "Bringing ideas to life with robust and scalable web solutions."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" strokeWidth="2"/>
          <path d="M12 1v6m0 6v6" strokeWidth="2"/>
          <path d="M9 12H1m8 0h14" strokeWidth="2"/>
        </svg>
      ),
      title: "Graphic Design",
      description: "Creating visually stunning designs that captivate and engage audiences."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2"/>
        </svg>
      ),
      title: "SEO Optimization",
      description: "Elevating online visibility and driving organic traffic through strategies."
    }
  ];

  return (
    <div className="bg-black text-white "  style={{fontFamily: "'Space Grotesk', sans-serif"}}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <h1 className="text-4xl font-bold">My Role</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
            Formulating comprehensive strategies to meet your design goals and exceed expectations.
          </p>
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