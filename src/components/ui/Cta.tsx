import React from 'react'
import Link from 'next/link'

const Cta = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Join thousands of students advancing their careers with our courses.
                </p>
                <Link href='/courses' className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                    Explore Courses
                </Link>
            </div>
        </section>
    )
}

export default Cta