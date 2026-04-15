import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeroSection from '@/components/shared/PageHeroSection';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <PageHeroSection 
          title="Privacy Policy" 
          subtitle="How we handle and protect your personal and health information" 
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
              <p>
                At <strong>Sydney Northwest ENT</strong>, we are committed to protecting the privacy and confidentiality of our patients' personal and health information. This Privacy Policy outlines how we collect, use, disclose, and secure your data in compliance with the Australian Privacy Principles (APPs) and relevant health records legislation.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Collection of Information</h3>
              <p>
                We only collect information that is necessary to provide you with quality healthcare services and manage our medical practice effectively. The types of information we may collect include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Personal details (name, date of birth, address, contact numbers).</li>
                <li>Medical history, medications, allergies, and previous test results.</li>
                <li>Family medical history (where relevant to your care).</li>
                <li>Medicare, health fund, and billing information.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Use of Your Information</h3>
              <p>
                Your personal and health information is primarily used for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing accurate medical diagnoses and personalized treatment plans.</li>
                <li>Communicating with you regarding appointments, test results, and follow-up care.</li>
                <li>Administrative purposes, including billing and Medicare/health fund claims.</li>
                <li>Quality assurance, clinical audits, and accreditation processes.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Disclosure of Information</h3>
              <p>
                We maintain strict confidentiality and will only share your information with third parties when necessary for your care or required by law. This may include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Other healthcare providers involved in your treatment (e.g., your referring GP, specialists, pathology/radiology services).</li>
                <li>Hospitals or day surgery centers if you require a procedure.</li>
                <li>Medicare, private health insurers, and relevant government agencies for billing and claiming purposes.</li>
                <li>In emergency situations or when legally compelled (e.g., subpoena or mandatory reporting).</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h3>
              <p>
                We take all reasonable steps to ensure your personal and health information is stored securely, whether in electronic or physical formats. Our electronic records are protected by secure passwords, encrypted backups, and firewalls to prevent unauthorized access, modification, or disclosure.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Access and Correction</h3>
              <p>
                You have the right to request access to the personal and health information we hold about you. If you believe any information is inaccurate, incomplete, or out-of-date, you may request a correction. To access or update your records, please contact our practice manager in writing.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Contact Us</h3>
              <p>
                If you have any questions, concerns, or complaints regarding this Privacy Policy or how we handle your personal information, please contact us at:
              </p>
              <ul className="list-none mb-4">
                <li><strong>Phone:</strong> (02) 7813 6672</li>
                <li><strong>Email:</strong> admin@sydneynorthwestent.com</li>
                <li><strong>Address:</strong> Level 1, 11 Khartoum Rd, Macquarie Park NSW 2113</li>
              </ul>
              <p>
                We treat all privacy complaints seriously and will respond to your concerns promptly.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
