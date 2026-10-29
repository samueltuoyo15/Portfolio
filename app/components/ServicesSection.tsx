import { CpuIcon, SecurityCheckIcon, ServerStack02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const ServicesSection = () => {
    return (
        <section
            className="w-full max-w-6xl px-4 mb-20"
            aria-label="Services and Location"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
                        <HugeiconsIcon icon={ServerStack02Icon} size={24} strokeWidth={1.7} className="text-blue-600" />
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
                        <HugeiconsIcon icon={CpuIcon} size={24} strokeWidth={1.7} className="text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                        Payments & Business Systems
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Secure payments, logins, dashboards, and the behind-the-scenes tools
                        that help a business sell and serve customers smoothly.
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-5">
                        <HugeiconsIcon icon={SecurityCheckIcon} size={24} strokeWidth={1.7} className="text-green-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                        Software Planning & Advice
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Clear guidance on what to build, how to improve an existing product,
                        and where software can save time or create new revenue.
                    </p>
                </div>
            </div>
        </section>
    );
};
