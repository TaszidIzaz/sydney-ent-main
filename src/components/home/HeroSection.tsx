
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat transform scale-105 transition-transform duration-10000 animate-[zoom_15s_ease-in-out_infinite_alternate]" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/a3f206f3-4139-4463-9c1f-13865b260a4b.png')",
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Expert Ear, Nose & Throat Care in Sydney's Northwest
          </h1>
          <p 
            className={`text-xl md:text-2xl text-gray-200 mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Delivering compassionate, comprehensive care tailored to you and your family.
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button 
              className="text-base bg-teal-600 hover:bg-teal-700 shadow-lg px-6 py-6 rounded-md" 
              size="lg"
              asChild
            >
              <a href="https://healthengine.com.au/webplugin/?id=100246&source=webplugin&trigger=button" target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
            <Button
              variant="outline" 
              size="lg"
              className="text-base bg-white hover:bg-teal-600 hover:text-white border-white text-gray-900 px-6 py-6 rounded-md transition-colors duration-300"
            >
              <Link to="/team" className="flex items-center">
                Meet Our Team <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="border-2 border-white rounded-full p-2">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
