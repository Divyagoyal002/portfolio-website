import type { AppProps } from "next/app";
import "@/styles/globals.css";
import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";

export default function App({ Component, pageProps }: AppProps) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation items={navItems} />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}