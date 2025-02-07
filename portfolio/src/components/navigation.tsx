"use client"

import { useState } from "react"
import Link from "next/link"
import { PortfolioBattle } from "./portfolio-battle"
import { ContactBattle } from "./contact-battle"

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const handleClick = (label: string) => {
    if (label === "Portfolio") {
      setIsPortfolioOpen(true)
    } else if (label === "About" || label === "Skills") {
      const section = document.querySelector(`#${label.toLowerCase()}`)
      section?.scrollIntoView({ behavior: "smooth" })
    } else if (label === "Contact") {
      setIsContactOpen(true)
    }
  }

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[#f8e8c0] border-b-4 border-black">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold pixel-font hover:text-gray-700">
              PLAYER_1
            </Link>
            <div className="hidden md:flex md:items-center md:space-x-8">
              {links.map(({ href, label }) => (
                <button
                  key={label}
                  onClick={() => handleClick(label)}
                  className="px-4 py-2 text-sm font-medium text-black transition-colors pixel-font hover:bg-black hover:text-white"
                >
                  {label}
                </button>
              ))}
            </div>
            <button className="p-2 md:hidden">
              <span className="sr-only">Open menu</span>
              <div className="w-6 h-6 pixel-hamburger" />
            </button>
          </div>
        </div>
      </nav>
      <PortfolioBattle isOpen={isPortfolioOpen} onClose={() => setIsPortfolioOpen(false)} />
      <ContactBattle isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
