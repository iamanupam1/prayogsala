"use client";

import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// components
import TestimonialCard from "./TestimonialCard";
import testimonials from "@/Data/TestimonialData";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our students about their learning experiences
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: '.testimonial-pagination',
            }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            loop={true}
            className="w-full pb-12"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation arrows with React Icons */}
          <button
            className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-gray-700 text-lg" />
          </button>
          <button
            className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-gray-700 text-lg" />
          </button>

          {/* Custom pagination container */}
          <div className="testimonial-pagination flex justify-center mt-6 space-x-2"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;