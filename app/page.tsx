"use client";

import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { CreationsMarquee } from "./components/CreationsMarquee";
import { ProjectsSection } from "./components/ProjectsSection";
import { ArticlesMarquee } from "./components/ArticlesMarquee";
import { LandingPagesSection } from "./components/LandingPagesSection";
import { ProcessSection } from "./components/ProcessSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center pb-20 font-sans w-full"
      onContextMenu={(e) => e.preventDefault()}
    >
      <Navbar />
      <HeroSection />
      <CreationsMarquee />
      <ProjectsSection />
      <ArticlesMarquee />
      <LandingPagesSection />
      <ProcessSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
