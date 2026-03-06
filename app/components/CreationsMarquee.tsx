"use client";

import { useRef, useState } from "react";

const creations = [
    "ever-download-mobile.png",
    "/tessy-palace-2.png",
    "/G2HPzPNXMAAhco3.jpg",
    "/G2HPzD8XEAAr1NB.jpg",
    "/G2HPzPXXAAAaTuW.jpg",
    "/tessy-palace-3.png",
    "/G2HPzRuWUAAP6Ou.jpg",
];

export const CreationsMarquee = () => {
    const creationsRef = useRef<HTMLDivElement>(null);
    const [isCreationsDragging, setIsCreationsDragging] = useState(false);
    const [creationsStartX, setCreationsStartX] = useState(0);
    const [creationsScrollLeft, setCreationsScrollLeft] = useState(0);

    const handleCreationsMouseDown = (e: React.MouseEvent) => {
        if (!creationsRef.current) return;
        setIsCreationsDragging(true);
        setCreationsStartX(e.pageX - creationsRef.current.offsetLeft);
        setCreationsScrollLeft(creationsRef.current.scrollLeft);
    };
    const handleCreationsMouseLeave = () => setIsCreationsDragging(false);
    const handleCreationsMouseUp = () => setIsCreationsDragging(false);
    const handleCreationsMouseMove = (e: React.MouseEvent) => {
        if (!isCreationsDragging || !creationsRef.current) return;
        e.preventDefault();
        const x = e.pageX - creationsRef.current.offsetLeft;
        const walk = (x - creationsStartX) * 2;
        creationsRef.current.scrollLeft = creationsScrollLeft - walk;
    };

    return (
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

            <div className="relative w-full">
                <div className="absolute left-0 top-0 h-full w-16 md:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-16 md:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

                <div
                    ref={creationsRef}
                    className="overflow-x-auto cursor-grab active:cursor-grabbing"
                    style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
                    onMouseDown={handleCreationsMouseDown}
                    onMouseLeave={handleCreationsMouseLeave}
                    onMouseUp={handleCreationsMouseUp}
                    onMouseMove={handleCreationsMouseMove}
                >
                    <div
                        className="marquee-track-slow gap-6 pb-8 px-4 select-none"
                        style={{
                            animationPlayState: isCreationsDragging ? "paused" : undefined,
                        }}
                    >
                        {[
                            ...creations,
                            ...creations,
                            ...creations,
                            ...creations,
                            ...creations,
                            ...creations,
                        ].map((src, idx) => (
                            <div
                                key={idx}
                                className="relative h-80 md:h-[30rem] shrink-0 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.4)] bg-gray-100 border-8 border-white group"
                                onContextMenu={(e) => e.preventDefault()}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={`Creation ${idx}`}
                                    className="h-full w-auto object-cover pointer-events-none select-none"
                                    onContextMenu={(e) => e.preventDefault()}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
