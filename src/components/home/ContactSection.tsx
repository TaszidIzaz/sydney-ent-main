
import React from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Contact & Booking
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Reach out to us for appointments, questions, or to learn more about our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="p-8 rounded-xl bg-gradient-to-br from-ent-50 to-ent-100 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-md mr-4">
                    <Phone className="h-5 w-5 text-ent-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-700">(02) 7813 6672</p>
                    <p className="text-gray-700">0434 204 999</p>
                    <p className="text-gray-700">Fax: (02) 9184 9686</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-md mr-4">
                    <Mail className="h-5 w-5 text-ent-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email & HealthLink</h4>
                    <p className="text-gray-700">info@hasanent.com</p>
                    <p className="text-gray-700">admin@sydneynorthwestent.com</p>
                    <p className="text-gray-700">HealthLink EDI: hasanent</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-md mr-4">
                    <MapPin className="h-5 w-5 text-ent-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Locations</h4>
                    <div className="mb-3">
                      <p className="text-gray-700 font-semibold">Winston Hills Practice:</p>
                      <p className="text-gray-700">176 Windsor Rd,</p>
                      <p className="text-gray-700">Winston Hills NSW</p>
                      <p className="text-amber-600 font-medium text-sm">(Under Construction)</p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-semibold">Macquarie Park Consulting Rooms:</p>
                      <p className="text-gray-700">Level 1, 11 Khartoum Rd,</p>
                      <p className="text-gray-700">Macquarie Park NSW 2113</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700"
                    asChild
                  >
                    <a href="https://healthengine.com.au/webplugin/?id=100246&source=webplugin&trigger=button" target="_blank" rel="noopener noreferrer">
                      <Calendar className="h-4 w-4" />
                      Book an Appointment
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className={`transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="p-8 rounded-xl border border-gray-200 shadow-sm bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      placeholder="(02) 9999 9999"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.smith@example.com"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Appointment Request"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full bg-ent-600 hover:bg-ent-700">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Maps Section */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Winston Hills Map */}
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-[400px]">
              <div className="bg-gray-100 px-4 py-3 border-b">
                <h3 className="font-semibold text-gray-800">Winston Hills Practice</h3>
                <p className="text-sm text-gray-600">176 Windsor Rd, Winston Hills NSW</p>
                <p className="text-xs text-gray-500 italic">(Under Construction)</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8273825147857!2d150.9625137!3d-33.7743689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129b7f1a5e8a1b%3A0x5017d68f9f9c8a0!2s176%20Windsor%20Rd%2C%20Winston%20Hills%20NSW%202153!5e0!3m2!1sen!2sau!4v1620000000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Winston Hills Practice Location"
              />
            </div>
            
            {/* Macquarie Park Map */}
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-[400px]">
              <div className="bg-gray-100 px-4 py-3 border-b">
                <h3 className="font-semibold text-gray-800">Macquarie Park Consulting Rooms</h3>
                <p className="text-sm text-gray-600">Level 1, 11 Khartoum Rd, Macquarie Park NSW 2113</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.2054627186585!2d151.1237426!3d-33.7692841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a6d5d8f9e123%3A0x5017d68f9f9c8b1!2s11%20Khartoum%20Rd%2C%20Macquarie%20Park%20NSW%202113!5e0!3m2!1sen!2sau!4v1620000000001!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Macquarie Park Practice Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
