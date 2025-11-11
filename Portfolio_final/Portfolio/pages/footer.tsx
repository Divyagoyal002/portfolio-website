'use client';
import React from "react";
import {
  FaUserCircle,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

interface FooterProps {
  className?: string; // ✅ allow optional className from parent
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/divyagoyal002", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/divyagoyalds", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/divyagoyalbg", label: "Twitter / X" },
    { icon: FaInstagram, href: "https://instagram.com/heyits_divyana", label: "Instagram" },
    { icon: FaUserCircle, href: "https://topmate.io/divya_goyal10", label: "Topmate" },
  ];

  return (
    <footer
      className={`bg-gradient-to-r from-[#F5F5F5] to-[#A7C7E7] py-8 text-gray-800 select-none ${className}`}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div>
            <h3 className="text-xl font-bold tracking-tight">Portfolio</h3>
            <p className="text-gray-700 mt-2">Building digital experiences</p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-800 hover:text-[#F28C8C] transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            {/* Scroll-to-top */}
            <motion.button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="bg-[#A7C7E7] hover:bg-[#F28C8C] text-gray-800 p-2 rounded-full transition-colors shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoIosArrowUp className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-[#A7C7E7] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-800">
              © {new Date().getFullYear()} <span className="font-semibold">Divya Goyal</span>. All rights reserved.
            </p>

            <nav className="flex space-x-4 text-sm">
              {["About", "Projects", "Contact"].map((item, idx) => (
                <a
                  key={idx}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-[#F28C8C] transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
