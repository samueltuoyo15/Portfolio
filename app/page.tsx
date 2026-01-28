"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FileText,
  Linkedin,
  Twitter,
  PenTool,
  FolderOpen,
  GitMerge,
  Star,
  User,
  CheckCircle2,
  Rocket,
  Cpu,
  ShieldCheck,
  Server,
  Hand,
  Briefcase,
  Code2
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
      color: "bg-[#4B0082]",
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
      color: "bg-[#064E3B]",
    },
  ];

  // Split projects
  const workExperience = projects.filter(p => ["Kovana Care", "Nexus Botix"].includes(p.title));
  const otherProjects = projects.filter(p => !["Kovana Care", "Nexus Botix"].includes(p.title));

  return (
    <div className="min-h-screen flex flex-col items-center pb-20 overflow-x-hidden font-sans">
      {/* Navbar */}
      <nav className="w-full max-w-6xl px-0 py-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          {/* Logo Avatar */}
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
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:opacity-70 transition border border-gray-200 px-4 py-2 rounded-full"
            aria-label="View Resume"
          >
            📄 VIEW RESUME
          </button>

          <div className="flex gap-2">
            <Link
              href="https://linkedin.com/in/samuel-tuoyo-8568b62b6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 bg-[#0077b5] text-white rounded-lg flex items-center justify-center hover:scale-105 transition"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </Link>
            <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center hover:scale-105 transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </Link>
            <Link
              href="https://medium.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:scale-105 transition"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Selected Work Experience */}
      <section className="w-full max-w-6xl px-4 mb-24">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-handwriting text-gray-500 -rotate-2">Selected Work Experience</h2>
          <Briefcase className="w-8 h-8 text-gray-400 rotate-12" />
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
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-handwriting text-gray-500 -rotate-2">Technical Innovations</h2>
          <PenTool className="w-8 h-8 text-gray-400 rotate-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {otherProjects.map((project, i) => (
            <div key={i} className={`group relative rounded-3xl overflow-hidden shadow-lg h-80 ${project.color} text-white transition hover:-translate-y-1`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
              <div className="p-8 flex flex-col h-full justify-between relative z-10">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold font-serif">{project.title}</h3>
                    <div className="p-2 bg-white/10 rounded-full backdrop-blur-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
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

      {/* Selected Case Studies Banner (Mockup) */}
      <section className="w-full max-w-5xl px-4 mb-32">
        <div className="flex items-center gap-3 mb-6">
          <FolderOpen className="w-8 h-8 text-yellow-500" />
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Selected Case Studies</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mb-10 text-lg">
          A few handpicked projects where I share how I approach problems, design architecture, and implement high-performance solutions.
        </p>

        <div className="w-full bg-gradient-to-r from-orange-400 to-red-500 rounded-[2rem] p-6 md:p-12 relative overflow-hidden h-[500px]">
          {/* Mockup Container */}
          <div className="absolute top-10 left-10 md:left-24 right-10 md:right-24 bottom-0 bg-white shadow-2xl rounded-t-3xl p-6 md:p-10 flex flex-col items-center">
            <div className="w-full h-8 bg-gray-100 rounded-full mb-6 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="w-full h-full bg-gray-50 rounded-xl p-8 flex flex-col gap-6 overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-bold">Featured</div>
                <span className="text-gray-400 text-sm">Motion Pipe • 2025</span>
              </div>
              <h3 className="font-serif text-4xl text-gray-900">Automating Content Orchestration</h3>
              <p className="text-gray-600">
                Engineered a high-concurrency Golang engine to automate marketing lifecycles.
                Reduced manual effort by 100% and increased output by 10x using AI-driven asset generation.
              </p>
              <div className="mt-auto flex gap-4">
                <div className="h-24 w-1/3 bg-gray-200 rounded-lg"></div>
                <div className="h-24 w-1/3 bg-gray-200 rounded-lg delay-75"></div>
                <div className="h-24 w-1/3 bg-gray-200 rounded-lg delay-150"></div>
              </div>
            </div>
          </div>
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
      <section className="w-full max-w-4xl px-4 relative">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-gray-900 mb-2">"Wait a minute... who are you?"</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="bg-[#Fdfcf8] p-6 md:p-12 rounded-sm shadow-xl border border-gray-200 relative rotate-1 max-w-3xl mx-auto">
          {/* Tape effects */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 -rotate-2 shadow-sm"></div>
          <div className="absolute top-10 -right-4 w-8 h-24 bg-yellow-200/80 rotate-3 shadow-sm"></div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="bg-white p-3 shadow-md -rotate-3 border border-gray-100">
                <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden">
                  <Image
                    src="https://api.dicebear.com/9.x/avataaars/svg?seed=Samuel&clothing=blazerAndShirt&facialHair=beardMedium&top=shortCurly"
                    alt="Samuel Photo"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center font-handwriting mt-2 text-gray-400 text-sm">Samuel T.</p>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-gray-700 leading-loose font-serif text-lg mb-6">
                Hi, My name is <strong className="text-black">Samuel Oritseweyinmi Tuoyo</strong>. I'm a Backend Software Engineer with years of experience crafting high-performance digital systems.
              </p>
              <p className="text-gray-600 mb-6 font-sans">
                I focus on creating seamless APIs that solve real problems. When I'm not coding, you'll catch me exploring new tech, optimizing database queries, or enjoying quality time with family.
              </p>

              {/* Lined paper skills */}
              <div className="bg-white border border-gray-200 p-6 shadow-inner relative mt-8" style={{ backgroundImage: "linear-gradient(#e5e7eb 1px, transparent 1px)", backgroundSize: "100% 2rem" }}>
                <h4 className="font-bold mb-4 bg-white/80 inline-block px-2">My Skillsets include:</h4>
                <ul className="space-y-4 pt-1 font-handwriting text-blue-700 text-lg">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> NestJS & Node.js Architecture</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Microservices & RBAC Systems</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Payment Orchestration (Paystack)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> AWS & Docker Deployment</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Redis & Real-time Sync</li>
                </ul>
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
