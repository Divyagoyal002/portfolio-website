'use client';
import React, { useState, useEffect, useMemo } from "react";
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

const projects: Project[] = [
  {
    id: 1,
    title: "Face Similarity Detector",
    description:
      "Face similarity detection app using deep learning for identity verification and onboarding. Combines MTCNN and InceptionResnetV1 with hybrid similarity metrics for accurate results.",
    image: "/face_similarity_detector.jpeg",
    category: "AI/ML",
    technologies: ["Python", "PyTorch", "MTCNN", "InceptionResnetV1 (VGGFace2)", "NumPy", "SciPy"],
    githubUrl: "https://github.com/Divyagoyal002/FaceRecognition",
    liveUrl: "https://localhost8501-nbr4vayxnegzzuyms6wpeb.streamlit.app/",
    outcomes: ["150% faster onboarding", "Improved accuracy", "Real-time face matching"],
  },
  {
    id: 2,
    title: "Sentiment Analysis",
    description:
      "Real-time Twitter sentiment analyzer using TextBlob and Tweepy to classify tweets and visualize trends. Helps marketing teams monitor brand sentiment and optimize campaigns.",
    image: "/sentiment_analysis.png",
    category: "AI/ML",
    technologies: ["Python", "TextBlob", "Tweepy", "Plotly"],
    githubUrl: "https://github.com/Divyagoyal002/Sentimental-Analysis",
    liveUrl: "https://ai-generator-demo.com",
    outcomes: ["Real-time sentiment tracking", "Improved brand insights", "Automated analytics"],
  },
  {
    id: 3,
    title: "Entity Extraction",
    description:
      "ML model that extracts product attributes like weight, brand, and price from images using OCR and NLP preprocessing. Optimized text cleaning boosts prediction accuracy.",
    image: "/entity_extraction.jpeg",
    category: "AI/ML",
    technologies: ["Python", "EasyOCR"],
    githubUrl: "https://github.com/Divyagoyal002/Sentimental-Analysis",
    liveUrl: "https://ai-generator-demo.com",
    outcomes: ["High OCR accuracy", "Optimized data pipeline", "Lightweight deployment"],
  },
  {
    id: 4,
    title: "Demand & Supply Analysis",
    description:
      "Data analytics dashboard for supply-demand modeling using Python and Plotly. Helps visualize trends, correlations, and forecast demands efficiently.",
    image: "/demand_supply.png",
    category: "Business Intelligence & Analytics",
    technologies: ["Python", "Pandas", "Plotly"],
    githubUrl: "https://github.com/Divyagoyal002/Demand-and-Supply-analysis",
    liveUrl: "https://ai-generator-demo.com",
    outcomes: ["Actionable insights", "Improved forecasting", "Interactive dashboards"],
  },
];

const ProjectCard: React.FC<{ project: Project; onClick: (project: Project) => void }> = ({
  project,
  onClick,
}) => (
  <div
    onClick={() => onClick(project)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick(project)}
    className="bg-[#F5F5F5] shadow-md rounded-xl p-4 hover:scale-105 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F28C8C]"
  >
    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
      <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
    <p className="text-gray-800 mb-4 text-sm">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-2">
      {project.technologies.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gradient-to-r from-[#A7C7E7] to-[#F28C8C] rounded-full text-sm text-gray-900"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-[#F5F5F5] rounded-xl shadow-2xl p-6 max-w-2xl w-full relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-900 hover:text-[#F28C8C] transition-colors"
        aria-label="Close modal"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
        <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} />
      </div>

      <h2 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h2>
      <p className="text-gray-800 mb-5">{project.description}</p>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">Outcomes</h3>
        <ul className="list-disc list-inside text-gray-800 text-sm">
          {project.outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <Link
          href={project.githubUrl}
          className="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-[#A7C7E7] to-[#F28C8C] text-gray-900 font-medium hover:opacity-90 transition-opacity"
        >
          GitHub
        </Link>
        <Link
          href={project.liveUrl}
          className="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-[#A7C7E7] to-[#F28C8C] text-gray-900 font-medium hover:opacity-90 transition-opacity"
        >
          Live Demo
        </Link>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], []);
  const filteredProjects = useMemo(
    () => (selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)),
    [selectedCategory]
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#A7C7E7]"></div>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16 bg-[#F5F5F5]">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">My Projects</h1>

      {/* Category Filters */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? "bg-gradient-to-r from-[#A7C7E7] to-[#F28C8C] text-gray-900"
                : "bg-white text-gray-800 hover:bg-gray-100 shadow-md"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
