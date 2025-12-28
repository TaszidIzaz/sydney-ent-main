
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/618c952f-27f2-475f-8126-5e56e09ede80.png" 
              alt="Sydney Northwest ENT" 
              className="h-12"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-ent-500 transition">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-ent-500 transition">
                About <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 pt-2 w-48 hidden group-hover:block">
                <div className="bg-white shadow-lg rounded-md py-2 animate-fade-in">
                  <Link to="/team" className="block px-4 py-2 hover:bg-gray-100">
                    Our Team
                  </Link>
                  <Link to="/history" className="block px-4 py-2 hover:bg-gray-100">
                    Our History
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-ent-500 transition">
                Services <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 pt-2 w-56 hidden group-hover:block">
                <div className="bg-white shadow-lg rounded-md py-2 animate-fade-in">
                  <Link to="/services/ear" className="block px-4 py-2 hover:bg-gray-100">
                    Ear Treatments
                  </Link>
                  <Link to="/services/nose" className="block px-4 py-2 hover:bg-gray-100">
                    Nose & Sinus Treatments
                  </Link>
                  <Link to="/services/pediatric" className="block px-4 py-2 hover:bg-gray-100">
                    Paediatric ENT
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/contact" className="text-gray-800 hover:text-ent-500 transition">
              Contact
            </Link>
            <Link to="/fees" className="text-gray-800 hover:text-ent-500 transition">
              Fees
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+61278136672" className="flex items-center text-ent-700 hover:text-ent-500 transition">
              <Phone className="h-4 w-4 mr-2" />
              <span>(02) 7813 6672</span>
            </a>
            <Button 
              className="bg-teal-600 hover:bg-teal-700"
              asChild
            >
              <a href="https://healthengine.com.au/webplugin/?id=100246&source=webplugin&trigger=button" target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-3 space-y-3 bg-white border-t">
          <Link 
            to="/" 
            className="block text-gray-800 hover:text-ent-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <details className="group">
            <summary className="flex cursor-pointer list-none text-gray-800 hover:text-ent-500">
              About
              <ChevronDown className="h-5 w-5 ml-1 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="pl-4 mt-2 space-y-2">
              <Link 
                to="/team" 
                className="block text-gray-700 hover:text-ent-500"
                onClick={() => setIsOpen(false)}
              >
                Our Team
              </Link>
              <Link 
                to="/history" 
                className="block text-gray-700 hover:text-ent-500"
                onClick={() => setIsOpen(false)}
              >
                Our History
              </Link>
            </div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none text-gray-800 hover:text-ent-500">
              Services
              <ChevronDown className="h-5 w-5 ml-1 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="pl-4 mt-2 space-y-2">
              <Link 
                to="/services/ear" 
                className="block text-gray-700 hover:text-ent-500"
                onClick={() => setIsOpen(false)}
              >
                Ear Treatments
              </Link>
              <Link 
                to="/services/nose" 
                className="block text-gray-700 hover:text-ent-500"
                onClick={() => setIsOpen(false)}
              >
                Nose & Sinus Treatments
              </Link>
              <Link 
                to="/services/pediatric" 
                className="block text-gray-700 hover:text-ent-500"
                onClick={() => setIsOpen(false)}
              >
                Paediatric ENT
              </Link>
            </div>
          </details>
          <Link 
            to="/contact" 
            className="block text-gray-800 hover:text-ent-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/fees" 
            className="block text-gray-800 hover:text-ent-500"
            onClick={() => setIsOpen(false)}
          >
            Fees
          </Link>
          <a 
            href="tel:+61278136672" 
            className="flex items-center text-ent-700"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="h-4 w-4 mr-2" />
            <span>(02) 7813 6672</span>
          </a>
          <Button 
            className="w-full bg-teal-600 hover:bg-teal-700"
            asChild
            onClick={() => setIsOpen(false)}
          >
            <a href="https://healthengine.com.au/webplugin/?id=100246&source=webplugin&trigger=button" target="_blank" rel="noopener noreferrer">
              Book Appointment
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
