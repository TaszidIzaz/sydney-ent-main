
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface PageHeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  accentPhrase?: string;
  actionText?: string;
  onActionClick?: () => void;
}

const PageHeroSection = ({ 
  title, 
  subtitle, 
  backgroundImage,
  accentPhrase,
  actionText,
  onActionClick 
}: PageHeroSectionProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-[#002b3d]">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/9518bfa4-8de3-4719-884c-0f3db88a152f.png')] bg-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#002b3d] to-[#024158]" />
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {accentPhrase && (
              <p className="text-teal-400 font-medium tracking-wide uppercase text-sm">
                {accentPhrase}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]">
              {title}
            </h1>
            <p className="text-lg text-gray-300/90 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
            {actionText && (
              <Button 
                onClick={onActionClick}
                className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-white px-8 py-6 text-lg rounded-full mt-4 transition-all duration-200"
              >
                {actionText} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Right Column - Image */}
          <div className="relative hidden lg:block">
            {backgroundImage && (
              <div className="relative">
                <img
                  src={backgroundImage}
                  alt="Hero visual"
                  className="rounded-xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeroSection;
