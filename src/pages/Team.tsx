
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';
import { Twitter, Linkedin, Mail, GraduationCap, Award, Heart } from 'lucide-react';

const DoctorProfile = ({ 
  name, 
  title, 
  image, 
  bio, 
  credentials, 
  personalInfo,
  delay, 
  inView,
  reverse = false 
}: { 
  name: string; 
  title: string; 
  image: string; 
  bio: string; 
  credentials: string[];
  personalInfo?: string;
  delay: number;
  inView: boolean;
  reverse?: boolean;
}) => {
  return (
    <div 
      className={`transition-all duration-1000 ${
        inView ? `opacity-100 translate-y-0 delay-[${delay}ms]` : 'opacity-0 translate-y-10'
      }`}
    >
      <div className={`grid md:grid-cols-2 gap-12 items-start ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
        <div className={`${reverse ? 'md:col-start-2' : ''} space-y-6`}>
          <div className="relative">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-[500px] object-cover rounded-xl shadow-xl"
            />
          </div>
          
          {/* Doctor Card - Now below the image */}
          <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
            <p className="text-ent-600 font-semibold text-lg mb-4">{title}</p>
            <div className="flex space-x-3">
              <a href="#" className="bg-ent-500 p-2 rounded-full hover:bg-ent-600 text-white transition-colors duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="bg-ent-500 p-2 rounded-full hover:bg-ent-600 text-white transition-colors duration-300">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="mailto:admin@sydneynorthwestent.com" className="bg-ent-500 p-2 rounded-full hover:bg-ent-600 text-white transition-colors duration-300">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className={`space-y-8 ${reverse ? 'md:col-start-1' : ''}`}>
          {/* Professional Background */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-6 w-6 text-ent-600 mr-3" />
              <h4 className="text-xl font-bold text-gray-900">Professional Background</h4>
            </div>
            <div className="prose prose-lg text-gray-700">
              {bio.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Credentials & Qualifications */}
          <div className="bg-gradient-to-br from-ent-50 to-ent-100 p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-ent-600 mr-3" />
              <h4 className="text-xl font-bold text-gray-900">Credentials & Qualifications</h4>
            </div>
            <ul className="space-y-3">
              {credentials.map((credential, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-ent-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{credential}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Interests */}
          {personalInfo && (
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-ent-600 mr-3" />
                <h4 className="text-xl font-bold text-gray-900">Personal Interests</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">{personalInfo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const doctors = [
    {
      name: "Dr. Zubair Hasan",
      title: "Founder & Director of Sydney Northwest ENT",
      image: "/lovable-uploads/dr-zubair-new.jpg",
      bio: `Zubair grew up on locally, only a short distance from the current practice, and went to Winston Hills Public School in his formative years. He completed his high school education at North Sydney Boys'.

His medical journey commenced in 2007, prior to graduating in 2012. He was an intern, resident and senior resident in Western Sydney Local Health District prior to commencing the long journey to becoming a surgeon in 2016.

Zubair was initially selected to the General Surgery program at Monash Health in Victoria, before switching to Otolaryngology (ENT). On completion of his training in Melbourne, he obtained further post-training fellowship experience at Westmead Hospital in Sydney and Princess Alexandra Hospital in Brisbane. As the recipient of the Hugh Johnston Travel Grant, a joint award granted by the Royal Australasian College of Surgeons and the American College of Surgeons he travelled to large centres in the USA for short periods of observation. He has consultant experience in some of Australia's largest teaching hospitals including the Royal Children's Hospital, Monash and Alfred Health in Melbourne and the John Hunter Hospital in Newcastle.

Having come back after this long journey, he feels strongly about providing a local based service to the community he grew up in.`,
      credentials: [
        "MBBS, University of New South Wales (2012)",
        "Master of International Public Health, University of New South Wales (2013)",
        "Master of Surgery, University of Sydney (2014)",
        "FRACS (Otolaryngology Head & Neck Surgery) - 2021",
        "Fellowship Training - Westmead Hospital, Sydney - 2022",
        "Fellowship Training - Princess Alexandra Hospital, Brisbane - 2023",
        "Hugh Johnston Travel Grant Recipient - RACS & American College of Surgeons - 2022",
        "Consultant ENT Surgeon 2023-2025 Royal Children's Hospital Melbourne, Monash Health & Alfred Health Melbourne"
      ],
      personalInfo: "Dr. Hasan is passionate about serving the local community where he grew up and providing accessible, high-quality ENT care close to home.",
      delay: 100
    },
    {
      name: "Dr. Santiago Draghi",
      title: "ENT Surgeon & Subspecialist",
      image: "/lovable-uploads/dr-santi.jpg",
      bio: `Dr Santiago Draghi is dual qualified ENT surgeon holding fellowship level qualifications in both Argentina and Australia. He has undergone a number of additional subspeciality training programs including Paediatric Otolaryngology and well as Otology, Neurotology and lateral skull base surgery.

Santiago was previously director of cochlear implant surgery at a large hospital in Buenos Aires, where he gained extensive experience in complex ear surgery and hearing restoration procedures.

He has worked across Australia, including areas of need such as Launceston, and obtained further training prior to receiving his Australian qualifications in Monash Health (Melbourne) and Toowoomba, Queensland. Having worked in different regions in Australia, Dr Draghi has learnt about diversity and the needs of the general population, not just in the area of his expertise but also in general ENT and Head and Neck surgery.

Dr. Draghi has moved to Sydney and has admitting privileges at St Luke's Hospital, Norwest Private Hospital, Mater Hospital in Sydney and Hunter Valley Private Hospital in Newcastle.`,
      credentials: [
        "Fellowship Level Qualifications - Argentina & Australia",
        "Subspecialty Training - Paediatric Otolaryngology",
        "Subspecialty Training - Otology & Neurotology", 
        "Subspecialty Training - Lateral Skull Base Surgery",
        "Former Director of Cochlear Implant Surgery - Buenos Aires",
        "Training at Monash Health, Melbourne",
        "Training in Toowoomba, Queensland",
        "Admitting Privileges - St Luke's Hospital",
        "Admitting Privileges - Norwest Private Hospital",
        "Admitting Privileges - Mater Hospital Sydney",
        "Admitting Privileges - Hunter Valley Private Hospital Newcastle"
      ],
      personalInfo: "During his spare time he enjoys spending time with his partner, family, friends and his pets. He also loves music, playing the piano, food, wine and travelling.",
      delay: 200
    },
    {
      name: "Mo Helou",
      title: "Director & Principal Audiologist – NeuroAudiology Australia",
      image: "/lovable-uploads/mo-helou-new.jpg",
      bio: `Mo Helou is the Director and Principal Audiologist at NeuroAudiology Australia. He works closely with a trusted network of Neurologists, ENTs, and other specialists to ensure patients receive the highest level of patient-centred care.

Mo is dedicated to providing compassionate and evidence-based hearing and balance services, with a strong focus on clinical excellence and positive community impact.

Mo's approach combines advanced clinical expertise with genuine care, empowering patients to make informed decisions about their hearing health.`,
      credentials: [
        "Director & Principal Audiologist - NeuroAudiology Australia",
        "Hearing and diagnostic assessments for adults and children",
        "Balance and vestibular testing specialist",
        "Micro-suction earwax removal expert",
        "Hearing aid and cochlear implant consultations and fittings",
        "Custom earplugs for protection and tinnitus support",
        "WorkCover and pre-employment assessments",
        "Collaborative care with Neurologists and ENT specialists"
      ],
      personalInfo: "Mo is passionate about providing patient-centred care and empowering individuals to make informed decisions about their hearing health through compassionate, evidence-based services.",
      delay: 300
    },
    {
      name: "Sally",
      title: "Practice Manager",
      image: "/lovable-uploads/sally.jpg",
      bio: `Sally oversees the day-to-day operations of the practice, working closely with our doctors and staff to provide a seamless, smooth and welcoming experience for all.

She has over 10 years experience in customer service with both front facing and back office roles. Sally brings a refreshing approach to patient interactions and practice operations with her diverse background. Spanning multiple industries, including health and wellness, property management, retail, and travel. She is passionate about ensuring a positive experience fuelled by compassion and kindness.

In her free time, Sally enjoys, strength training, running, reading, long walks by the water and playing with her dog, Bayley.`,
      credentials: [],
      delay: 400
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-ent-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h1>
              <p className="text-xl text-gray-600 mb-8">Our dedicated ENT specialists bring decades of combined experience and a commitment to exceptional patient care.</p>
            </div>
          </div>
        </section>
        
        {/* Team Profiles */}
        <section ref={ref} className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-32">
              {doctors.map((doctor, index) => (
                <DoctorProfile
                  key={index}
                  name={doctor.name}
                  title={doctor.title}
                  image={doctor.image}
                  bio={doctor.bio}
                  credentials={doctor.credentials}
                  personalInfo={doctor.personalInfo}
                  delay={doctor.delay}
                  inView={inView}
                  reverse={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
