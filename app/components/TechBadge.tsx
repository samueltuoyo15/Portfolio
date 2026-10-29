import type { IconType } from "react-icons";
import { FaRss, FaSlack } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import {
    SiDocker,
    SiFfmpeg,
    SiGo,
    SiGoogle,
    SiGooglegemini,
    SiHtmx,
    SiMongodb,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiOpenapiinitiative,
    SiPrisma,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiExpress,
    SiPostgresql,
    SiRedis,
    SiStripe,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { TbBrandOauth } from "react-icons/tb";

interface TechBadgeProps {
    name: string;
}

type TechIcon = { icon: IconType; color: string };

const techIcons: Record<string, TechIcon> = {
    "next.js": { icon: SiNextdotjs, color: "#000000" },
    typescript: { icon: SiTypescript, color: "#3178C6" },
    flutterwave: { icon: RiSecurePaymentLine, color: "#F5A623" },
    nestjs: { icon: SiNestjs, color: "#E0234E" },
    prisma: { icon: SiPrisma, color: "#2D3748" },
    go: { icon: SiGo, color: "#00ADD8" },
    docker: { icon: SiDocker, color: "#2496ED" },
    ffmpeg: { icon: SiFfmpeg, color: "#007808" },
    "google oauth": { icon: SiGoogle, color: "#4285F4" },
    "google oauth 2.0": { icon: SiGoogle, color: "#4285F4" },
    "google gemini": { icon: SiGooglegemini, color: "#8E75B2" },
    mongodb: { icon: SiMongodb, color: "#47A248" },
    htmx: { icon: SiHtmx, color: "#3366CC" },
    openapi: { icon: SiOpenapiinitiative, color: "#6BA539" },
    slack: { icon: FaSlack, color: "#4A154B" },
    "node.js": { icon: SiNodedotjs, color: "#5FA04E" },
    rss: { icon: FaRss, color: "#F26522" },
    react: { icon: SiReact, color: "#61DAFB" },
    "tailwind css": { icon: SiTailwindcss, color: "#06B6D4" },
    express: { icon: SiExpress, color: "#111111" },
    postgresql: { icon: SiPostgresql, color: "#4169E1" },
    redis: { icon: SiRedis, color: "#DC382D" },
    stripe: { icon: SiStripe, color: "#635BFF" },
    aws: { icon: FaAws, color: "#FF9900" },
    "oauth 2.0": { icon: TbBrandOauth, color: "#5D5FEF" },
};

export const TechBadge = ({ name }: TechBadgeProps) => {
    const tech = techIcons[name.toLowerCase()];
    const Icon = tech?.icon;

    return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white border border-gray-200/80 rounded-full text-xs font-medium text-gray-700 hover:border-gray-400 transition-colors whitespace-nowrap shrink-0">
            {Icon ? (
                <Icon className="h-3.5 w-3.5 shrink-0" style={{ color: tech.color }} aria-hidden />
            ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden />
            )}
            <span>{name}</span>
        </span>
    );
};
