import React from 'react'
import ContactForm from '@/components/ui/ContactForm'
import { MainLayout } from '@/components/layout/MainLayout'

const Inquiry = () => {
    return (
        <MainLayout>
            <div className='min-h-screen grid items-center justify-center bg-gray-50'>
                <div className='container'>
                    <ContactForm />
                </div>
            </div>
        </MainLayout>
    )
}

export default Inquiry