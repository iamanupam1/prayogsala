import React from 'react'

// icons
import { FaUsers, FaAward, } from 'react-icons/fa';
import { GiBookshelf, GiTeacher } from 'react-icons/gi';

const Stats = () => {
    const stats = [
        { value: '50+', label: 'Students Enrolled', icon: <FaUsers className="text-3xl" /> },
        { value: '20+', label: 'Courses Available', icon: <GiBookshelf className="text-3xl" /> },
        { value: '5+', label: 'Expert Instructors', icon: <GiTeacher className="text-3xl" /> },
        { value: '95%', label: 'Satisfaction Rate', icon: <FaAward className="text-3xl" /> },
    ];
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                            <div className="text-blue-600 flex justify-center mb-4">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats