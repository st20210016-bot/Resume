'use client';

import { useRef, useState, ReactNode, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface Props {
    children: ReactNode;
    className?: string;
    glowColor?: string;
}

export default function GlassCard({ children, className = '', glowColor = 'rgba(123,47,255,0.15)' }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

    const handleMouse = (e: MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setRotateX((y - 0.5) * -10);
        setRotateY((x - 0.5) * 10);
        setGlowPos({ x: x * 100, y: y * 100 });
    };

    const handleLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`glass rounded-2xl overflow-hidden relative group ${className}`}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.15s ease-out',
            }}
            whileHover={{ scale: 1.02 }}
            data-hover
        >
            {/* Glow follow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent 60%)`,
                }}
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
