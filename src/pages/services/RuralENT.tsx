
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeroSection from '@/components/shared/PageHeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Calendar, Stethoscope, CheckCircle, MapPin, Phone, FileText } from 'lucide-react';

const RuralENT = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <PageHeroSection 
          accentPhrase="Telehealth for Regional NSW"
          title="Video ENT Consultations for Rural &amp; Regional Patients"
          subtitle="See an ENT specialist without travelling to Sydney for your first appointment."
          backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop"
          actionText="Book Video Consultation"
          onActionClick={() => window.open('https://healthengine.com.au/webplugin/?id=100246&source=webplugin&trigger=button', '_blank')}
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                If you live in regional or rural NSW, accessing an ENT specialist can involve significant travel, time away from work and multiple trips to Sydney.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Sydney Northwest ENT, Dr Zubair Hasan offers video consultations for selected ENT conditions, allowing patients to have a specialist assessment from the comfort of their home or a local healthcare facility.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                A video consultation can often help determine what investigations or treatment are required and whether an in-person examination or procedure is necessary.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How it Works</h2>
              <p className="text-lg text-gray-600 mb-12 text-center">Three simple steps to your ENT specialist consultation.</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-ent-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="h-8 w-8 text-ent-600" />
                  </div>
                  <div className="text-sm font-semibold text-ent-600 mb-2">Step 1</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Book Your Video Consultation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Arrange an appointment with Dr Hasan for a video ENT consultation. You will receive instructions about how to join the consultation and what information or previous test results may be useful.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-ent-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Video className="h-8 w-8 text-ent-600" />
                  </div>
                  <div className="text-sm font-semibold text-ent-600 mb-2">Step 2</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Have Your ENT Assessment by Video</h3>
                  <p className="text-gray-600 leading-relaxed">
                    During the consultation, Dr Hasan will discuss your symptoms, medical history and previous treatment. Where available, you can provide relevant audiograms, scans, reports, pathology results, sleep studies and photographs.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-ent-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Stethoscope className="h-8 w-8 text-ent-600" />
                  </div>
                  <div className="text-sm font-semibold text-ent-600 mb-2">Step 3</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Develop a Treatment Plan</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Following your consultation, Dr Hasan will discuss the likely diagnosis and appropriate next steps. A letter can also be provided to your referring doctor outlining the assessment and recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Treatment Plan Options</h2>
              <p className="text-lg text-gray-600 mb-8">Your plan may include any of the following next steps:</p>
              
              <div className="space-y-4">
                {[
                  'Medical treatment',
                  'Further investigations',
                  'Local assessment or treatment by your GP or another healthcare professional',
                  'Referral for local audiology or other investigations',
                  'An in-person ENT examination',
                  'Surgical assessment or treatment'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-ent-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ent-700 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Reduce the Number of Trips to Sydney</h2>
              <p className="text-lg text-ent-100 leading-relaxed mb-6 text-center">
                For patients who may ultimately require an operation or specialist procedure, a video consultation can be particularly useful for planning your care before travelling.
              </p>
              <p className="text-lg text-ent-100 leading-relaxed mb-6 text-center">
                Where appropriate, we can review your referral, scans and investigations before your trip so that your Sydney appointment can be focused on examination, treatment planning or surgery.
              </p>
              <p className="text-lg text-ent-100 leading-relaxed text-center font-medium">
                Our aim is to minimise unnecessary travel while ensuring you receive appropriate specialist ENT care.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Conditions Suitable for Video Consultation</h2>
              <p className="text-lg text-gray-600 mb-12 text-center">Video initial consultation can be particularly useful for the following conditions:</p>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-2 h-8 bg-ent-500 rounded mr-3"></span>
                      Ear and Hearing Problems
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Hearing loss</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Tinnitus</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Eustachian tube dysfunction</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Recurrent ear problems</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Review of audiograms and hearing tests</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Discussion of ear surgery</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Cholesteatoma assessment and surgical planning</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Review of imaging</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-2 h-8 bg-ent-500 rounded mr-3"></span>
                      Nose and Sinus Problems
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Chronic nasal obstruction</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Deviated nasal septum</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Chronic rhinosinusitis</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Recurrent sinus infections</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Nasal polyps</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Allergic rhinitis</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Discussion of sinus surgery or septoplasty</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Review of CT sinus scans</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-2 h-8 bg-ent-500 rounded mr-3"></span>
                      Throat and Sleep Problems
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Snoring</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Suspected obstructive sleep apnoea</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Tonsil problems</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-2 h-8 bg-ent-500 rounded mr-3"></span>
                      Head and Neck Conditions
                    </h3>
                    <p className="text-gray-700">
                      Video consultation may also be useful for reviewing imaging, pathology and previous investigations for selected head and neck conditions.
                    </p>
                    <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-sm text-amber-800">
                        <strong>Please note:</strong> Some conditions will require an examination in person and cannot be adequately assessed by video alone.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-ent-50 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-ent-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Do I Need a Referral?</h3>
                  <p className="text-gray-600 mb-4">
                    If you are seeking a Medicare-funded specialist telehealth consultation, eligibility requirements apply, including requirements relating to referrals and the patient's location.
                  </p>
                  <p className="text-gray-600">
                    If you are not eligible for a Medicare-funded telehealth consultation, a private video consultation may still be available. Our reception team can advise you about the requirements when you make an enquiry.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-ent-50 rounded-full flex items-center justify-center mb-4">
                    <Stethoscope className="h-6 w-6 text-ent-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What Happens if I Need to Be Examined?</h3>
                  <p className="text-gray-600 mb-4">
                    A video consultation does not replace an examination when one is clinically necessary. If Dr Hasan determines that you need to be examined, you may be advised to:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />See your local GP or healthcare provider for an examination</li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Arrange local investigations</li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Attend Sydney Northwest ENT for an in-person consultation</li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-ent-500 mr-2 flex-shrink-0 mt-0.5" />Combine your assessment with a planned procedure or surgical appointment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Should I Have Ready?</h2>
              <p className="text-lg text-gray-600 mb-8">Before your appointment, please have available any relevant:</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Referral letter',
                  'Audiograms or hearing tests',
                  'CT or MRI scans',
                  'Previous ENT reports',
                  'Sleep study results',
                  'Pathology results',
                  'List of current medications',
                  'Previous operation reports'
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-ent-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-ent-50 border border-ent-200 rounded-xl">
                <p className="text-ent-800">
                  <strong>Note:</strong> If you have recently had imaging performed, please let our team know so that we can determine how the images can be made available for review.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-ent-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-ent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Consultations for Regional and Rural NSW</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We welcome enquiries from patients throughout regional and rural NSW who may otherwise need to travel considerable distances to access specialist ENT care.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                If you are unsure whether your problem is suitable for a video consultation, contact our practice and we can discuss the most appropriate appointment for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg"
                  onClick={() => window.open('https://healthengine.com.au/webplugin/?id=100246&source=webplugin&trigger=button', '_blank')}
                >
                  Book a Video ENT Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-ent-600 text-ent-700 hover:bg-ent-50 px-8 py-6 text-lg"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Our Practice
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RuralENT;
