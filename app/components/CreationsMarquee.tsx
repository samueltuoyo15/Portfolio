"use client";

import { useRef } from "react";

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

function ScrollRow({
    images,
    cardClass,
}: {
    images: string[];
    cardClass?: string;
}) {
    const rowRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const onMouseDown = (e: React.MouseEvent) => {
        if (!rowRef.current) return;
        isDragging.current = true;
        startX.current = e.pageX - rowRef.current.offsetLeft;
        scrollLeft.current = rowRef.current.scrollLeft;
        rowRef.current.style.cursor = "grabbing";
    };

    const onMouseLeave = () => {
        isDragging.current = false;
        if (rowRef.current) rowRef.current.style.cursor = "grab";
    };

    const onMouseUp = () => {
        isDragging.current = false;
        if (rowRef.current) rowRef.current.style.cursor = "grab";
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !rowRef.current) return;
        e.preventDefault();
        const x = e.pageX - rowRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        rowRef.current.scrollLeft = scrollLeft.current - walk;
    };

    return (
        <div className="mb-10">
            <div className="relative w-full">
                <div className="absolute left-0 top-0 h-full w-12 md:w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-12 md:w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
                <div
                    ref={rowRef}
                    className="overflow-x-auto cursor-grab select-none"
                    style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                >
                    <div className="flex gap-5 pb-4 px-4 w-max">
                        {images.map((src, idx) => (
                            <div
                                key={idx}
                                className={`relative shrink-0 w-auto rounded-2xl overflow-hidden shadow-[0_16px_40px_-10px_rgba(0,0,0,0.25)] border-8 border-white bg-gray-100 group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.35)] ${cardClass ?? ""}`}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={`Creation ${idx + 1}`}
                                    className="h-full w-auto object-cover pointer-events-none"
                                    draggable={false}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const CreationsMarquee = () => {
    return (
        <section className="w-full mb-24 overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 mb-12 pt-8">
                <div className="relative inline-block">
                    <h2 className="text-4xl md:text-6xl font-handwriting text-gray-400 -rotate-2">
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

            {/* Mobile screenshots row */}
            <ScrollRow
                images={mobileScreenshots}
                cardClass="h-[28rem] md:h-[36rem]"
            />

            {/* Desktop screenshots row */}
            <ScrollRow
                images={desktopScreenshots}
                cardClass="h-52 md:h-72"
            />
        </section>
    );
};
