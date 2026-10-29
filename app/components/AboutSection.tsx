import Image from "next/image";
import { TypewriterText } from "./TypewriterText";

export const AboutSection = () => {
    return (
        <section id="about" className="w-full max-w-6xl px-4 mb-24 relative scroll-mt-24">
            <div className="text-center mb-12">
                <h2 className="font-serif text-4xl text-gray-900 mb-2 h-[1.2em]">
                    <TypewriterText text="The value I bring to the table" />
                </h2>
                <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            </div>

            <div className="bg-[#Fdfcf8] p-6 md:p-12 rounded-sm shadow-xl border border-gray-200 relative rotate-1 max-w-5xl mx-auto">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 -rotate-2 shadow-sm"></div>
                <div className="absolute top-10 -right-4 w-8 h-24 bg-yellow-200/80 rotate-3 shadow-sm"></div>
                <div className="absolute -top-4 -right-2 md:-top-12 md:-right-4 lg:-right-8 w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-white p-2 md:p-3 shadow-xl transform rotate-6 border border-gray-200 z-20 block transition hover:scale-110 hover:rotate-0 duration-300 pointer-events-auto">
                    <div className="relative w-full h-full bg-gray-800 overflow-hidden filter sepia-[.2]">
                        <Image
                            src="/laptop.jpg"
                            alt="My Workstation"
                            fill
                            sizes="192px"
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -top-4 left-1/2 z-30 h-8 w-20 -translate-x-1/2 rotate-3 bg-[#eecd86]/90 shadow-sm md:w-24"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3">
                        <div className="bg-white p-3 shadow-md -rotate-3 border border-gray-100">
                            <div className="relative aspect-3/4 bg-gray-200 overflow-hidden">
                                <Image
                                    src="/IMG_0004.jpeg"
                                    alt="Samuel Tuoyo"
                                    fill
                                    sizes="(max-width: 767px) calc(100vw - 80px), 320px"
                                    quality={90}
                                    className="object-cover object-top"
                                />
                            </div>
                            <p className="text-center font-handwriting mt-2 text-gray-400 text-sm">
                                Samuel T.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 md:pr-28 lg:pr-36">
                        <p className="text-gray-700 leading-loose font-serif text-lg mb-6">
                            I bring more than code to the table. I look for the point where
                            software can increase revenue, improve the customer experience,
                            or remove expensive manual work, then build the product that gets it done.
                        </p>
                        <p className="text-gray-600 mb-6 font-sans">
                            I build both the parts customers see and the systems that keep a
                            business running. The goal is always simple: make it easier to sell,
                            serve customers better, and spend less time on repetitive work.
                            When I&apos;m not coding, I&apos;m learning better ways to build and grow
                            useful digital products.
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {[
                                {
                                    title: "Business-focused thinking",
                                    text: "I connect each feature to revenue, customer experience, or time saved.",
                                },
                                {
                                    title: "Complete ownership",
                                    text: "I can take an idea through planning, building, launch, and improvement.",
                                },
                                {
                                    title: "Dependable delivery",
                                    text: "I communicate clearly, solve problems early, and build software people can trust.",
                                },
                                {
                                    title: "Real product results",
                                    text: "My work has processed over ₦1 million, won paying users, and served hundreds of developers.",
                                },
                            ].map((value, index) => (
                                <div
                                    key={value.title}
                                    className="rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm"
                                >
                                    <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-100 text-xs font-bold text-yellow-800">
                                        {index + 1}
                                    </span>
                                    <h3 className="mb-1 font-semibold text-gray-900">{value.title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-600">{value.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
