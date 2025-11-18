// components/Hero.js
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image - Fixed with proper loading */}
      <div className="absolute inset-0">
        <img 
          src="/hero.jpg" 
          alt="Jasper Goodnews Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Jasper Goodnews Farm
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          A Legacy of Innovation in North Carolina Agriculture
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/about" className="btn-secondary">
            Our Story
          </Link>
          <Link href="/operations" className="bg-white text-[#1a3f2d] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore Operations
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}