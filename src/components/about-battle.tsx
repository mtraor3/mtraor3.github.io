"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutBattle({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
            className="w-full max-w-4xl p-6 bg-gameboy-yellow rounded-lg shadow-lg max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold pixel-font">About Me</h2>
              <Button onClick={onClose} className="pixel-button">
                Close
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-192 h-192 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/mohamed-traore-headshot.svg"
                    alt="Mohamed Traore Headshot Image"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold pixel-font mb-2">John Doe</h3>
              </div>

              <div className="space-y-4">
                <section>
                  <h4 className="text-lg font-bold pixel-font mb-2">Biography</h4>
                  <p className="text-sm pixel-font">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-bold pixel-font mb-2">Location</h4>
                  <p className="text-sm pixel-font">San Francisco, CA</p>
                </section>

                <section>
                  <h4 className="text-lg font-bold pixel-font mb-2">Interests</h4>
                  <ul className="list-disc list-inside text-sm pixel-font">
                    <li>Machine Learning</li>
                    <li>Web Development</li>
                    <li>Open Source Contribution</li>
                    <li>Hiking</li>
                  </ul>
                </section>
              </div>
            </div>

            <section className="mt-6">
              <h4 className="text-lg font-bold pixel-font mb-2">Work History</h4>
              <div className="space-y-4">
                <div className="p-4 bg-white border-2 border-black rounded-lg">
                  <h5 className="font-bold pixel-font">Senior Developer at TechCorp</h5>
                  <p className="text-sm pixel-font">2018 - Present</p>
                  <p className="text-sm pixel-font mt-2">Led development of AI-powered analytics platform.</p>
                </div>
                <div className="p-4 bg-white border-2 border-black rounded-lg">
                  <h5 className="font-bold pixel-font">Full Stack Developer at WebSolutions</h5>
                  <p className="text-sm pixel-font">2015 - 2018</p>
                  <p className="text-sm pixel-font mt-2">
                    Developed and maintained client websites and web applications.
                  </p>
                </div>
                <div className="p-4 bg-white border-2 border-black rounded-lg">
                  <h5 className="font-bold pixel-font">Junior Developer at StartupX</h5>
                  <p className="text-sm pixel-font">2013 - 2015</p>
                  <p className="text-sm pixel-font mt-2">Assisted in building MVP for social media management tool.</p>
                </div>
              </div>
            </section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
