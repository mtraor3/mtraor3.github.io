"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  category: string
  link: string
}

const categories = ["Computer Vision", "LLMs", "Machine Learning", "Websites", "Other"]

const projects: Project[] = [
  // Computer Vision
  {
    title: "CV Project 1",
    description: "Image classification system for rare plant species",
    category: "Computer Vision",
    link: "#",
  },
  {
    title: "CV Project 2",
    description: "Real-time facial emotion recognition for UX testing",
    category: "Computer Vision",
    link: "#",
  },
  {
    title: "CV Project 3",
    description: "Automated quality control system for manufacturing",
    category: "Computer Vision",
    link: "#",
  },
  {
    title: "CV Project 4",
    description: "Traffic flow optimization using CCTV footage analysis",
    category: "Computer Vision",
    link: "#",
  },
  {
    title: "CV Project 5",
    description: "AR-based interior design visualization tool",
    category: "Computer Vision",
    link: "#",
  },
  {
    title: "CV Project 6",
    description: "Medical imaging analysis for early disease detection",
    category: "Computer Vision",
    link: "#",
  },

  // LLMs
  { title: "LLM Project 1", description: "Customizable chatbot for customer service", category: "LLMs", link: "#" },
  { title: "LLM Project 2", description: "Automated content summarization tool", category: "LLMs", link: "#" },
  { title: "LLM Project 3", description: "Multilingual translation system", category: "LLMs", link: "#" },
  { title: "LLM Project 4", description: "Code generation assistant for developers", category: "LLMs", link: "#" },
  { title: "LLM Project 5", description: "Sentiment analysis tool for social media", category: "LLMs", link: "#" },
  { title: "LLM Project 6", description: "Legal document analysis and summary generator", category: "LLMs", link: "#" },

  // Machine Learning
  {
    title: "ML Project 1",
    description: "Predictive maintenance system for industrial equipment",
    category: "Machine Learning",
    link: "#",
  },
  {
    title: "ML Project 2",
    description: "Fraud detection algorithm for financial transactions",
    category: "Machine Learning",
    link: "#",
  },
  {
    title: "ML Project 3",
    description: "Personalized recommendation engine for e-commerce",
    category: "Machine Learning",
    link: "#",
  },
  {
    title: "ML Project 4",
    description: "Weather prediction model using historical data",
    category: "Machine Learning",
    link: "#",
  },
  {
    title: "ML Project 5",
    description: "Automated resume screening system for HR",
    category: "Machine Learning",
    link: "#",
  },
  {
    title: "ML Project 6",
    description: "Energy consumption optimization for smart homes",
    category: "Machine Learning",
    link: "#",
  },

  // Websites
  { title: "Web Project 1", description: "Responsive portfolio website for artists", category: "Websites", link: "#" },
  {
    title: "Web Project 2",
    description: "E-learning platform with interactive courses",
    category: "Websites",
    link: "#",
  },
  {
    title: "Web Project 3",
    description: "Real-time collaboration tool for remote teams",
    category: "Websites",
    link: "#",
  },
  {
    title: "Web Project 4",
    description: "Booking system for local service providers",
    category: "Websites",
    link: "#",
  },
  {
    title: "Web Project 5",
    description: "Social media dashboard for content creators",
    category: "Websites",
    link: "#",
  },
  {
    title: "Web Project 6",
    description: "Customizable web app template for startups",
    category: "Websites",
    link: "#",
  },

  // Other
  {
    title: "Other Project 1",
    description: "IoT-based smart agriculture monitoring system",
    category: "Other",
    link: "#",
  },
  {
    title: "Other Project 2",
    description: "Blockchain-powered supply chain tracking solution",
    category: "Other",
    link: "#",
  },
  {
    title: "Other Project 3",
    description: "Virtual reality training simulator for surgeons",
    category: "Other",
    link: "#",
  },
  { title: "Other Project 4", description: "Gamified fitness app with AR challenges", category: "Other", link: "#" },
  {
    title: "Other Project 5",
    description: "Drone-based environmental monitoring system",
    category: "Other",
    link: "#",
  },
  { title: "Other Project 6", description: "AI-powered personal finance advisor", category: "Other", link: "#" },
]

export function PortfolioBattle({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 15 }}
            className="w-full max-w-4xl p-6 bg-gameboy-yellow rounded-lg shadow-lg max-h-[80vh] overflow-hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold pixel-font">Portfolio</h2>
              <Button onClick={onClose} className="pixel-button">
                Close
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`pixel-button ${selectedCategory === category ? "bg-gameboy-button text-white" : ""}`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {selectedCategory && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid gap-6 mt-4 md:grid-cols-2 overflow-y-auto pr-4"
                style={{ maxHeight: "calc(80vh - 200px)" }}
              >
                {projects
                  .filter((project) => project.category === selectedCategory)
                  .map((project) => (
                    <div key={project.title} className="p-4 bg-white border-4 border-black rounded-lg pixel-border">
                      <h3 className="mb-2 text-lg font-bold pixel-font">{project.title}</h3>
                      <p className="mb-4 pixel-font text-sm">{project.description}</p>
                      <Button asChild className="pixel-button">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                        </a>
                      </Button>
                    </div>
                  ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
