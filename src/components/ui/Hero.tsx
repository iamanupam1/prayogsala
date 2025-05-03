import React from "react";
// import Link from "next/link";
import Image from "next/image";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-white text-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center md:order-last">
          <Image
            src="/heroImage.png"
            alt="Learning Illustration"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        {/* Text Section */}
        <div className="text-center md:text-left md:order-first">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Learn Anytime, Anywhere
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Access high-quality courses and boost your skills with us. Join us to explore amazing courses and elevate your skills with top-notch learning experiences
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Button href="/courses" text="Explore Courses" bgColor="bg-blue-600" hoverColor="hover:bg-blue-700" />
            <Button href="/signUp" text="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
