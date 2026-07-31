"use client";

import { useRef, useState } from "react";

const articles = [
    {
        title: "Redis 101 for Backend Engineers",
        link: "https://medium.com/codex/redis-101-for-backend-engineers-443325d75e67",
    },
    {
        title: "BullMQ 101: Jobs, Workers, Queues",
        link: "https://medium.com/javascript-in-plain-english/bullmq-101-jobs-workers-queues-retries-delays-and-dead-letter-queues-less-theory-more-1db103df3be5",
    },
    {
        title: "Why Running Workers Separately Doesn't Make Them Microservices",
        link: "https://medium.com/codex/why-running-workers-separately-doesnt-make-them-microservices-08f29b0a31cc",
    },
    {
        title: "Payment Gateways 101",
        link: "https://medium.com/stackademic/payment-gateways-101-psps-settlements-webhooks-reconciliation-drift-and-chargebacks-explained-787f0d0c195a",
    },
    {
        title: "Signed Uploads: Cloudinary",
        link: "https://medium.com/gitconnected/signed-uploads-the-cloudinary-equivalent-of-s3-presigned-urls-conceptually-5a6f102447ff",
    },
    {
        title: "Docker 101 for Backend/DevOps",
        link: "https://medium.com/codex/docker-101-for-backend-devops-engineers-no-theory-just-practice-39fd2fcf4826",
    },
    {
        title: "How I Built a RBAC System for a Marketplace API",
        link: "https://medium.com/codex/how-i-built-a-rbac-system-for-a-marketplace-api-using-nestjs-passport-jwt-postgresql-and-typeorm-e1b7d0647ab8",
    },
    {
        title: "Supabase RLS: The Feature That's Quietly Stressing Most Frontend Devs",
        link: "https://medium.com/codex/supabase-rls-the-feature-thats-quietly-stressing-most-frontend-devs-a79e665ef5a6",
    },
];

export const ArticlesMarquee = () => {
    const articlesScrollRef = useRef<HTMLDivElement>(null);
    const [isArticlesDragging, setIsArticlesDragging] = useState(false);
    const [articlesStartX, setArticlesStartX] = useState(0);
    const [articlesScrollLeft, setArticlesScrollLeft] = useState(0);

    const handleArticlesMouseDown = (e: React.MouseEvent) => {
        if (!articlesScrollRef.current) return;
        setIsArticlesDragging(true);
        setArticlesStartX(e.pageX - articlesScrollRef.current.offsetLeft);
        setArticlesScrollLeft(articlesScrollRef.current.scrollLeft);
    };

    const handleArticlesMouseLeave = () => setIsArticlesDragging(false);
    const handleArticlesMouseUp = () => setIsArticlesDragging(false);

    const handleArticlesMouseMove = (e: React.MouseEvent) => {
        if (!isArticlesDragging || !articlesScrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - articlesScrollRef.current.offsetLeft;
        const walk = (x - articlesStartX) * 2;
        articlesScrollRef.current.scrollLeft = articlesScrollLeft - walk;
    };

    return (
        <section id="articles" className="w-full mb-24 overflow-hidden">
            {/* Header */}
            <div className="w-full max-w-6xl mx-auto px-4 mb-10 pt-8 flex items-end gap-4">
                <h2 className="text-3xl md:text-5xl font-handwriting text-gray-400 rotate-1">
                    My recent articles
                </h2>
                <span className="mb-1 text-xs font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                    Top {articles.length} posts
                </span>
            </div>

            {/* Drag-scrollable marquee */}
            <div className="relative w-full">
                <div className="absolute left-0 top-0 h-full w-16 md:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-16 md:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

                <div
                    ref={articlesScrollRef}
                    className="overflow-x-auto cursor-grab active:cursor-grabbing"
                    style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
                    onMouseDown={handleArticlesMouseDown}
                    onMouseLeave={handleArticlesMouseLeave}
                    onMouseUp={handleArticlesMouseUp}
                    onMouseMove={handleArticlesMouseMove}
                >
                    <div
                        className="marquee-track gap-5 px-4 pb-4"
                        style={{
                            animationPlayState: isArticlesDragging ? "paused" : undefined,
                        }}
                    >
                        {[
                            ...articles,
                            ...articles,
                            ...articles,
                            ...articles,
                            ...articles,
                            ...articles,
                        ].map((article, idx) => (
                            <a
                                key={idx}
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group shrink-0 w-[300px] md:w-[360px] bg-[#111] rounded-2xl p-6 flex flex-col justify-between gap-4 border border-white border-opacity-5 hover:border-opacity-20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                            >
                                {/* Top row */}
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                                            <svg viewBox="0 0 24 24" fill="black" className="w-4 h-4">
                                                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                            Medium
                                        </span>
                                    </div>
                                    <svg
                                        className="w-4 h-4 text-gray-600 group-hover:text-gray-300 transition shrink-0 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 7l-10 10M17 7H7m10 0v10"
                                        />
                                    </svg>
                                </div>

                                {/* Title */}
                                <p className="text-white font-serif text-base leading-snug group-hover:text-gray-300 transition line-clamp-3">
                                    {article.title}
                                </p>

                                {/* Bottom row */}
                                <div
                                    className="flex items-center justify-between pt-2"
                                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                                >
                                    <span className="text-xs text-gray-500 font-medium">
                                        Samuel Tuoyo
                                    </span>
                                    <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                                        Read →
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
