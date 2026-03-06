'use client';

export default function Footer() {
    return (
        <footer className="relative py-12 px-6 border-t border-glass-border">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-text-muted text-sm tracking-wider" style={{ fontFamily: 'Outfit' }}>
                    © {new Date().getFullYear()} <span className="text-gradient">DIAMOND DEV</span> — All rights reserved.
                </p>
                <p className="text-text-muted text-xs tracking-wider">
                    Built with passion, precision & vision
                </p>
            </div>
        </footer>
    );
}
