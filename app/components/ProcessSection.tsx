"use client";

import { FileText, Cpu, Server, ShieldCheck, Rocket } from "lucide-react";
import { TypewriterText } from "./TypewriterText";

export const ProcessSection = () => {
    return (
        <section id="process" className="w-full max-w-4xl px-4 mb-32">
            <div className="flex items-center gap-3 mb-10">
                <FileText className="w-8 h-8 text-gray-700" />
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 min-h-[1.2em]">
                    <TypewriterText text="My Recipe For Success..." />
                </h2>
            </div>

            <div className="space-y-8">
                {[
                    {
                        title: "Understand the requirements",
                        desc: "I start by digging deep, and understanding the core domain logic before a single line of code is written.",
                        icon: <Cpu className="w-6 h-6 text-gray-700" />,
                    },
                    {
                        title: "Architect Scalable Systems",
                        desc: "This is where the fun begins. I design DB schemas (Postgres/MongoDB/Sqlite), and ensure data integrity.",
                        icon: <Server className="w-6 h-6 text-gray-700" />,
                    },
                    {
                        title: "Secure & Optimize",
                        desc: "Implementing rate limiting, proper security headers (CORS, Helmet, CSP), input validation, and query optimization to lock things down tight.",
                        icon: <ShieldCheck className="w-6 h-6 text-gray-700" />,
                    },
                    {
                        title: "Deploy & Observability",
                        desc: "Dockerizing applications if neccessary, setting up CI/CD pipelines, and monitoring with Prometheus/Grafana for real-time insights.",
                        icon: <Rocket className="w-6 h-6 text-gray-700" />,
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
