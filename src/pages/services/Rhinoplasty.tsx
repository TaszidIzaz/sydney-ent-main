
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeroSection from '@/components/shared/PageHeroSection';
import { Card, CardContent } from '@/components/ui/card';

const Rhinoplasty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <PageHeroSection 
          accentPhrase="Advanced Nose Care"
          title="Rhinoplasty"
          subtitle="Specialist nose surgery for improved form and function"
           backgroundImage="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2940&auto=format&fit=crop"
          actionText="Schedule Consultation"
          onActionClick={() => window.open('https://healthengine.com.au/webplugin/?id=100246&source=webplugin&trigger=button', '_blank')}
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Rhinoplasty?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Rhinoplasty is an operation to change the form and function of the nose. When combined with septoplasty (the internal partition which divides your nose into two halves), the operation is called septorhinoplasty. It can also be combined with turbinate reduction (reducing the size of the swollen area on the side walls of the nose) or FESS (endoscopic sinus surgery to open the sinus drainage pathways).
              </p>

              <Card className="mb-8 border-ent-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Important Considerations</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Rhinoplasty is a complex operation involving 3-dimensional anatomy. Recovery involves initial pain, swelling and internal bleeding. Dressings and splints are applied internally and externally. Swelling can take time to settle, often 6-12 months or longer to attain the final result. Decision to undertake rhinoplasty should not be undertaken lightly. The operation affects both the appearance as well as the function of your nose which constitutes a central component of your face. The literature would suggest revision surgery rates can be up to 5-15% which can either be minor or major.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Your Consultation Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                As such it may take more than one consultation for Dr. Hasan to make a decision on your rhinoplasty. The first consultation is to take your history and perform a thorough internal and external assessment of nasal anatomy and function and to gain an understanding of your expectations and for Dr. Hasan to explain what is achievable in his hands.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Subsequent consultations are required once you have had time to process the information and to provide an opportunity to ask questions. This approach allows you to process information and help clarify written and verbal information provided and expected results.
              </p>
              <p className="text-gray-600 leading-relaxed mb-12">
                Pre- and post-operative photography is a cornerstone of rhinoplasty management. Photos will be taken at either the first or second consultation and again at intervals post-operatively.
              </p>

              <div className="bg-ent-50 rounded-xl p-8 mb-12 border border-ent-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Dr. Hasan's Training &amp; Expertise</h3>
                <p className="text-gray-700 leading-relaxed">
                  Dr. Hasan was fortunate enough to obtain surgical training in rhinoplasty through multiple units he rotated through in his ENT training. He has furthered his skills by regular attendance at international dissection courses (Singapore, Belgium and Thailand) with world experts in rhinoplasty. He has visited and operated in rhinoplasty surgery with experts in Australia, Japan and Turkey. He continues to develop and refine his techniques.
                </p>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Rebates &amp; Costs</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Costs of surgery in the private system in Australia include - Hospital costs, Surgeon costs, Anaesthetic costs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                While private insurance covers the costs of your admission/surgery, hospital costs are covered by your health fund, though they will charge your excess which applies once a year if you use your health insurance. Surgeon and anaesthetic quotes will be provided following consultation with Dr. Hasan and are often linked to an MBS item number(s).
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Rebates may not apply if you do not have adequate coverage for rhinoplasty (check with your health fund) or if the operation is purely cosmetic and you do not meet the criteria to use the MBS numbers (you can check the criteria on <a href="https://www.mbsonline.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ent-600 hover:text-ent-700 underline font-medium">https://www.mbsonline.gov.au/</a> by searching the relevant item numbers)
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Additional costs which sometimes apply include (radiology, pathology, external materials/grafts - eg cadaveric rib graft).
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                There are medicare (MBS) listed rebates for rhinoplasty +/- septoplasty surgery in Australia. Please check with your health fund whether you have coverage for these numbers (eg 45641 and 41693)
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="border-ent-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Rhinoplasty Item Numbers</h4>
                    <p className="text-sm text-gray-500 mb-3 italic">Does not apply for purely cosmetic rhinoplasty and therefore costs in this case will largely be borne by you</p>
                    <ul className="space-y-2 text-gray-700 font-mono">
                      <li className="flex items-center"><span className="w-2 h-2 bg-ent-500 rounded-full mr-3"></span>45641</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-ent-500 rounded-full mr-3"></span>45632</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-ent-500 rounded-full mr-3"></span>45635</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-ent-500 rounded-full mr-3"></span>45644</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-ent-500 rounded-full mr-3"></span>45650</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-ent-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Septoplasty Item Numbers</h4>
                    <ul className="space-y-2 text-gray-700 font-mono">
                      <li className="flex items-center"><span className="w-2 h-2 bg-ent-500 rounded-full mr-3"></span>41693</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-ent-500 rounded-full mr-3"></span>41671</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center bg-gradient-to-r from-ent-50 to-soft-blue rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Learn More?</h3>
                <p className="text-gray-600 mb-6">Book a consultation with Dr. Hasan to discuss your options in detail.</p>
                <a 
                  href="https://healthengine.com.au/webplugin/?id=100246&source=webplugin&trigger=button" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-ent-600 hover:bg-ent-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Book Your Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rhinoplasty;
