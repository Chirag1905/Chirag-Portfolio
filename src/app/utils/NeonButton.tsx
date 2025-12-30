"use client";
import { motion } from "framer-motion";

interface Props {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string; // ⬅ add customization support
    showLoader?: boolean; // ⬅ for loading spinner
}

const NeonButton = ({
    text,
    onClick,
    disabled,
    className = "",
    showLoader,
}: Props) => {
    return (
        <motion.button
            whileHover={!disabled ? { scale: 1.05 } : {}}
            whileTap={!disabled ? { scale: 0.95 } : {}}
            disabled={disabled}
            onClick={onClick}
            className={`relative inline-flex items-center justify-center rounded-full 
      font-semibold text-white overflow-hidden transition-all duration-300 
      bg-gradient-to-r from-[#0046FF] via-[#1E8FFF] to-[#00E1B9]
      ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"} 
      ${className}`}
        >
            {/* Outer Blue Glow */}
            <div className="absolute -inset-1 rounded-full blur-xl opacity-50 
      bg-[radial-gradient(circle,rgba(0,102,255,0.7)_0%,rgba(0,0,0,0)_70%)]" />

            {/* Shine Animation */}
            <div className="absolute inset-0 bg-gradient-to-r 
      from-transparent via-white/20 to-transparent animate-shine" />

            {/* Dot Pattern */}
            <div className="absolute right-0 w-1/2 h-full opacity-20 
      bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[6px_6px]" />

            <span className="flex items-center gap-2 relative z-20">
                {text}
                {showLoader && (
                    <span
                        className="animate-spin inline-block border-2 border-t-transparent border-white rounded-full h-5 w-5"
                    ></span>
                )}
            </span>
        </motion.button>
    );
};

export default NeonButton;
