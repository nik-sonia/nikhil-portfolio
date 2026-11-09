import "./App.css";

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import About from "./components/About";
import Skills from "./components/Skills";
// import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Languages from "./components/Languages";
import Footer from "./components/Footer";
import { StickyScrollRevealDemo } from "./components/sticky-scroll-reveal";
import { GlowingEffectDemoSecond } from "./components/glowing-effect";
import Contact from "./components/Contact";
import About from "./components/About";
import { InfiniteMovingCardsDemo }  from "./components/InfiniteMovingCardsDemo";
import ScrollTextAnimation from "./components/ScrollTextAnimation";
import { AuroraBackground } from "./components/ui/aurora-background";
const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <Hero />
        <StickyScrollRevealDemo />
        <ScrollTextAnimation/>
        {/* <About /> */}
        <GlowingEffectDemoSecond />
        <InfiniteMovingCardsDemo/>
        <Experience />
        <Certifications />
        <Languages />
        <Contact />
        {/* <AuroraBackground/> */}
        
      </main>
      <Footer />
    </div>
  );
};

export default App;
