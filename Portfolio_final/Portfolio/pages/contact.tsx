'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const socialLinks: SocialLink[] = [
    { platform: "LinkedIn", url: "https://linkedin.com/in/divyagoyads", icon: "📱" },
    { platform: "GitHub", url: "https://github.com/divyagoyal002", icon: "💻" },
    { platform: "Twitter", url: "https://x.com/divyagoyalbg", icon: "🐦" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("contact@portfolio.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="element_1" className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#A7C7E7] py-20 px-4 sm:px-6 lg:px-8">
      <div id="element_2" className="max-w-7xl mx-auto">
        <div id="element_3" className="backdrop-blur-lg bg-white/95 rounded-2xl p-8 lg:p-12 shadow-xl">
          <div id="element_4" className="grid lg:grid-cols-2 gap-12">
            <div id="element_5" className="space-y-8">
              <h1 id="element_6" className="text-4xl lg:text-5xl font-bold text-[#333333] font-[Poppins]">
                Let's Connect
              </h1>
              
              <div id="element_7" className="space-y-4">
                <div id="element_8" className="flex items-center space-x-4 text-[#333333]">
                  <span id="element_9" className="text-2xl">📍</span>
                  <p id="element_10" className="font-[Poppins]">Samarth Park Colony, Indore , MP</p>
                </div>
                
                <div id="element_11" className="flex items-center space-x-4 text-[#333333]">
                  <span id="element_12" className="text-2xl">✉️</span>
                  <button id="element_13"
                    onClick={copyEmail}
                    className="font-[Poppins] hover:text-[#F28C8C] transition-colors"
                  >
                    {copied ? "Copied!" : "divyagoyalbg@gmail.com"}
                  </button>
                </div>
                  <div id="element_14" className="flex items-center space-x-4 text-[#333333]">
                <span id="element_15" className="text-2xl">🔗</span>
                <a
                  id="element_16"
                  href="https://topmate.io/divya_goyal10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[Poppins] font-bold text-[#1F1F1F] hover:text-[#F28C8C] transition-colors"
                >
                  Topmate 
                </a>
              </div>
                <div id="element_14" className="flex space-x-6">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.platform}
                      href={link.url}
                      className="text-[#333333] hover:text-[#F28C8C] transition-colors text-2xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>

              <div id="element_15" className="relative h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094"
                  alt="Office Space"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <form id="element_16" onSubmit={handleSubmit} className="space-y-6">
              <div id="element_17">
                <label id="element_18" htmlFor="name" className="block text-[#333333] font-[Poppins] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#F5F5F5] border border-[#A7C7E7] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#F28C8C] font-[Poppins]"
                />
              </div>

              <div id="element_19">
                <label id="element_20" htmlFor="email" className="block text-[#333333] font-[Poppins] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#F5F5F5] border border-[#A7C7E7] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#F28C8C] font-[Poppins]"
                />
              </div>

              <div id="element_21">
                <label id="element_22" htmlFor="subject" className="block text-[#333333] font-[Poppins] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#F5F5F5] border border-[#A7C7E7] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#F28C8C] font-[Poppins]"
                />
              </div>

              <div id="element_23">
                <label id="element_24" htmlFor="message" className="block text-[#333333] font-[Poppins] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#F5F5F5] border border-[#A7C7E7] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#F28C8C] font-[Poppins]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-[Poppins] font-medium transition-all
                  ${isSubmitting 
                    ? "bg-[#A7C7E7] cursor-not-allowed" 
                    : "bg-[#F28C8C] hover:bg-[#e07f7f] text-white"
                  }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p id="element_25" className="text-green-600 font-[Poppins] text-center">
                  Message sent successfully!
                </p>
              )}

              {submitStatus === "error" && (
                <p id="element_26" className="text-red-600 font-[Poppins] text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;