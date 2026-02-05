"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface Props {
    text: string;
    link: string;
    className?: string; // Add optional className
}

const NeonLink = ({ text, link, className = "" }: Props) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
    relative inline-flex items-center justify-center
    px-8 py-3 rounded-full font-semibold text-white
    bg-linear-to-r from-[#0046FF] via-[#1E8FFF] to-[#00E1B9]
    overflow-hidden transition-all duration-300
    ${className}
  `}
        >
            {/* Outer Blue Glow */}
            <div className="
    absolute -inset-1
    rounded-full blur-xl opacity-50
    bg-[radial-linear(circle,rgba(0,102,255,0.7)_0%,rgba(0,0,0,0)_70%)]
  " />

            {/* Shine Animation */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shine" />

            {/* Dot Pattern */}
            <div className="absolute right-0 w-1/2 h-full opacity-20 bg-[radial-linear(circle,#ffffff_1px,transparent_1px)] bg-size-[6px_6px]" />

            <Link href={link} className="flex items-center gap-2 relative z-20">
                {text}
                <ArrowRightIcon className="w-5 h-5" />
            </Link>
        </motion.div>
    );
};

export default NeonLink;
