"use client";

import { useState, useRef, useEffect } from "react";
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
    "/Screenshot (323).png",
    "/Screenshot 2026-03-31 115354.png",
    "/ar-object-scanner.png",
];

function MarqueeRow({
    images,
    cardHeightClass,
    speed = 0.8,
    sizes,
    priority = false,
}: {
    images: string[];
    cardHeightClass: string;
    speed?: number;
    sizes: string;
    priority?: boolean;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInteracting, setIsInteracting] = useState(false);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollStartRef = useRef(0);

    const displayImages = [...images, ...images, ...images, ...images];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Set initial scroll offset so user can scroll both left and right immediately
        if (container.scrollLeft === 0 && container.scrollWidth > 0) {
            container.scrollLeft = container.scrollWidth / 4;
        }

        let animationFrameId: number;

        const step = () => {
            if (!isInteracting && container) {
                container.scrollLeft += speed;
                const quarterWidth = container.scrollWidth / 4;
                if (container.scrollLeft >= quarterWidth * 3) {
                    container.scrollLeft -= quarterWidth;
                }
            }
            animationFrameId = requestAnimationFrame(step);
        };

        animationFrameId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isInteracting, speed]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;

        if (isDraggingRef.current) {
            const dx = e.pageX - startXRef.current;
            container.scrollLeft = scrollStartRef.current - dx;
        } else if (e.movementX !== 0) {
            container.scrollLeft -= e.movementX * 1.5;
        }

        const quarterWidth = container.scrollWidth / 4;
        if (container.scrollLeft >= quarterWidth * 3) {
            container.scrollLeft -= quarterWidth;
        } else if (container.scrollLeft <= quarterWidth / 2) {
            container.scrollLeft += quarterWidth;
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        isDraggingRef.current = true;
        startXRef.current = e.pageX;
        if (containerRef.current) {
            scrollStartRef.current = containerRef.current.scrollLeft;
        }
    };

    const handleMouseUp = () => {
        isDraggingRef.current = false;
    };

    return (
        <div className="mb-10 relative w-full">
            <div className="absolute left-0 top-0 h-full w-12 md:w-28 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-12 md:w-28 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

            <div
                ref={containerRef}
                className="overflow-x-auto no-scrollbar select-none cursor-grab active:cursor-grabbing flex gap-6 pb-4 px-4"
                onMouseEnter={() => setIsInteracting(true)}
                onMouseLeave={() => {
                    setIsInteracting(false);
                    isDraggingRef.current = false;
                }}
                onMouseMove={handleMouseMove}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={() => setIsInteracting(true)}
                onTouchEnd={() => setIsInteracting(false)}
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
                            className="h-full w-full object-cover pointer-events-none"
                            draggable={false}
                            sizes={sizes}
                            priority={
                                priority &&
                                (idx < 2 ||
                                    (idx >= images.length && idx < images.length + 2))
                            }
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                ))}
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
                cardHeightClass="h-[24rem] w-[13.5rem] sm:h-[30rem] sm:w-[17rem] md:h-[34rem] md:w-[19rem]"
                speed={0.8}
                sizes="(max-width: 639px) 216px, (max-width: 767px) 272px, 304px"
                priority
            />

            {/* Desktop snapshots row - moving left slowly */}
            <MarqueeRow
                images={desktopScreenshots}
                cardHeightClass="h-48 w-[21rem] sm:h-64 sm:w-[28rem] md:h-72 md:w-[32rem]"
                speed={0.5}
                sizes="(max-width: 639px) 336px, (max-width: 767px) 448px, 512px"
                priority
            />
        </section>
    );
};
