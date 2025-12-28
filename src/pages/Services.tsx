
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/home/ServicesSection';

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="py-12 bg-gradient-to-b from-ent-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">Comprehensive ear, nose, and throat care for patients of all ages.</p>
          </div>
        </section>
        
        <ServicesSection />
        
        {/* Additional content can be added here */}
      </main>
      <Footer />
    </div>
  );
};

export default Services;
