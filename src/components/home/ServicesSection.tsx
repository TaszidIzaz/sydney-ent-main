
import React from 'react';
import { Ear, Stethoscope, Users, ThermometerSnowflake, Baby, Wind } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  link: string;
  inView: boolean;
}

const ServiceCard = ({ title, description, icon, delay, link, inView }: ServiceCardProps) => {
  return (
    <Link 
      to={link}
      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-gray-100 group transition-all duration-1000 ${
        inView ? `opacity-100 translate-y-0 delay-[${delay}ms]` : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-14 h-14 bg-soft-blue rounded-full flex items-center justify-center mb-5 group-hover:bg-ent-500 transition-colors duration-300">
        <div className="text-ent-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

const ServicesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      title: "Ear Treatments",
      description: "Comprehensive treatments for hearing loss, infections, tinnitus, and balance disorders.",
      icon: <Ear className="h-6 w-6" />,
      link: "/services/ear",
      delay: 100
    },
    {
      title: "Nose & Sinus Care",
      description: "Treatment for sinusitis, nasal obstruction, allergies, and smell disorders.",
      icon: <Wind className="h-6 w-6" />,
      link: "/services/nose",
      delay: 200
    },
    {
      title: "Pediatric ENT",
      description: "Specialized treatments for children with ear infections, tonsillitis, and more.",
      icon: <Baby className="h-6 w-6" />,
      link: "/services/pediatric",
      delay: 300
    },
    {
      title: "Allergy Management",
      description: "Diagnosis and management of ENT-related allergic conditions.",
      icon: <ThermometerSnowflake className="h-6 w-6" />,
      link: "/services/allergy",
      delay: 400
    },
    {
      title: "Sleep Medicine",
      description: "Treatment for sleep apnea, snoring, and other sleep-related breathing disorders.",
      icon: <Users className="h-6 w-6" />,
      link: "/services/sleep",
      delay: 500
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our Comprehensive ENT Services
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Specialized care for all your ear, nose, and throat needs, delivered by our expert team of specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              delay={service.delay}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
