import React from 'react'
import { contactMethodsData } from '@/Data/ContactMethodsData'

const ContactMethods = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactMethodsData.map((method, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow text-center">
                            <div className="flex justify-center mb-4">
                                {method.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{method.title}</h3>
                            <p className="text-gray-600 font-medium mb-1">{method.details}</p>
                            <p className="text-gray-500 text-sm mb-4">{method.description}</p>
                            <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                {method.action}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default ContactMethods