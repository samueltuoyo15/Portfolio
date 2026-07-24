"use client";

import Image from "next/image";
import { Hand, Briefcase, FolderOpen, Rocket, GitMerge, Star, User, Send } from "lucide-react";

export const HeroSection = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className="w-full max-w-[34rem] px-4 mt-0 mb-2 relative z-10">
            <div
                className="absolute -top-32 left-8 md:left-12 w-0.5 h-32 bg-gray-800 z-0"
                style={{ opacity: 0.8 }}
            ></div>
            <div
                className="absolute -top-32 right-8 md:right-20 w-0.5 h-32 bg-gray-800 z-0"
                style={{ opacity: 0.8 }}
            ></div>

            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur border border-gray-200 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm z-20">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-medium text-gray-600">
                    Available for <span className="font-bold text-gray-900">remote</span> roles.
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
                        href="mailto:hello@samueltuoyo.com"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 mt-4 md:mt-0"
                    >
                        <Send className="w-3 h-3" /> CONTACT ME
                    </a>
                </div>

                <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-1 tracking-tight flex items-center gap-2">
                    Hi! <Hand className="animate-wave origin-bottom-right inline-block" />
                    <span className="hidden md:inline-flex">,</span> I’m Samuel
                </h1>

                <div className="flex items-center gap-2 text-gray-500 font-medium mb-4 text-sm">
                    <Briefcase className="w-4 h-4" />
                    Full Stack Software Developer
                </div>

                <p className="max-w-xl text-base text-gray-600 mb-6 leading-normal font-light">
                    Full Stack Web Developer based in{" "}
                    <strong className="text-gray-800">Warri, Delta State, Nigeria</strong>, I build
                    high-performance websites, web apps, and APIs for businesses and startups across Africa
                    and beyond.
                </p>

                <div className="flex flex-wrap gap-2 w-full">
                    {[
                        {
                            label: "PROJECTS",
                            icon: <FolderOpen className="w-3 h-3" />,
                            id: "innovations",
                        },
                        {
                            label: "LANDING PAGES",
                            icon: <Rocket className="w-3 h-3" />,
                            id: "landing-pages",
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
    );
};
