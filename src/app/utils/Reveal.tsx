"use client";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

const Reveal: FC<{ children: ReactNode; delay?: number }> = ({
    children,
    delay = 0,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;