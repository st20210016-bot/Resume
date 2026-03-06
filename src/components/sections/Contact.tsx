'use client';

import { motion } from 'framer-motion';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import MagneticButton from '@/components/ui/MagneticButton';

const contacts = [
    {
        platform: 'Discord',
        handle: 'diamond_devcs',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
            </svg>
        ),
        color: '#5865F2',
        href: 'https://discord.com',
    },
    {
        platform: 'Instagram',
        handle: 'khalid.shahin2909',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
        color: '#E4405F',
        href: 'https://instagram.com/khalid.shahin2909',
    },
];

const services = [
    'Custom Bots',
    'Automation Systems',
    'Web Experiences',
    'Creative Tech Projects',
    'Discord Ecosystems',
    'Dashboard & Tools',
];

export default function Contact() {
    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-neon-violet/5 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-neon-blue/5 blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative">
                <RevealOnScroll>
                    <SectionHeading label="Connect" number="07">
                        <span className="text-gradient">Let&apos;s Build</span> Something
                    </SectionHeading>
                </RevealOnScroll>

                <RevealOnScroll delay={0.1}>
                    <p className="text-text-secondary text-lg max-w-2xl mb-16 leading-relaxed font-light">
                        Ready to bring your vision to life? Whether you need a custom bot, an automation system,
                        a premium web experience, or something entirely unique — I&apos;m here to make it happen.
                    </p>
                </RevealOnScroll>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                    {contacts.map((contact, i) => (
                        <RevealOnScroll key={i} delay={0.15 + i * 0.1}>
                            <a href={contact.href} target="_blank" rel="noopener noreferrer">
                                <GlassCard className="p-8" glowColor={`${contact.color}20`}>
                                    <div className="flex items-start gap-5">
                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                                            style={{ background: `${contact.color}15`, color: contact.color }}
                                        >
                                            {contact.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold" style={{ fontFamily: 'Outfit' }}>
                                                {contact.platform}
                                            </h3>
                                            <p className="text-text-secondary text-sm mt-1">{contact.handle}</p>
                                            <motion.p
                                                className="text-xs mt-3 flex items-center gap-1"
                                                style={{ color: contact.color }}
                                            >
                                                Connect Now
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                                </svg>
                                            </motion.p>
                                        </div>
                                    </div>
                                </GlassCard>
                            </a>
                        </RevealOnScroll>
                    ))}
                </div>

                {/* Services */}
                <RevealOnScroll delay={0.3}>
                    <div className="glass rounded-2xl p-8 md:p-12">
                        <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'Outfit' }}>
                            What I can build for you
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {services.map((service, i) => (
                                <motion.span
                                    key={i}
                                    className="px-5 py-2.5 rounded-full text-sm glass-strong text-text-secondary hover:text-text-primary transition-colors cursor-default"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    data-hover
                                >
                                    {service}
                                </motion.span>
                            ))}
                        </div>
                        <MagneticButton
                            href="https://discord.com"
                            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-neon-blue via-neon-violet to-neon-magenta text-white text-sm font-medium tracking-wider"
                        >
                            Start a Conversation
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </MagneticButton>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
