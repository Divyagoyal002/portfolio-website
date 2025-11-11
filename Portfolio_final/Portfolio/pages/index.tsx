'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/divyagoyal002" },
  { name: "LinkedIn", url: "https://linkedin.com/in/divyagoyalds" },
  { name: "Twitter / X", url: "https://x.com/divyagoyalbg" }
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F5] to-[#A7C7E7] font-['Poppins'] overflow-hidden"
      role="banner"
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left: Text Content */}
          <div className="flex-1 text-gray-900 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-gray-900 leading-tight">
              Hi, I'm <span className="text-[#F28C8C]">Divya Goyal</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-6 text-gray-800">
              AI/ML Engineer specializing in LLMs
            </p>

            <p className="text-lg mb-10 text-gray-700 max-w-xl mx-auto lg:mx-0">
              I design, train, and deploy intelligent models & chatbots that make technology more human.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
              <Link
                href="https://drive.google.com/file/d/1lXxvJTMg7PL2cYJe-is9tEx-_pLdecyF/view?usp=drive_link"
                target="_blank"
                className="px-8 py-3 border-2 border-[#F28C8C] text-[#F28C8C] rounded-full font-semibold hover:bg-[#F28C8C] hover:text-white transition-all shadow-sm hover:shadow-md"
              >
                Download Resume
              </Link>
              <Link
                href="https://topmate.io/divya_goyal10"
                target="_blank"
                className="px-8 py-3 border-2 border-[#F28C8C] text-[#F28C8C] rounded-full font-semibold hover:bg-[#F28C8C] hover:text-white transition-all shadow-sm hover:shadow-md"
              >
                DM a Query
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 text-gray-800">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="hover:text-[#F28C8C] transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#F28C8C] shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/profilepic.jpg"
                alt="Divya Goyal profile photo"
                width={320}
                height={320}
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        {/* Scroll Indicator (takes you to /about page) */}
        <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll down">
        
        <Link
          href="/about"
        >
          <svg
            className="w-6 h-6 text-[#F28C8C]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
        </div>
      </div>
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#A7C7E7] to-transparent" />
    </section>
  );
}
