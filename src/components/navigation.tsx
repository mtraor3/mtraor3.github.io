"use client"

import { useState } from "react"
import Link from "next/link"
import { PortfolioBattle } from "./portfolio-battle"
import { ContactBattle } from "./contact-battle"

const links = [
  { href: "/portfolio/#portfolio", label: "Portfolio" },
  { href: "/portfolio/#about", label: "About" },
  { href: "/portfolio/#skills", label: "Skills" },
  { href: "/portfolio/#contact", label: "Contact" },
]

export function Navigation() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

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
            <Link href="/" className="text-2xl font-bold pixel-font relative transition-transform hover:-translate-y-1 active:translate-y-0
                  hover:shadow-[0_4px_0_0_rgba(0,0,0,1)] active:shadow-[0_0_0_0_rgba(0,0,0,1)]">
              MOHAMED_TRAORE
            </Link>
            <div className="hidden md:flex md:items-center md:space-x-8">
            {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
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
            <button 
              className="p-2 md:hidden"
              onClick={handleMobileMenuToggle}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <span className="sr-only">Open menu</span>
              <div className="w-6 h-6 pixel-hamburger" />
            </button>
          </div>
          {/* Mobile menu dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t-2 border-black bg-[#f8e8c0] pb-4">
              <div className="flex flex-col space-y-2 px-4 pt-2">
                {links.map(({ label }) => (
                  <button
                    key={label}
                    onClick={() => {
                      handleClick(label)
                      setIsMobileMenuOpen(false)
                    }}
                    className="px-4 py-2 text-sm font-medium text-black transition-colors pixel-font hover:bg-black hover:text-white text-left"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
      <PortfolioBattle isOpen={isPortfolioOpen} onClose={() => setIsPortfolioOpen(false)} />
      <ContactBattle isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
