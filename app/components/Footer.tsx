export const Footer = () => {
    return (
        <footer className="w-full py-8 text-center text-gray-500 text-sm font-medium">
            <address className="not-italic mb-2 text-xs text-gray-400">
                Samuel Tuoyo · Full Stack & Product Engineer ·{" "}
                <span itemProp="addressCountry">Nigeria</span> ·{" "}
                <a
                    href="mailto:hello@samueltuoyo.com"
                    className="hover:text-gray-600 transition"
                >
                    hello@samueltuoyo.com
                </a>
            </address>
            <p>© {new Date().getFullYear()} Samuel Tuoyo. All rights reserved.</p>
        </footer>
    );
};
