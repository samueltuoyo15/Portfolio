"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import {
  FileText,
  FolderOpen,
  GitMerge,
  Star,
  User,
  Hand,
  Rocket,
  Cpu,
  ShieldCheck,
  Server,
  Briefcase,
  Send,
} from "lucide-react";

const TypewriterText = ({
  text,
  speed = 50,
}: {
  text: string;
  speed?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      setDisplayText("");
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(() => text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed);
      return () => clearInterval(timer);
    } else {
      setDisplayText("");
    }
  }, [isVisible, text, speed]);

  return (
    <span ref={elementRef}>
      {displayText}
      <span className="animate-pulse text-gray-400">|</span>
    </span>
  );
};

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      desc: "AI-Driven Marketing & Content Orchestration SaaS",
      tech: ["Golang", "AI/ML", "Concurrency"],
      color: "bg-[#2563EB]",
      details: {
        problem:
          "High-growth companies struggle to maintain consistent social media presence due to manual overhead.",
        solution:
          "High-concurrency Golang orchestration engine automating end-to-end lifecycle of marketing content.",
        impact:
          "Eliminated manual content cycles, allowing 10x advertising output without increasing headcount.",
      },
    },
    {
      title: "Happr",
      role: "Co-Architect",
      desc: "Fintech Creator-Support Infrastructure",
      tech: ["Paystack", "BullMQ", "Prisma"],
      color: "bg-[#7C3AED]",
      details: {
        problem:
          "African creators face high barriers to entry with international platforms and payout delays.",
        solution:
          "High-performance tipping platform using NestJS, Paystack & Prisma for zero-friction payouts.",
        impact:
          "Enabled instant financial settlements and secure transaction verification for 10,000+ users.",
      },
    },
    {
      title: "Dokugen",
      role: "Creator",
      desc: "Open-Source AI README Generator",
      tech: ["Google Gemini", "CLI", "Typescript"],
      color: "bg-[#1E1E1E]",
      details: {
        problem:
          "Developers often neglect documentation, leading to low repository adoption.",
        solution:
          "AI-driven CLI tool leveraging Gemini LLM to automate professional README generation.",
        impact:
          "Reduced 'Time-to-Documentation' by 90% for open-source projects.",
      },
    },
  ];

  const creations = [
    "/G2HPzD8XEAAr1NB.jpg",
    "/G2HPzPXXAAAaTuW.jpg",
    "/G2HPzPNXMAAhco3.jpg",
    "/Screenshot (477).png",
    "/Screenshot 2026-02-24 114128.png",
    "/Screenshot 2026-02-24 151602.png",
    "/Gxp2xEsXYAAwe2y.jpg",
    "/Gxp3MG5XQAAiFCw.jpg",
    "/Screenshot (248).png",
    "/G2HPzRuWUAAP6Ou.jpg",
    "/Screenshot (245).png",
    "/Screenshot (323).png",
    "/Screenshot (631).png",
    "/Screenshot (647).png",
    "/Screenshot (689).png",
    "/Screenshot (708).png",
    "/Screenshot (791).png",
    "/Screenshot 2025-12-26 094915.png",
    "/Screenshot 2026-01-13 123413.png",
    "/Screenshot 2026-01-13 124034.png",
    "/Screenshot 2026-01-14 114206.png",
    "/Screenshot 2026-01-14 135132.png",
  ];

  const articles = [
    {
      title: "Redis 101 for Backend Engineers",
      link: "https://medium.com/codex/redis-101-for-backend-engineers-443325d75e67",
    },
    {
      title: "BullMQ 101: Jobs, Workers, Queues",
      link: "https://medium.com/javascript-in-plain-english/bullmq-101-jobs-workers-queues-retries-delays-and-dead-letter-queues-less-theory-more-1db103df3be5",
    },
    {
      title: "Why Running Workers Separately Doesn't Make Them Microservices",
      link: "https://medium.com/codex/why-running-workers-separately-doesnt-make-them-microservices-08f29b0a31cc",
    },
    {
      title: "Payment Gateways 101",
      link: "https://medium.com/stackademic/payment-gateways-101-psps-settlements-webhooks-reconciliation-drift-and-chargebacks-explained-787f0d0c195a",
    },
    {
      title: "Signed Uploads: Cloudinary",
      link: "https://medium.com/gitconnected/signed-uploads-the-cloudinary-equivalent-of-s3-presigned-urls-conceptually-5a6f102447ff",
    },
    {
      title: "Docker 101 for Backend/DevOps",
      link: "https://medium.com/codex/docker-101-for-backend-devops-engineers-no-theory-just-practice-39fd2fcf4826",
    },
    {
      title: "How I Built a RBAC System for a Marketplace API",
      link: "https://medium.com/codex/how-i-built-a-rbac-system-for-a-marketplace-api-using-nestjs-passport-jwt-postgresql-and-typeorm-e1b7d0647ab8",
    },
    {
      title:
        "Supabase RLS: The Feature That's Quietly Stressing Most Frontend Devs",
      link: "https://medium.com/codex/supabase-rls-the-feature-thats-quietly-stressing-most-frontend-devs-a79e665ef5a6",
    },
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
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const articlesScrollRef = useRef<HTMLDivElement>(null);
  const [isArticlesDragging, setIsArticlesDragging] = useState(false);
  const [articlesStartX, setArticlesStartX] = useState(0);
  const [articlesScrollLeft, setArticlesScrollLeft] = useState(0);

  const handleArticlesMouseDown = (e: React.MouseEvent) => {
    if (!articlesScrollRef.current) return;
    setIsArticlesDragging(true);
    setArticlesStartX(e.pageX - articlesScrollRef.current.offsetLeft);
    setArticlesScrollLeft(articlesScrollRef.current.scrollLeft);
  };

  const handleArticlesMouseLeave = () => setIsArticlesDragging(false);
  const handleArticlesMouseUp = () => setIsArticlesDragging(false);

  const handleArticlesMouseMove = (e: React.MouseEvent) => {
    if (!isArticlesDragging || !articlesScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - articlesScrollRef.current.offsetLeft;
    const walk = (x - articlesStartX) * 2;
    articlesScrollRef.current.scrollLeft = articlesScrollLeft - walk;
  };

  const otherProjects = projects.filter(
    (p) => !["Kovana Care", "Nexus Botix"].includes(p.title),
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pb-20 font-sans overflow-x-hidden w-full">
      <nav
        className={`sticky top-0 z-50 w-full flex justify-center transition-all duration-300 ${isScrolled ? "bg-white/60 backdrop-blur-md border-b border-white/20 shadow-sm" : "bg-transparent"}`}
      >
        <div className="w-full max-w-6xl px-10 md:px-3 py-4 flex justify-center md:justify-between items-center">
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden md:inline-flex w-10 h-10 rounded-full overflow-hidden border border-gray-200 relative">
              <Image
                src="/avatar.jpg"
                alt="Samuel Avatar"
                fill
                className="object-cover"
              />
            </div>
            <span className="hidden md:inline-flex font-bold text-lg tracking-tight">
              Samuel Tuoyo
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="hidden md:flex items-center gap-2 text-sm font-medium hover:opacity-70 transition border border-gray-200 px-4 py-2 rounded-full"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" /> VIEW RESUME
            </button>

            <div className="flex gap-2">
              <SocialIcon
                url="https://github.com/samueltuoyo15"
                bgColor="#000"
                fgColor="#fff"
                target="_blank"
                style={{ height: 40, width: 40 }}
                className="hover:scale-110 transition-transform"
              />
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
        </div>
      </nav>

      <main className="w-full max-w-170 px-4 mt-0 mb-2 relative z-10">
        <div className="absolute -top-32 left-8 md:left-12 w-0.5 h-32 bg-gray-800/80 z-0"></div>
        <div className="absolute -top-32 right-8 md:right-20 w-0.5 h-32 bg-gray-800/80 z-0"></div>

        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur border border-gray-200 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm z-20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-medium text-gray-600">
            Available for{" "}
            <span className="font-bold text-gray-900">full-time</span> roles.
          </span>
        </div>

        <div className="bg-white rounded-3xl p-5 pb-8 shadow-2xl border border-gray-100 flex flex-col items-start relative overflow-hidden z-10 w-full">
          <div className="w-full flex justify-between items-start mb-4">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:scale-105 transition duration-300">
              <Image
                src="/avatar.jpg"
                alt="Samuel Avatar"
                fill
                className="object-cover"
              />
            </div>

            <a
              href="mailto:samueltuoyo9082@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 mt-4 md:mt-0"
            >
              <Send className="w-3 h-3" /> CONTACT ME
            </a>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-1 tracking-tight flex items-center gap-2">
            Hi!{" "}
            <Hand className="animate-wave origin-bottom-right inline-block" />
            <span className="hidden md:inline-flex">,</span> I’m Samuel
          </h1>

          <div className="flex items-center gap-2 text-gray-500 font-medium mb-4 text-sm">
            <Briefcase className="w-4 h-4" />
            Full Stack Software Developer
          </div>

          <p className="max-w-xl text-base text-gray-600 mb-6 leading-normal font-light">
            Full Stack Web Developer based in{" "}
            <strong className="text-gray-800">Warri, Delta State, Nigeria</strong>
            {" "}— I build high-performance websites, web apps, and APIs for
            businesses and startups across Nigeria and beyond.
          </p>

          <div className="flex flex-wrap gap-2 w-full">
            {[
              {
                label: "TECHNICAL INNOVATIONS",
                icon: <FolderOpen className="w-3 h-3" />,
                id: "innovations",
              },
              {
                label: "MY PROCESS",
                icon: <GitMerge className="w-3 h-3" />,
                id: "process",
              },
              {
                label: "SKILLS",
                icon: <Star className="w-3 h-3" />,
                id: "skills",
              },
              {
                label: "ABOUT ME",
                icon: <User className="w-3 h-3" />,
                id: "about",
              },
            ].map((btn, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(btn.id)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition text-xs font-bold text-gray-600 hover:text-gray-900 bg-white shadow-sm"
              >
                {btn.icon}
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </main>

      <section className="w-full mb-24 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 mb-12 pt-8">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-handwriting text-gray-400 -rotate-2">
              Snapshot of my creations
              <svg
                className="absolute -bottom-10 -right-20 w-24 h-24 text-gray-300 rotate-12 hidden md:block"
                viewBox="0 0 200 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M20 20 C 80 10, 120 40, 100 80"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
                <path
                  d="M90 70 L 100 80 L 115 75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
                className="relative h-100 md:h-125 shrink-0 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.4)] bg-gray-100 border-8 border-white group"
              >
                <img
                  src={src}
                  alt={`Creation ${idx}`}
                  className="h-full w-auto object-cover pointer-events-none"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="innovations" className="w-full max-w-6xl px-4 mb-24">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl md:text-6xl font-handwriting text-gray-500 -rotate-2">
            Technical Innovations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {otherProjects.map((project, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl overflow-hidden shadow-lg h-[30rem] bg-white border border-gray-100 transition hover:-translate-y-1`}
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src={
                    project.title === "Happr"
                      ? "/happr.png"
                      : project.title === "Dokugen"
                        ? `/Generate Readme - Language & Framework agnostic.png`
                        : "/motion-pipe.png"
                  }
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              <div
                className={`p-6 flex flex-col justify-between h-auto min-h-56 ${project.color} text-white`}
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-serif">
                      {project.title}
                    </h3>
                    <div className="p-1.5 bg-white/10 rounded-full backdrop-blur-md">
                      <Cpu className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-white/80 font-medium text-sm mb-3">
                    {project.role}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2 text-xs text-white/90">
                    <p>
                      <strong className="text-white">Problem:</strong>{" "}
                      {project.details?.problem}
                    </p>
                    <p>
                      <strong className="text-white">Solution:</strong>{" "}
                      {project.details?.solution}
                    </p>
                    <p>
                      <strong className="text-white">Impact:</strong>{" "}
                      {project.details?.impact}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-white/20 backdrop-blur rounded-full text-[10px] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full mb-24 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 mb-12 pt-8">
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-5xl font-handwriting text-gray-400 rotate-1">
              My recent articles
            </h2>
          </div>
        </div>

        <div
          ref={articlesScrollRef}
          className="w-full overflow-x-auto pb-12 cursor-grab active:cursor-grabbing hide-scrollbar px-4 md:px-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          onMouseDown={handleArticlesMouseDown}
          onMouseLeave={handleArticlesMouseLeave}
          onMouseUp={handleArticlesMouseUp}
          onMouseMove={handleArticlesMouseMove}
        >
          <div className="flex gap-6 md:gap-8 px-4 md:px-20 w-max mx-auto select-none">
            {articles.map((article, idx) => (
              <a
                key={idx}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-auto aspect-4/3 w-[320px] md:w-100 shrink-0 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white border border-gray-100 group flex flex-col active:scale-95"
              >
                <div className="h-fit relative overflow-hidden bg-gray-100">
                  <img
                    src={`https://api.microlink.io/?url=${encodeURIComponent(article.link)}&screenshot=true&meta=false&embed=screenshot.url`}
                    alt={article.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 group-active:bg-black/20 transition duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                    Medium
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="w-full max-w-4xl px-4 mb-32">
        <div className="flex items-center gap-3 mb-10">
          <FileText className="w-8 h-8 text-gray-700" />
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 min-h-[1.2em]">
            <TypewriterText text="My Recipe For Success..." />
          </h2>
        </div>

        <div className="space-y-8">
          {[
            {
              title: "Understand the requirements",
              desc: "I start by digging deep, creating sequence diagrams, and understanding the core domain logic before a single line of code is written.",
              icon: <Cpu className="w-6 h-6 text-gray-700" />,
            },
            {
              title: "Architect Scalable Systems",
              desc: "This is where the fun begins. I design DB schemas (Postgres/MongoDB/Sqlite), and ensure data integrity.",
              icon: <Server className="w-6 h-6 text-gray-700" />,
            },
            {
              title: "Secure & Optimize",
              desc: "Implementing RBAC, strict guardrails, and optimizing queries. I ensure 99.9% reliability.",
              icon: <ShieldCheck className="w-6 h-6 text-gray-700" />,
            },
            {
              title: "Deploy & Observability",
              desc: "Dockerizing applications, setting up CI/CD pipelines, and monitoring with Prometheus/Grafana for real-time insights.",
              icon: <Rocket className="w-6 h-6 text-gray-700" />,
            },
          ].map((step, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="shrink-0 w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                {step.icon}
              </div>
              <div className="pb-8 border-b border-gray-300 w-full">
                <h4 className="font-bold text-gray-900 text-lg mb-2 min-h-[1.5em]">
                  <TypewriterText text={step.title} speed={15} />
                </h4>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="w-full max-w-6xl px-4 relative">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-gray-900 mb-2 h-[1.2em]">
            <TypewriterText text={'"Wait a minute... who are you?"'} />
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="bg-[#Fdfcf8] p-6 md:p-12 rounded-sm shadow-xl border border-gray-200 relative rotate-1 max-w-5xl mx-auto">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 -rotate-2 shadow-sm"></div>
          <div className="absolute top-10 -right-4 w-8 h-24 bg-yellow-200/80 rotate-3 shadow-sm"></div>
          <div className="absolute -top-4 -right-2 md:-top-12 md:-right-12 w-40 h-40 md:w-52 md:h-52 bg-white p-2 md:p-3 shadow-xl transform rotate-6 border border-gray-200 z-20 block transition hover:scale-110 hover:rotate-0 duration-300">
            <div className="relative w-full h-full bg-gray-800 overflow-hidden filter sepia-[.2]">
              <Image
                src="/laptop.jpg"
                alt="My Workstation"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-4 md:w-6 h-24 md:h-16 bg-[#eecd86] opacity-90 shadow-sm transform -rotate-2"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="bg-white p-3 shadow-md -rotate-3 border border-gray-100">
                <div className="relative aspect-3/4  bg-gray-200 overflow-hidden">
                  <Image
                    src="/avatar.jpg"
                    alt="Samuel Photo"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center font-handwriting mt-2 text-gray-400 text-sm">
                  Samuel T.
                </p>
              </div>
            </div>

            <div className="w-full md:w-2/3 md:pr-16">
              <p className="text-gray-700 leading-loose font-serif text-lg mb-6">
                Hi, My name is{" "}
                <strong className="text-black">Samuel Tuoyo</strong>. I&apos;m a
                Full Stack Software Developer with years of experience crafting
                high-performance digital systems.
              </p>
              <p className="text-gray-600 mb-6 font-sans">
                I focus on creating seamless APIs that solve real problems. When
                I&apos;m not coding, you&apos;ll catch me exploring new skills,
                skimming through insightful articles around software
                development, and occasionally watching movies.
              </p>

              <div
                id="skills"
                className="relative mt-12 mb-8 mx-auto max-w-lg transform rotate-1 transition hover:rotate-0 duration-300"
              >
                <div className="absolute -top-3 -left-3 w-12 h-6 bg-[#eecd86]/90 shadow-sm transform -rotate-45 z-20"></div>
                <div className="absolute -top-3 -right-3 w-12 h-6 bg-[#eecd86]/90 shadow-sm transform rotate-45 z-20"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-6 bg-[#eecd86]/90 shadow-sm transform rotate-45 z-20"></div>
                <div className="absolute -bottom-3 -right-3 w-12 h-6 bg-[#eecd86]/90 shadow-sm transform -rotate-45 z-20"></div>

                <div
                  className="bg-[#fdfdfd] text-gray-800 p-8 shadow-xl relative z-10 font-handwriting text-2xl leading-relaxed"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(transparent, transparent 31px, #94a3b8 32px)",
                    backgroundAttachment: "local",
                  }}
                >
                  <h4 className="font-sans font-bold text-gray-900 text-lg mb-6 -mt-2">
                    My Skillsets include:
                  </h4>

                  <ul className="space-y-1 list-none ml-2">
                    <li className="flex items-center gap-3">
                      <span className="text-green-600 font-bold text-xl">
                        ✓
                      </span>{" "}
                      Frontend: Next.js, React, Tailwind CSS
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-600 font-bold text-xl">
                        ✓
                      </span>{" "}
                      Backend: Node.js (NestJS, Express), WebSockets, SSE
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-600 font-bold text-xl">
                        ✓
                      </span>{" "}
                      Desktop: Electron JS
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-600 font-bold text-xl">
                        ✓
                      </span>{" "}
                      DB & Caching: PostgreSQL, MongoDB, Redis, SQLite, BullMQ
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-600 font-bold text-xl">
                        ✓
                      </span>{" "}
                      Architecture: Distributed Systems, RBAC, Multi-tenancy
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-600 font-bold text-xl">
                        ✓
                      </span>{" "}
                      DevOps: Docker, Docker Compose, Nginx, AWS,
                      Prometheus/Grafana
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-600 font-bold text-xl">
                        ✓
                      </span>{" "}
                      Security: OAuth 2.0, OpenID Connect, Paystack/Stripe
                    </li>
                  </ul>

                  <div className="mt-8 pt-4 border-t border-dashed border-gray-300/50 text-gray-500 text-xl">
                    PS: check my{" "}
                    <button
                      onClick={() => setIsResumeOpen(true)}
                      className="underline decoration-wavy decoration-red-400 text-gray-800 hover:text-red-500 font-bold cursor-pointer"
                    >
                      resume
                    </button>{" "}
                    for more info.
                  </div>

                  <div className="mt-8 flex flex-col items-center">
                    <div className="relative w-48 h-48 rounded-xl overflow-hidden mb-4 shadow-md bg-gray-100 rotate-2 hover:rotate-0 transition duration-300">
                      <Image
                        src="/laptop-girl-praying.jpg"
                        alt="Faith and Code"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="font-handwriting text-gray-700 text-lg text-center leading-relaxed italic max-w-sm mx-auto">
                      &quot;Silver and gold I have none, all I have is my skill,
                      99% faith, My laptop, my phone and data. So help me God
                      amen.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Location — critical for local SEO */}
      <section className="w-full max-w-6xl px-4 mb-20" aria-label="Services and Location">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
              <Server className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Web & App Development</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Custom websites, web applications, e-commerce platforms, and
              landing pages built for businesses in{" "}
              <strong>Warri, Delta State</strong> and across Nigeria.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-5">
              <Cpu className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">API & Backend Systems</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Scalable REST APIs, payment integration (Paystack, Stripe),
              authentication systems, and database architecture for Nigerian
              startups and businesses.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Tech Consulting</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Software architecture reviews, technical planning, and digital
              transformation consulting for businesses in Warri,{" "}
              <strong>Delta State</strong>, and the South-South region.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl px-4 mb-20 text-center">
        <div className="bg-[#111] text-white rounded-3xl p-12 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">
              Need a website or web app in Warri?
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              I&apos;m a web developer based in{" "}
              <span className="text-white font-semibold">Warri, Delta State</span>{" "}
              — let&apos;s build something robust, secure, and scalable for your
              business. Currently available for new projects.
            </p>
            <a
              href="mailto:samueltuoyo9082@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition"
            >
              Let&apos;s Talk <Rocket className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {isResumeOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsResumeOpen(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-lg">My Resume</h3>
              <button
                onClick={() => setIsResumeOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-full transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
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

      <footer className="w-full py-8 text-center text-gray-500 text-sm font-medium">
        <address className="not-italic mb-2 text-xs text-gray-400">
          Samuel Tuoyo · Web Developer ·{" "}
          <span itemProp="addressLocality">Warri</span>,{" "}
          <span itemProp="addressRegion">Delta State</span>,{" "}
          <span itemProp="addressCountry">Nigeria</span> ·{" "}
          <a href="mailto:samueltuoyo9082@gmail.com" className="hover:text-gray-600 transition">
            samueltuoyo9082@gmail.com
          </a>
        </address>
        <p>© {new Date().getFullYear()} Samuel Tuoyo. All rights reserved.</p>
      </footer>
    </div>
  );
}
