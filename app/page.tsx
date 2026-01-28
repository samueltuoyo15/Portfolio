import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

  return (
    <div className="min-h-screen flex flex-col items-center pb-20 overflow-x-hidden">
      {/* Navbar */}
      <nav className="w-full max-w-6xl px-6 py-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          {/* Logo Icon Placeholder */}
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold font-serif">
            S.
          </div>
          <span className="font-bold text-lg tracking-tight">Samuel Tuoyo</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://docs.google.com/document/d/1CeUx8_iCz5PftUVo1Rg243orG3NLjlTv_u3YX334Th4/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:opacity-70 transition border border-gray-200 px-4 py-2 rounded-full"
            aria-label="View Resume"
          >
            📄 VIEW RESUME
          </Link>

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
      <main className="w-full max-w-4xl px-4 mt-12 mb-20">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
          {/* Decorative background gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-white to-gray-50 -z-10"></div>

          {/* Avatar */}
          <div className="relative mb-6 group">
            {/* Hanging Ropes Effect */}
            <div className="absolute -top-32 left-10 md:left-20 w-1 h-48 bg-gray-200 z-0"></div>
            <div className="absolute -top-32 right-10 md:right-20 w-1 h-48 bg-gray-200 z-0"></div>

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-28 h-28 md:w-32 md:h-32 bg-gray-100 rounded-2xl overflow-hidden shadow-sm border-4 border-white">
              <Image
                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Dummy&backgroundColor=e5e7eb"
                alt="Samuel Avatar"
                fill
                className="object-cover"
              />
            </div>
            <a href="mailto:samueltuoyo9082@gmail.com" className="absolute -right-20 top-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-6 hover:rotate-0 transition cursor-pointer z-20">
              CONTACT ME
            </a>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl text-gray-900 mb-2 leading-tight">
            Hi! <span className="inline-block origin-bottom-right">👋</span>, I’m Samuel
          </h1>
          <div className="flex items-center gap-2 text-gray-600 font-medium mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            Senior Backend Software Engineer
          </div>

          <p className="max-w-xl text-lg text-gray-500 mb-10 leading-relaxed">
            Welcome to my corner of the internet where I architect high-concurrency systems and secure APIs. I turn complex problems into scalable code.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "CASE STUDIES", icon: "folder" },
              { label: "MY PROCESS", icon: "git-merge" },
              { label: "SKILLS", icon: "star" },
              { label: "ABOUT ME", icon: "user" },
            ].map((btn, idx) => (
              <button
                key={idx}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition text-sm font-bold text-gray-700 bg-white shadow-sm"
              >
                {/* Simple Icon placeholder logic */}
                {btn.icon === "folder" && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>}
                {btn.icon === "git-merge" && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                {btn.icon === "star" && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
                {btn.icon === "user" && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Snapshot of Creations */}
      <section className="w-full max-w-6xl px-4 mb-24">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-handwriting text-gray-500 -rotate-2">Snapshot of my creations</h2>
          <svg className="w-12 h-12 text-gray-400 rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
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

      {/* Selected Case Studies Banner (Mockup) */}
      <section className="w-full max-w-5xl px-4 mb-32">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">📂</span>
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
          <span className="text-3xl">🧾</span>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900">My Recipe For Success...</h2>
        </div>

        <div className="space-y-12">
          {[
            { title: "Understand the requirements", desc: "I start by digging deep, creating sequence diagrams, and understanding the core domain logic before a single line of code is written.", icon: "🧠" },
            { title: "Architect Scalable Systems", desc: "This is where the fun begins. I design DB schemas (Postgres/Mongo), plan microservices, and ensure data integrity.", icon: "📐" },
            { title: "Secure & Optimize", desc: "Implementing RBAC, strict guardrails, and optimizing queries. I ensure 99.9% reliability and sub-100ms response times.", icon: "🔒" },
            { title: "Deploy & Observability", desc: "Dockerizing applications, setting up CI/CD pipelines, and monitoring with Prometheus/Grafana for real-time insights.", icon: "🚀" }
          ].map((step, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition">
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
                Hi, My name is <strong className="text-black">Samuel Oritseweyinmi Tuoyo</strong>. I'm a Senior Backend Software Engineer with years of experience crafting high-performance digital systems.
              </p>
              <p className="text-gray-600 mb-6 font-sans">
                I focus on creating seamless APIs that solve real problems. When I'm not coding, you'll catch me exploring new tech, optimizing database queries, or enjoying quality time with family.
              </p>

              {/* Lined paper skills */}
              <div className="bg-white border border-gray-200 p-6 shadow-inner relative mt-8" style={{ backgroundImage: "linear-gradient(#e5e7eb 1px, transparent 1px)", backgroundSize: "100% 2rem" }}>
                <h4 className="font-bold mb-4 bg-white/80 inline-block px-2">My Skillsets include:</h4>
                <ul className="space-y-4 pt-1 font-handwriting text-blue-700 text-lg">
                  <li className="flex items-center gap-2">✅ NestJS & Node.js Architecture</li>
                  <li className="flex items-center gap-2">✅ Microservices & RBAC Systems</li>
                  <li className="flex items-center gap-2">✅ Payment Orchestration (Paystack)</li>
                  <li className="flex items-center gap-2">✅ AWS & Docker Deployment</li>
                  <li className="flex items-center gap-2">✅ Redis & Real-time Sync</li>
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
            <a href="mailto:samueltuoyo9082@gmail.com" className="inline-block bg-white text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition">
              Let's Talk 🚀
            </a>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 bg-black text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-3 cursor-pointer hover:scale-105 transition">
        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
        <span className="font-bold text-sm">Available for work</span>
      </div>
    </div>
  );
}
