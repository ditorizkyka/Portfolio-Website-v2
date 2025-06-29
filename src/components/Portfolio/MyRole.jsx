import aiEng from "../../assets/ai-eng.png"; // Adjust the path as necessary
const MyRole = () => {
  const services = [
  {
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Kode symbol untuk Mobile Developer */}
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  title: "Mobile Developer",
  description: "Building responsive, high-performance mobile apps that deliver seamless user experiences across platforms."
},
{
  icon: (
    <img src={aiEng} alt="AI Engineer Icon" className="w-8 h-8" />
  ),
  title: "AI Engineer",
  description: "Designing and integrating AI systems to solve complex problems through data-driven intelligent solutions."
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
            <h1 className="text-4xl font-bold">My Skills/Role</h1>
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