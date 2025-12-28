
import React from 'react';
import { Shield, Award, HeartPulse, Clock, Users, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  inView: boolean;
}

const Feature = ({ icon, title, description, delay, inView }: FeatureProps) => {
  return (
    <div className={`flex items-start transition-all duration-1000 ${
      inView ? `opacity-100 translate-y-0 delay-[${delay}ms]` : 'opacity-0 translate-y-10'
    }`}>
      <div className="bg-ent-100 rounded-full p-3 mr-4 text-ent-600">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Experienced Specialists",
      description: "Our board-certified specialists have over 20 years of combined experience in ENT care.",
      delay: 100,
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Advanced Technology",
      description: "We utilize the latest medical technology for accurate diagnosis and effective treatments.",
      delay: 200,
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Personalized Care",
      description: "We develop individualized treatment plans tailored to your specific needs and concerns.",
      delay: 300,
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Prompt Appointments",
      description: "We offer timely appointments to ensure you receive the care you need without long waits.",
      delay: 400,
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Family-Centered Approach",
      description: "We provide compassionate care for patients of all ages, from infants to seniors.",
      delay: 500,
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Exceptional Results",
      description: "Our high patient satisfaction rates reflect our commitment to quality outcomes.",
      delay: 600,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-white to-soft-blue/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Why Choose Sydney Northwest ENT?
          </h2>
          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We're committed to providing exceptional ENT care with a focus on patient comfort, advanced treatments, and excellent outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
