// app/technology/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Technology() {
  const technologies = [
    {
      title: "Precision Agriculture",
      description: "Using GPS guidance, variable rate technology, and automated systems to optimize inputs and maximize yields.",
      features: [
        "Auto-steer GPS systems",
        "Variable rate seeding & fertilization",
        "Yield monitoring & mapping",
        "Automated section control"
      ],
      images: ["/precision.jpg", "/datacharticon.jpg"]
    },
    {
      title: "Data Analytics",
      description: "Leveraging farm data to make informed decisions about planting, inputs, and management practices.",
      features: [
        "Real-time field monitoring",
        "Historical yield analysis",
        "Soil health tracking",
        "Predictive analytics"
      ],
      images: ["/visual2.jpg", "/work.jpg"]
    },
    {
      title: "Sustainable Practices",
      description: "Implementing environmentally responsible farming methods that protect our natural resources.",
      features: [
        "Cover cropping systems",
        "Precision irrigation",
        "Integrated pest management",
        "Soil conservation techniques"
      ],
      images: ["/sustainable.jpg", "/waterdropleticon.jpg"]
    }
  ];

  const equipment = [
    {
      category: "Planting & Seeding",
      items: ["Precision planters", "Auto-steer systems", "Variable rate controllers"],
      icon: "/tractoricon.jpg"
    },
    {
      category: "Harvesting",
      items: ["Combine harvesters with yield monitors", "Grain carts with scales", "Cotton pickers"],
      icon: "/grainbinicon.jpg"
    },
    {
      category: "Application",
      items: ["Self-propelled sprayers", "Variable rate spreaders", "Drone technology"],
      icon: "/waterdropleticon.jpg"
    },
    {
      category: "Data & Monitoring",
      items: ["Soil sensors", "Weather stations", "Satellite imagery", "Drone scouting"],
      icon: "/datacharticon.jpg"
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-[#1a3f2d] text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Technology & Innovation</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Harnessing cutting-edge technology to drive efficiency, sustainability, and productivity.
            </p>
          </div>
        </section>

        {/* Technology Sections */}
        {technologies.map((tech, index) => (
          <section 
            key={index} 
            className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
          >
            <div className="max-w-7xl mx-auto">
              <div className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Images */}
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    {tech.images.map((image, imgIndex) => (
                      <div key={imgIndex} className={`${imgIndex === 0 ? 'col-span-2' : ''}`}>
                        <img 
                          src={image} 
                          alt={`${tech.title} ${imgIndex + 1}`}
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <h2 className="text-4xl font-bold text-[#1a3f2d] mb-6">{tech.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{tech.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#8b4513] mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 gap-3">
                      {tech.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-[#8b4513] rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Equipment Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1a3f2d] mb-4">Our Equipment Fleet</h2>
              <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
                State-of-the-art machinery supporting our precision agriculture operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {equipment.map((category, index) => (
                <div key={index} className="bg-[#f8f4e9] rounded-lg p-6 shadow-lg">
                  <div className="w-12 h-12 bg-[#1a3f2d] rounded-lg flex items-center justify-center mb-4">
                    <img 
                      src={category.icon} 
                      alt={category.category}
                      className="w-6 h-6 object-contain filter invert"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a3f2d] mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#8b4513] rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section-padding bg-[#1a3f2d] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Technology in Action</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Measurable results from our technology investments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#87ceeb] mb-2">15-25%</div>
                <p className="text-gray-200">Increase in input efficiency</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#87ceeb] mb-2">10-20%</div>
                <p className="text-gray-200">Yield improvement through precision practices</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#87ceeb] mb-2">30%</div>
                <p className="text-gray-200">Reduction in environmental impact</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}