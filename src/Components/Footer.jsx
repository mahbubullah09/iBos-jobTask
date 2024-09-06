import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiLinkedin, FiX } from "react-icons/fi";


import logo from "../assets/icon.png"
const Footer = () => {
    return (
        <footer className="bg-[#0E0E0E] text-[#81859F] p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

            <div className="flex ">
                    <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                    <h1 className=" text-[20px] font-bold">
                        Furni<span className="text-[#1E99F5]">Flex</span>
                    </h1>
                </div>
                <div>
                    <h2 className="text-white font-bold mb-4">About Us</h2>
                    <ul>
                        <li className="mb-2 hover:text-white"><Link to="/master-plan">Master Plan</Link></li>
                        <li className="mb-2 hover:text-white"><Link to="/jobs">Jobs</Link></li>
                        <li className="mb-2 hover:text-white"><Link to="/invest">Invest</Link></li>
                        <li className="mb-2 hover:text-white"><Link to="/pressroom">Pressroom</Link></li>
                        <li className="mb-2 hover:text-white"><Link to="/blog">Blog</Link></li>
                        <li className="mb-2 hover:text-white"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-white font-bold mb-4">Explore EEVE</h2>
                    <ul>
                        <li className="mb-2 hover:text-white"><Link to="/unlock-robot-power">Unlock my Robot Power</Link></li>
                        <li className="mb-2 hover:text-white"><Link to="/starlight">Starlight</Link></li>
                        <li className="mb-2 hover:text-white"><Link to="/robot-platform">Robot Platform</Link></li>
                        <li className="mb-2 hover:text-white"><Link to="/eeve-roadmap">EEVE Roadmap</Link></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-white font-bold mb-4">Community & Support</h2>
                    <ul>
                        <li className="mb-2 hover:text-white"><Link to="/willow-x-community">Willow X Community</Link></li>
                        <li className="mb-2 hover:text-white"><Link to="/developer-access">Developer & Maker Access</Link></li>
                        <li className="mb-2 hover:text-white"><Link to="/special-cases">Special Cases</Link></li>
                    </ul>
                </div>

  
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
                <div className=" text-sm flex items-center gap-2  text-white text-[20px]">
                <FiFacebook />
                <FiInstagram />
                <FiX/>
                <FiLinkedin/>
                </div>

                <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link to="/" className="hover:text-white">March22 Recap</Link>
                    <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                    <Link to="/general-terms" className="hover:text-white">General Terms</Link>
                    <Link to="/contact" className="hover:text-white">Contact</Link>
                </div>

                <div className="mt-4 md:mt-0">
                    <Link to="/" className="hover:text-white">🇺🇸 United States (English)</Link>
                </div>
            </div>

            <div className="text-[#323544] text-sm text-center mt-8">
                    <p>© EEVE 2024. All rights reserved.</p>
                </div>

        </footer>
    );
}

export default Footer;
