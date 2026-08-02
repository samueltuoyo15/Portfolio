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
            className={`sticky top-0 z-50 w-full flex justify-center transition-all duration-300 ${
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="w-full max-w-[34rem] md:max-w-6xl px-8 md:px-6 py-3.5 md:py-4 flex flex-nowrap justify-between items-center gap-2">
                <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-gray-200 relative group-hover:scale-105 transition duration-300 shrink-0">
                        <Image
                            src="/avatar.jpg"
                            alt="Samuel Tuoyo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-bold text-sm sm:text-base md:text-lg tracking-tight text-gray-900 group-hover:text-blue-600 transition truncate">
                        Samuel Tuoyo
                    </span>
                </a>

                <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                    <div className="flex gap-1 sm:gap-1.5 md:gap-2 items-center">
                        <SocialIcon
                            url="https://linkedin.com/in/samueltuoyo"
                            target="_blank"
                            style={{ height: 28, width: 28 }}
                            className="hover:scale-110 transition-transform md:!w-8 md:!h-8"
                        />
                        <SocialIcon
                            url="https://wa.me/2349161591177?text=Hi%20Samuel%2C%20I%20saw%20your%20portfolio%20and%20I%20want%20you%20to%20build%20a%20website%20for%20my%20business.%20Let%27s%20talk!"
                            network="whatsapp"
                            target="_blank"
                            style={{ height: 28, width: 28 }}
                            className="hover:scale-110 transition-transform md:!w-8 md:!h-8"
                        />
                        <SocialIcon
                            url="https://github.com/samueltuoyo15"
                            bgColor="#000"
                            fgColor="#fff"
                            target="_blank"
                            style={{ height: 28, width: 28 }}
                            className="hover:scale-110 transition-transform md:!w-8 md:!h-8"
                        />
                        <SocialIcon
                            url="https://x.com/TuoyoS26091"
                            network="x"
                            target="_blank"
                            style={{ height: 28, width: 28 }}
                            className="hover:scale-110 transition-transform md:!w-8 md:!h-8"
                        />
                        {/* Medium icon hidden on mobile, visible on desktop */}
                        <div className="hidden md:inline-block">
                            <SocialIcon
                                url="https://medium.com/@samueltuoyo9082"
                                target="_blank"
                                style={{ height: 32, width: 32 }}
                                className="hover:scale-110 transition-transform"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
