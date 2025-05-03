import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* About Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">About</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-white hover:text-blue-400 transition">About Us</Link></li>
                            <li><Link href="/courses" className="text-white hover:text-blue-400 transition">Courses</Link></li>
                            <li><a href="#" className="text-white hover:text-blue-400 transition">Instructor</a></li>
                            <li><a href="#" className="text-white hover:text-blue-400 transition">Events</a></li>
                            <li><a href="#" className="text-white hover:text-blue-400 transition">Become A Teacher</a></li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-white hover:text-blue-400 transition">News & Blogs</a></li>
                            <li><a href="#" className="text-white hover:text-blue-400 transition">Library</a></li>
                            <li><a href="#" className="text-white hover:text-blue-400 transition">Gallery</a></li>
                            <li><a href="#" className="text-white hover:text-blue-400 transition">Partners</a></li>
                            <li><a href="#" className="text-white hover:text-blue-400 transition">Career</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    {/* <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-white hover:text-blue-400 transition">FAQs</a></li>
                            <li><a href="#" className="text-white hover:text-blue-400 transition">Forum</a></li>
                            <li><a href="#" className="text-white hover:text-blue-400 transition">Sitemap</a></li>
                        </ul>
                    </div> */}

                    {/* Contact Information */}
                    <div>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Call us</h3>
                                <p className="text-md font-medium text-white">9815349825</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Address</h3>
                                <p className="text-white">Sajha Marg, Biratnagar-3</p>
                                <p className="text-white">Koshi, Nepal</p>
                                <p className="text-blue-400 hover:text-blue-300 mt-1">
                                    <a href="mailto:contact@Susankhya.com">contact@Susankhya.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media and Copyright Section */}
                <div className="mt-12 border-t border-gray-600 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Copyright */}
                        <div className="mb-4 md:mb-0">
                            <p className="text-sm">
                                &copy; {currentYear} Susankhya Prayogshala. All rights reserved.
                            </p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-6 mb-4 md:mb-0">
                            <a href="https://www.facebook.com/theprayogshala.susankhya/" className="text-gray-400 hover:text-white transition">
                                <FaFacebook size={25} />
                            </a>
                            <a href="https://x.com/susankhyanp" className="text-gray-400 hover:text-white transition">
                                <FaTwitter size={25} />
                            </a>
                            <a href="https://www.instagram.com/susankhyanp/#" className="text-gray-400 hover:text-white transition">
                                <FaInstagram size={25} />
                            </a>
                            <a href="https://www.linkedin.com/404/" className="text-gray-400 hover:text-white transition">
                                <FaLinkedin size={25} />
                            </a>
                            <a href="https://www.youtube.com/@PRAYOGSHALAdigital" className="text-gray-400 hover:text-white transition">
                                <FaYoutube size={25} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;