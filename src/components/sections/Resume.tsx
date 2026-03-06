'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

const tabs = ['Experience', 'Education', 'Strengths', 'Toolkit'];

const experience = [
    {
        period: '2023 — Present',
        role: 'Creative Developer & Automation Specialist',
        org: 'Freelance / Independent',
        desc: 'Building premium web experiences, Discord ecosystems, automation platforms, and custom digital products for clients worldwide.',
    },
    {
        period: '2022 — 2023',
        role: 'Full-Stack Developer',
        org: 'Digital Agency Projects',
        desc: 'Developed interactive websites, APIs, and internal tools. Led frontend architecture for multiple client projects.',
    },
    {
        period: '2021 — 2022',
        role: 'Bot Developer & Community Builder',
        org: 'Discord Communities',
        desc: 'Created advanced Discord bots serving thousands of users, with moderation, economy, and engagement systems.',
    },
];

const education = [
    {
        period: '2022 — Present',
        role: 'Self-Directed Study',
        org: 'Continuous Learning',
        desc: 'Deep-diving into 3D web (Three.js, R3F), AI/ML, creative coding, system architecture, and advanced frontend engineering.',
    },
    {
        period: '2021 — 2023',
        role: 'Computer Science Foundations',
        org: 'Academic Studies',
        desc: 'Algorithms, data structures, software engineering, databases, and networking fundamentals.',
    },
];

const strengths = [
    'Complex Problem Solving', 'System Architecture', 'Creative Direction',
    'Rapid Prototyping', 'Performance Optimization', 'User Experience Design',
    'API Design', 'Real-Time Systems', 'Visual Storytelling',
    'Technical Leadership', 'Client Communication', 'Deadline Management',
];

const toolkit = [
    'JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Node.js',
    'Three.js', 'GSAP', 'Framer Motion', 'Tailwind CSS', 'MongoDB',
    'PostgreSQL', 'Redis', 'Docker', 'Git', 'Figma', 'VS Code', 'Linux',
];

export default function Resume() {
    const [activeTab, setActiveTab] = useState(0);

    const renderTimeline = (items: typeof experience) => (
        <div className="space-y-0">
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative pl-8 pb-10 last:pb-0"
                >
                    {/* Timeline line */}
                    {i < items.length - 1 && (
                        <div className="absolute left-[7px] top-3 bottom-0 w-[1px] bg-gradient-to-b from-neon-violet/30 to-transparent" />
                    )}
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-neon-violet bg-bg-primary" />

                    <GlassCard className="p-6">
                        <span className="text-xs text-neon-violet tracking-wider">{item.period}</span>
                        <h4 className="text-lg font-semibold mt-2" style={{ fontFamily: 'Outfit' }}>{item.role}</h4>
                        <p className="text-sm text-text-secondary mt-1">{item.org}</p>
                        <p className="text-sm text-text-muted mt-3 leading-relaxed">{item.desc}</p>
                    </GlassCard>
                </motion.div>
            ))}
        </div>
    );

    const renderGrid = (items: string[], color: string) => (
        <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            {items.map((item, i) => (
                <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                >
                    <GlassCard className="px-4 py-3 text-center" glowColor={color}>
                        <span className="text-sm text-text-secondary">{item}</span>
                    </GlassCard>
                </motion.div>
            ))}
        </motion.div>
    );

    return (
        <section id="resume" className="section-padding relative">
            <div className="max-w-5xl mx-auto">
                <RevealOnScroll>
                    <SectionHeading label="Background" number="05">
                        <span className="text-gradient">Interactive</span> Resume
                    </SectionHeading>
                </RevealOnScroll>

                {/* Tabs */}
                <RevealOnScroll delay={0.1}>
                    <div className="flex gap-2 mb-12 overflow-x-auto pb-2">
                        {tabs.map((tab, i) => (
                            <motion.button
                                key={tab}
                                onClick={() => setActiveTab(i)}
                                className={`px-6 py-2.5 rounded-full text-sm tracking-wide whitespace-nowrap transition-all duration-300 ${activeTab === i
                                        ? 'glass-strong text-text-primary glow-violet'
                                        : 'text-text-muted hover:text-text-secondary'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                data-hover
                            >
                                {tab}
                            </motion.button>
                        ))}
                    </div>
                </RevealOnScroll>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {activeTab === 0 && renderTimeline(experience)}
                        {activeTab === 1 && renderTimeline(education)}
                        {activeTab === 2 && renderGrid(strengths, 'rgba(0,212,255,0.12)')}
                        {activeTab === 3 && renderGrid(toolkit, 'rgba(123,47,255,0.12)')}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
