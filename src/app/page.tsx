"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRef } from "react"
import { InteractiveGameboy } from "@/components/interactive-gameboy"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#f8e8c0]">
      {/* Hero Section */}
      <section className="container px-4 py-12 mx-auto">
        <div className="relative p-8 bg-white border-4 border-black rounded-lg pixel-border">
          <div className="absolute inset-0 bg-white border-2 border-black rounded-lg -z-10 translate-x-2 translate-y-2" />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold pixel-font">Welcome to my Portfolio</h1>
            <p className="text-lg pixel-font">Press START to begin your journey!</p>
            <Button className="pixel-button" bg-black text-white onClick={scrollToAbout}>
              START
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="container px-4 py-12 mx-auto">
        <div className="relative p-8 bg-white border-4 border-black rounded-lg pixel-border">
          <div className="absolute inset-0 bg-white border-2 border-black rounded-lg -z-10 translate-x-2 translate-y-2" />
          <h2 className="text-3xl font-bold pixel-font mb-6">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Headshot"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold pixel-font mb-2">Mohamed Traore</h3>
              <p className="text-sm pixel-font text-center">B2B SaaS Professional / AI Integrator</p>
            </div>

            <div className="space-y-4">
              <section>
                <h4 className="text-lg font-bold pixel-font mb-2">Biography</h4>
                <p className="text-sm pixel-font">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-bold pixel-font mb-2">Location</h4>
                <p className="text-sm pixel-font">United States</p>
              </section>

              <section>
                <h4 className="text-lg font-bold pixel-font mb-2">Interests</h4>
                <ul className="list-disc list-inside text-sm pixel-font">
                  <li>Basketball</li>
                  <li>Computer Vision</li>
                  <li>Computer Vision</li>
                  <li>Traveling</li>
                </ul>
              </section>
            </div>
          </div>

          <section className="mt-6">
            <h4 className="text-lg font-bold pixel-font mb-2">Work History</h4>
            <div className="space-y-4">
              <div className="p-4 bg-white border-2 border-black rounded-lg">
                <h5 className="font-bold pixel-font">Founder/Owner at Ratio Labs</h5>
                <p className="text-sm pixel-font">2023 - Present</p>
                <p className="text-sm pixel-font mt-2">Led development of AI-powered analytics platform.</p>
              </div>
              <div className="p-4 bg-white border-2 border-black rounded-lg">
                <h5 className="font-bold pixel-font">Sales Manager at StartupX</h5>
                <p className="text-sm pixel-font">March 2024 - Sept 2024</p>
                <p className="text-sm pixel-font mt-2">
                  Developed and maintained client websites and web applications.
                </p>
              </div>
              <div className="p-4 bg-white border-2 border-black rounded-lg">
                <h5 className="font-bold pixel-font">StartupY</h5>
                <p className="text-sm pixel-font mt-2">A computer vision startup focused on providing a platform and developer tools for quickly building</p>
                <p className="text-sm pixel-font">and iterating on highly performant computer vision models.</p>
                <p className="text-sm pixel-font">May 2021 - June 2023</p>
                <h6 className="font-bold pixel-font">ML Solutions Engineer</h5>
                <p className="text-sm pixel-font">Feb 2023 - June 2023</p>
                <h6 className="font-bold pixel-font">Developer Experience</h5>
                <p className="text-sm pixel-font">April 2022 - Feb 2023</p>
                <h6 className="font-bold pixel-font">BDR & Product Specialist</h5>
                <p className="text-sm pixel-font">Oct 2021 - April 2022</p>
                <h6 className="font-bold pixel-font">Sales Development Representative (SDR)</h5>
                <p className="text-sm pixel-font">May 2021 - Oct 2021</p>

              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="container px-4 py-12 mx-auto">
        <div className="relative p-8 bg-white border-4 border-black rounded-lg pixel-border">
          <div className="absolute inset-0 bg-white border-2 border-black rounded-lg -z-10 translate-x-2 translate-y-2" />
          <h2 className="text-3xl font-bold pixel-font mb-6">Skills</h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-bold pixel-font mb-4">Education</h3>
              <div className="p-4 bg-white border-2 border-black rounded-lg">
                <h4 className="font-bold pixel-font">Environmental Science: Hydroscience Focus</h4>
                <p className="text-sm pixel-font">The University of Iowa, 2018</p>
              </div>
            </section>

            {/* <section>
              <h3 className="text-2xl font-bold pixel-font mb-4">Certifications</h3>
              <ul className="list-disc list-inside text-sm pixel-font space-y-2">
                <li>AWS Certified Solutions Architect</li>
                <li>Google Cloud Professional Data Engineer</li>
                <li>Microsoft Certified: Azure Developer Associate</li>
              </ul>
            </section> */}

            <section>
              <h3 className="text-2xl font-bold pixel-font mb-4">Programming Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-2 bg-white border-2 border-black rounded-lg text-center">
                  <p className="font-bold pixel-font">Python</p>
                </div>
                <div className="p-2 bg-white border-2 border-black rounded-lg text-center">
                  <p className="font-bold pixel-font">JavaScript</p>
                </div>
                <div className="p-2 bg-white border-2 border-black rounded-lg text-center">
                  <p className="font-bold pixel-font">TypeScript</p>
                </div>
                <div className="p-2 bg-white border-2 border-black rounded-lg text-center">
                  <p className="font-bold pixel-font">NextJS</p>
                </div>
                <div className="p-2 bg-white border-2 border-black rounded-lg text-center">
                  <p className="font-bold pixel-font">React</p>
                </div>
                <div className="p-2 bg-white border-2 border-black rounded-lg text-center">
                  <p className="font-bold pixel-font">Node.js</p>
                </div>
                <div className="p-2 bg-white border-2 border-black rounded-lg text-center">
                  <p className="font-bold pixel-font">SQL</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold pixel-font mb-4">Tools and Software</h3>
              <ul className="list-disc list-inside text-sm pixel-font space-y-2">
                <li>Git</li>
                <li>Docker</li>
                <li>Jira</li>
                <li>Adobe Creative Suite</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold pixel-font mb-4">Soft Skills</h3>
              <ul className="list-disc list-inside text-sm pixel-font space-y-2">
                <li>Team Leadership</li>
                <li>Project Management</li>
                <li>Problem Solving</li>
                <li>Communication</li>
                <li>Adaptability</li>
                <li>Time Management</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      {/* Interactive Game Boy Decoration */}
      <InteractiveGameboy />
    </div>
  )
}
