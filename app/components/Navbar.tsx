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
            <div className="w-full max-w-6xl px-10 md:px-3 py-4 flex justify-center md:justify-between items-center">
                <div className="hidden md:flex items-center gap-3">
                    <div className="hidden md:inline-flex w-10 h-10 rounded-full overflow-hidden border border-gray-200 relative">
                        <Image
                            src="/avatar.jpg"
                            alt="Samuel Avatar"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="hidden md:inline-flex font-bold text-lg tracking-tight">
                        Samuel Tuoyo
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        <SocialIcon
                            url="https://github.com/samueltuoyo15"
                            bgColor="#000"
                            fgColor="#fff"
                            target="_blank"
                            style={{ height: 40, width: 40 }}
                            className="hover:scale-110 transition-transform"
                        />
                        <SocialIcon
                            url="https://linkedin.com/in/samuel-tuoyo-8568b62b6"
                            target="_blank"
                            style={{ height: 40, width: 40 }}
                            className="hover:scale-110 transition-transform"
                        />
                        <SocialIcon
                            url="https://x.com/TuoyoS26091"
                            network="x"
                            target="_blank"
                            style={{ height: 40, width: 40 }}
                            className="hover:scale-110 transition-transform"
                        />
                        <SocialIcon
                            url="https://medium.com/@samueltuoyo9082"
                            target="_blank"
                            style={{ height: 40, width: 40 }}
                            className="hover:scale-110 transition-transform"
                        />
                        <SocialIcon
                            url="https://wa.me/2349161591177?text=Hi%20Samuel%2C%20I%20saw%20your%20portfolio%20and%20I%20want%20you%20to%20build%20a%20website%20for%20my%20business.%20Let%27s%20talk!"
                            network="whatsapp"
                            target="_blank"
                            style={{ height: 40, width: 40 }}
                            className="hover:scale-110 transition-transform"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};
