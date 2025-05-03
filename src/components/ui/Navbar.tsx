"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/contact", label: "Contact" },
    { href: "/login", label: "Login" },
    // { href: "/signup", label: "Register" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
    };

    return (
        <nav className="bg-white shadow-md z-50 sticky top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src="/SusankhyaPrayogshala.png"
                                alt="logo"
                                width={90}
                                height={40}
                            />
                        </Link>
                    </div>

                    {/* Centered Search Bar */}
                    <div className="hidden md:block flex-1 mx-8">
                        <form
                            onSubmit={handleSearch}
                            className="relative w-full max-w-md mx-auto"
                        >
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-4 py-1.5 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
                                aria-label="Search"
                            >
                                <Search className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-gray-700 hover:text-blue-600 transition"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            className="p-1 text-gray-700 hover:text-blue-600"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Slide Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/90 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                        />

                        {/* Slide Menu */}
                        <motion.aside
                            className="fixed top-0 left-0 w-2/3 h-full bg-white z-50 shadow-lg p-4"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-lg font-bold text-blue-600">Menu</span>
                                <button onClick={toggleMenu}>
                                    <X className="w-6 h-6 text-gray-700" />
                                </button>
                            </div>

                            <div className="flex flex-col space-y-4">
                                {navLinks.map(({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={toggleMenu}
                                        className="text-gray-700 hover:text-blue-600 transition"
                                    >
                                        {label}
                                    </Link>
                                ))}

                                <form onSubmit={handleSearch} className="relative mt-4">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
                                        aria-label="Search"
                                    >
                                        <Search className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
