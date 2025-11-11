'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

interface Achievement {
  title: string;
  description: string;
}

const About = () => {
  const [typedText, setTypedText] = useState("");
  const [skillFilter, setSkillFilter] = useState("all");
  const fullText = "AI/ML Engineer";

  const skills: Skill[] = [
    { name: "Python", proficiency: 90, category: "Programmming" },
    { name: "R", proficiency: 70, category: "Programmming" },
    { name: "Deep Learning", proficiency: 80, category: "Artificial Intelligence" },
    { name: "Machine Learning", proficiency: 85, category: "Artificial Intelligence" },
    { name: "NLP", proficiency: 75, category: "Artificial Intelligence" },
    { name: "LLMs (GPT, LangChain)", proficiency: 85, category: "Artificial Intelligence" },
    { name: "Power BI", proficiency: 70, category: "Business Intelligence & Analytics" },
    { name: "SQL", proficiency: 70, category: "Business Intelligence & Analytics" },
    { name: "EDA", proficiency: 80, category: "Business Intelligence & Analytics" },
    { name: "Statistics", proficiency: 85, category: "Business Intelligence & Analytics" },
    { name: "Microsoft Excel", proficiency: 75, category: "Business Intelligence & Analytics" },
    { name: "Strategic Decision-Making", proficiency: 80, category: "Soft Skills" },
    { name: "Leadership", proficiency: 90, category: "Soft Skills" },
    { name: "Communication", proficiency: 90, category: "Soft Skills" }
  ];

  const achievements: Achievement[] = [
    {
      title: "Symposium Coordinator",
      description:
        "iBCD 2024 - School of Data Science and Forecasting - Content Development, Data Collection and Management, Team Coordination, Logistics Management",
    },
    {
      title: "Techhunterssss",
      description:
        "Organized 36-Hour Pan-India Hackathon. Oversaw cross-functional teams including logistics, marketing, speaker management, and tech support. Enabled strategic partnerships and sponsor outreach.",
    },
  ];

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  const filteredSkills =
    skillFilter === "all" ? skills : skills.filter(skill => skill.category === skillFilter);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#A7C7E7] text-gray-900 font-[Poppins] px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* --- About Section --- */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20"
        >
          {/* Text Section */}
          <div className="max-w-xl text-center md:text-left space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900">
              About Me
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-800">{typedText}</p>

            <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
              I design and deliver AI-powered solutions that solve real-world problems — from deep learning models for computer vision to GenAI tools powered by LLMs and RAG pipelines. 
              With a strong foundation in Python, ML, and data analytics, I build products that are not just functional, but scalable, intuitive, and impactful. 
              My approach blends technical precision with business insight, ensuring every solution drives measurable value.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Link
                href="https://linkedin.com/in/divyagoyalds"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#A7C7E7] hover:bg-[#96b6d6] text-gray-900 px-6 py-3 rounded-lg transition"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/divyagoyal002"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#A7C7E7] hover:bg-[#96b6d6] text-gray-900 px-6 py-3 rounded-lg transition"
              >
                GitHub
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src="/profilepic.jpg"
              alt="Divya Goyal profile picture"
              width={220}
              height={220}
              priority
              className="w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full shadow-xl object-cover object-top"
            />
          </div>
        </motion.section>

        {/* --- Skills Section --- */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center md:text-left">
            Skills & Expertise
          </h2>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            {["all", "Programmming", "Artificial Intelligence", "Business Intelligence & Analytics", "Soft Skills"].map(category => (
              <button
                key={category}
                onClick={() => setSkillFilter(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  skillFilter === category
                    ? "bg-[#F28C8C] text-white"
                    : "bg-[#A7C7E7] hover:bg-[#96b6d6] text-gray-900"
                }`}
                aria-label={`Filter skills by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map(skill => (
              <div key={skill.name} className="bg-white shadow-lg rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900">{skill.name}</span>
                  <span className="text-gray-700">{skill.proficiency}%</span>
                </div>
                <div className="h-2 bg-[#A7C7E7] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#F28C8C] transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* --- Achievements Section --- */}
        <motion.section
          id="achievements"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center md:text-left">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map(achievement => (
              <article
                key={achievement.title}
                className="bg-white shadow-lg rounded-lg p-6 hover:bg-[#F5F5F5] transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900">{achievement.title}</h3>
                <p className="text-gray-800">{achievement.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

      </div>
    </main>
  );
};

export default About;
