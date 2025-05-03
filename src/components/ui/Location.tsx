
import React from 'react'

//icons
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';

const Location = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Office</h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <FiClock className="text-2xl text-blue-600 mt-1 mr-4" />
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">Working Hours</h4>
                                    <p className="text-gray-600">Sunday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p className="text-gray-600">Saturday: Closed</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-2xl text-blue-600 mt-1 mr-4" />
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">Location</h4>
                                    <p className="text-gray-600">Sajha Marg, Biratnagar</p>
                                    <p className="text-gray-600">Koshi, Nepal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="rounded-xl overflow-hidden shadow-lg h-96">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.9150047903727!2d87.28192517444174!3d26.496809576897487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef733cdc05b51d%3A0xbd1a0b75aede9fed!2zVGhlIFNVU0FOS0hZQSDgpKrgpY3gpLDgpK_gpYvgpJfgpLbgpL7gpLLgpL4!5e1!3m2!1sen!2snp!4v1744796846249!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location