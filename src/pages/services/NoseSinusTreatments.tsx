
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeroSection from '@/components/shared/PageHeroSection';
import { Card, CardContent } from '@/components/ui/card';

const NoseSinusTreatments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <PageHeroSection 
          accentPhrase="Advanced ENT Care"
          title="Nose & Sinus Treatment Solutions"
          subtitle="Specialized care for sinusitis, nasal obstruction, allergies, and other nose-related conditions."
          backgroundImage="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2942&auto=format&fit=crop"
          actionText="Schedule Consultation"
          onActionClick={() => window.open('https://healthengine.com.au/webplugin/?id=100246&source=webplugin&trigger=button', '_blank')}
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Nose & Sinus Services</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Comprehensive treatment options for all types of nose and sinus conditions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Sinusitis Treatment</h4>
                    <p className="text-gray-600">
                      Advanced treatment options for both acute and chronic sinusitis.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Nasal Obstruction</h4>
                    <p className="text-gray-600">
                      Treatment for deviated septum and other causes of nasal blockage.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Allergy Management</h4>
                    <p className="text-gray-600">
                      Comprehensive allergy testing and treatment solutions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Rhinitis Treatment</h4>
                    <p className="text-gray-600">
                      Management of allergic and non-allergic rhinitis symptoms.
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

export default NoseSinusTreatments;
