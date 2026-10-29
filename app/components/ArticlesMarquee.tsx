import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SiMedium } from "react-icons/si";

const articles = [
    {
        title: "Redis 101 for Backend Engineers",
        summary: "A practical guide to making apps faster with Redis.",
        category: "Performance",
        link: "https://medium.com/codex/redis-101-for-backend-engineers-443325d75e67",
    },
    {
        title: "BullMQ 101: Jobs, Workers, Queues",
        summary: "How to move slow jobs out of the way and keep apps responsive.",
        category: "Background jobs",
        link: "https://medium.com/javascript-in-plain-english/bullmq-101-jobs-workers-queues-retries-delays-and-dead-letter-queues-less-theory-more-1db103df3be5",
    },
    {
        title: "Payment Gateways 101",
        summary: "What really happens between checkout, settlement, refunds, and disputes.",
        category: "Payments",
        link: "https://medium.com/stackademic/payment-gateways-101-psps-settlements-webhooks-reconciliation-drift-and-chargebacks-explained-787f0d0c195a",
    },
    {
        title: "Docker 101 for Backend/DevOps",
        summary: "A hands-on way to package and ship apps consistently.",
        category: "Deployment",
        link: "https://medium.com/codex/docker-101-for-backend-devops-engineers-no-theory-just-practice-39fd2fcf4826",
    },
    {
        title: "How I Built a Role-Based Access System for a Marketplace",
        summary: "How to control who can see and do what in a growing marketplace.",
        category: "Security",
        link: "https://medium.com/codex/how-i-built-a-rbac-system-for-a-marketplace-api-using-nestjs-passport-jwt-postgresql-and-typeorm-e1b7d0647ab8",
    },
];

export const ArticlesMarquee = () => {
    return (
        <section id="articles" className="w-full max-w-6xl px-4 mb-24 scroll-mt-24">
            <div className="mb-10 md:flex md:items-end md:justify-between md:gap-8">
                <div className="max-w-2xl">
                    <h2 className="font-serif text-3xl text-gray-900 md:text-5xl">
                        Useful ideas, explained clearly.
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Practical lessons about payments, speed, security, and shipping
                        software, written for people who want to understand how things work.
                    </p>
                </div>
                <a
                    href="https://medium.com/@samueltuoyo9082"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 transition hover:-translate-y-0.5 hover:border-gray-500 md:mt-0"
                >
                    Read all on Medium
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={2} />
                </a>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article, index) => (
                    <a
                        key={article.link}
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex min-h-64 flex-col justify-between rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                            index === 0
                                ? "border-gray-900 bg-[#111] text-white md:col-span-2 lg:col-span-2"
                                : "border-gray-200 bg-white text-gray-900"
                        }`}
                    >
                        <div>
                            <div className="mb-8 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <SiMedium size={24} aria-hidden="true" />
                                    <span className={`text-xs font-semibold uppercase tracking-widest ${index === 0 ? "text-gray-400" : "text-gray-500"}`}>
                                        {article.category}
                                    </span>
                                </div>
                                <HugeiconsIcon
                                    icon={ArrowUpRight01Icon}
                                    size={18}
                                    strokeWidth={2}
                                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </div>
                            <h3 className={`font-serif leading-tight ${index === 0 ? "max-w-xl text-3xl md:text-4xl" : "text-xl"}`}>
                                {article.title}
                            </h3>
                        </div>
                        <p className={`mt-8 text-sm leading-relaxed ${index === 0 ? "max-w-xl text-gray-300" : "text-gray-600"}`}>
                            {article.summary}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
};
