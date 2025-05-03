import React from 'react';
//ui components
// import Stats from '@/components/ui/Stats';
import Story from '@/components/ui/About';
// import Team from '@/components/ui/Team';
import Cta from '@/components/ui/Cta';

const About = () => {

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Our Learning Platform</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering learners worldwide with accessible, high-quality education since 2019.
          </p>

        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"></div>
      </section>

      {/* <Stats /> */}
      <Story />
      {/* <Team /> */}
      <Cta />
    </div>
  );
};

export default About;