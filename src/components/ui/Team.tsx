import React from 'react'

const Team = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Passionate educators and innovators dedicated to your learning success.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { name: 'Dr. Sarah Johnson', role: 'Founder & CEO', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
                        { name: 'Michael Chen', role: 'Head of Education', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
                        { name: 'Emma Rodriguez', role: 'Product Director', image: 'https://randomuser.me/api/portraits/women/63.jpg' },
                        { name: 'David Kim', role: 'Lead Instructor', image: 'https://randomuser.me/api/portraits/men/75.jpg' },
                    ].map((member, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-blue-600 mt-1">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team