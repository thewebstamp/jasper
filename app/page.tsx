// app/page.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pillars />
        
        {/* Featured Operations Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-deep-green mb-4">Our Operations</h2>
              <p className="text-xl text-warm-gray max-w-3xl mx-auto">
                Diverse agricultural enterprises working in harmony across North Carolina
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Seed Production */}
              <div className="bg-cream rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/visual1.jpg" 
                  alt="Seed Production" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-deep-green mb-3">Seed Production</h3>
                  <p className="text-gray-700 mb-4">
                    Partnering with industry leaders to produce premium seed varieties with strict quality control.
                  </p>
                  <Link href="/operations" className="btn-primary inline-block">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Commodity Crops */}
              <div className="bg-cream rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/corn.jpg" 
                  alt="Commodity Crops" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-deep-green mb-3">Commodity & Specialty Crops</h3>
                  <p className="text-gray-700 mb-4">
                    Growing corn, soybeans, sweet potatoes, tobacco, cotton, and fresh market vegetables.
                  </p>
                  <Link href="/operations" className="btn-primary inline-block">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Livestock */}
              <div className="bg-cream rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/cattle.jpg" 
                  alt="Livestock" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-deep-green mb-3">Livestock & Poultry</h3>
                  <p className="text-gray-700 mb-4">
                    Modern, humane livestock operations producing quality beef and poultry for our communities.
                  </p>
                  <Link href="/operations" className="btn-primary inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-[#1a3f2d] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Join us in our mission to advance sustainable agriculture through innovation and partnership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Get In Touch
              </Link>
              <Link href="/partnerships" className="bg-white text-[#1a3f2d] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Our Partners
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}