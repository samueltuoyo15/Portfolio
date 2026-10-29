import { TechBadge } from "./TechBadge";

const toolGroups = [
    { label: "Web", tools: ["React", "Next.js", "Tailwind CSS"] },
    { label: "Server", tools: ["Node.js", "NestJS", "Express", "Go"] },
    { label: "Data", tools: ["PostgreSQL", "MongoDB", "Redis"] },
    { label: "Payments", tools: ["Paystack", "Flutterwave", "Stripe"] },
    { label: "Delivery", tools: ["Docker", "AWS", "OAuth 2.0"] },
];

export const ToolsSection = () => {
    return (
        <section id="skills" className="w-full max-w-6xl px-4 mb-24 scroll-mt-24">
            <h2 className="mb-10 text-4xl font-handwriting text-gray-500 -rotate-2 md:text-6xl">
                Tools Behind the Work
            </h2>

            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                {toolGroups.map((group) => (
                    <div
                        key={group.label}
                        className="grid gap-3 border-b border-gray-100 px-5 py-5 last:border-b-0 sm:grid-cols-[8rem_1fr] sm:items-center md:px-7"
                    >
                        <h3 className="text-sm font-semibold text-gray-900">{group.label}</h3>
                        <div className="flex flex-wrap gap-2">
                            {group.tools.map((tool) => (
                                <TechBadge key={tool} name={tool} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
