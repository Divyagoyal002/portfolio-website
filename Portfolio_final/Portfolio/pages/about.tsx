'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
    { name: "Strategic Decision-Making.", proficiency: 80, category: "Soft Skills" },
    { name: "Leadership", proficiency: 90, category: "Soft Skills" },
    { name: "Communication", proficiency: 90, category: "Soft Skills" }
  ];

  const achievements: Achievement[] = [
    {
      title: "Symposium Coordinator",
      description: "iBCD 2024 - School of Data Science and Forecasting - Content Development, Data Collection and Management, Team Coordination, Logistics Management",
    },
    {
      title: "Techhunterssss",
      description: "• Organized 36-Hour Pan-India Hackathon. Oversaw cross-functional teams including logistics, marketing, speaker management, and tech support.Enabled strategic partnerships and sponsor outreach.",
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

  const filteredSkills = skillFilter === "all" 
    ? skills 
    : skills.filter(skill => skill.category === skillFilter);

return (
  <div
    id="element_1"
    className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#A7C7E7] text-gray-900 font-[Poppins] px-4 py-16"
  >
    <div id="element_2" className="max-w-6xl mx-auto">
      <div
        id="element_3"
        className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6"
      >
        <div id="element_4" className="space-y-6 max-w-xl">
          <h1
            id="element_5"
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            About Me
          </h1>
          <div id="element_6" className="h-16">
            <p
              id="element_7"
              className="text-xl md:text-2xl text-gray-800"
            >
              {typedText}
            </p>
          </div>
          <div id="element_8" className="prose">
            <p id="element_9" className="text-lg text-gray-800">
              I design and deliver AI-powered solutions that solve real-world problems from deep learning models for computer vision to GenAI tools powered by LLMs and RAG pipelines. With a strong foundation in Python, ML, and data analytics, I build products that are not just functional, but scalable, intuitive, and impactful. My approach blends technical precision with business insight, ensuring every solution drives measurable value.
            </p>
          </div>
          <div id="element_10" className="flex space-x-4">
            <Link
              href="https://linkedin.com/in/divyagoyalds"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A7C7E7] text-gray-900 hover:bg-[#96b6d6] rounded-lg px-6 py-3 transition-all"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/divyagoyal002"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A7C7E7] text-gray-900 hover:bg-[#96b6d6] rounded-lg px-6 py-3 transition-all"
            >
              GitHub
            </Link>
          </div>
        </div>

        {/* Profile Image */}
       <div id="element_11" className="flex justify-center md:justify-end">
     <Image
      src="/profilepic.jpg"
      alt="Professional headshot"
      width={210}
      height={210}
      className="w-[180px] h-[180px] rounded-full shadow-xl object-cover object-top"
    />
  </div>

      </div>

      <div id="element_12" className="mt-20">
        <h2
          id="element_13"
          className="text-3xl font-bold mb-8 text-gray-900"
        >
          Skills & Expertise
        </h2>
        <div id="element_14" className="mb-6">
          <div id="element_15" className="flex space-x-4 mb-6">
            {["all", "Programmming", "Artificial Intelligence","Business Intelligence & Analytics","Soft Skills"].map((category) => (
              <button
                id="element_16"
                key={category}
                onClick={() => setSkillFilter(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  skillFilter === category
                    ? "bg-[#F28C8C] text-white"
                    : "bg-[#A7C7E7] hover:bg-[#96b6d6] text-gray-900"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div
            id="element_17"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredSkills.map((skill) => (
              <div
                id="element_18"
                key={skill.name}
                className="bg-white shadow-lg rounded-lg p-4"
              >
                <div
                  id="element_19"
                  className="flex justify-between mb-2"
                >
                  <span id="element_20" className="text-gray-900">
                    {skill.name}
                  </span>
                  <span id="element_21" className="text-gray-700">
                    {skill.proficiency}%
                  </span>
                </div>
                <div
                  id="element_22"
                  className="h-2 bg-[#A7C7E7] rounded-full overflow-hidden"
                >
                  <div
                    id="element_23"
                    className="h-full bg-[#F28C8C] transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div id="element_24" className="mt-20">
        <h2
          id="element_25"
          className="text-3xl font-bold mb-8 text-gray-900"
        >
          Achievements
        </h2>
        <div
          id="element_26"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement) => (
            <div
              id="element_27"
              key={achievement.title}
              className="bg-white shadow-lg rounded-lg p-6 hover:bg-[#F5F5F5] transition-all"
            >
              <h3
                id="element_28"
                className="text-xl font-bold mb-2 text-gray-900"
              >
                {achievement.title}
              </h3>
              <p id="element_29" className="text-gray-800">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
}
export default About;
