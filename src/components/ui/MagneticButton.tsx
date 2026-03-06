'use client';

import { useRef, ReactNode, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface Props {
    children: ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
}

export default function MagneticButton({ children, className = '', href, onClick }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouse = (e: MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        const inner = ref.current.querySelector('.btn-inner') as HTMLElement;
        if (inner) inner.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    };

    const handleLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = 'translate(0, 0)';
        const inner = ref.current.querySelector('.btn-inner') as HTMLElement;
        if (inner) inner.style.transform = 'translate(0, 0)';
    };

    const Tag = href ? 'a' : 'button';

    return (
        <motion.div
            ref={ref}
            className="inline-block transition-transform duration-300"
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            whileTap={{ scale: 0.95 }}
        >
            <Tag
                href={href}
                onClick={onClick}
                className={`btn-inner inline-flex items-center gap-2 transition-transform duration-300 ${className}`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                data-hover
            >
                {children}
            </Tag>
        </motion.div>
    );
}
