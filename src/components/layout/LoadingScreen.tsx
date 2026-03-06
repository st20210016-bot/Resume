'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 400);
                    return 100;
                }
                return prev + Math.random() * 15 + 5;
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="loading-screen"
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-2xl md:text-3xl font-light tracking-[0.3em] text-gradient mb-2" style={{ fontFamily: 'Outfit' }}>
                            DIAMOND DEV
                        </h1>
                        <p className="text-text-muted text-xs tracking-[0.5em] uppercase">
                            Loading Experience
                        </p>
                    </motion.div>

                    <div className="loading-bar mt-8">
                        <motion.div
                            className="h-full rounded-full"
                            style={{
                                background: 'linear-gradient(90deg, #00d4ff, #7b2fff, #ff2d95)',
                                width: `${Math.min(progress, 100)}%`,
                            }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>

                    <motion.p
                        className="text-text-muted text-xs mt-4 tabular-nums"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {Math.min(Math.round(progress), 100)}%
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
