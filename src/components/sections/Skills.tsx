'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

const categories = [
    {
        name: 'Programming & Development',
        icon: '💻',
        color: '#00d4ff',
        skills: ['JavaScript', 'Python', 'HTML', 'CSS', 'Node.js', 'React', 'Next.js', 'Frontend Dev', 'Backend Scripting', 'TypeScript', 'Three.js', 'Full-Stack'],
    },
    {
        name: 'Discord Development',
        icon: '🤖',
        color: '#7b2fff',
        skills: ['Bot Development', 'Custom Systems', 'Moderation Bots', 'Utility Bots', 'API Integrations', 'Community Tools', 'Economy Systems', 'Auto-Moderation'],
    },
    {
        name: 'Automation',
        icon: '⚙️',
        color: '#ff2d95',
        skills: ['Workflow Automation', 'Custom Scripts', 'Process Automation', 'Tool Building', 'Smart Systems', 'Task Scheduling', 'Data Pipelines', 'CI/CD'],
    },
    {
        name: 'Creative & Product',
        icon: '🎨',
        color: '#0ff4f4',
        skills: ['UI/UX Design', 'Interactive Web', 'Motion Design', 'Product Thinking', 'Creative Dev', '3D Web', 'Visual Systems', 'Prototyping'],
    },
    {
        name: 'Custom Requests',
        icon: '🛠️',
        color: '#a855f7',
        skills: ['Custom Bots', 'Tailored Automation', 'Unique Digital Tools', 'Custom Web Interfaces', 'Made-to-Order Solutions', 'Client Systems', 'Bespoke Workflows', 'Personalized Platforms'],
    },
];

export default function Skills() {
    const [active, setActive] = useState(0);

    return (
        <section id="skills" className="section-padding relative">
            <div className="max-w-7xl mx-auto">
                <RevealOnScroll>
                    <SectionHeading label="Expertise" number="02">
                        <span className="text-gradient">Technical</span> Arsenal
                    </SectionHeading>
                </RevealOnScroll>

                {/* Category Tabs */}
                <RevealOnScroll delay={0.1}>
                    <div className="flex flex-wrap gap-3 mb-16">
                        {categories.map((cat, i) => (
                            <motion.button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`px-5 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300 ${active === i
                                        ? 'glass-strong text-text-primary'
                                        : 'text-text-muted hover:text-text-secondary'
                                    }`}
                                style={active === i ? { boxShadow: `0 0 20px ${cat.color}20, 0 0 60px ${cat.color}08` } : {}}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                data-hover
                            >
                                <span className="mr-2">{cat.icon}</span>
                                {cat.name}
                            </motion.button>
                        ))}
                    </div>
                </RevealOnScroll>

                {/* Skill Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                    >
                        {categories[active].skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                            >
                                <GlassCard className="p-5 text-center" glowColor={`${categories[active].color}18`}>
                                    <div
                                        className="w-10 h-10 mx-auto mb-3 rounded-xl flex items-center justify-center"
                                        style={{ background: `${categories[active].color}15` }}
                                    >
                                        <div
                                            className="w-2 h-2 rounded-full"
                                            style={{ background: categories[active].color, boxShadow: `0 0 10px ${categories[active].color}` }}
                                        />
                                    </div>
                                    <p className="text-sm font-medium text-text-primary">{skill}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Floating Marquee */}
                <RevealOnScroll delay={0.2}>
                    <div className="mt-20 overflow-hidden relative">
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10" />
                        <div className="animate-marquee flex gap-8 whitespace-nowrap">
                            {[...categories.flatMap(c => c.skills), ...categories.flatMap(c => c.skills)].map((skill, i) => (
                                <span key={i} className="text-text-muted/20 text-6xl font-bold tracking-tight" style={{ fontFamily: 'Outfit' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
