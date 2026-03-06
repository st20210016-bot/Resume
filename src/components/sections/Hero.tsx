'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false });

const stats = [
    { value: '50+', label: 'Projects' },
    { value: '3+', label: 'Years' },
    { value: '100%', label: 'Passion' },
];

const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            delay: 0.8 + i * 0.05,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

export default function Hero() {
    const name = 'DIAMOND DEV';

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <HeroScene />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                {/* Badge */}
                <motion.div
                    className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-text-secondary tracking-wider">Available for Projects</span>
                </motion.div>

                {/* Name */}
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Outfit' }}>
                    <span className="flex justify-center flex-wrap perspective-[1000px]">
                        {name.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterVariants}
                                initial="hidden"
                                animate="visible"
                                className={char === ' ' ? 'w-4 md:w-8' : 'text-gradient inline-block'}
                                style={{ display: 'inline-block' }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                    </span>
                </h1>

                {/* Subtitle */}
                <motion.p
                    className="text-base md:text-lg text-text-secondary tracking-[0.2em] mb-12 font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                >
                    Creative Developer &bull; 3D Web Builder &bull; Automation Innovator
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7, duration: 0.8 }}
                >
                    <MagneticButton
                        href="#projects"
                        className="px-8 py-3.5 rounded-full bg-gradient-to-r from-neon-blue via-neon-violet to-neon-magenta text-white text-sm font-medium tracking-wider"
                    >
                        View Projects
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                    </MagneticButton>

                    <MagneticButton
                        href="#resume"
                        className="px-8 py-3.5 rounded-full glass border border-glass-border text-sm font-medium tracking-wider hover:border-neon-violet/30 transition-colors"
                    >
                        Explore Resume
                    </MagneticButton>

                    <MagneticButton
                        href="#contact"
                        className="px-8 py-3.5 rounded-full glass border border-glass-border text-sm font-medium tracking-wider hover:border-neon-blue/30 transition-colors"
                    >
                        Contact Me
                    </MagneticButton>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="flex items-center justify-center gap-8 md:gap-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-gradient" style={{ fontFamily: 'Outfit' }}>
                                {stat.value}
                            </div>
                            <div className="text-xs text-text-muted tracking-wider mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
            >
                <span className="text-text-muted text-[10px] tracking-[0.3em] uppercase">Scroll</span>
                <div className="w-5 h-8 rounded-full border border-text-muted/30 flex justify-center pt-1.5">
                    <motion.div
                        className="w-1 h-1 rounded-full bg-neon-violet"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
        </section>
    );
}
