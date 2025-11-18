// app/contact/page.tsx
'use client';
import { useState, FormEvent, ChangeEvent } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Show success message (this is a dummy form - no actual submission)
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-green-800 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch to discuss partnership opportunities, learn more about our operations, or schedule a visit.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-8">Get In Touch</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-800 mb-1">Phone</h3>
                      <a href="tel:+18125812459" className="text-gray-700 hover:text-green-800 transition-colors">
                        +1 (812) 581-2459
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-800 mb-1">Email</h3>
                      <a href="mailto:jaspergoodnewsfarm@gmail.com" className="text-gray-700 hover:text-green-800 transition-colors">
                        jaspergoodnewsfarm@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-800 mb-1">Location</h3>
                      <p className="text-gray-700">North Carolina</p>
                    </div>
                  </div>
                </div>

                {/* Operation Areas */}
                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Our Operation Areas</h3>
                  <p className="text-gray-700 mb-4">
                    We operate across multiple regions in North Carolina, with parcels strategically located 
                    for optimal growing conditions and logistical efficiency.
                  </p>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-amber-800 rounded-full mr-2"></span>
                    <span>25,000+ acres under management</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-amber-800 rounded-full mr-2"></span>
                    <span>Multiple growing regions across the state</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-amber-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-green-800 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent"
                        placeholder="Your company (optional)"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="information">General Information</option>
                        <option value="visit">Schedule a Visit</option>
                        <option value="careers">Career Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-4 text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-green-800 text-white">
          <div className="max-w-7xl mx-auto px-4 py-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Visit Our Operations</h2>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              While we maintain operations across North Carolina, we welcome serious inquiries 
              and partnership discussions at our main office.
            </p>
            <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Schedule a Visit</h3>
              <p className="text-gray-700 mb-6">
                Interested in seeing our operations firsthand? Contact us to schedule a tour 
                and learn more about our farming practices and technology.
              </p>
              <a href="mailto:jaspergoodnewsfarm@gmail.com" className="btn-primary inline-block">
                Schedule a Tour
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}