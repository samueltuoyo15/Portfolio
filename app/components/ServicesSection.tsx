import { Server, Cpu, ShieldCheck } from "lucide-react";

export const ServicesSection = () => {
    return (
        <section
            className="w-full max-w-6xl px-4 mb-20"
            aria-label="Services and Location"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
                        <Server className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                        Web & App Development
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Custom websites, web applications, e-commerce platforms, and
                        landing pages built for businesses.
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition">
                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-5">
                        <Cpu className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                        API & Backend Systems
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Scalable REST APIs, payment integration (Paystack, Flutterwave, Monnify and Stripe),
                        authentication systems, and database architecture for businesses.
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-5">
                        <ShieldCheck className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                        Tech Consulting
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Software architecture reviews, technical planning, and digital
                        transformation consulting for businesses.
                    </p>
                </div>
            </div>
        </section>
    );
};
