'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Lab', href: '#lab' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const prev = scrollY.getPrevious() ?? 0;
        setHidden(latest > prev && latest > 150);
        setScrolled(latest > 50);
    });

    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [mobileOpen]);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-[10000] px-4 md:px-8 py-4 transition-all duration-500 ${scrolled ? 'glass-strong' : ''
                    }`}
                initial={{ y: -100 }}
                animate={{ y: hidden ? -100 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <motion.a
                        href="#"
                        className="text-lg font-semibold tracking-[0.15em] text-gradient"
                        style={{ fontFamily: 'Outfit' }}
                        whileHover={{ scale: 1.05 }}
                        data-hover
                    >
                        DIAMOND<span className="text-text-muted font-light">DEV</span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-text-secondary hover:text-text-primary transition-colors relative group"
                                whileHover={{ y: -2 }}
                                data-hover
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-neon-blue to-neon-violet group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            className="magnetic-btn px-5 py-2 rounded-full text-sm glass border border-glass-border hover:border-neon-violet/30 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            data-hover
                        >
                            Let&apos;s Talk
                        </motion.a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 z-[10001]"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        data-hover
                    >
                        <motion.span
                            className="w-6 h-[1.5px] bg-text-primary block"
                            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        />
                        <motion.span
                            className="w-6 h-[1.5px] bg-text-primary block"
                            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                        />
                        <motion.span
                            className="w-6 h-[1.5px] bg-text-primary block"
                            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <motion.div
                className="fixed inset-0 z-[9999] bg-bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
                initial={{ opacity: 0, x: '100%' }}
                animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
                {navLinks.map((link, i) => (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        className="text-2xl font-light tracking-wider text-text-secondary hover:text-text-primary transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                        onClick={() => setMobileOpen(false)}
                    >
                        {link.label}
                    </motion.a>
                ))}
            </motion.div>
        </>
    );
}
