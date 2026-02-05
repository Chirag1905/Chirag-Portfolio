"use client";
import { FC, ReactNode, useRef } from "react";

const CursorGlow: FC<{ children: ReactNode }> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        ref.current.style.setProperty("--x", `${e.clientX - r.left}px`);
        ref.current.style.setProperty("--y", `${e.clientY - r.top}px`);
    };

    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            className="
        relative
        before:absolute before:inset-0
        before:bg-[radial-gradient(500px_circle_at_var(--x)_var(--y),rgba(99,102,241,0.15),transparent_40%)]
        before:opacity-0 hover:before:opacity-100
        before:transition-opacity before:duration-500
      "
        >
            {children}
        </div>
    );
};

export default CursorGlow;