import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

// Import logos (Update paths as needed)
import GfgLogo from "../../assets/gfg-logo.webp";
import GfgTextLogo from "../../assets/geeksforgeeks.webp";

// Update with Java-Verse link
const REGISTRATION_URL = "#";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        // Initial checks
        handleScroll();
        handleResize();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#guest", label: "Guest" },
        { href: "#timeline", label: "Timeline" },
        { href: "#sponsors", label: "Sponsors" },
        { href: "#faq", label: "FAQs" },
    ];

    // Variants for collapsible sections
    // Animating width/padding to 0 smooths out the "shrink" effect
    const collapseVar = {
        hidden: { width: 0, opacity: 0, paddingLeft: 0, paddingRight: 0, scale: 0.9 },
        visible: { width: "auto", opacity: 1, paddingLeft: "2rem", paddingRight: "2rem", scale: 1 }
    };

    const textLogoVar = {
        hidden: { width: 0, opacity: 0, marginLeft: 0 },
        visible: { width: "auto", opacity: 1, marginLeft: "0.5rem" }
    };

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 flex justify-center pointer-events-none">
            <motion.div
                layout
                className={`pointer-events-auto flex items-center justify-between rounded-full 
                bg-black/60 backdrop-blur-md border border-purple-500/50
                shadow-[0_0_20px_rgba(168,85,247,0.4)] py-3 overflow-hidden
                ${isScrolled || isMobile ? "px-2" : "px-4"}`}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                style={{ minWidth: "fit-content" }}
            >
                {/* Logo Section */}
                <div className="flex items-center flex-shrink-0">
                    <a href="#home" className="flex items-center gap-2 group px-2">
                        <img
                            src={GfgLogo}
                            alt="Logo"
                            className="w-10 h-10 object-contain flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        />

                        <AnimatePresence>
                            {!isScrolled && !isMobile && (
                                <motion.div
                                    variants={textLogoVar}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    className="overflow-hidden flex items-center border-r border-white/10 pr-4 whitespace-nowrap"
                                >
                                    <img
                                        src={GfgTextLogo}
                                        alt="GFG"
                                        className="h-6 object-contain brightness-200"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </a>
                </div>

                {/* Nav Links - Collapsible */}
                <AnimatePresence>
                    {!isScrolled && !isMobile && (
                        <motion.div
                            variants={collapseVar}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="flex items-center justify-center gap-8 overflow-hidden whitespace-nowrap"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm font-bold tracking-widest uppercase text-white hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Register Button */}
                <div className="flex items-center flex-shrink-0 pl-2">
                    <a
                        href={REGISTRATION_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold text-sm tracking-wider uppercase px-6 py-3 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.6)] hover:shadow-[0_0_25px_rgba(147,51,234,0.8)] hover:scale-105 transition-all duration-300 whitespace-nowrap"
                    >
                        Register Now
                    </a>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;