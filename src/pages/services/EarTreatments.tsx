
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeroSection from '@/components/shared/PageHeroSection';
import { Card, CardContent } from '@/components/ui/card';

const EarTreatments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <PageHeroSection 
          accentPhrase="Specialized ENT Care"
          title="Expert Ear Treatment Solutions"
          subtitle="Comprehensive care for hearing loss, infections, tinnitus, and balance disorders by our experienced specialists."
          backgroundImage="https://images.unsplash.com/photo-1576085898419-d54e840d898f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          actionText="Schedule Consultation"
          onActionClick={() => window.open('https://healthengine.com.au/webplugin/?id=100246&source=webplugin&trigger=button', '_blank')}
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Ear Treatment Services</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our expert team provides comprehensive diagnosis and treatment for all types of ear conditions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Hearing Loss Treatment</h4>
                    <p className="text-gray-600">
                      Advanced solutions for both temporary and permanent hearing loss, including hearing aids and cochlear implants.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Tinnitus Management</h4>
                    <p className="text-gray-600">
                      Specialized treatments and coping strategies for patients experiencing ringing or buzzing in the ears.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Balance Disorders</h4>
                    <p className="text-gray-600">
                      Diagnosis and treatment of vertigo, dizziness, and other balance-related conditions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Ear Infections</h4>
                    <p className="text-gray-600">
                      Treatment for acute and chronic ear infections in patients of all ages.
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

export default EarTreatments;
