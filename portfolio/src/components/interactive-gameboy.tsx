"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function InteractiveGameboy() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return isVisible ? (
    <motion.div
      className="fixed bottom-4 right-4 w-24 h-24 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={scrollToTop}
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gameboy-yellow-4Mo7OnlilEdXasRnc5bjRpAiOwTYOZ.png"
        alt="Game Boy Decoration"
        width={96}
        height={96}
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300" />
      <div className="absolute top-[22%] left-[22%] w-[56%] h-[38%] flex items-center justify-center">
        {isHovered ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
            className="text-[8px] text-black font-pixel text-center leading-tight"
          >
            Scroll to Top
          </motion.div>
        ) : (
          <ArrowUp className="w-4 h-4 text-black" />
        )}
      </div>
    </motion.div>
  ) : null
}
