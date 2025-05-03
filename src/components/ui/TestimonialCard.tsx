import React from "react";

interface TestimonialProps {
  name: string;
  feedback: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, feedback, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <img src={image} alt={name} className="w-20 h-20 mx-auto rounded-full mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 italic mt-2">"{feedback}"</p>
    </div>
  );
};

export default TestimonialCard;
