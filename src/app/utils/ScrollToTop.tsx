"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        document.querySelector("#dashboard")?.scrollIntoView({
            behavior: "smooth",
        });

        window.history.pushState(null, "", "#dashboard");
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    className="
            fixed bottom-6 right-6 z-50
            h-12 w-12 rounded-full
            flex items-center justify-center
            bg-blue-600 dark:bg-blue-500
            backdrop-blur-xl
            border border-indigo-500/30
            shadow-lg
            hover:shadow-indigo-500/50
            transition-all
          "
                    aria-label="Scroll to top"
                    title="Back to top"
                >
                    {/* Glow */}
                    <div className="
            absolute -inset-1 rounded-full blur-xl
            bg-indigo-500/40 opacity-70
          " />

                    <ArrowUpIcon className="w-6 h-6 text-white relative z-10" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;