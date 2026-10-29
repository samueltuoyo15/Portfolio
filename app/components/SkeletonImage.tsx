"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface SkeletonImageProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
    loading?: "lazy" | "eager";
    draggable?: boolean;
    dark?: boolean;
    sizes?: string;
    priority?: boolean;
    quality?: number;
}

export const SkeletonImage = ({
    src,
    alt,
    className = "",
    containerClassName = "",
    loading = "lazy",
    draggable = false,
    dark = false,
    sizes = "(max-width: 1024px) 100vw, 50vw",
    priority = false,
    quality = 85,
}: SkeletonImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    const markLoaded = () => {
        if (isMounted.current) setIsLoaded(true);
    };

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

            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                quality={quality}
                priority={priority}
                loading={priority ? undefined : loading}
                draggable={draggable}
                onLoad={markLoaded}
                onError={markLoaded}
                className={`${className} transition-opacity duration-300 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    );
};
