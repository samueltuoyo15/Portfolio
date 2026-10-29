import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SkeletonImage } from "./SkeletonImage";
import { TechBadge } from "./TechBadge";

interface DesignProject {
    title: string;
    label: string;
    description: string;
    image: string;
    imageAspectRatio: string;
    previewLabel: string;
    tools: string[];
    link?: string;
}

const designs: DesignProject[] = [
    {
        title: "Chat App",
        label: "01 · Figma to working interface",
        description:
            "A polished desktop chat app with conversations, active contacts, search, and a focused chat area. I turned the original Figma design into a working interface.",
        image: "/Screenshot (323).png",
        imageAspectRatio: "1882 / 947",
        previewLabel: "desktop chat app",
        tools: ["Figma", "React", "CSS"],
    },
    {
        title: "Video Call Interface",
        label: "02 · Desktop product design",
        description:
            "A clean meeting screen that keeps the participant, call status, sharing controls, and important actions easy to understand without crowding the experience.",
        image: "/Screenshot 2026-03-31 115354.png",
        imageAspectRatio: "1893 / 1011",
        previewLabel: "desktop video call experience",
        tools: ["Product UI", "Desktop Design"],
    },
    {
        title: "Encrypted File Storage Platform",
        label: "03 · Design to working website",
        description:
            "A clear landing page for a secure file storage product, built to explain the offer quickly and guide visitors toward the next step.",
        image: "/lading-page-1.png",
        imageAspectRatio: "1810 / 1029",
        previewLabel: "synapse-vault-livid.vercel.app",
        tools: ["React", "CSS"],
        link: "https://synapse-vault-livid.vercel.app/",
    },
    {
        title: "Tech Care Patient Dashboard",
        label: "04 · Design to working dashboard",
        description:
            "A responsive patient dashboard that presents health information in a simple, organised view that remains easy to use across screen sizes.",
        image: "/techcare.png",
        imageAspectRatio: "1821 / 971",
        previewLabel: "samueltuoyo15.github.io/TechCare",
        tools: ["HTML", "CSS", "API"],
        link: "https://samueltuoyo15.github.io/TechCare/",
    },
];

export const LandingPagesSection = () => {
    return (
        <section id="landing-pages" className="w-full max-w-6xl px-4 mb-24 scroll-mt-24">
            <div className="mb-12 max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-handwriting text-gray-500 -rotate-2">
                    Designs I&apos;ve Brought to Life
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-gray-600">
                    I turn finished ideas and Figma designs into polished interfaces that
                    work smoothly on desktop, mobile, and everything in between.
                </p>
            </div>

            <div className="flex flex-col divide-y divide-gray-200/80">
                {designs.map((design, index) => {
                    const imageFirst = index % 2 === 1;

                    return (
                        <article
                            key={design.title}
                            className="grid grid-cols-1 items-center gap-8 py-12 first:pt-2 last:pb-2 lg:grid-cols-2 lg:gap-14 md:py-16"
                        >
                            <div className={`flex flex-col items-start ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
                                <span className="mb-2 text-xs font-mono font-medium uppercase tracking-widest text-gray-400">
                                    {design.label}
                                </span>
                                <h3 className="mb-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                                    {design.title}
                                </h3>
                                <p className="mb-6 text-sm font-light leading-relaxed text-gray-600">
                                    {design.description}
                                </p>
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {design.tools.map((tool) => (
                                        <TechBadge key={tool} name={tool} />
                                    ))}
                                </div>
                                {design.link && (
                                    <a
                                        href={design.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 rounded-full bg-[#5D5FEF] px-5 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#4E50E5] sm:text-sm"
                                    >
                                        View live design
                                        <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={2} />
                                    </a>
                                )}
                            </div>

                            <div className={`w-full ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
                                <div className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-sm transition duration-300 hover:shadow-md">
                                    <div className="flex items-center gap-3 border-b border-gray-200 bg-[#F3F4F6] px-4 py-2.5">
                                        <div className="flex gap-1.5">
                                            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                                            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                                            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                                        </div>
                                        <div className="flex-1 truncate rounded-md border border-gray-200/80 bg-white px-3 py-1 text-center font-mono text-[11px] text-gray-500">
                                            {design.previewLabel}
                                        </div>
                                    </div>
                                    <div
                                        className="relative w-full overflow-hidden bg-gray-950"
                                        style={{ aspectRatio: design.imageAspectRatio }}
                                    >
                                        <SkeletonImage
                                            src={design.image}
                                            alt={`${design.title} desktop interface`}
                                            containerClassName="h-full w-full"
                                            className="block h-full w-full object-cover object-top transition duration-500 hover:scale-[1.01]"
                                            sizes="(max-width: 1024px) calc(100vw - 32px), 550px"
                                            priority={index < 2}
                                        />
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};
