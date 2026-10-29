"use client";

import Image from "next/image";
import {
    Briefcase06Icon,
    File02Icon,
    FolderOpenIcon,
    GitMergeIcon,
    Rocket01Icon,
    SentIcon,
    StarIcon,
    UserIcon,
    WavingHand01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import siteMetadata from "@/utils/site.meta.data";

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
                className="absolute -top-32 right-8 md:right-12 w-0.5 h-32 bg-gray-800 z-0"
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
                            src="/IMG_0004.jpeg"
                            alt="Samuel Avatar"
                            fill
                            sizes="64px"
                            quality={90}
                            priority
                            className="object-cover"
                        />
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                        <a
                            href={siteMetadata.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 sm:gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-[10px] sm:text-xs font-bold px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-sm transition transform hover:-translate-y-0.5 whitespace-nowrap"
                        >
                            <HugeiconsIcon icon={File02Icon} size={12} strokeWidth={2} className="text-gray-700 shrink-0" /> VIEW RESUME
                        </a>
                        <a
                            href="mailto:hello@samueltuoyo.com"
                            className="flex items-center gap-1 sm:gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 whitespace-nowrap"
                        >
                            <HugeiconsIcon icon={SentIcon} size={12} strokeWidth={2} className="shrink-0" /> CONTACT ME
                        </a>
                    </div>
                </div>

                <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-1 tracking-tight flex items-center gap-2">
                    Hey! <HugeiconsIcon icon={WavingHand01Icon} size={30} strokeWidth={1.6} className="animate-wave origin-bottom-right inline-block" />, I’m Samuel
                </h1>

                <div className="flex items-center gap-2 text-gray-500 font-medium mb-4 text-sm">
                    <HugeiconsIcon icon={Briefcase06Icon} size={16} strokeWidth={1.7} />
                    Full Stack Engineer
                </div>

                <p className="max-w-xl text-base text-gray-600 mb-6 leading-normal font-light">
                    Passionate about helping companies make more money through software. Whether that means
                    launching products, improving customer experiences, or automating costly work.
                </p>

                <div className="flex flex-wrap gap-2 w-full">
                    {[
                        {
                            label: "PROJECTS",
                            icon: <HugeiconsIcon icon={FolderOpenIcon} size={12} strokeWidth={2} />,
                            id: "innovations",
                        },
                        {
                            label: "LANDING PAGES",
                            icon: <HugeiconsIcon icon={Rocket01Icon} size={12} strokeWidth={2} />,
                            id: "landing-pages",
                        },
                        {
                            label: "MY PROCESS",
                            icon: <HugeiconsIcon icon={GitMergeIcon} size={12} strokeWidth={2} />,
                            id: "process",
                        },
                        {
                            label: "SKILLS",
                            icon: <HugeiconsIcon icon={StarIcon} size={12} strokeWidth={2} />,
                            id: "skills",
                        },
                        {
                            label: "ABOUT ME",
                            icon: <HugeiconsIcon icon={UserIcon} size={12} strokeWidth={2} />,
                            id: "about",
                        },
                    ].map((btn, idx) => (
                        <a
                            key={idx}
                            href={`#${btn.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(btn.id);
                            }}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition text-xs font-bold text-gray-600 hover:text-gray-900 bg-white shadow-sm"
                        >
                            {btn.icon}
                            {btn.label}
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
};
