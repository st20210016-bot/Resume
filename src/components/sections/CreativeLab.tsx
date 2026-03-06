'use client';

import { motion } from 'framer-motion';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

const experiments = [
    { title: 'Particle Field Study', category: 'Motion', color: '#7b2fff', gradient: 'from-violet-900 to-indigo-950' },
    { title: 'Shader Playground', category: 'WebGL', color: '#00d4ff', gradient: 'from-cyan-900 to-blue-950' },
    { title: 'Generative Patterns', category: 'Creative Code', color: '#ff2d95', gradient: 'from-pink-900 to-rose-950' },
    { title: 'Fluid Motion UI', category: 'Interface', color: '#0ff4f4', gradient: 'from-teal-900 to-emerald-950' },
    { title: 'Audio Reactive Vis', category: 'Experiment', color: '#a855f7', gradient: 'from-purple-900 to-violet-950' },
    { title: 'Neural Net Viz', category: 'AI Art', color: '#00d4ff', gradient: 'from-blue-900 to-slate-950' },
    { title: 'Kinetic Typography', category: 'Motion', color: '#ff2d95', gradient: 'from-rose-900 to-red-950' },
    { title: 'Holographic Cards', category: 'Prototype', color: '#7b2fff', gradient: 'from-indigo-900 to-purple-950' },
];

export default function CreativeLab() {
    return (
        <section id="lab" className="section-padding relative">
            <div className="max-w-7xl mx-auto">
                <RevealOnScroll>
                    <SectionHeading label="Experiments" number="04">
                        <span className="text-gradient">Creative</span> Lab
                    </SectionHeading>
                </RevealOnScroll>

                <RevealOnScroll delay={0.1}>
                    <p className="text-text-muted max-w-2xl mb-16 leading-relaxed">
                        A curated archive of visual experiments, concept prototypes, and motion studies. These explorations push the boundary of what&apos;s possible on the web — each piece is a playground for creative and technical ambition.
                    </p>
                </RevealOnScroll>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {experiments.map((exp, i) => (
                        <RevealOnScroll key={i} delay={0.05 * i}>
                            <GlassCard className="p-0 break-inside-avoid group cursor-pointer" glowColor={`${exp.color}15`}>
                                <div
                                    className={`bg-gradient-to-br ${exp.gradient} relative overflow-hidden rounded-2xl`}
                                    style={{ height: `${180 + (i % 3) * 60}px` }}
                                >
                                    {/* Animated decorative circles */}
                                    <div
                                        className="absolute w-32 h-32 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                                        style={{
                                            background: exp.color,
                                            top: '20%',
                                            left: '30%',
                                        }}
                                    />
                                    <div
                                        className="absolute w-20 h-20 rounded-full blur-lg opacity-10 group-hover:opacity-30 transition-opacity duration-700"
                                        style={{
                                            background: exp.color,
                                            bottom: '10%',
                                            right: '20%',
                                        }}
                                    />

                                    {/* Content overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="text-xs tracking-wider uppercase mb-1" style={{ color: exp.color }}>
                                            {exp.category}
                                        </span>
                                        <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Outfit' }}>
                                            {exp.title}
                                        </h3>
                                    </div>

                                    {/* Corner label */}
                                    <div className="absolute top-3 left-3">
                                        <span
                                            className="text-[10px] px-2 py-1 rounded-full tracking-wider uppercase"
                                            style={{ background: `${exp.color}20`, color: exp.color }}
                                        >
                                            {exp.category}
                                        </span>
                                    </div>

                                    {/* Hover expand icon */}
                                    <motion.div
                                        className="absolute top-3 right-3 w-7 h-7 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </motion.div>
                                </div>
                            </GlassCard>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
