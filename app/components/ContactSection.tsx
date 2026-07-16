import { Rocket } from "lucide-react";

export const ContactSection = () => {
    return (
        <section className="w-full max-w-4xl px-4 mb-20 text-center">
            <div className="bg-[#111] text-white rounded-3xl p-12 relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                    }}
                ></div>
                <div className="relative z-10">
                    <h2 className="font-serif text-3xl md:text-5xl mb-6">
                        Need a reliable developer to work with?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                        I&apos;m a web developer based in{" "}
                        <span className="text-white font-semibold">
                            Warri, Delta State
                        </span>
                        , let&apos;s build something robust, secure, and scalable for your
                        business. Currently available for new projects.
                    </p>
                    <a
                        href="mailto:samueltuoyo9082@gmail.com"
                        className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition"
                    >
                        Let&apos;s Talk <Rocket className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};
