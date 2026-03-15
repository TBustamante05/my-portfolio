"use client";
import { useState } from "react";
import Landing from "@/components/Landing";
import styles from "../components/textures.module.css";
import Projects from "@/components/Projects";
import Profile from "@/components/Profile";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onAnimationComplete={() => setShowContent(true)}
      className={`c-inverse ${styles.blackTexture} px-4 sm:px-8 md:px-12 lg:px-24 py-8 min-h-screen`}
    >
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : -12 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>

      {/* Desktop: Two columns, Mobile: Single column */}
      <div className="max-w-8xl mx-auto lg:flex lg:gap-8">
        {/* Profile - Sticky on desktop, at bottom on mobile */}
        <aside className="hidden lg:block lg:w-[350px] lg:flex-shrink-0">
          <Profile />
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 mt-10 md:mt-0">
          <section id="home">
            <Landing />
          </section>

          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                <section id="projects">
                  <Projects />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="contact">
                  <Contact />
                </section>

                {/* Profile shown here on mobile (before footer) */}
                <div className="lg:hidden mt-16 justify-center flex">
                  <Profile />
                </div>

                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </motion.div>
  );
}