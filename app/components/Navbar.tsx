"use client";

import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 z-50 w-full flex justify-center transition-all duration-300 ${isScrolled
                    ? "bg-white backdrop-blur-md bg-opacity-60 border-b border-gray-200 shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <div className="w-full max-w-6xl px-4 md:px-6 py-4 flex flex-wrap justify-between items-center gap-4">
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-200 relative group-hover:scale-105 transition duration-300">
                        <Image
                            src="/avatar.jpg"
                            alt="Samuel Tuoyo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-bold text-base md:text-lg tracking-tight text-gray-900 group-hover:text-blue-600 transition">
                        Samuel Tuoyo
                    </span>
                </a>

                {/* Section Navigation for Users & Search Engine Sitelinks */}
                <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-gray-600">
                    <a href="#innovations" className="hover:text-gray-900 transition">Projects</a>
                    <a href="#landing-pages" className="hover:text-gray-900 transition">Landing Pages</a>
                    <a href="#articles" className="hover:text-gray-900 transition">Articles</a>
                    <a href="#process" className="hover:text-gray-900 transition">Process</a>
                    <a href="#about" className="hover:text-gray-900 transition">About</a>
                    <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5 md:gap-2">
                     <SocialIcon
                            url="https://linkedin.com/in/samueltuoyo"
                            target="_blank"
                            style={{ height: 34, width: 34 }}
                            className="hover:scale-110 transition-transform"
                        />
                     <SocialIcon
                            url="https://wa.me/2349161591177?text=Hi%20Samuel%2C%20I%20saw%20your%20portfolio%20and%20I%20want%20you%20to%20build%20a%20website%20for%20my%20business.%20Let%27s%20talk!"
                            network="whatsapp"
                            target="_blank"
                            style={{ height: 34, width: 34 }}
                            className="hover:scale-110 transition-transform"
                        />

                        <SocialIcon
                            url="https://github.com/samueltuoyo15"
                            bgColor="#000"
                            fgColor="#fff"
                            target="_blank"
                            style={{ height: 34, width: 34 }}
                            className="hover:scale-110 transition-transform"
                        />
                        <SocialIcon
                            url="https://x.com/TuoyoS26091"
                            network="x"
                            target="_blank"
                            style={{ height: 34, width: 34 }}
                            className="hover:scale-110 transition-transform"
                        />
                        <SocialIcon
                            url="https://medium.com/@samueltuoyo9082"
                            target="_blank"
                            style={{ height: 34, width: 34 }}
                            className="hover:scale-110 transition-transform"
                        />
                   
                    </div>
                </div>
            </div>
        </nav>
    );
};
