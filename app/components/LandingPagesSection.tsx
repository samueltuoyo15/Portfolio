import { Rocket } from "lucide-react";

export const LandingPagesSection = () => {
    return (
        <section id="landing-pages" className="w-full max-w-6xl px-4 mb-24">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-4xl md:text-6xl font-handwriting text-gray-500 -rotate-2">
                    Landing Pages and Dashboard Designs <br /> I&apos;ve Brought to Life
                </h2>
            </div>
            <p className="text-gray-500 text-sm mb-10 max-w-xl">
                Pixel-perfect frontend implementations of Figma and Adobe UI designs, built
                with React, Next.js, HTML, and CSS.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {[
                    {
                        src: "/lading-page-1.png",
                        title: "Encrypted File Storage Platform",
                        tech: ["React Js", "CSS"],
                        link: "https://synapse-vault-livid.vercel.app/",
                    },
                    {
                        src: "/techcare.png",
                        title: "Tech Care Patient Dashboard",
                        tech: ["HTML", "CSS", "API"],
                        link: "https://samueltuoyo15.github.io/TechCare/",
                    },
                ].map((page, i) => (
                    <div
                        key={i}
                        className="group relative rounded-3xl overflow-hidden shadow-lg bg-white border border-gray-100 transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="relative h-56 overflow-hidden bg-gray-100">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={page.src}
                                alt={page.title}
                                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                        </div>
                        <div className="p-5 bg-[#1a1a2e] text-white flex flex-col gap-3">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold font-serif text-base">{page.title}</h3>
                                <div className="p-1.5 bg-white/10 rounded-full backdrop-blur-md">
                                    <Rocket className="w-4 h-4 text-white" />
                                </div>
                            </div>
                            <p className="text-white/60 text-xs">Adobe UI to Production</p>
                            <div className="flex justify-between items-center pt-2 border-t border-white/10 mt-1">
                                <div className="flex flex-wrap gap-2">
                                    {page.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2 py-0.5 bg-white/20 backdrop-blur rounded-full text-[10px] font-semibold"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                {page.link && (
                                    <a
                                        href={page.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                                    >
                                        Live App
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
                ))}
            </div>
        </section>
    );
};
