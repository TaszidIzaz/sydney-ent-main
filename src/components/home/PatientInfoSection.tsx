import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, FileText, User, Calendar, CreditCard, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import phoenixLogo from '@/assets/insurance/hcf.avif';
import dhf from '@/assets/insurance/dhf.png';
import nibLogo from '@/assets/insurance/nib_logo.png';
import hbfLogo from '@/assets/insurance/hbf_logo.png';
import stLukesLogo from '@/assets/insurance/thf.png';
import medibankLogo from '@/assets/insurance/medibank_logo.png';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  delay: number;
  inView: boolean;
}

const AccordionItem = ({ title, children, isOpen, onClick, icon, delay, inView }: AccordionItemProps) => {
  return (
    <div 
      className={`border border-gray-200 rounded-lg overflow-hidden mb-4 bg-white transition-all duration-1000 ${
        inView ? `opacity-100 translate-y-0 delay-[${delay}ms]` : 'opacity-0 translate-y-10'
      }`}
    >
      <button
        className={`w-full flex items-center justify-between p-4 text-left font-medium text-gray-900 ${
          isOpen ? 'bg-ent-50' : 'bg-white'
        }`}
        onClick={onClick}
      >
        <div className="flex items-center">
          <div className="mr-3 text-ent-600">
            {icon}
          </div>
          <span>{title}</span>
        </div>
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 bg-white">{children}</div>
      </div>
    </div>
  );
};

const PatientInfoSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleClick = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      icon: <User className="h-5 w-5" />,
      title: 'New Patient Information',
      content: (
        <div>
          <p className="mb-3">We're excited to welcome you to Sydney Northwest ENT. To make your first visit smooth, please:</p>
          <ul className="list-disc pl-5 mb-3">
            <li>Arrive 15 minutes early to complete registration</li>
            <li>Bring your ID, insurance card, and referral (if applicable)</li>
            <li>Download and complete our new patient forms before your visit</li>
            <li>Bring a list of current medications and medical history</li>
          </ul>

          <Button
            variant="outline"
            className="text-ent-600 border-ent-600 hover:bg-ent-50"
          >
            <a href="/new-patient-forms.pdf" download>
              Download New Patient Forms
            </a>
          </Button>

          {/* <Button variant="outline" className="text-ent-600 border-ent-600 hover:bg-ent-50">
            <Link to="/patient-info/new-patients">Download New Patient Forms</Link>
          </Button> */}
        </div>
      ),
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: 'Appointments & Scheduling',
      content: (
        <div>
          <p className="mb-3">Our clinic is open Monday through Friday from 9:00 AM to 5:00 PM.</p>
          <p className="mb-3">To schedule an appointment:</p>
          <ul className="list-disc pl-5 mb-3">
            <li>Call our office at (02) 7813 6672</li>
            <li>Request an appointment through our online portal</li>
            <li>Email us at admin@sydneynorthwestent.com</li>
          </ul>
          <p className="mb-3">Please provide 24 hours notice for cancellations to avoid a cancellation fee.</p>
          <Button 
            className="bg-teal-600 hover:bg-teal-700"
            asChild
          >
            <a href="https://healthengine.com.au/webplugin/?id=100246&source=webplugin&trigger=button" target="_blank" rel="noopener noreferrer">
              Book an Appointment
            </a>
          </Button>
        </div>
      ),
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: 'Insurance & Billing',
      content: (
        <div>
          <p className="mb-3">We accept most major insurance plans and Medicare. Please confirm coverage with your insurance provider before your visit.</p>
          <div className="mb-4">
            <p className="mb-2 text-sm font-medium text-gray-700">Accepted insurance providers:</p>
            <div className="flex items-center gap-4 flex-wrap">
              <img src={phoenixLogo} alt="Phoenix Health Fund" className="h-5 object-contain" />
              <img src={nibLogo} alt="NIB" className="h-5 object-contain" />
              <img src={hbfLogo} alt="HBF" className="h-5 object-contain" />
              <img src={dhf} alt="St Lukes Health" className="h-5 object-contain" />
              <img src={stLukesLogo} alt="St Lukes Health" className="h-5 object-contain" />
              <img src={medibankLogo} alt="Medibank" className="h-5 object-contain" />
              <span className="text-sm text-gray-600">and many more</span>
            </div>
          </div>
          <p className="mb-3">Payment options include:</p>
          <ul className="list-disc pl-5 mb-3">
            <li>Private health insurance</li>
            <li>Medicare</li>
            <li>WorkCover</li>
            <li>Credit/debit cards</li>
            <li>Cash</li>
          </ul>
          <p className="mb-3">For billing inquiries, please contact our billing department at (02) 7813 6672.</p>
          {/* <Button variant="outline" className="text-ent-600 border-ent-600 hover:bg-ent-50">
            <Link to="/patient-info/insurance">View Accepted Insurance Plans</Link>
          </Button> */}
        </div>
      ),
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: 'What to Expect During Your Visit',
      content: (
        <div>
          <p className="mb-3">Your ENT visit typically includes:</p>
          <ol className="list-decimal pl-5 mb-3">
            <li className="mb-2">
              <strong>Initial consultation:</strong> We'll review your medical history, current symptoms, and any previous treatments.
            </li>
            <li className="mb-2">
              <strong>Examination:</strong> A comprehensive examination of your ears, nose, throat, and related structures using specialized equipment.
            </li>
            <li className="mb-2">
              <strong>Diagnosis:</strong> We'll discuss our findings and potential diagnoses.
            </li>
            <li className="mb-2">
              <strong>Treatment plan:</strong> We'll develop a personalized treatment plan and answer any questions you may have.
            </li>
          </ol>
          <p>Most initial consultations take approximately 30-45 minutes.</p>
        </div>
      ),
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Preparing for Surgery',
      content: (
        <div>
          <p className="mb-3">If surgery is recommended, our team will guide you through the preparation process. General guidelines include:</p>
          <ul className="list-disc pl-5 mb-3">
            <li>Follow all pre-operative instructions provided by your surgeon</li>
            <li>Arrange for transportation to and from the surgical facility</li>
            <li>Fast as directed (typically no food or drink after midnight)</li>
            <li>Discontinue certain medications as advised</li>
            <li>Complete any required pre-surgical testing</li>
          </ul>
          <Button variant="outline" className="text-ent-600 border-ent-600 hover:bg-ent-50">
            <Link to="/patient-info/surgery">Surgery Preparation Guide</Link>
          </Button>
        </div>
      ),
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Patient Information
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Everything you need to know about your visit to Sydney Northwest ENT
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              isOpen={openItem === index}
              onClick={() => handleClick(index)}
              icon={item.icon}
              delay={(index + 1) * 100}
              inView={inView}
            >
              {item.content}
            </AccordionItem>
          ))}
        </div>

        {/*  */}
      </div>
    </section>
  );
};

export default PatientInfoSection;
