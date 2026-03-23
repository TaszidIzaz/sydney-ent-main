
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Office information */}
          <div className="animate-fade-in [animation-delay:200ms] opacity-0">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/89a1f984-c717-4060-a4b0-1efe15f3e930.png" 
                alt="Sydney Northwest ENT" 
                className="h-12 mb-4"
              />
              <p className="text-gray-300 mb-6">Expert Ear, Nose & Throat care provided with compassion and precision.</p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-ent-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-semibold">Winston Hills Practice:</p>
                  <p className="text-gray-300">176 Windsor Rd,</p>
                  <p className="text-gray-300">Winston Hills NSW</p>
                  <p className="text-gray-400 text-sm italic">(Under Construction)</p>
                </div>
              </li>
              {/* <li className="flex items-start">
                <MapPin className="h-5 w-5 text-ent-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-semibold">Macquarie Park Consulting Rooms:</p>
                  <p className="text-gray-300">Level 1, 11 Khartoum Rd,</p>
                  <p className="text-gray-300">Macquarie Park NSW 2113</p>
                </div>
              </li> */}
            </ul>
          </div>

          {/* Column 2: Contact info & Opening hours */}
          <div className="animate-fade-in [animation-delay:300ms] opacity-0">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-ent-400 mr-3" />
                <p className="text-gray-300">(02) 7813 6672</p>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-ent-400 mr-3" />
                <p className="text-gray-300">0434 204 999</p>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-ent-400 mr-3" />
                <div>
                  <p className="text-gray-300">info@hasanent.com</p>
                  <p className="text-gray-300">admin@sydneynorthwestent.com</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-ent-400 mr-3" />
                <p className="text-gray-300">Fax: (02) 9184 9686</p>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-ent-400 mr-3" />
                <p className="text-gray-300">HealthLink EDI: hasanent</p>
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Friday:</span>
                <span className="text-gray-300">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Saturday - Sunday:</span>
                <span className="text-gray-300">Closed</span>
              </li>
            </ul>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Emergency?</h4>
              <p className="text-gray-300">For after-hours emergencies, please call our emergency line or visit your nearest hospital.</p>
              <p className="text-ent-400 font-bold mt-2">(02) 7813 6672</p>
            </div>
          </div>

          {/* Column 3: Quick links & Connect with us */}
          <div className="animate-fade-in [animation-delay:400ms] opacity-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 mb-8">
              <li>
                <Link to="/" className="text-gray-300 hover:text-ent-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-ent-400 transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-gray-300 hover:text-ent-400 transition">
                  Our History
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-ent-400 transition">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-ent-400 transition">
                  Contact Us
                </Link>
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-ent-400 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-ent-400 transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-ent-400 transition">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sydney Northwest ENT. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-ent-400 text-sm transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-ent-400 text-sm transition">
                Terms of Service
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
