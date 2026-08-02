"use client";

import { useState } from "react";
import { SkeletonImage } from "./SkeletonImage";

const mobileScreenshots = [
    "/ever-download-mobile.png",
    "/G2HPzPNXMAAhco3.jpg",
    "/G2HPzD8XEAAr1NB.jpg",
    "/G2HPzPXXAAAaTuW.jpg",
    "/G2HPzRuWUAAP6Ou.jpg",
    "/tessy-palace-2.png",
    "/tessy-palace-3.png",
];

const desktopScreenshots = [
    "/sendlib-dashboard.png",
    "/everdownload.png",
    "/image2.png",
    "/sendlib.png",
    "/ar-object-scanner.png",
];

function MarqueeRow({
    images,
    cardHeightClass,
    speedClass = "marquee-track",
}: {
    images: string[];
    cardHeightClass: string;
    speedClass?: string;
}) {
    const [isPaused, setIsPaused] = useState(false);

    // Quadruple images to guarantee seamless continuous scrolling
    const displayImages = [...images, ...images, ...images, ...images];

    return (
        <div className="mb-10 relative w-full">
            {/* Edge fade overlays */}
            <div className="absolute left-0 top-0 h-full w-12 md:w-28 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-12 md:w-28 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

            <div
                className="overflow-hidden select-none cursor-pointer"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                onTouchCancel={() => setIsPaused(false)}
                onMouseDown={() => setIsPaused(true)}
                onMouseUp={() => setIsPaused(false)}
            >
                <div
                    className={`${speedClass} gap-6 pb-4 px-4`}
                    style={{
                        animationPlayState: isPaused ? "paused" : "running",
                    }}
                >
                    {displayImages.map((src, idx) => (
                        <div
                            key={idx}
                            className={`relative shrink-0 rounded-2xl overflow-hidden shadow-[0_12px_36px_-8px_rgba(0,0,0,0.18)] border-4 md:border-8 border-white bg-gray-200 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_-8px_rgba(0,0,0,0.28)] ${cardHeightClass}`}
                        >
                            <SkeletonImage
                                src={src}
                                alt={`Creation Snapshot ${idx + 1}`}
                                containerClassName="h-full w-full"
                                className="h-full w-auto object-cover pointer-events-none"
                                draggable={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export const CreationsMarquee = () => {
    return (
        <section className="w-full mb-24 overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 mb-10 pt-8">
                <div className="relative inline-block">
                    <h2 className="text-4xl md:text-6xl font-handwriting text-gray-500 -rotate-2">
                        couple snapshots of my creations
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

            {/* Mobile snapshots row - moving left */}
            <MarqueeRow
                images={mobileScreenshots}
                cardHeightClass="h-[24rem] sm:h-[30rem] md:h-[34rem] w-auto"
                speedClass="marquee-track"
            />

            {/* Desktop snapshots row - moving left slowly */}
            <MarqueeRow
                images={desktopScreenshots}
                cardHeightClass="h-48 sm:h-64 md:h-72 w-auto"
                speedClass="marquee-track-slow"
            />
        </section>
    );
};
