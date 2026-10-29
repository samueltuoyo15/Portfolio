"use client";

import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SkeletonImage } from "./SkeletonImage";
import { TechBadge } from "./TechBadge";

interface Project {
    title: string;
    kicker: string;
    subtitle: string;
    story: string;
    tech: string[];
    link?: string;
    image: string;
    imageAspectRatio: string;
}

const projects: Project[] = [
    {
        title: "Myhappr",
        kicker: "01 · Founding Engineer",
        subtitle: "Creator support and micro-tipping platform for African creators.",
        story: "Most global platforms make it hard or impossible for African creators to receive support from fans abroad. With Myhappr, fans anywhere can send tips, and creators can withdraw the money directly into their local bank accounts in Nigeria and Ghana without extra fees. The platform has already processed more than ₦1 million in payments.",
        tech: ["Flutterwave", "NestJS", "Prisma", "TypeScript"],
        link: "https://myhappr.com/",
        image: "/myhapprscr.png",
        imageAspectRatio: "1920 / 1280",
    },
    {
        title: "SendLiberty",
        kicker: "02 · Creator",
        subtitle: "Send app emails without buying or setting up a custom domain.",
        story: "Many cloud hosts block normal email sending, while other services make you buy and verify a domain first. SendLiberty lets developers connect a Google account and start sending useful emails in minutes. It has already secured its first two paying users.",
        tech: ["Next.js", "Google OAuth", "MongoDB", "TypeScript"],
        link: "https://sendliberty.com/",
        image: "/sendliberty.png",
        imageAspectRatio: "1875 / 978",
    },
    {
        title: "Clud",
        kicker: "03 · Creator",
        subtitle: "Know when an API change could break your app.",
        story: "Clud watches the connections between your software products. When a change could break an app or website, it warns your team in Slack or by email before customers run into problems.",
        tech: ["OpenAPI", "Slack", "TypeScript", "Node.js"],
        link: "https://clud.samueltuoyo.com/",
        image: "/clud.png",
        imageAspectRatio: "1920 / 1080",
    },
    {
        title: "Dokugen",
        kicker: "04 · Open Source Creator",
        subtitle: "A free tool that writes clear project documentation with AI.",
        story: "Writing and updating project guides takes time, so it is often skipped. Dokugen studies a code project and creates clean READMEs, useful overviews, and visual system diagrams. More than 250 developers have used it to generate 2,700+ READMEs and almost 3,000 total results, and the project has earned more than 300 GitHub stars.",
        tech: ["TypeScript", "Google Gemini", "Docker"],
        link: "https://dokugen.samueltuoyo.com/",
        image: "/Generate Readme - Language & Framework agnostic.png",
        imageAspectRatio: "1280 / 640",
    },
    {
        title: "SaveIt",
        kicker: "05 · Full Stack Engineer",
        subtitle: "Fast video downloader for social media platforms.",
        story: "Most video download sites are filled with broken popups and spammy ads. SaveIt is a clean, simple web app that downloads high-definition videos from YouTube, TikTok, Instagram, and Twitter in seconds.",
        tech: ["Go", "FFmpeg", "Docker", "HTMX"],
        link: "https://saveit.samueltuoyo.com/",
        image: "/everdownload.png",
        imageAspectRatio: "1919 / 1016",
    },
    {
        title: "Pulse",
        kicker: "06 · Open Source Creator",
        subtitle: "A fast, distraction-free reader for all your news feeds.",
        story: "Keeping up with the news usually means jumping between noisy websites and apps. Pulse brings stories from different sources into one clean, ad-free reader and loads them quickly, so people can spend more time reading and less time searching.",
        tech: ["Go", "HTMX", "Docker", "RSS"],
        link: "https://pulse.samueltuoyo.com/",
        image: "/pulse.png",
        imageAspectRatio: "1897 / 1080",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="innovations" className="w-full max-w-6xl px-4 mb-24">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-4xl md:text-6xl font-handwriting text-gray-500 -rotate-2">
                    Products I&apos;ve Built and Grown
                </h2>
            </div>

            <div className="flex flex-col divide-y divide-gray-200/80">
                {projects.map((project, i) => {
                    const isEven = i % 2 === 1;
                    return (
                        <div
                            key={i}
                            className="py-12 md:py-16 first:pt-2 last:pb-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
                        >
                            {/* Narrative Column */}
                            <div
                                className={`flex flex-col items-start text-left ${
                                    isEven ? "lg:order-2" : "lg:order-1"
                                }`}
                            >
                                <span className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest mb-2">
                                    {project.kicker}
                                </span>
                                <h3 className="font-sans text-3xl sm:text-4xl text-gray-900 font-semibold mb-3 tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-sm sm:text-base font-medium text-gray-700 leading-snug mb-3">
                                    {project.subtitle}
                                </p>
                                <p className="text-sm font-light text-gray-600 leading-relaxed mb-6">
                                    {project.story}
                                </p>

                                {/* Tech Stack Badges */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <TechBadge key={t} name={t} />
                                    ))}
                                </div>

                                {/* Action Button */}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 bg-[#5D5FEF] hover:bg-[#4E50E5] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition transform hover:-translate-y-0.5"
                                    >
                                        Live site
                                        <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={2} />
                                    </a>
                                )}
                            </div>

                            {/* Browser Frame Preview Column */}
                            <div
                                className={`w-full ${
                                    isEven ? "lg:order-1" : "lg:order-2"
                                }`}
                            >
                                <div className="rounded-2xl overflow-hidden border border-gray-200/90 bg-white shadow-sm hover:shadow-md transition duration-300">
                                    {/* Browser Chrome Header */}
                                    <div className="bg-[#F3F4F6] px-4 py-2.5 border-b border-gray-200 flex items-center gap-3">
                                        <div className="flex gap-1.5">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                                        </div>
                                        <div className="bg-white border border-gray-200/80 rounded-md px-3 py-1 text-[11px] text-gray-500 font-mono flex-1 text-center truncate">
                                            {project.link
                                                ? project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")
                                                : project.title.toLowerCase() + ".com"}
                                        </div>
                                    </div>

                                    {/* Edge-to-Edge Screenshot */}
                                    <div
                                        className="relative w-full overflow-hidden bg-gray-50"
                                        style={{ aspectRatio: project.imageAspectRatio }}
                                    >
                                        <SkeletonImage
                                            src={project.image}
                                            alt={project.title}
                                            containerClassName="w-full h-full"
                                            className="block w-full h-full object-cover object-top hover:scale-[1.01] transition duration-500"
                                            sizes="(max-width: 1024px) calc(100vw - 32px), 550px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
