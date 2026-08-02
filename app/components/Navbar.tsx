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
            <div className="w-full max-w-[34rem] px-10 sm:px-14 py-3 sm:py-4 flex flex-nowrap justify-between items-center gap-2">
                <a href="#" className="flex items-center gap-2 sm:gap-2.5 group shrink-0 min-w-0">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 relative group-hover:scale-105 transition duration-300 shrink-0">
                        <Image
                            src="/avatar.jpg"
                            alt="Samuel Tuoyo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-bold text-sm sm:text-base tracking-tight text-gray-900 group-hover:text-blue-600 transition truncate">
                        Samuel Tuoyo
                    </span>
                </a>

                <div className="flex items-center gap-1 shrink-0">
                    <div className="flex gap-1 sm:gap-1.5">
                        <SocialIcon
                            url="https://linkedin.com/in/samueltuoyo"
                            target="_blank"
                            style={{ height: 28, width: 28 }}
                            className="hover:scale-110 transition-transform"
                        />
                        <SocialIcon
                            url="https://wa.me/2349161591177?text=Hi%20Samuel%2C%20I%20saw%20your%20portfolio%20and%20I%20want%20you%20to%20build%20a%20website%20for%20my%20business.%20Let%27s%20talk!"
                            network="whatsapp"
                            target="_blank"
                            style={{ height: 28, width: 28 }}
                            className="hover:scale-110 transition-transform"
                        />
                        <SocialIcon
                            url="https://github.com/samueltuoyo15"
                            bgColor="#000"
                            fgColor="#fff"
                            target="_blank"
                            style={{ height: 28, width: 28 }}
                            className="hover:scale-110 transition-transform"
                        />
                        <SocialIcon
                            url="https://x.com/TuoyoS26091"
                            network="x"
                            target="_blank"
                            style={{ height: 28, width: 28 }}
                            className="hover:scale-110 transition-transform"
                        />
                        {/* Medium commented out per user request to keep header tight inside vertical lines */}
                        {/* <SocialIcon
                            url="https://medium.com/@samueltuoyo9082"
                            target="_blank"
                            style={{ height: 28, width: 28 }}
                            className="hover:scale-110 transition-transform"
                        /> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};
