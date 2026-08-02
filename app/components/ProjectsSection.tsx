"use client";

import { useState } from "react";
import { Cpu, ExternalLink, X, BookOpen } from "lucide-react";

interface ProjectDetails {
    problem: string;
    solution: string;
    impact: string;
}

interface Project {
    title: string;
    role?: string;
    desc: string;
    tech: string[];
    color: string;
    link?: string;
    image: string;
    details?: ProjectDetails;
}

const projects: Project[] = [
    {
        title: "SendLib",
        desc: "Zero-Config Transactional Email API Proxy for Developers.",
        tech: ["Next.js", "Google OAuth", "MongoDB", "TypeScript"],
        color: "bg-[#090d16]",
        link: "https://sendlib.samueltuoyo.com/",
        image: "/sendlib.png",
        details: {
            problem:
                "Cloud hosts like Railway and Render block outbound SMTP ports, while platforms like Resend require strict domain DNS verification and have low free limits.",
            solution:
                "A zero-config REST API proxy that lets you send transactional emails (signup verifications, magic links, notifications) using your Gmail product account with no domain or DNS setup needed.",
            impact:
                "Sends transactional emails directly through your product's connected Google accounts via OAuth 2.0 (gmail.send scope). Up to 500 emails/day per connected account and 2,000/day per Workspace account, with REST API key management and 7-day analytics.",
        },
    },
    {
        title: "SaveIt",
        desc: "Download videos from YouTube, TikTok, Instagram, Twitter, Reddit, Twitch & Vimeo in seconds.",
        tech: ["Htmx", "Go", "Docker", "FFmpeg"],
        color: "bg-[#7f1d1d]",
        link: "https://saveit.samueltuoyo.com/",
        image: "/everdownload.png",
    },
    {
        title: "AR Object Scanner",
        desc: "Browser-based AR object detection app overlaying YOLOv8 bounding boxes & labels in real time.",
        tech: ["TypeScript", "Vite", "YOLOv8"],
        color: "bg-[#0f172a]",
        link: "https://ar-object-scanner.vercel.app/",
        image: "/ar-object-scanner.png",
    },
    {
        title: "Dokugen",
        desc: "Open-Source AI README Generator powered by Google Gemini CLI.",
        tech: ["Google Gemini", "CLI", "Typescript"],
        color: "bg-[#1E1E1E]",
        link: "https://dokugen.samueltuoyo.com/",
        image: "/Generate Readme - Language & Framework agnostic.png",
        details: {
            problem:
                "Writing and maintaining README files is tedious and often skipped, leaving projects undocumented and hard to adopt.",
            solution:
                "An open-source CLI tool (npm & pip) that scans your codebase and generates a detailed, accurate README in seconds using Google Gemini. Supports any language or framework with zero config.",
            impact:
                "301 GitHub stars. Active users across 25+ pages on the leaderboard. Ships features including smart updates, AI commit messages, license generation, and system design diagram generation.",
        },
    },
    {
        title: "Happr",
        role: "Co-Architect",
        desc: "Fintech Creator-Support Infrastructure for African Creators.",
        tech: ["Flutterwave", "NestJS", "Prisma"],
        color: "bg-[#7C3AED]",
        link: "https://myhappr.com/",
        image: "/myhapprscr.png",
        details: {
            problem:
                "African creators can't easily receive financial support from fans. Most global platforms don't support local African bank payouts.",
            solution:
                "A creator tip platform where fans pay globally (card, bank, M-Pesa) and creators withdraw directly to their local African bank account. Free plan keeps 100% of tips, settled via Flutterwave.",
            impact:
                "Live product, registered company (RC: 9481569). Real users sending and receiving support. Pro plan available at $2 with 0% supporter fees and creator analytics.",
        },
    },
];

export const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="innovations" className="w-full max-w-6xl px-4 mb-24">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-4xl md:text-6xl font-handwriting text-gray-500 -rotate-2">
                    Projects
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="group relative rounded-3xl overflow-hidden shadow-lg flex flex-col bg-white border border-gray-100 transition hover:-translate-y-1"
                    >
                        {/* Full thumbnail container with object-contain object-top so full screenshot displays properly */}
                        <div className="h-52 sm:h-60 relative overflow-hidden bg-slate-950 flex items-center justify-center p-2 border-b border-white/10">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-contain object-top group-hover:scale-[1.02] transition duration-500 rounded-lg shadow-md"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                        </div>

                        <div
                            className={`p-6 flex flex-col justify-between flex-1 ${project.color} text-white`}
                        >
                            <div className="mb-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold font-serif">{project.title}</h3>
                                    <div className="p-1.5 bg-white/10 rounded-full backdrop-blur-md">
                                        <Cpu className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                {project.role && (
                                    <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/15 text-white/90 mb-2">
                                        {project.role}
                                    </span>
                                )}
                                <p className="text-sm text-white/90 leading-relaxed font-light mt-1">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="space-y-4 pt-2">
                                <div className="flex justify-between items-center pt-3 border-t border-white/10">
                                    <div className="flex flex-wrap gap-1.5 max-w-[60%]">
                                        {project.tech.slice(0, 3).map((t) => (
                                            <span
                                                key={t}
                                                className="px-2 py-0.5 bg-white/20 backdrop-blur rounded-full text-[10px] font-semibold"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {project.details && (
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
                                            >
                                                <BookOpen className="w-3 h-3" />
                                                Case Study
                                            </button>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                                            >
                                                View Live
                                                <ExternalLink className="w-3 h-3" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Case Study Modal */}
            {selectedProject && selectedProject.details && (
                <div
                    className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-slate-900 text-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl p-6 sm:p-8 relative my-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                            aria-label="Close Case Study"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-400 uppercase mb-2">
                            <BookOpen className="w-4 h-4" /> Case Study
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-1">
                            {selectedProject.title}
                        </h2>

                        {selectedProject.role && (
                            <p className="text-xs text-white/70 font-semibold mb-4">
                                Role: {selectedProject.role}
                            </p>
                        )}

                        <div className="h-48 sm:h-64 relative overflow-hidden bg-black/50 rounded-2xl p-2 my-4 border border-white/10 flex items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-contain object-top rounded-lg"
                            />
                        </div>

                        <div className="space-y-4 my-6 text-sm text-white/90">
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                <h4 className="font-bold text-amber-400 mb-1">Problem</h4>
                                <p className="leading-relaxed font-light">{selectedProject.details.problem}</p>
                            </div>

                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                <h4 className="font-bold text-blue-400 mb-1">Solution</h4>
                                <p className="leading-relaxed font-light">{selectedProject.details.solution}</p>
                            </div>

                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                <h4 className="font-bold text-emerald-400 mb-1">Impact</h4>
                                <p className="leading-relaxed font-light">{selectedProject.details.impact}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 bg-white/15 rounded-full text-xs font-semibold text-white/90"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {selectedProject.link && (
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xs px-5 py-2.5 rounded-full transition shadow-lg"
                                >
                                    View Live Project
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
