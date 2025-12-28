
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeroSection from '@/components/shared/PageHeroSection';
import { Card, CardContent } from '@/components/ui/card';

const SinusSurgery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <PageHeroSection 
          title="Sinus Surgery"
          subtitle="Advanced surgical solutions for chronic sinus conditions"
        />
        
        {/* Service Description */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Sinus Surgery?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Sinus surgery is a procedure that aims to clear blocked sinuses and improve breathing. 
                Our expert surgeons use minimally invasive techniques to ensure quick recovery and optimal results.
              </p>
              
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">When is Sinus Surgery Needed?</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Chronic sinusitis that doesn't respond to medication</li>
                    <li>• Nasal polyps</li>
                    <li>• Structural abnormalities</li>
                    <li>• Recurring sinus infections</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SinusSurgery;
