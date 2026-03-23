
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
          accentPhrase="Advanced ENT Services"
          title="Expert Sinus Surgery Solutions"
          subtitle="Advanced surgical interventions for chronic sinus conditions, delivered with precision and care by our experienced specialists."
          backgroundImage="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2942&auto=format&fit=crop"
          actionText="Schedule Consultation"
          onActionClick={() => window.open('https://healthengine.com.au/webplugin/?id=100246&source=webplugin&trigger=button', '_blank')}
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
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Sydney Northwest ENT, our specialists are skilled in both traditional and endoscopic sinus surgery techniques. 
                We carefully assess each patient's condition to determine the most appropriate surgical approach.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Endoscopic Sinus Surgery</h4>
                    <p className="text-gray-600">
                      A minimally invasive procedure using an endoscope (a thin, flexible tube with a light and camera) 
                      to examine the sinus passages and remove blockages.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Balloon Sinuplasty</h4>
                    <p className="text-gray-600">
                      A breakthrough procedure that uses a small balloon to dilate sinus passages, 
                      improving drainage and function without removing tissue or bone.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recovery Process</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Recovery times vary depending on the extent of the surgery. Most patients can return to 
                normal activities within 1-2 weeks. We provide comprehensive post-operative care and 
                follow-up to ensure optimal healing and results.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SinusSurgery;
