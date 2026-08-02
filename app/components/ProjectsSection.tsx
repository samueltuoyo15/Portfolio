"use client";

import { useState } from "react";
import { Cpu, ExternalLink, X, BookOpen, AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";
import { SkeletonImage } from "./SkeletonImage";

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="group relative rounded-3xl overflow-hidden shadow-lg flex flex-col bg-white border border-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                        {/* Full edge-to-edge thumbnail with Skeleton Image */}
                        <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-gray-900 border-b border-gray-100">
                            <SkeletonImage
                                src={project.image}
                                alt={project.title}
                                dark
                                containerClassName="w-full h-full"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        </div>

                        <div
                            className={`p-6 flex flex-col justify-between flex-1 ${project.color} text-white`}
                        >
                            <div className="mb-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-bold font-serif">{project.title}</h3>
                                    <div className="p-1.5 bg-white/10 rounded-full backdrop-blur-md">
                                        <Cpu className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                {project.role && (
                                    <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/15 text-white/90 mb-3">
                                        {project.role}
                                    </span>
                                )}
                                <p className="text-sm text-white/90 leading-relaxed font-light">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="space-y-4 pt-2">
                                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                                    <div className="flex flex-wrap gap-1.5 max-w-[55%]">
                                        {project.tech.slice(0, 3).map((t) => (
                                            <span
                                                key={t}
                                                className="px-2.5 py-0.5 bg-white/20 backdrop-blur rounded-full text-[10px] font-semibold tracking-wide"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-3">
                                        {project.details && (
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="inline-flex items-center gap-1.5 bg-white text-gray-900 text-xs font-extrabold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md hover:bg-gray-100 hover:shadow-lg transition transform hover:-translate-y-0.5"
                                            >
                                                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
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
                                                <ExternalLink className="w-3.5 h-3.5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Premium Case Study Modal */}
            {selectedProject && selectedProject.details && (
                <div
                    className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-[#0E131F] text-white rounded-3xl max-w-3xl w-full max-h-[88vh] flex flex-col border border-white/10 shadow-2xl overflow-hidden relative my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="p-6 pb-4 border-b border-white/10 flex items-start justify-between bg-[#151D2F] shrink-0">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 border border-emerald-500/30 px-3 py-0.5 rounded-full">
                                        <BookOpen className="w-3 h-3" /> Case Study
                                    </span>
                                    {selectedProject.role && (
                                        <span className="text-xs font-semibold text-gray-400 bg-white/5 px-2.5 py-0.5 rounded-full">
                                            {selectedProject.role}
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                                    {selectedProject.title}
                                </h2>
                            </div>

                            <button
                                onClick={() => setSelectedProject(null)}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="overflow-y-auto custom-scrollbar p-6 sm:p-8 space-y-6 flex-1">
                            {/* Browser Mockup Preview */}
                            <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-xl">
                                <div className="bg-[#1A2234] px-4 py-2.5 border-b border-white/10 flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                                        <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                                    </div>
                                    <div className="bg-black/40 rounded-full px-3 py-1 text-[11px] text-gray-400 font-mono flex-1 text-center truncate">
                                        {selectedProject.link || selectedProject.title.toLowerCase() + ".com"}
                                    </div>
                                </div>
                                <SkeletonImage
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    dark
                                    containerClassName="w-full h-56 sm:h-72"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Case Study Sections */}
                            <div className="space-y-4 text-sm text-gray-200">
                                <div className="bg-[#151D2F] p-5 rounded-2xl border border-amber-500/20 shadow-sm">
                                    <h3 className="font-bold text-amber-400 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" /> The Problem
                                    </h3>
                                    <p className="leading-relaxed font-light text-gray-300">
                                        {selectedProject.details.problem}
                                    </p>
                                </div>

                                <div className="bg-[#151D2F] p-5 rounded-2xl border border-blue-500/20 shadow-sm">
                                    <h3 className="font-bold text-blue-400 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" /> The Solution
                                    </h3>
                                    <p className="leading-relaxed font-light text-gray-300">
                                        {selectedProject.details.solution}
                                    </p>
                                </div>

                                <div className="bg-[#151D2F] p-5 rounded-2xl border border-emerald-500/20 shadow-sm">
                                    <h3 className="font-bold text-emerald-400 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4" /> Measured Impact & Results
                                    </h3>
                                    <p className="leading-relaxed font-light text-gray-300">
                                        {selectedProject.details.impact}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t border-white/10 bg-[#151D2F] flex flex-wrap items-center justify-between gap-4 shrink-0">
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs font-semibold text-gray-200"
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
                                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs px-5 py-2.5 rounded-full transition shadow-lg hover:shadow-emerald-500/20"
                                >
                                    View Live App
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
