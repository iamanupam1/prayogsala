import React from 'react'

const Story = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
                        <p className="text-gray-600 mb-4">
                            At our core, we believe that true innovation begins with inspiration. With the motto "Inspiration to Innovation", we are more than just a computer training institution — we are a catalyst for transformation.
                        </p>
                        <p className="text-gray-600 mb-4">
                            We are committed to empowering individuals with the skills and confidence needed to thrive in today’s digital world. Our mission is to bridge the gap between knowledge and application, helping learners transform their passion into practical expertise.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Whether you're just starting your journey in technology or looking to upgrade your skills, our diverse range of industry-relevant courses, experienced instructors, and hands-on training methods ensure that you’re not only learning — you're building, creating, and innovating.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Our training programs are designed to meet the demands of a rapidly evolving tech landscape. With a focus on real-world applications, personalized learning, and continuous support, we guide our students from foundational knowledge to advanced, career-ready skills.
                        </p>
                        <p className="text-gray-600">
                            Join us, and be a part of a learning experience where inspiration sparks innovation, and innovation leads to success.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="bg-blue-100 rounded-xl p-2">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Team working together"
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story