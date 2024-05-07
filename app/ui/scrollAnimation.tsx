"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScrollAnimation({
    children,
}: {
    children: React.ReactNode;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref}>
            <div
                style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                }}
            >
                {children}
            </div>
        </div>
    );
}
