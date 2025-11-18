// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Jasper Goodnews Farm</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              A legacy of innovation in North Carolina agriculture. Combining sustainable practices 
              with cutting-edge technology to feed communities and protect our land.
            </p>
            <div className="flex space-x-4">
              <span className="text-gray-300">North Carolina</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/operations" className="text-gray-300 hover:text-white transition-colors">Operations</Link></li>
              <li><Link href="/technology" className="text-gray-300 hover:text-white transition-colors">Technology</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="tel:+18125812459" className="hover:text-white transition-colors">
                  +1 (812) 581-2459
                </a>
              </li>
              <li>
                <a href="mailto:jaspergoodnewsfarm@gmail.com" className="hover:text-white transition-colors">
                  jaspergoodnewsfarm@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Jasper Goodnews Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}