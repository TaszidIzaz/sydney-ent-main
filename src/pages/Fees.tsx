import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, DollarSign, CreditCard, AlertTriangle } from 'lucide-react';
const Fees = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-ent-50 to-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Fees
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for quality ENT care. Sydney Northwest ENT is a private billing clinic with fees linked to MBS schedule.
            </p>
            <Badge variant="secondary" className="mt-4 text-sm">
              Current as of 30/09/2025
            </Badge>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="p-6 bg-amber-50 border-amber-200">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Important Notice</h3>
                  <p className="text-amber-800 leading-relaxed">
                    While the Surgeons at Sydney Northwest ENT are happy to see all patients regardless of insurance status, 
                    we do not currently provide operative services in public hospitals. While we are happy to provide an opinion 
                    and refer you to the appropriate service where necessary, it may be best for your GP to refer to your local 
                    public ENT outpatient clinic or an alternate ENT surgeon who does operate in the public sector.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Consultation Fees */}
              <Card className="p-8 border-2 hover:border-ent-200 transition-colors">
                <div className="text-center mb-6">
                  <DollarSign className="h-12 w-12 text-ent-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Consultation Fees</h3>
                  <p className="text-gray-600">Professional consultation services</p>
                </div>
                
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Initial Appointment</span>
                      <span className="text-2xl font-bold text-ent-600">$300</span>
                    </div>
                    <p className="text-sm text-gray-600">Medicare rebate: $86.15</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Follow-up Appointment</span>
                      <span className="text-2xl font-bold text-ent-600">$200</span>
                    </div>
                    <p className="text-sm text-gray-600">Medicare rebate: $43.35</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2 text-green-800">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">No Gap Fees</span>
                  </div>
                  <p className="text-sm text-green-700 mt-1">
                    In-clinic procedures like nasendoscopy (41764) or ear toilet (41647) are bulk billed to Medicare
                  </p>
                </div>
              </Card>

              {/* Operative Fees */}
              <Card className="p-8 border-2 hover:border-ent-200 transition-colors">
                <div className="text-center mb-6">
                  <CreditCard className="h-12 w-12 text-ent-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Operative Fees</h3>
                  <p className="text-gray-600">Surgical procedure pricing</p>
                </div>
                
                <div className="bg-gradient-to-br from-ent-50 to-ent-100 rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-ent-900 mb-2 justify-center text-center">Known Gap Service</h4>
                  <div className="text-center">
                    <span className="text-sm text-ent-700">Gap fee up to</span>
                    <div className="text-3xl font-bold text-ent-600">$500</div>
                    <span className="text-sm text-ent-700">for most insurance providers</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Additional Private Surgery Costs:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-ent-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Anaesthetic fees</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-ent-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Excess payable on your policy for hospital admission</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-ent-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Additional diagnostic testing (pathology, radiology)</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    These fees are outside Sydney Northwest ENT, however we are happy to direct you to the appropriate provider for quotes where necessary.
                  </p>
                </div>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="max-w-3xl mx-auto mt-12">
              <Card className="p-6 bg-blue-50 border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Fee Variation Notice</h4>
                <p className="text-blue-800">
                  There is wide variation in rebates for different procedures and insurance companies which make it 
                  difficult to provide accurate fees for all procedures. Please contact us for specific procedure quotes.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Fees;