'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

const projects = [
    {
        id: 1,
        title: 'NexusBot',
        category: 'Discord Ecosystem',
        summary: 'An advanced Discord management platform with AI-powered moderation, economy systems, and real-time analytics serving 50K+ users across multiple servers.',
        tech: ['Node.js', 'Discord.js', 'MongoDB', 'Redis', 'WebSocket'],
        color: '#7b2fff',
        accent: 'from-violet-600 to-purple-800',
    },
    {
        id: 2,
        title: 'AutoFlow Engine',
        category: 'Automation Platform',
        summary: 'A visual workflow automation builder that connects APIs, schedules tasks, and chains complex operations — a custom-built Zapier alternative with unlimited flexibility.',
        tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Celery'],
        color: '#00d4ff',
        accent: 'from-cyan-500 to-blue-700',
    },
    {
        id: 3,
        title: 'SynapseAI Dashboard',
        category: 'AI Product',
        summary: 'An intelligent productivity dashboard that uses machine learning to surface insights, automate reports, and visualize complex datasets in real-time.',
        tech: ['Next.js', 'Python', 'TensorFlow', 'D3.js', 'Prisma'],
        color: '#ff2d95',
        accent: 'from-pink-500 to-rose-700',
    },
    {
        id: 4,
        title: 'Quantum Portfolio',
        category: '3D Web Experience',
        summary: 'This very portfolio — an immersive 3D web experience built with React Three Fiber, featuring holographic visuals, cinematic transitions, and award-caliber design.',
        tech: ['Next.js', 'Three.js', 'R3F', 'Framer Motion', 'GSAP'],
        color: '#a855f7',
        accent: 'from-purple-500 to-indigo-700',
    },
    {
        id: 5,
        title: 'HyperScript CLI',
        category: 'Developer Tool',
        summary: 'A smart workflow automation CLI that detects project types, generates configs, runs deployments, and chains custom scripts with an intuitive command interface.',
        tech: ['Node.js', 'TypeScript', 'Shell', 'Docker', 'GitHub API'],
        color: '#0ff4f4',
        accent: 'from-teal-400 to-cyan-700',
    },
    {
        id: 6,
        title: 'DataVerse',
        category: 'Data Visualization',
        summary: 'An interactive data visualization platform that transforms raw datasets into stunning, explorable visual narratives with real-time filtering and animation.',
        tech: ['React', 'D3.js', 'WebGL', 'Python', 'FastAPI'],
        color: '#00d4ff',
        accent: 'from-blue-500 to-indigo-700',
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="section-padding relative">
            <div className="max-w-7xl mx-auto">
                <RevealOnScroll>
                    <SectionHeading label="Work" number="03">
                        <span className="text-gradient">Featured</span> Projects
                    </SectionHeading>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <RevealOnScroll key={project.id} delay={0.1 + i * 0.1}>
                            <GlassCard
                                className="p-0 cursor-pointer group h-full"
                                glowColor={`${project.color}18`}
                            >
                                <div onClick={() => setSelectedProject(project)} className="h-full flex flex-col">
                                    {/* Visual preview area */}
                                    <div
                                        className={`h-48 rounded-t-2xl bg-gradient-to-br ${project.accent} relative overflow-hidden`}
                                    >
                                        <div className="absolute inset-0 bg-black/30" />
                                        {/* Decorative elements */}
                                        <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                                            <span className="text-xs text-white/80">{project.category}</span>
                                        </div>
                                        <div className="absolute bottom-4 left-4">
                                            <h3
                                                className="text-2xl font-bold text-white tracking-tight"
                                                style={{ fontFamily: 'Outfit' }}
                                            >
                                                {project.title}
                                            </h3>
                                        </div>
                                        {/* Animated line */}
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-[2px] bg-white/30"
                                            initial={{ width: '0%' }}
                                            whileInView={{ width: '100%' }}
                                            transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
                                            {project.summary}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-[10px] px-2.5 py-1 rounded-full text-text-secondary tracking-wider"
                                                    style={{ background: `${project.color}10`, border: `1px solid ${project.color}20` }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-[20000] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setSelectedProject(null)} />
                        <motion.div
                            className="relative glass-strong rounded-3xl max-w-lg w-full p-8 overflow-auto max-h-[90vh]"
                            initial={{ scale: 0.9, y: 40 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 40 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                                data-hover
                            >
                                ✕
                            </button>

                            <div
                                className={`h-32 rounded-2xl bg-gradient-to-br ${selectedProject.accent} mb-6 flex items-end p-6`}
                            >
                                <span className="text-white/60 text-sm">{selectedProject.category}</span>
                            </div>

                            <h3 className="text-3xl font-bold mb-3 text-gradient" style={{ fontFamily: 'Outfit' }}>
                                {selectedProject.title}
                            </h3>

                            <p className="text-text-secondary leading-relaxed mb-6">
                                {selectedProject.summary}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs px-3 py-1.5 rounded-full glass text-text-secondary"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <span className="px-6 py-2.5 rounded-full bg-gradient-to-r from-neon-violet to-neon-magenta text-white text-sm font-medium cursor-pointer" data-hover>
                                    View Case Study
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
