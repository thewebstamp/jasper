// app/about/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  const timeline = [
    {
      year: "1999",
      title: "The Beginning",
      description: "Jasper Goodnews establishes the farm with 500 acres of traditional row crops in North Carolina.",
      image: "/about.jpg"
    },
    {
      year: "2005",
      title: "Expansion Era",
      description: "Strategic land acquisitions and adoption of precision agriculture technologies.",
      image: "/truck.jpg"
    },
    {
      year: "2015",
      title: "Diversification",
      description: "Added specialty crops and livestock operations, establishing multiple revenue streams.",
      image: "/work.jpg"
    },
    {
      year: "2024",
      title: "Modern Leadership",
      description: "Now operating 25,000+ acres with cutting-edge technology and strategic partnerships.",
      image: "/cornpour.jpg"
    }
  ];

  const team = [
    {
      name: "Jasper Goodnews",
      role: "Owner & CEO",
      description: "With over 20 years of agricultural experience, Jasper leads the strategic vision and oversees all operations.",
      image: "/jasper.jpg"
    },
    {
      name: "Operations Team",
      role: "Field Management",
      description: "50+ skilled professionals managing day-to-day operations across all divisions.",
      image: "/about.jpg"
    },
    {
      name: "Technology Division",
      role: "Innovation & Data",
      description: "Experts in precision agriculture, data analysis, and sustainable farming practices.",
      image: "/precision.jpg"
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-[#1a3f2d] text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Three decades of agricultural excellence, innovation, and stewardship in North Carolina.
            </p>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1a3f2d] mb-4">Our Leadership</h2>
              <p className="text-xl text-warm-gray max-w-3xl mx-auto">
                Guided by experience and driven by innovation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6 mx-auto w-64 h-64">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3f2d] mb-2">{member.name}</h3>
                  <p className="text-rich-brown font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1a3f2d] mb-4">Our Journey</h2>
              <p className="text-xl text-warm-gray max-w-3xl mx-auto">
                From humble beginnings to agricultural innovation leader
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#1a3f2d] h-full hidden lg:block"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative mb-12 lg:mb-20 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'} mb-6 lg:mb-0`}>
                      <div className="bg-white p-8 rounded-lg shadow-lg">
                        <span className="text-rich-brown font-bold text-lg">{item.year}</span>
                        <h3 className="text-2xl font-bold text-deep-green mb-3">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="lg:w-1/2">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-6 h-6 bg-rich-brown rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1a3f2d] mb-4">Our Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1a3f2d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/leaficon.jpg" alt="Sustainability" className="w-8 h-8 filter invert" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a3f2d] mb-2">Sustainability</h3>
                <p className="text-gray-700">Protecting our land and resources for future generations</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#1a3f2d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/datacharticon.jpg" alt="Innovation" className="w-8 h-8 filter invert" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a3f2d] mb-2">Innovation</h3>
                <p className="text-gray-700">Embracing technology to drive efficiency and quality</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#1a3f2d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/handshakeicon.jpg" alt="Partnership" className="w-8 h-8 filter invert" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a3f2d] mb-2">Partnership</h3>
                <p className="text-gray-700">Building lasting relationships with industry leaders</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#1a3f2d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/grainbinicon.jpg" alt="Quality" className="w-8 h-8 filter invert" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a3f2d] mb-2">Quality</h3>
                <p className="text-gray-700">Uncompromising standards in everything we produce</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}