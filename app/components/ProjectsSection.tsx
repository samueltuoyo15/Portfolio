"use client";

import { Cpu } from "lucide-react";

const projects = [
    {
        title: "Kovana Care",
        role: "Backend Engineer",
        desc: "Healthcare Startup | Multi-tenant RBAC System",
        tech: ["NestJS", "PostgreSQL", "Redis", "SSE"],
        color: "bg-[#1E1E1E]",
        link: "https://example.com/kovana",
    },
    {
        title: "Ever download",
        role: "Creator",
        desc: "Download Any Video, Anywhere. Paste a link from YouTube, TikTok, Instagram, Twitter, Reddit, Twitch, Vimeo and more, download in seconds.",
        tech: ["Htmx", "Go", "Docker", "FFmpeg"],
        color: "bg-[#7f1d1d]",
        link: "https://everdownload-production.up.railway.app/",
    },
    {
        title: "AR Object Scanner",
        role: "Creator",
        desc: "Browser-based AR object detection app that overlays YOLOv8-powered bounding boxes and labels in real time using your camera.",
        tech: ["TypeScript", "Vite", "YOLOv8"],
        color: "bg-[#0f172a]",
        link: "https://ar-object-scanner.vercel.app/",
    },
    {
        title: "Dokugen",
        role: "Creator",
        desc: "Open-Source AI README Generator",
        tech: ["Google Gemini", "CLI", "Typescript"],
        color: "bg-[#1E1E1E]",
        link: "https://dokugen.samueltuoyo.com/",
        details: {
            problem:
                "Developers often neglect documentation, leading to low repository adoption.",
            solution:
                "AI-driven CLI tool leveraging Gemini LLM to automate professional README generation.",
            impact:
                "Reduced 'Time-to-Documentation' by 90% for open-source projects.",
        },
    },
    {
        title: "Motion Pipe",
        role: "System Architect",
        desc: "AI-Driven Marketing & Content Orchestration SaaS",
        tech: ["Golang", "AI/ML", "Concurrency"],
        color: "bg-[#2563EB]",
        link: "https://motion-pipe.vercel.app/",
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
        link: "https://myhappr.com/",
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
        title: "Tessy Palace",
        role: "Lead Developer",
        desc: "Built a premium fashion brand website for Tessy Palace, Warri, Delta State, featuring animated galleries, luxury product showcases, and a bespoke collection display for fashion, perfumes, and accessories.",
        tech: ["Next.js", "TypeScript", "CSS"],
        color: "bg-[#8B4513]",
        link: "#",
    },
];

const otherProjects = projects.filter(
    (p) => !["Kovana Care", "Nexus Botix"].includes(p.title),
);

export const ProjectsSection = () => {
    return (
        <section id="innovations" className="w-full max-w-6xl px-4 mb-24">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-4xl md:text-6xl font-handwriting text-gray-500 -rotate-2">
                    Projects
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {otherProjects.map((project, i) => (
                    <div
                        key={i}
                        className={`group relative rounded-3xl overflow-hidden shadow-lg min-h-[30rem] h-full flex flex-col bg-white border border-gray-100 transition hover:-translate-y-1`}
                    >
                        <div className="h-64 shrink-0 relative overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={
                                    project.title === "Happr"
                                        ? "/happr.png"
                                        : project.title === "Dokugen"
                                            ? `/Generate Readme - Language & Framework agnostic.png`
                                            : project.title === "Tessy Palace"
                                                ? "/tessy-palace.png"
                                                : project.title === "Ever download"
                                                    ? "/everdownload.png"
                                                    : project.title === "AR Object Scanner"
                                                        ? "/ar-object-scanner.png"
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
                                    <h3 className="text-xl font-bold font-serif">{project.title}</h3>
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
                                    {project.details ? (
                                        <>
                                            <p>
                                                <strong className="text-white">Problem:</strong>{" "}
                                                {project.details.problem}
                                            </p>
                                            <p>
                                                <strong className="text-white">Solution:</strong>{" "}
                                                {project.details.solution}
                                            </p>
                                            <p>
                                                <strong className="text-white">Impact:</strong>{" "}
                                                {project.details.impact}
                                            </p>
                                        </>
                                    ) : (
                                        <p className="leading-relaxed">{project.desc}</p>
                                    )}
                                </div>
                                <div className="flex justify-between items-center pt-2 mt-auto border-t border-white/10">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.slice(0, 3).map((t) => (
                                            <span
                                                key={t}
                                                className="px-2 py-0.5 bg-white/20 backdrop-blur rounded-full text-[10px] font-semibold"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                                        >
                                            View Live
                                            <svg
                                                className="w-3 h-3"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
