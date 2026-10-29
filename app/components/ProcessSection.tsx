import { CpuIcon, File02Icon, Rocket01Icon, SecurityCheckIcon, ServerStack02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { TypewriterText } from "./TypewriterText";

export const ProcessSection = () => {
    return (
        <section id="process" className="w-full max-w-4xl px-4 mb-32">
            <div className="flex items-center gap-3 mb-10">
                <HugeiconsIcon icon={File02Icon} size={32} strokeWidth={1.6} className="text-gray-700" />
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 min-h-[1.2em]">
                    <TypewriterText text="My Recipe For Success..." />
                </h2>
            </div>

            <div className="space-y-8">
                {[
                    {
                        title: "Understand the real goal",
                        desc: "I start by learning what the business and its customers actually need. That keeps us focused on work that can increase sales, save time, or improve the customer experience.",
                        icon: <HugeiconsIcon icon={CpuIcon} size={24} strokeWidth={1.7} className="text-gray-700" />,
                    },
                    {
                        title: "Plan before I build",
                        desc: "I map out how the product should work, where problems may appear, and what needs to grow later. A clear plan reduces costly mistakes and makes delivery smoother.",
                        icon: <HugeiconsIcon icon={ServerStack02Icon} size={24} strokeWidth={1.7} className="text-gray-700" />,
                    },
                    {
                        title: "Make it safe and fast",
                        desc: "I protect customer data, test important journeys, and remove slow points so the product feels dependable from day one.",
                        icon: <HugeiconsIcon icon={SecurityCheckIcon} size={24} strokeWidth={1.7} className="text-gray-700" />,
                    },
                    {
                        title: "Launch and keep watch",
                        desc: "I put the product live, watch how it performs, and fix issues early so customers can keep using it without disruption.",
                        icon: <HugeiconsIcon icon={Rocket01Icon} size={24} strokeWidth={1.7} className="text-gray-700" />,
                    },
                ].map((step, i) => (
                    <div key={i} className="flex gap-6 group">
                        <div className="shrink-0 w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                            {step.icon}
                        </div>
                        <div className="pb-8 border-b border-gray-300 w-full">
                            <h4 className="font-bold text-gray-900 text-lg mb-2 min-h-[1.5em]">
                                <TypewriterText text={step.title} speed={15} />
                            </h4>
                            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
