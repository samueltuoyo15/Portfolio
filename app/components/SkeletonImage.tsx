"use client";

import { useState } from "react";

interface SkeletonImageProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
    loading?: "lazy" | "eager";
    draggable?: boolean;
    dark?: boolean;
}

export const SkeletonImage = ({
    src,
    alt,
    className = "",
    containerClassName = "",
    loading = "lazy",
    draggable = false,
    dark = false,
}: SkeletonImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden ${containerClassName}`}>
            {!isLoaded && (
                <div
                    className={`absolute inset-0 z-10 overflow-hidden ${
                        dark ? "bg-slate-800" : "bg-gray-200"
                    }`}
                >
                    <div
                        className={`absolute inset-0 ${
                            dark
                                ? "bg-gradient-to-r from-transparent via-slate-700/60 to-transparent"
                                : "bg-gradient-to-r from-transparent via-white/80 to-transparent"
                        } animate-shimmer`}
                    />
                </div>
            )}

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src}
                alt={alt}
                loading={loading}
                draggable={draggable}
                onLoad={() => setIsLoaded(true)}
                className={`${className} transition-opacity duration-500 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    );
};
