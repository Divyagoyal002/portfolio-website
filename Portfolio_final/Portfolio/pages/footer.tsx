'use client';
import React from "react";
import {FaUserCircle, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/divyagoyal002" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/divyagoyalds" },
    { icon: FaTwitter, href: "https://x.com/divyagoyalbg" },
    { icon: FaInstagram, href: "https://instagram.com/heyits_divyana" },
    { icon: FaUserCircle, href: "https://topmate.io/divya_goyal10" }
  ];

  return (
    <footer id="element_1" className={`bg-gradient-to-r from-[#F5F5F5] to-[#A7C7E7] py-8 ${className}`}>
      <div id="element_2" className="max-w-6xl mx-auto px-4">
        <div id="element_3" className="flex flex-col md:flex-row justify-between items-center">
          <div id="element_4" className="mb-6 md:mb-0">
            <h3 id="element_5" className="text-gray-800 text-xl font-bold">Portfolio</h3>
            <p id="element_6" className="text-gray-700 mt-2">Building digital experiences</p>
          </div>

          <div id="element_7" className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div id="element_8" className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a id="element_9"
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-[#F28C8C] transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon id="element_10" className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            <motion.button id="element_11"
              onClick={scrollToTop}
              className="bg-[#A7C7E7] hover:bg-[#F28C8C] text-gray-800 p-2 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoIosArrowUp className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        <div id="element_12" className="mt-8 border-t border-[#A7C7E7] pt-8">
          <div id="element_13" className="flex flex-col md:flex-row justify-between items-center">
            <p id="element_14" className="text-gray-800 text-sm">
              © {new Date().getFullYear()} Divya Goyal. All rights reserved.
            </p>
            <div id="element_15" className="flex space-x-4 mt-4 md:mt-0">
              <a id="element_16" href="/about" className="text-gray-800 hover:text-[#F28C8C] transition-colors">About</a>
              <a id="element_17" href="/projects" className="text-gray-800 hover:text-[#F28C8C] transition-colors">Projects</a>
              <a id="element_18" href="/contact" className="text-gray-800 hover:text-[#F28C8C] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;