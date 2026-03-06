"use client";

import { useState, useRef, useEffect } from "react";

export const TypewriterText = ({
    text,
    speed = 50,
}: {
    text: string;
    speed?: number;
}) => {
    const [displayText, setDisplayText] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        });
        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            let i = 0;
            setDisplayText("");
            const timer = setInterval(() => {
                if (i < text.length) {
                    setDisplayText(() => text.slice(0, i + 1));
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, speed);
            return () => clearInterval(timer);
        } else {
            setDisplayText("");
        }
    }, [isVisible, text, speed]);

    return (
        <span ref={elementRef}>
            {displayText}
            <span className="animate-pulse text-gray-400">|</span>
        </span>
    );
};
