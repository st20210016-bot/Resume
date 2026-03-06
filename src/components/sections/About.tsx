'use client';

import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

const highlights = [
    {
        icon: '⚡',
        title: 'Modern Web Experiences',
        desc: 'Building immersive, performant web applications with cutting-edge frameworks and 3D technologies.',
    },
    {
        icon: '🤖',
        title: 'Automation & AI Systems',
        desc: 'Crafting intelligent automation workflows, bots, and custom tools that streamline complex processes.',
    },
    {
        icon: '🎨',
        title: 'Creative Development',
        desc: 'Merging code with visual storytelling — from interactive interfaces to motion-driven products.',
    },
    {
        icon: '🔧',
        title: 'Custom Solutions',
        desc: 'Engineering tailored digital products, from Discord ecosystems to full-stack platforms, built to spec.',
    },
];

export default function About() {
    return (
        <section id="about" className="section-padding relative">
            <div className="max-w-7xl mx-auto">
                <RevealOnScroll>
                    <SectionHeading label="Who I Am" number="01">
                        <span className="text-gradient">Creative</span> Technologist
                    </SectionHeading>
                </RevealOnScroll>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left — Editorial Text */}
                    <div className="space-y-6">
                        <RevealOnScroll delay={0.1}>
                            <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light">
                                I don&apos;t just write code — I architect <span className="text-text-primary font-medium">digital experiences</span> that push boundaries. From cinematic 3D portfolios to intelligent automation systems, every project I touch is built with obsessive attention to detail.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.2}>
                            <p className="text-text-muted leading-relaxed">
                                My work lives at the intersection of engineering and art. I build bots that run communities, interfaces that tell stories, and systems that make complex workflows feel effortless. Every line of code is intentional. Every pixel is considered.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.3}>
                            <p className="text-text-muted leading-relaxed">
                                I believe technology should feel alive — responsive, elegant, and deeply human. That&apos;s the standard I hold myself to, whether I&apos;m building a Discord ecosystem for thousands of users or crafting a single interaction that makes someone pause and appreciate the craft.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.4}>
                            <div className="flex items-center gap-6 pt-4">
                                <div className="h-[1px] w-12 bg-gradient-to-r from-neon-violet to-transparent" />
                                <span className="text-text-muted text-sm italic">
                                    &ldquo;Code is a medium. Design is the message.&rdquo;
                                </span>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Right — Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {highlights.map((item, i) => (
                            <RevealOnScroll key={i} delay={0.1 + i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                                <GlassCard className="p-6 h-full" glowColor={
                                    i === 0 ? 'rgba(0,212,255,0.12)' :
                                        i === 1 ? 'rgba(123,47,255,0.12)' :
                                            i === 2 ? 'rgba(255,45,149,0.12)' :
                                                'rgba(0,244,244,0.12)'
                                }>
                                    <div className="text-2xl mb-3">{item.icon}</div>
                                    <h3 className="text-sm font-semibold text-text-primary mb-2 tracking-wide">{item.title}</h3>
                                    <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                                </GlassCard>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
