import { FaGraduationCap, FaChalkboardTeacher, FaLightbulb } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';

const features = [
    {
        icon: <FaLightbulb className="text-4xl text-blue-600" />,
        title: 'Interactive Learning',
        description: 'Engaging multimedia content and hands-on projects to enhance understanding.'
    },
    {
        icon: <FaChalkboardTeacher className="text-4xl text-blue-600" />,
        title: 'Expert Instructors',
        description: 'Learn from industry professionals with real-world experience.'
    },
    {
        icon: <FaGraduationCap className="text-4xl text-blue-600" />,
        title: 'Certification',
        description: 'Earn recognized certificates upon course completion.'
    },
    {
        icon: <IoMdSchool className="text-4xl text-blue-600" />,
        title: 'Flexible Learning',
        description: 'Study at your own pace with 24/7 access to materials.'
    },
];


import React from 'react'

const Features = () => {
    return (
        <section className="py-20 bg-[#e8efff]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Platform</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We're committed to providing the best learning experience with innovative features and dedicated support.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features