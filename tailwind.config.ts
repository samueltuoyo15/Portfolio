import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", "sans-serif"],
                serif: ["var(--font-serif)", "serif"],
                handwriting: ["var(--font-handwriting)", "cursive"],
            },
            animation: {
                wave: "wave 2.5s infinite",
                marquee: "marquee-scroll 40s linear infinite",
                "marquee-slow": "marquee-scroll 70s linear infinite",
            },
            keyframes: {
                wave: {
                    "0%": { transform: "rotate(0deg)" },
                    "10%": { transform: "rotate(14deg)" },
                    "20%": { transform: "rotate(-8deg)" },
                    "30%": { transform: "rotate(14deg)" },
                    "40%": { transform: "rotate(-4deg)" },
                    "50%": { transform: "rotate(10deg)" },
                    "60%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(0deg)" },
                },
                "marquee-scroll": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
            maxWidth: {
                "170": "42.5rem",
            },
            height: {
                "100": "25rem",
                "125": "31.25rem",
            },
        },
    },
    plugins: [],
};

export default config;
