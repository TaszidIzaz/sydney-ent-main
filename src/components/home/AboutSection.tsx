import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
const AboutSection = () => {
  const [expandedDoctors, setExpandedDoctors] = useState<{[key: string]: boolean}>({
    zubair: false,
    santi: false,
    mo: false,
    sally: false
  });

  const {
    ref: ref1,
    inView: inView1
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const {
    ref: ref2,
    inView: inView2
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const {
    ref: ref3,
    inView: inView3
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const toggleReadMore = (doctor: string) => {
    setExpandedDoctors(prev => ({ ...prev, [doctor]: !prev[doctor] }));
  };
  return <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Dr. Zubair Hasan Section */}
        <div ref={ref1} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          

          {/* Content */}
          <div className="flex flex-col min-h-[600px]">
            <div className={`transition-all duration-1000 delay-300 flex-1 flex flex-col ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dr. Zubair Hasan</h2>
              <p className="text-xl text-ent-600 mb-6">
                Paediatric & Adult ENT Surgeon | Founder and Director of Sydney Northwest ENT
              </p>
              
              <div className={`text-lg text-gray-600 mb-4 ${!expandedDoctors.zubair ? 'line-clamp-6' : ''}`}>
                <p className="mb-4">
                  At Sydney Northwest ENT, Dr. Zubair Hasan brings a wealth of experience in both adult and paediatric ENT care, 
                  with additional subspecialty interests in Otology and Head & Neck Surgery. His patient-focused approach, 
                  combined with advanced surgical training, ensures the highest standard of care for every individual.
                </p>
                <p>
                  A graduate of UNSW, Dr. Hasan initially trained in General Surgery before pursuing his passion for Otolaryngology. 
                  He completed advanced fellowship training at leading institutions including Westmead Hospital (Sydney) and 
                  Princess Alexandra Hospital (Brisbane). In 2022, he was awarded the prestigious Hugh Johnston Travel Fellowship.
                </p>
              </div>
              
              <Button 
                variant="link" 
                onClick={() => toggleReadMore('zubair')}
                className="text-ent-600 hover:text-ent-700 p-0 h-auto w-fit"
              >
                {expandedDoctors.zubair ? 'Read Less' : 'Read More'}
              </Button>
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-soft-blue rounded-lg p-4">
                  <h4 className="font-bold text-2xl text-gray-900 mb-1">20+</h4>
                  <p className="text-gray-700">Years Serving Australia's ENT Community</p>
                </div>
                <div className="bg-soft-blue rounded-lg p-4">
                  <h4 className="font-bold text-2xl text-gray-900 mb-1">35+</h4>
                  <p className="text-gray-700">Peer-Reviewed Publications</p>
                </div>
                <div className="bg-soft-blue rounded-lg p-4">
                  <h4 className="font-bold text-2xl text-gray-900 mb-1">6+</h4>
                  <p className="text-gray-700">Major Hospital Affiliations</p>
                </div>
                <div className="bg-soft-blue rounded-lg p-4">
                  <h4 className="font-bold text-2xl text-gray-900 mb-1">1000+</h4>
                  <p className="text-gray-700">Patients Cared For</p>
                </div>
               </div> */}
            </div>
            
          </div>
          {/* Doctor's Image */}
          <div className={`relative h-[600px] rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 ${inView1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <img src="/lovable-uploads/dr-zubair-updated.jpg" alt="Dr. Zubair Hasan" className="w-full h-full object-cover object-top" />
          </div>
          
        </div>

        {/* Dr. Santiago Draghi Section */}
        <div ref={ref2} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          {/* Doctor's Image (Left Side) */}
          <div className={`relative h-[600px] rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 ${inView2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <img src="/lovable-uploads/dr-santi.jpg" alt="Dr. Santiago Draghi" className="w-full h-full object-cover object-top" />
          </div>

          {/* Content (Right Side) */}
          <div className="flex flex-col min-h-[600px]">
            <div className={`transition-all duration-1000 delay-300 flex-1 flex flex-col ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dr. Santiago Draghi</h2>
              <p className="text-xl text-ent-600 mb-6">Specialized in Paediatric and Adult Ear, Nose and Throat & Head and Neck Surgery and Otology, Neurotology and Hearing Implants Surgery | Co-Founder of Sydney Norwest ENT</p>
              
              <div className={`text-lg text-gray-600 mb-4 ${!expandedDoctors.santi ? 'line-clamp-6' : ''}`}>
                <p className="mb-4">
                  Dr. Santiago Draghi is a dual-qualified Australian-Argentinian surgeon with fellowship-level qualifications in both Argentina and Australia. He possesses 20+ years of experience in the field. After completing medical school in Argentina and obtaining a medical degree in Spain, he secured a position in a highly competitive training program in Buenos Aires. Subsequently, he underwent various additional subspecialty training programs, including one in Paediatric Otorhinolaryngology, another in Otology, Neurotology, and Lateral Skull Base Surgery at St. Vincent's Hospital in Sydney, and a Fellowship in Otolaryngology and Head and Neck Surgery at Monash Health in Melbourne. Additionally, he has received training in Barcelona, Spain, and Los Angeles, United States.
                </p>
                <p className="mb-4">
                  Over the past nine years, Dr Draghi has gained extensive experience across Australia, working in regional areas such as Launceston, Toowoomba, and Newcastle. His diverse experience in different regions of the country has provided him with a comprehensive understanding of the diverse needs of the Australian population, not only within his area of expertise but also in the broader field of ENT.
                </p>
                <p className="mb-4">
                  Dr. Draghi holds a deep passion for educating medical students, junior doctors, and specialist doctors in training. Notably, Dr. Draghi was the surgeon for a nationwide Paediatric Cochlear Implant programme in Buenos Aires, Argentina. Furthermore, he remains dedicated to providing ongoing support to patients with hearing impairments as part of a prestigious group in Sydney.
                </p>
                <p className="mb-4">
                  He has participated in numerous meetings, publications and books, sharing his experience mainly in the area of Paediatric Otolaryngology, Otology and Cochlear implants.
                </p>
                <p className="mb-4">
                  Dr. Draghi has admitting privileges at St Vincent's Private Hospital, St Luke's Hospital, Norwest Private Hospital in Sydney and Hunter Valley Private Hospital in Newcastle.
                </p>
                <p>
                  Dr Draghi is fluent in English and Spanish.
                </p>
              </div>
              
              <Button 
                variant="link" 
                onClick={() => toggleReadMore('santi')}
                className="text-ent-600 hover:text-ent-700 p-0 h-auto w-fit"
              >
                {expandedDoctors.santi ? 'Read Less' : 'Read More'}
              </Button>
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-soft-blue rounded-lg p-4">
                  <h4 className="font-bold text-2xl text-gray-900 mb-1">4+</h4>
                  <p className="text-gray-700">Major Hospital Admitting Rights</p>
                </div>
                <div className="bg-soft-blue rounded-lg p-4">
                  <h4 className="font-bold text-2xl text-gray-900 mb-1">2</h4>
                  <p className="text-gray-700">International Qualifications</p>
                </div>
                <div className="bg-soft-blue rounded-lg p-4">
                  <h4 className="font-bold text-2xl text-gray-900 mb-1">3+</h4>
                  <p className="text-gray-700">Subspecialty Programs</p>
                </div>
                <div className="bg-soft-blue rounded-lg p-4">
                  <h4 className="font-bold text-2xl text-gray-900 mb-1">5+</h4>
                  <p className="text-gray-700">Australian Regions Served</p>
                </div>
               </div> */}
            </div>
          </div>
        </div>


        {/* Mo Helou Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          

          {/* Content */}
          <div className="flex flex-col min-h-[600px]">
            <div className="transition-all duration-1000 delay-300 flex-1 flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mo Helou</h2>
              <p className="text-xl text-ent-600 mb-6">
                Director & Principal Audiologist – NeuroAudiology Australia
              </p>
              
              <div className={`text-lg text-gray-600 mb-4 ${!expandedDoctors.mo ? 'line-clamp-6' : ''}`}>
                <p className="mb-4">
                  Mo Helou is the Director and Principal Audiologist at NeuroAudiology Australia. He works closely with a trusted network of Neurologists, ENTs, and other specialists to ensure patients receive the highest level of patient-centred care.
                </p>
                <p className="mb-4">
                  Mo is dedicated to providing compassionate and evidence-based hearing and balance services, with a strong focus on clinical excellence and positive community impact.
                </p>
                <p className="mb-4">
                  <strong>Special areas of interest include:</strong><br />
                  • Hearing and diagnostic assessments for adults and children<br />
                  • Balance and vestibular testing<br />
                  • Micro-suction earwax removal<br />
                  • Hearing aid and cochlear implant consultations and fittings<br />
                  • Custom earplugs for protection and tinnitus support<br />
                  • WorkCover and pre-employment assessments
                </p>
                <p>
                  Mo's approach combines advanced clinical expertise with genuine care, empowering patients to make informed decisions about their hearing health.
                </p>
              </div>
              
              <Button 
                variant="link" 
                onClick={() => toggleReadMore('mo')}
                className="text-ent-600 hover:text-ent-700 p-0 h-auto w-fit"
              >
                {expandedDoctors.mo ? 'Read Less' : 'Read More'}
              </Button>
            </div>
          </div>

          {/* Mo's Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl transition-all duration-1000">
            <img src="/lovable-uploads/mo-helou-new.jpg" alt="Mo Helou" className="w-full h-full object-cover object-top" />
          </div>

          
        </div>

        {/* Sally Section */}
        <div ref={ref3} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          {/* Sally's Image */}
          <div className={`relative h-[600px] rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 ${inView3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <img src="/lovable-uploads/sally.jpg" alt="Sally" className="w-full h-full object-cover object-top" />
          </div>

          {/* Content */}
          <div className="flex flex-col min-h-[600px]">
            <div className={`transition-all duration-1000 delay-300 flex-1 flex flex-col ${inView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sally</h2>
              <p className="text-xl text-ent-600 mb-6">
                Practice Manager
              </p>
              
              <div className={`text-lg text-gray-600 mb-4 ${!expandedDoctors.sally ? 'line-clamp-6' : ''}`}>
                <p className="mb-4">
                  Sally oversees the day-to-day operations of the practice, working closely with our doctors and staff to provide a seamless, smooth and welcoming experience for all.
                </p>
                <p className="mb-4">
                  She has over 10 years experience in customer service with both front facing and back office roles. Sally brings a refreshing approach to patient interactions and practice operations with her diverse background. Spanning multiple industries, including health and wellness, property management, retail, and travel. She is passionate about ensuring a positive experience fuelled by compassion and kindness.
                </p>
                <p className="mb-4">
                  In her free time, Sally enjoys, strength training, running, reading, long walks by the water and playing with her dog, Bayley.
                </p>
              </div>
              
              <Button 
                variant="link" 
                onClick={() => toggleReadMore('sally')}
                className="text-ent-600 hover:text-ent-700 p-0 h-auto w-fit"
              >
                {expandedDoctors.sally ? 'Read Less' : 'Read More'}
              </Button>
            </div>
          </div>
        </div>

        {/* Common Button for all sections */}
        <div className="text-center mt-12">
          <Button className="bg-ent-600 hover:bg-ent-700 text-white">
            <Link to="/about" className="flex items-center">
              Learn More About Our Practice <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default AboutSection;