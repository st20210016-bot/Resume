'use client';

import RevealOnScroll from '@/components/ui/RevealOnScroll';

export default function Philosophy() {
    return (
        <section id="philosophy" className="section-padding relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                {/* Ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-violet/5 blur-[120px] pointer-events-none" />

                <RevealOnScroll>
                    <span className="text-neon-violet text-sm tracking-[0.3em] uppercase block mb-6">
                        06 — Philosophy
                    </span>
                </RevealOnScroll>

                <RevealOnScroll delay={0.1}>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight"
                        style={{ fontFamily: 'Outfit' }}
                    >
                        I believe in building things that feel{' '}
                        <span className="text-gradient">alive</span> — interfaces that breathe,
                        systems that think, and experiences that{' '}
                        <span className="text-gradient">stay with you</span>.
                    </h2>
                </RevealOnScroll>

                <RevealOnScroll delay={0.2}>
                    <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 font-light">
                        Code, for me, is a creative medium. Every project is a chance to blend logic with beauty,
                        engineering with empathy, and power with elegance. I don&apos;t build minimum viable products —
                        I craft digital experiences that demand attention.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll delay={0.3}>
                    <p className="text-text-muted leading-relaxed max-w-xl mx-auto">
                        Whether it&apos;s a Discord bot that runs a community flawlessly,
                        an automation system that saves hours of work, or a portfolio that stops
                        you mid-scroll — I want every piece of my work to feel intentional,
                        modern, and unmistakably mine.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll delay={0.4}>
                    <div className="flex items-center justify-center gap-6 mt-12">
                        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-neon-violet/40" />
                        <span className="text-text-muted text-sm tracking-wider italic">
                            The details aren&apos;t the details. They are the design.
                        </span>
                        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-neon-violet/40" />
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
