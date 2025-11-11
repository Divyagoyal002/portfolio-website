'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Twitter, ExternalLink } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
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

  const socialLinks = [
    { platform: "LinkedIn", url: "https://linkedin.com/in/divyagoyads", icon: <Linkedin /> },
    { platform: "GitHub", url: "https://github.com/divyagoyal002", icon: <Github /> },
    { platform: "Twitter", url: "https://x.com/divyagoyalbg", icon: <Twitter /> },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // 👇 Example for real API route
      /*
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Network error");
      */

      await new Promise(resolve => setTimeout(resolve, 1200)); // demo delay
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("divyagoyalbg@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#A7C7E7] py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto backdrop-blur-lg bg-white/95 rounded-2xl p-8 lg:p-12 shadow-xl"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Section - Info */}
          <article className="space-y-8">
            <h1 id="contact-heading" className="text-4xl lg:text-5xl font-bold text-[#333] font-[Poppins]">
              Let's Connect
            </h1>

            <div className="space-y-5 text-[#333] font-[Poppins]">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-[#F28C8C]" aria-label="Location" />
                <p>Samarth Park Colony, Indore, MP</p>
              </div>

              <button
                onClick={copyEmail}
                className="flex items-center space-x-3 hover:text-[#F28C8C] transition-colors"
                aria-label="Copy email address"
              >
                <Mail className="w-6 h-6 text-[#F28C8C]" />
                <span>{copied ? "Copied!" : "divyagoyalbg@gmail.com"}</span>
              </button>

              <Link
                href="https://topmate.io/divya_goyal10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 font-bold hover:text-[#F28C8C] transition-colors"
                aria-label="Visit Topmate profile"
              >
                <ExternalLink className="w-6 h-6 text-[#F28C8C]" />
                <span>Topmate</span>
              </Link>

              <div className="flex space-x-6 pt-3">
                {socialLinks.map(({ platform, url, icon }) => (
                  <Link
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F28C8C] transition-colors"
                    aria-label={`Visit ${platform} profile`}
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094"
                alt="Modern workspace"
                fill
                className="object-cover"
              />
            </div>
          </article>

          {/* Right Section - Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {["name", "email", "subject"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-[#333] font-[Poppins] mb-2 capitalize"
                >
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  required
                  value={(formData as any)[field]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#F5F5F5] border border-[#A7C7E7] text-[#333] focus:outline-none focus:ring-2 focus:ring-[#F28C8C] font-[Poppins]"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="block text-[#333] font-[Poppins] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-[#F5F5F5] border border-[#A7C7E7] text-[#333] focus:outline-none focus:ring-2 focus:ring-[#F28C8C] font-[Poppins]"
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
              <p className="text-green-600 font-[Poppins] text-center">
                Message sent successfully!
              </p>
            )}

            {submitStatus === "error" && (
              <p className="text-red-600 font-[Poppins] text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
