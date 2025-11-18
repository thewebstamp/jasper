// app/operations/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Operations() {
  const operations = [
    {
      title: "Seed Production Division",
      description: "Partnering with global leaders to produce premium seed varieties with uncompromising quality standards.",
      images: [
        "/visual1.jpg",
        "/visual2.jpg",
        "/visual3.jpg"
      ],
      features: [
        "Strict quality control protocols",
        "Advanced genetic varieties",
        "Isolated production fields",
        "Professional seed handling"
      ]
    },
    {
      title: "Commodity & Specialty Crops",
      description: "Diverse crop portfolio ensuring operational resilience and market flexibility.",
      images: [
        "/corn.jpg",
        "/potato.jpg",
        "/tobacco.jpg",
        "/tomato.jpg",
        "/cotton.jpg"
      ],
      crops: [
        "Corn & Soybeans",
        "Sweet Potatoes",
        "Tobacco",
        "Fresh Market Vegetables",
        "Cotton"
      ]
    },
    {
      title: "Livestock & Poultry Division",
      description: "Modern, humane animal agriculture operations with emphasis on animal welfare and quality.",
      images: [
        "/cattle.jpg",
        "/poultry.jpg",
        "/cornpour.jpg"
      ],
      features: [
        "Black Angus Cattle",
        "Modern Poultry Facilities",
        "Animal Welfare Certified",
        "Sustainable Feed Management"
      ]
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-[#1a3f2d] text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Operations</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Diverse agricultural enterprises spanning thousands of acres across North Carolina, 
              united by a commitment to excellence and innovation.
            </p>
          </div>
        </section>

        {/* Operations Sections */}
        {operations.map((operation, index) => (
          <section 
            key={index} 
            className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
          >
            <div className="max-w-7xl mx-auto">
              <div className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Images */}
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    {operation.images.map((image, imgIndex) => (
                      <div key={imgIndex} className={`${imgIndex === 0 ? 'col-span-2' : ''}`}>
                        <img 
                          src={image} 
                          alt={`${operation.title} ${imgIndex + 1}`}
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <h2 className="text-4xl font-bold text-[#1a3f2d] mb-6">{operation.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{operation.description}</p>
                  
                  {operation.features && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-[#8b4513] mb-3">Key Features</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {operation.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-[#8b4513] rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {operation.crops && (
                    <div>
                      <h3 className="text-xl font-semibold text-[#8b4513] mb-3">Crop Portfolio</h3>
                      <div className="flex flex-wrap gap-2">
                        {operation.crops.map((crop, cropIndex) => (
                          <span 
                            key={cropIndex}
                            className="bg-[#1a3f2d] text-white px-3 py-1 rounded-full text-sm"
                          >
                            {crop}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Additional Resources */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1a3f2d] mb-8">Ready to Learn More?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-cream p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-[#1a3f2d] mb-4">Technology & Innovation</h3>
                <p className="text-gray-700 mb-4">
                  Discover how we're using cutting-edge technology to drive efficiency and sustainability.
                </p>
                <a href="/technology" className="btn-primary inline-block">
                  Explore Technology
                </a>
              </div>
              <div className="bg-cream p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-[#1a3f2d] mb-4">Partnership Opportunities</h3>
                <p className="text-gray-700 mb-4">
                  Learn about our strategic partnerships and collaboration opportunities.
                </p>
                <a href="/partnerships" className="btn-primary inline-block">
                  View Partnerships
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}