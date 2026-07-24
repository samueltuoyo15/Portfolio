"use client";

import Image from "next/image";
import { TypewriterText } from "./TypewriterText";

export const AboutSection = () => {
    return (
        <section id="about" className="w-full max-w-6xl px-4 relative">
            <div className="text-center mb-12">
                <h2 className="font-serif text-4xl text-gray-900 mb-2 h-[1.2em]">
                    <TypewriterText text={'"What I bring to the table..."'} />
                </h2>
                <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            </div>

            <div className="bg-[#Fdfcf8] p-6 md:p-12 rounded-sm shadow-xl border border-gray-200 relative rotate-1 max-w-5xl mx-auto">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 -rotate-2 shadow-sm"></div>
                <div className="absolute top-10 -right-4 w-8 h-24 bg-yellow-200/80 rotate-3 shadow-sm"></div>
                <div className="absolute -top-4 -right-2 md:-top-12 md:-right-4 lg:-right-8 w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-white p-2 md:p-3 shadow-xl transform rotate-6 border border-gray-200 z-20 block transition hover:scale-110 hover:rotate-0 duration-300 pointer-events-auto">
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
                            <div className="relative aspect-3/4 bg-gray-200 overflow-hidden">
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

                    <div className="w-full md:w-2/3 md:pr-28 lg:pr-36">
                        <p className="text-gray-700 leading-loose font-serif text-lg mb-6">
                            I believe great software isn&apos;t just about writing code; it&apos;s about solving real-world friction. I specialize in bridging the gap between clean, intuitive frontend experiences and robust, secure backend architectures.
                        </p>
                        <p className="text-gray-600 mb-6 font-sans">
                           I help businesses and companies turn complex ideas into production-ready digital products. When I&apos;m not coding, you&apos;ll catch me exploring new skills, skimming through insightful developer articles, or consuming programming shorts.
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
                                        <span className="text-green-600 font-bold text-xl">✓</span>{" "}
                                        Frontend: Next.js, React, Tailwind CSS
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-green-600 font-bold text-xl">✓</span>{" "}
                                        Backend: Node.js (NestJS, Express), WebSockets, SSE
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-green-600 font-bold text-xl">✓</span>{" "}
                                        Agentic AI: Kiro, Antigravity, Codex
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-green-600 font-bold text-xl">✓</span>{" "}
                                        Desktop: Electron JS
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-green-600 font-bold text-xl">✓</span>{" "}
                                        DB & Caching: PostgreSQL, MongoDB, Redis, SQLite, BullMQ
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-green-600 font-bold text-xl">✓</span>{" "}
                                        Architecture: Distributed Systems, RBAC, Multi-tenancy
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-green-600 font-bold text-xl">✓</span>{" "}
                                        DevOps: Docker, Docker Compose, Nginx, AWS,
                                        Prometheus/Grafana
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-green-600 font-bold text-xl">✓</span>{" "}
                                        Security: OAuth 2.0, OpenID Connect, Paystack/Stripe
                                    </li>
                                </ul>

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
                                        99% faith, My laptop, my phone and data. So help me God amen.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
