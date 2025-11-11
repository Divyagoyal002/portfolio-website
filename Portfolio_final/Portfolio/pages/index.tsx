'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SocialLink {
  name: string;
  url: string;
}

interface TechStack {
  name: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/divyagoyal002" },
  { name: "LinkedIn", url: "https://linkedin.com/in/divyagoyalds" },
  { name: "Twitter", url: "https://x.com/divyagoyalbg" }
];

const techStack: TechStack[] = [
  { name: "Python", icon: "/python-icon.svg" },
  { name: "R", icon: "/R-icon.svg" },
  { name: "Golang", icon: "/Golang-icon.svg" }
];

export default function Hero() {
  return (
    <section id="element_1" className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#F5F5F5] to-[#A7C7E7] font-['Poppins']">
      <div id="element_2" className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div id="element_3" className="container mx-auto px-4 py-16 relative z-10">
        <div id="element_4" className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div id="element_5" className="flex-1 text-gray-900">
            <h1 id="element_6" className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in text-gray-900">
              Hi, I'm Divya Goyal
            </h1>
            <p id="element_7" className="text-xl lg:text-2xl mb-8 text-gray-800">
              An AI/ML Engineer specialisation with LLM's
            </p>
            <p id="element_8" className="text-lg mb-12 text-gray-700 max-w-2xl">
              I train models and chatbots
            </p>
            
            <div id="element_9" className="flex gap-6 mb-12">
              <Link href="https://drive.google.com/file/d/1lXxvJTMg7PL2cYJe-is9tEx-_pLdecyF/view?usp=drive_link"  className="px-8 py-3 border-2 border-[#F28C8C] text-[#F28C8C] rounded-full font-semibold hover:bg-[#F28C8C] hover:text-white transition-all">
                Download Resume
              </Link>
              <Link href="https://topmate.io/divya_goyal10" className="px-8 py-3 border-2 border-[#F28C8C] text-[#F28C8C] rounded-full font-semibold hover:bg-[#F28C8C] hover:text-white transition-all">
                DM a Query
              </Link>
            </div>

            <div id="element_10" className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="text-gray-800 hover:text-[#F28C8C] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div id="element_11" className="relative">
            <div id="element_12" className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#F28C8C]">
              <Image
                src="/profilepic.jpg"
                alt="Divya Goyal"
                width={320}
                height={320}
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>

        <div id="element_13" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg id="element_14"
            className="w-6 h-6 text-[#F28C8C]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path id="element_15" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <div id="element_16" className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#A7C7E7] to-transparent" />
    </section>
  );
}