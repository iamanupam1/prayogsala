import React from "react";
import Link from "next/link";
// icons
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";


const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white text-sm p-2">

      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="md:flex md:gap-4 md:items-center">
          <p className="flex items-center gap-1"><FaPhoneAlt className="w-4 h-4" />9815349825</p>
          <p className="flex items-center gap-1"><MdAccessTimeFilled className="w-4 h-4" />Sun-Fri: 9AM - 5PM</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <a href="#" className="hover:text-gray-400"><FaFacebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram className="w-4 h-4" /></a>
          </div>
          <Link href='/signup' className="bg-[white] text-gray-900 px-4 py-1 rounded-full">Register</Link>
        </div>
      </div>

    </div>
  );
};

export default TopBar;
