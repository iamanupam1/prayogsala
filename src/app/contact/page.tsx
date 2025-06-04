import React from 'react';

// ui components
import ContactMethods from '@/components/ui/ContactMethods';
// import ContactForm from '@/components/ui/ContactForm';
import Location from '@/components/ui/Location';
import { MainLayout } from '@/components/layout/MainLayout';

const Contact = () => {
  return (
    <MainLayout>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Have questions? We're here to help! Reach out to our team anytime.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"></div>
        </section>

        <ContactMethods />
        {/* <ContactForm /> */}
        <Location />

      </div>
    </MainLayout>
  );
};

export default Contact;