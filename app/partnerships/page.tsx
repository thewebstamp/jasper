// app/partnerships/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Partnerships() {
  const partners = [
    {
      name: "Corteva Agriscience",
      description: "Global leader in agricultural science, partnering with us for premium seed production and advanced crop protection solutions.",
      logo: "/corteva.jpg",
      collaboration: "Seed production contracts, agronomy support, and technology sharing"
    },
    {
      name: "Syngenta",
      description: "Innovative agricultural company providing cutting-edge crop protection and seed technologies.",
      logo: "/syngenta.jpg",
      collaboration: "Crop protection solutions, seed technologies, and sustainable agriculture initiatives"
    }
  ];

  const partnershipBenefits = [
    {
      title: "Access to Innovation",
      description: "Early access to new seed varieties, technologies, and farming practices",
      icon: "/datacharticon.jpg"
    },
    {
      title: "Technical Support",
      description: "Dedicated agronomy teams and technical experts supporting our operations",
      icon: "/waterdropleticon.jpg"
    },
    {
      title: "Market Stability",
      description: "Long-term contracts providing predictable revenue and business planning",
      icon: "/grainbinicon.jpg"
    },
    {
      title: "Knowledge Sharing",
      description: "Regular training, field days, and information exchange with industry leaders",
      icon: "/handshakeicon.jpg"
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-[#1a3f2d] text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Strategic Partnerships</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Collaborating with industry leaders to drive agricultural innovation and excellence.
            </p>
          </div>
        </section>

        {/* Current Partners */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1a3f2d] mb-4">Our Valued Partners</h2>
              <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
                Building lasting relationships with global agricultural leaders
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {partners.map((partner, index) => (
                <div key={index} className="bg-[#f8f4e9] rounded-lg p-8 shadow-lg">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="shrink-0">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-32 h-32 object-contain bg-white p-4 rounded-lg shadow-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1a3f2d] mb-3">{partner.name}</h3>
                      <p className="text-gray-700 mb-4">{partner.description}</p>
                      <div>
                        <h4 className="font-semibold text-rich-brown mb-2">Collaboration Areas:</h4>
                        <p className="text-gray-700">{partner.collaboration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Partnership Benefits */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#1a3f2d] mb-4">Partnership Benefits</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#1a3f2d] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img 
                      src={benefit.icon} 
                      alt={benefit.title}
                      className="w-8 h-8 object-contain filter invert"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-[#1a3f2d] mb-3">{benefit.title}</h4>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="section-padding bg-[#f8f4e9]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1a3f2d] mb-6">Partnership Opportunities</h2>
            <p className="text-xl text-gray-700 mb-8">
              We're always interested in exploring new partnerships with companies and organizations 
              that share our commitment to agricultural innovation and sustainability.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-[#1a3f2d] mb-4">Why Partner With Us?</h3>
              <ul className="text-left text-gray-700 space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#8b4513] rounded-full mr-3"></span>
                  <span>25,000+ acres of prime North Carolina farmland</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#8b4513] rounded-full mr-3"></span>
                  <span>Proven track record of successful partnerships</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#8b4513] rounded-full mr-3"></span>
                  <span>Experienced management team with 40+ years in agriculture</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#8b4513] rounded-full mr-3"></span>
                  <span>State-of-the-art technology and infrastructure</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#8b4513] rounded-full mr-3"></span>
                  <span>Commitment to sustainable and innovative practices</span>
                </li>
              </ul>
              <a href="/contact" className="btn-primary inline-block">
                Discuss Partnership
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}