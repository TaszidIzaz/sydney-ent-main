import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeroSection from '@/components/shared/PageHeroSection';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <PageHeroSection 
          title="Terms & Conditions" 
          subtitle="Terms of Service for Sydney Northwest ENT" 
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
              <p>
                Welcome to <strong>Sydney Northwest ENT</strong>. By accessing our website and using our medical services, you agree to comply with and be bound by the following terms and conditions. Please review these carefully.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Medical Disclaimer</h3>
              <p>
                The information provided on the Sydney Northwest ENT website, including text, graphics, images, and other material, is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Appointments and Cancellations</h3>
              <p>
                When you book an appointment with Sydney Northwest ENT, we reserve a dedicated time slot for your care.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Please arrive at least 10 minutes prior to your scheduled appointment time.</li>
                <li>If you need to cancel or reschedule your appointment, we require a minimum of 24 hours' notice.</li>
                <li>Failure to attend an appointment without prior notice or late cancellations may incur a cancellation fee.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Fees and Billing</h3>
              <p>
                Sydney Northwest ENT is a private specialist practice. Our fees reflect the specialized nature of the care provided.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Payment is required in full on the day of your consultation.</li>
                <li>We accept cash, EFTPOS, and major credit cards.</li>
                <li>If you hold a valid Medicare card and referral, we can assist in processing your Medicare rebate electronically.</li>
                <li>Surgical fees and out-of-pocket expenses will be discussed with you prior to any procedure, and informed financial consent will be provided.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Use of the Website</h3>
              <p>
                You agree to use our website only for lawful purposes. You are prohibited from:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Attempting to gain unauthorized access to our website, servers, or networks.</li>
                <li>Using the website in any way that could damage, disable, overburden, or impair the site.</li>
                <li>Using our website to transmit any harmful, offensive, or illegal material.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Intellectual Property</h3>
              <p>
                All content on this website, including but not limited to text, design, graphics, logos, and images, is the property of Sydney Northwest ENT and is protected by Australian and international copyright laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by law, Sydney Northwest ENT shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, our website or services.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Changes to Terms</h3>
              <p>
                Sydney Northwest ENT reserves the right to modify these Terms and Conditions at any time. Any changes will be posted on this page, and your continued use of the website and our services following such changes constitutes your acceptance of the new terms.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Contact Information</h3>
              <p>
                If you have any questions regarding these Terms and Conditions, please contact our practice manager:
              </p>
              <ul className="list-none mb-4">
                <li><strong>Phone:</strong> (02) 7813 6672</li>
                <li><strong>Email:</strong> admin@sydneynorthwestent.com</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
