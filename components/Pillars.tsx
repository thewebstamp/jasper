// components/Pillars.js
export default function Pillars() {
  const pillars = [
    {
      title: "Sustainable Scale",
      description: "Operating at a scale that allows for environmental stewardship while meeting food production demands.",
      image: "/sustainable.jpg",
      icon: "/leaficon.jpg"
    },
    {
      title: "Precision Production",
      description: "Leveraging cutting-edge technology and data-driven decisions to optimize every acre.",
      image: "/precision.jpg",
      icon: "/datacharticon.jpg"
    },
    {
      title: "Strategic Partnership",
      description: "Building lasting relationships with industry leaders to drive agricultural innovation forward.",
      image: "/strategic.jpg",
      icon: "/handshakeicon.jpg"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-deep-green mb-4">Our Pillars of Excellence</h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Three core principles guide every decision we make and every acre we farm
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6 h-64">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-deep-green bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-deep-green rounded-lg flex items-center justify-center">
                  <img 
                    src={pillar.icon} 
                    alt="" 
                    className="w-6 h-6 object-contain filter invert"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-deep-green mb-2">{pillar.title}</h3>
                  <p className="text-gray-700">{pillar.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}