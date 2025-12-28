
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeroSection from '@/components/shared/PageHeroSection';
import { Card, CardContent } from '@/components/ui/card';

const PaediatricENT = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <PageHeroSection 
          accentPhrase="Child-Focused Care"
          title="Paediatric ENT Services"
          subtitle="Specialized ear, nose, and throat care tailored specifically for children and young patients."
          backgroundImage="https://images.unsplash.com/photo-1577564086302-8d65882d3b25?q=80&w=2940&auto=format&fit=crop"
          actionText="Schedule Consultation"
          onActionClick={() => window.location.href = '/contact'}
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Paediatric Services</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Child-friendly ENT care delivered by experienced specialists in a comfortable environment.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Ear Infections</h4>
                    <p className="text-gray-600">
                      Treatment for acute and chronic ear infections in children.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Tonsils & Adenoids</h4>
                    <p className="text-gray-600">
                      Expert care for enlarged tonsils and adenoids in young patients.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Sleep-Disordered Breathing</h4>
                    <p className="text-gray-600">
                      Diagnosis and treatment of sleep apnea and snoring in children.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Hearing Assessment</h4>
                    <p className="text-gray-600">
                      Comprehensive hearing tests and treatment for pediatric hearing loss.
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

export default PaediatricENT;
