'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface NavItem {
  label: string;
  href: string;
}

interface NavProps {
  items?: NavItem[];
}

const Navigation: React.FC<NavProps> = ({ items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const router = useRouter();

  const defaultItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const navItems = items.length ? items : defaultItems;

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="element_1" className="w-full bg-[#F5F5F5] shadow-sm">
      <div id="element_2" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="element_3" className="flex items-center justify-between h-16">
          <div id="element_4" className="flex-shrink-0">
            <Link href="/">
              <span id="element_5" className="text-2xl font-bold text-gray-900">Portfolio</span>
            </Link>
          </div>

          <div id="element_6" className="hidden md:block">
            <div id="element_7" className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    router.pathname === item.href
                      ? "bg-[#A7C7E7] text-gray-900"
                      : "text-gray-800 hover:bg-[#F28C8C] hover:text-white"
                  } transition-all duration-300`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div id="element_8" className="md:hidden">
            <button id="element_9"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-[#A7C7E7] focus:outline-none"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg id="element_10"
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path id="element_11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path id="element_12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <motion.div id="element_13"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden"
      >
        <div id="element_14" className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                router.pathname === item.href
                  ? "bg-[#A7C7E7] text-gray-900"
                  : "text-gray-800 hover:bg-[#F28C8C] hover:text-white"
              } transition-all duration-300`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>

      <div id="element_15"
        className="h-1 bg-[#F28C8C]"
        style={{ width: `${scrollProgress}%` }}
      />
    </nav>
  );
};

export default Navigation;