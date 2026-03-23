
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeroSection from '@/components/shared/PageHeroSection';
import { Card, CardContent } from '@/components/ui/card';

const ThroatVoiceTreatments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <PageHeroSection 
          accentPhrase="Specialized Voice Care"
          title="Throat & Voice Treatment Solutions"
          subtitle="Expert care for voice disorders, swallowing difficulties, and throat conditions."
          backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop"
          actionText="Schedule Consultation"
          onActionClick={() => window.open('https://healthengine.com.au/webplugin/?id=100246&source=webplugin&trigger=button', '_blank')}
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Throat & Voice Services</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Comprehensive care for throat conditions and voice disorders.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Voice Disorders</h4>
                    <p className="text-gray-600">
                      Treatment for vocal cord nodules, polyps, and other voice-related conditions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Swallowing Disorders</h4>
                    <p className="text-gray-600">
                      Diagnosis and treatment of dysphagia and other swallowing difficulties.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Tonsil & Adenoid Care</h4>
                    <p className="text-gray-600">
                      Treatment options for chronic tonsillitis and enlarged adenoids.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Throat Cancer Screening</h4>
                    <p className="text-gray-600">
                      Early detection and treatment planning for throat cancer.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ThroatVoiceTreatments;
