'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 150 }: { count?: number }) {
    const points = useRef<THREE.Points>(null);

    const { positions, speeds } = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const spd = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 40;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
            spd[i] = 0.005 + Math.random() * 0.02;
        }
        return { positions: pos, speeds: spd };
    }, [count]);

    useFrame(() => {
        if (!points.current) return;
        const pos = points.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < count; i++) {
            pos[i * 3 + 1] += speeds[i];
            if (pos[i * 3 + 1] > 20) pos[i * 3 + 1] = -20;
        }
        points.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#7b2fff"
                transparent
                opacity={0.3}
                sizeAttenuation
            />
        </points>
    );
}

export default function BackgroundParticles() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <Particles count={100} />
            </Canvas>
        </div>
    );
}
