'use client';

import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    label: string;
    number?: string;
    className?: string;
}

export default function SectionHeading({ children, label, number, className = '' }: Props) {
    return (
        <div className={`mb-16 md:mb-24 ${className}`}>
            <div className="flex items-center gap-4 mb-4">
                {number && (
                    <span className="text-neon-violet text-sm font-mono tracking-wider">
                        {number}
                    </span>
                )}
                <span className="text-text-muted text-xs tracking-[0.3em] uppercase">
                    {label}
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-glass-border to-transparent" />
            </div>
            <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                style={{ fontFamily: 'Outfit' }}
            >
                {children}
            </h2>
        </div>
    );
}
