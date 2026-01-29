"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { SocialIcon } from 'react-social-icons'
import {
  FileText,
  FolderOpen,
  GitMerge,
  Star,
  User,
  Rocket,
  Cpu,
  ShieldCheck,
  Server,
  Hand,
  Briefcase,
  Code2,
} from "lucide-react";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const projects = [
    {
      title: "Kovana Care",
      role: "Backend Engineer",
      desc: "Healthcare Startup | Multi-tenant RBAC System",
      tech: ["NestJS", "PostgreSQL", "Redis", "SSE"],
      color: "bg-[#1E1E1E]",
    },
    {
      title: "Motion Pipe",
      role: "System Architect",
      desc: "AI-Driven Marketing Orchestration SaaS",
      tech: ["Golang", "AI/ML", "Concurrency"],
      color: "bg-[#2563EB]",
    },
    {
      title: "Nexus Botix",
      role: "Backend Engineer",
      desc: "AI Chatbot Team Management System",
      tech: ["NestJS", "Swagger", "Docker"],
      color: "bg-[#0F172A]",
    },
    {
      title: "Happr",
      role: "Co-Architect",
      desc: "Fintech Creator Payout Infrastructure",
      tech: ["Paystack", "BullMQ", "Prisma"],
      color: "bg-[#7C3AED]",
    },];

  const creations = [
    "/Screenshot (245).png",
    "/G2HPzD8XEAAr1NB.jpg",
    "/Screenshot (248).png",
    "/Screenshot (323).png",
    "/G2HPzPXXAAAaTuW.jpg",
    "/G2HPzPNXMAAhco3.jpg",
    "/Screenshot (477).png",
    "/Screenshot (631).png",
    "/G2HPzRuWUAAP6Ou.jpg",
    "/Screenshot (689).png",
    "/Screenshot (791).png",
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Split projects
  const workExperience = projects.filter(p => ["Kovana Care", "Nexus Botix"].includes(p.title));
  const otherProjects = projects.filter(p => !["Kovana Care", "Nexus Botix"].includes(p.title));

  return (
    <div className="min-h-screen flex flex-col items-center pb-20 overflow-x-hidden font-sans">
      <nav className="w-full max-w-6xl px-0 py-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 relative">
            <Image
              src="/avatar.jpg"
              alt="Samuel Avatar"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-bold text-lg tracking-tight">Samuel Tuoyo</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsResumeOpen(true)}
            className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition border border-gray-200 px-4 py-2 rounded-full"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4" /> VIEW RESUME
          </button>

          <div className="flex gap-2">
            <SocialIcon
              url="https://linkedin.com/in/samuel-tuoyo-8568b62b6"
              target="_blank"
              style={{ height: 40, width: 40 }}
              className="hover:scale-110 transition-transform"
            />
            <SocialIcon
              url="https://x.com/TuoyoS26091"
              network="x"
              target="_blank"
              style={{ height: 40, width: 40 }}
              className="hover:scale-110 transition-transform"
            />
            <SocialIcon
              url="https://medium.com/@samueltuoyo9082"
              target="_blank"
              style={{ height: 40, width: 40 }}
              className="hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </nav>

      <main className="w-full max-w-2xl px-4 mt-6 mb-16 relative">
        <div className="absolute -top-32 left-12 w-0.5 h-32 bg-gray-300 z-0"></div>
        <div className="absolute -top-32 right-12 w-0.5 h-32 bg-gray-300 z-0"></div>

        <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center relative overflow-hidden z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-white to-gray-50 -z-10"></div>

          <div className="relative mb-6 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-28 h-28 md:w-32 md:h-32 bg-gray-100 rounded-2xl overflow-hidden shadow-sm border-4 border-white">
              <Image
                src="/avatar.jpg"
                alt="Samuel Avatar"
                fill
                className="object-cover"
              />
            </div>
            <a href="mailto:samueltuoyo9082@gmail.com" className="absolute -right-20 top-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-6 hover:rotate-0 transition cursor-pointer z-20">
              CONTACT ME
            </a>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-2 leading-tight flex items-center justify-center gap-3">
            Hi! <Hand className="w-10 h-10 text-yellow-500 animate-pulse origin-bottom-right" />, I’m Samuel
          </h1>
          <div className="flex items-center gap-2 text-gray-600 font-medium mb-6">
            <Code2 className="w-5 h-5" />
            Backend Software Engineer
          </div>

          <p className="max-w-xl text-lg text-gray-500 mb-10 leading-relaxed">
            Welcome to my corner of the internet where I architect high-concurrency systems and secure APIs. I turn complex problems into scalable code.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "CASE STUDIES", icon: <FolderOpen className="w-4 h-4" /> },
              { label: "MY PROCESS", icon: <GitMerge className="w-4 h-4" /> },
              { label: "SKILLS", icon: <Star className="w-4 h-4" /> },
              { label: "ABOUT ME", icon: <User className="w-4 h-4" /> },
            ].map((btn, idx) => (
              <button
                key={idx}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition text-sm font-bold text-gray-700 bg-white shadow-sm"
              >
                {btn.icon}
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Snapshot of my creations */}
      <section className="w-full mb-24 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 mb-12 pt-8">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-handwriting text-gray-400 -rotate-2">
              Snapshot of my creations
              {/* Custom Arrow */}
              <svg className="absolute -bottom-10 -right-20 w-24 h-24 text-gray-300 rotate-12 hidden md:block" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 20 C 80 10, 120 40, 100 80" strokeLinecap="round" className="animate-pulse" />
                <path d="M90 70 L 100 80 L 115 75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="w-full overflow-x-auto pb-12 cursor-grab active:cursor-grabbing hide-scrollbar px-4 md:px-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex gap-6 md:gap-8 px-4 md:px-20 w-max mx-auto select-none">
            {creations.map((src, idx) => (
              <div
                key={idx}
                className="relative h-[400px] md:h-[500px] flex-shrink-0 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.4)] bg-gray-100 border-[8px] border-white group"
              >
                {/* We use standard img tag here to allow natural aspect ratio scaling with fixed height */}
                <img
                  src={src}
                  alt={`Creation ${idx}`}
                  className="h-full w-auto object-cover pointer-events-none"
                  loading="lazy"
                />

                {/* Overlay reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Experience */}
      <section className="w-full max-w-6xl px-4 mb-24">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl md:text-6xl font-handwriting text-gray-500 -rotate-2">Selected Work Experience</h2>
          <Briefcase className="w-8 h-8 md:w-12 md:h-12 text-gray-400 rotate-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {workExperience.map((project, i) => (
            <div key={i} className={`group relative rounded-3xl overflow-hidden shadow-lg h-80 ${project.color} text-white transition hover:-translate-y-1`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
              <div className="p-8 flex flex-col h-full justify-between relative z-10">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold font-serif">{project.title}</h3>
                    <div className="p-2 bg-white/10 rounded-full backdrop-blur-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </div>
                  </div>
                  <p className="text-white/80 font-medium mb-1">{project.role}</p>
                  <p className="text-white/60 text-sm max-w-xs">{project.desc}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-semibold">{t}</span>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-white text-black font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    View Project
                  </button>
                </div>
              </div>
              {/* Abstract Circle decoration */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Personal Projects */}
      <section className="w-full max-w-6xl px-4 mb-24">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl md:text-6xl font-handwriting text-gray-500 -rotate-2">Technical Innovations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {otherProjects.map((project, i) => (
            <div key={i} className={`group relative rounded-3xl overflow-hidden shadow-lg h-[30rem] bg-white border border-gray-100 transition hover:-translate-y-1`}>
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={project.title === "Happr" ? "/happr.png" : "/motion-pipe.png"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              <div className={`p-6 flex flex-col justify-between h-56 ${project.color} text-white`}>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-serif">{project.title}</h3>
                    <div className="p-1.5 bg-white/10 rounded-full backdrop-blur-md">
                      <Cpu className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-white/80 font-medium text-sm mb-1">{project.role}</p>
                </div>

                <div className="space-y-3">
                  <p className="text-white/70 text-xs line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="px-2 py-0.5 bg-white/20 backdrop-blur rounded-full text-[10px] font-semibold">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full max-w-4xl px-4 mb-32">
        <div className="flex items-center gap-3 mb-10">
          <FileText className="w-8 h-8 text-gray-700" />
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900">My Recipe For Success...</h2>
        </div>

        <div className="space-y-12">
          {[
            { title: "Understand the requirements", desc: "I start by digging deep, creating sequence diagrams, and understanding the core domain logic before a single line of code is written.", icon: <Cpu className="w-6 h-6 text-gray-700" /> },
            { title: "Architect Scalable Systems", desc: "This is where the fun begins. I design DB schemas (Postgres/Mongo), plan microservices, and ensure data integrity.", icon: <Server className="w-6 h-6 text-gray-700" /> },
            { title: "Secure & Optimize", desc: "Implementing RBAC, strict guardrails, and optimizing queries. I ensure 99.9% reliability and sub-100ms response times.", icon: <ShieldCheck className="w-6 h-6 text-gray-700" /> },
            { title: "Deploy & Observability", desc: "Dockerizing applications, setting up CI/CD pipelines, and monitoring with Prometheus/Grafana for real-time insights.", icon: <Rocket className="w-6 h-6 text-gray-700" /> }
          ].map((step, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                {step.icon}
              </div>
              <div className="pb-8 border-b border-gray-100 w-full">
                <h4 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Me / Scrapbook */}
      <section className="w-full max-w-6xl px-4 relative">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-gray-900 mb-2">"Wait a minute... who are you?"</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="bg-[#Fdfcf8] p-6 md:p-12 rounded-sm shadow-xl border border-gray-200 relative rotate-1 max-w-5xl mx-auto">
          {/* Tape effects */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 -rotate-2 shadow-sm"></div>
          <div className="absolute top-10 -right-4 w-8 h-24 bg-yellow-200/80 rotate-3 shadow-sm"></div>

          {/* Laptop Polaroid */}
          <div className="absolute -top-12 -right-2 md:-right-12 w-52 h-52 bg-white p-3 shadow-xl transform rotate-6 border border-gray-200 z-20 hidden md:block transition hover:scale-110 hover:rotate-0 duration-300">
            <div className="relative w-full h-full bg-gray-800 overflow-hidden filter sepia-[.2]">
              <Image src="/laptop.jpg" alt="My Workstation" fill className="object-cover" />
            </div>
            {/* Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-16 bg-[#eecd86] opacity-90 shadow-sm transform -rotate-2"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="bg-white p-3 shadow-md -rotate-3 border border-gray-100">
                <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden">
                  <Image
                    src="/avatar.jpg"
                    alt="Samuel Photo"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center font-handwriting mt-2 text-gray-400 text-sm">Samuel T.</p>
              </div>
            </div>

            <div className="w-full md:w-2/3 md:pr-16">
              <p className="text-gray-700 leading-loose font-serif text-lg mb-6">
                Hi, My name is <strong className="text-black">Samuel Tuoyo</strong>. I'm a Backend Software Engineer with years of experience crafting high-performance digital systems.
              </p>
              <p className="text-gray-600 mb-6 font-sans">
                I focus on creating seamless APIs that solve real problems. When I'm not coding, you'll catch me exploring new tech, optimizing database queries.
              </p>

              {/* Realistic Paper Skills */}
              <div className="relative mt-12 mb-8 mx-auto max-w-lg transform rotate-1 transition hover:rotate-0 duration-300">
                {/* Tapes */}
                <div className="absolute -top-3 -left-3 w-12 h-6 bg-[#eecd86]/90 shadow-sm transform -rotate-45 z-20"></div>
                <div className="absolute -top-3 -right-3 w-12 h-6 bg-[#eecd86]/90 shadow-sm transform rotate-45 z-20"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-6 bg-[#eecd86]/90 shadow-sm transform rotate-45 z-20"></div>
                <div className="absolute -bottom-3 -right-3 w-12 h-6 bg-[#eecd86]/90 shadow-sm transform -rotate-45 z-20"></div>

                {/* Paper Content */}
                <div
                  className="bg-[#fdfdfd] text-gray-800 p-8 shadow-xl relative z-10 font-handwriting text-2xl leading-relaxed"
                  style={{
                    backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, #94a3b8 32px)",
                    backgroundAttachment: "local"
                  }}
                >
                  <h4 className="font-sans font-bold text-gray-900 text-lg mb-6 -mt-2">My Skillsets include:</h4>

                  <ul className="space-y-1 list-none ml-2">
                    <li className="flex items-center gap-3"><span className="text-green-600 font-bold text-xl">✓</span> NestJS & Node.js Architecture</li>
                    <li className="flex items-center gap-3"><span className="text-green-600 font-bold text-xl">✓</span> Microservices & RBAC Systems</li>
                    <li className="flex items-center gap-3"><span className="text-green-600 font-bold text-xl">✓</span> Payment Orchestration (Paystack)</li>
                    <li className="flex items-center gap-3"><span className="text-green-600 font-bold text-xl">✓</span> AWS & Docker Deployment</li>
                    <li className="flex items-center gap-3"><span className="text-green-600 font-bold text-xl">✓</span> Redis & Real-time Sync</li>
                  </ul>

                  <div className="mt-8 pt-4 border-t border-dashed border-gray-300/50 text-gray-500 text-xl">
                    PS: check my <button onClick={() => setIsResumeOpen(true)} className="underline decoration-wavy decoration-red-400 text-gray-800 hover:text-red-500 font-bold cursor-pointer">resume</button> for more info.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-4xl px-4 mb-20 text-center">
        <div className="bg-[#111] text-white rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Ready to scale your backend?</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">Let's build something robust, secure, and scalable. I am currently available for new opportunities.</p>
            <a href="mailto:samueltuoyo9082@gmail.com" className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition">
              Let's Talk <Rocket className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 bg-black text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-3 cursor-pointer hover:scale-105 transition">
        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
        <span className="font-bold text-sm">Available for work</span>
      </div>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsResumeOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-lg">My Resume</h3>
              <button onClick={() => setIsResumeOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <iframe
              src="https://docs.google.com/document/d/1CeUx8_iCz5PftUVo1Rg243orG3NLjlTv_u3YX334Th4/preview"
              className="w-full h-full"
              title="Resume"
            />
          </div>
        </div>
      )}
    </div>
  );
}
