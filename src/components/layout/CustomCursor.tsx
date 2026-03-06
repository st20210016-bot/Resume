'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });

    const animate = useCallback(() => {
        ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
        ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;

        if (dotRef.current) {
            dotRef.current.style.left = `${pos.current.x - 4}px`;
            dotRef.current.style.top = `${pos.current.y - 4}px`;
        }
        if (ringRef.current) {
            ringRef.current.style.left = `${ringPos.current.x - 20}px`;
            ringRef.current.style.top = `${ringPos.current.y - 20}px`;
        }
        if (spotlightRef.current) {
            spotlightRef.current.style.left = `${pos.current.x}px`;
            spotlightRef.current.style.top = `${pos.current.y}px`;
        }
        requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY };
        };

        const handleHoverIn = () => ringRef.current?.classList.add('hovering');
        const handleHoverOut = () => ringRef.current?.classList.remove('hovering');

        window.addEventListener('mousemove', handleMouse);
        const interactives = document.querySelectorAll('a, button, [data-hover]');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', handleHoverIn);
            el.addEventListener('mouseleave', handleHoverOut);
        });

        const rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouse);
            interactives.forEach(el => {
                el.removeEventListener('mouseenter', handleHoverIn);
                el.removeEventListener('mouseleave', handleHoverOut);
            });
            cancelAnimationFrame(rafId);
        };
    }, [animate]);

    return (
        <>
            <div ref={dotRef} className="cursor-dot hidden md:block" />
            <div ref={ringRef} className="cursor-ring hidden md:block" />
            <div ref={spotlightRef} className="spotlight hidden md:block" />
        </>
    );
}
