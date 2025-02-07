"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Github, LinkedIn } from '@icons-pack/react-simple-icons'

export function ContactBattle({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
            className="w-full max-w-md p-6 bg-gameboy-yellow rounded-lg shadow-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold pixel-font">Contact</h2>
              <Button onClick={onClose} className="pixel-button">
                Close
              </Button>
            </div>

            <p className="text-center mb-6 pixel-font">Select a link below to get in touch or follow me</p>

            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600"
              >
                <LinkedIn size={32} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600"
              >
                <Github size={32} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-400"
              >
                <X size={32} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
