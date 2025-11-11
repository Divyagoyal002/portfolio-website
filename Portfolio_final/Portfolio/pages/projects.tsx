'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  outcomes: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Face Similarity Detector",
    description: "Face similarity detection app using deep learning for identity verification and customer onboarding. Combines MTCNN and InceptionResnetV1 with hybrid similarity metrics for accurate results.",
    image: "/face_similarity_detector.jpeg",
    category: "AI/ML",
    technologies : ["Python", "PyTorch", "MTCNN", "InceptionResnetV1 (VGGFace2)", "NumPy", "SciPy"],
    githubUrl: "https://github.com/Divyagoyal002/FaceRecognition",
    liveUrl: "https://localhost8501-nbr4vayxnegzzuyms6wpeb.streamlit.app/",
    outcomes: ["Increased sales by 150%", "Improved user engagement", "99.9% uptime"]
  },
  {
    id: 2,
    title: "Sentiment Analysis",
    description: "Real-time Twitter sentiment analyzer using TextBlob and Tweepy to classify tweets and visualize trends. Helps marketing teams monitor brand sentiment and optimize campaigns.",
    image: "/sentiment_analysis.png",
    category: "AI/ML",
    technologies : ["Python", "TextBlob", "Tweepy", "Plotly"],
    githubUrl: "https://github.com/Divyagoyal002/Sentimental-Analysis",
    liveUrl: "https://ai-generator-demo.com",
    outcomes: ["1M+ images generated", "Featured in AI conferences", "Open-source success"]
  },
  {
    id: 3,
    title: "Entity Extraction",
    description: "ML model that extracts product attributes like weight, brand, and price from images using OCR. Cleans and standardizes text data to optimize prediction accuracy.",
    image: "/entity_extraction.jpeg",
    category: "AI/ML",
    technologies :["Python", "EasyOCR"],
    githubUrl: "https://github.com/Divyagoyal002/Sentimental-Analysis",
    liveUrl: "https://ai-generator-demo.com",
    outcomes: ["1M+ images generated", "Featured in AI conferences", "Open-source success"]
  },
  {
    id: 4,
    title: "Demand & Supply Analysis",
    description: "ML model that extracts product attributes like weight, brand, and price from images using OCR. Cleans and standardizes text data to optimize prediction accuracy.",
    image: "/demand_supply.png",
    category: "Business Intelligence & Analytics",
    technologies : ["Python", "Pandas", "Plotly"],
    githubUrl: "https://github.com/Divyagoyal002/Demand-and-Supply-analysis",
    liveUrl: "https://ai-generator-demo.com",
    outcomes: ["1M+ images generated", "Featured in AI conferences", "Open-source success"]
  }
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div id="element_1"
      className="bg-[#F5F5F5] shadow-lg rounded-xl p-4 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === "Enter" && onClick(project)}
    >
      <div id="element_2" className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 id="element_3" className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
      <p id="element_4" className="text-gray-800 mb-4">{project.description}</p>
      <div id="element_5" className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span id="element_6"
            key={index}
            className="px-3 py-1 bg-gradient-to-r from-[#A7C7E7] to-[#F28C8C] rounded-full text-sm text-gray-900"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div id="element_7" className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
      <div id="element_8" className="bg-[#F5F5F5] shadow-2xl rounded-xl p-6 max-w-2xl w-full mx-4 relative">
        <button id="element_9"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-900 hover:text-gray-700"
          aria-label="Close modal"
        >
          <svg id="element_10"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path id="element_11"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div id="element_12" className="relative h-64 mb-6 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2 id="element_13" className="text-2xl font-bold mb-4 text-gray-900">{project.title}</h2>
        <p id="element_14" className="text-gray-800 mb-6">{project.description}</p>
        <div id="element_15" className="mb-6">
          <h3 id="element_16" className="text-xl font-semibold mb-3 text-gray-900">Outcomes</h3>
          <ul id="element_17" className="list-disc list-inside text-gray-800">
            {project.outcomes.map((outcome, index) => (
              <li id="element_18" key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
        <div id="element_19" className="flex gap-4">
          <Link
            href={project.githubUrl}
            className="flex-1 bg-gradient-to-r from-[#A7C7E7] to-[#F28C8C] text-gray-900 py-2 rounded-lg text-center hover:opacity-90 transition-opacity"
          >
            GitHub Repository
          </Link>
          <Link
            href={project.liveUrl}
            className="flex-1 bg-gradient-to-r from-[#A7C7E7] to-[#F28C8C] text-gray-900 py-2 rounded-lg text-center hover:opacity-90 transition-opacity"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  if (isLoading) {
    return (
      <div id="element_20" className="min-h-screen flex items-center justify-center">
        <div id="element_21" className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#A7C7E7]"></div>
      </div>
    );
  }

  return (
    <div id="element_22" className="container mx-auto px-4 py-16 bg-[#F5F5F5]">
      <h1 id="element_23" className="text-4xl font-bold text-center mb-12 text-gray-900">
        My Projects
      </h1>
      <div id="element_24" className="flex justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button id="element_25"
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? "bg-gradient-to-r from-[#A7C7E7] to-[#F28C8C] text-gray-900"
                : "bg-white text-gray-800 hover:bg-gray-50 shadow-md"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div id="element_26" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;