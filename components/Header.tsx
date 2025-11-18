// components/Header.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-2xl font-bold text-green-800">
              Jasper Goodnews Farm
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-800 px-3 py-2 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-800 px-3 py-2 font-medium transition-colors">
                About
              </Link>
              <Link href="/operations" className="text-gray-700 hover:text-green-800 px-3 py-2 font-medium transition-colors">
                Operations
              </Link>
              <Link href="/technology" className="text-gray-700 hover:text-green-800 px-3 py-2 font-medium transition-colors">
                Technology
              </Link>
              <Link href="/partnerships" className="text-gray-700 hover:text-green-800 px-3 py-2 font-medium transition-colors">
                Partnerships
              </Link>
              <Link href="/contact" className="btn-primary">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="text-gray-700 hover:text-green-800 block px-3 py-2 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-800 block px-3 py-2 font-medium">
                About
              </Link>
              <Link href="/operations" className="text-gray-700 hover:text-green-800 block px-3 py-2 font-medium">
                Operations
              </Link>
              <Link href="/technology" className="text-gray-700 hover:text-green-800 block px-3 py-2 font-medium">
                Technology
              </Link>
              <Link href="/partnerships" className="text-gray-700 hover:text-green-800 block px-3 py-2 font-medium">
                Partnerships
              </Link>
              <Link href="/contact" className="btn-primary block text-center mx-3 mt-4">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}