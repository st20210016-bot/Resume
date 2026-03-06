'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

function HolographicOrb() {
    const meshRef = useRef<THREE.Mesh>(null);
    const { pointer } = useThree();

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 + pointer.y * 0.3;
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 + pointer.x * 0.3;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
            <mesh ref={meshRef} scale={2.2}>
                <icosahedronGeometry args={[1, 4]} />
                <MeshDistortMaterial
                    color="#7b2fff"
                    emissive="#4a0fb0"
                    emissiveIntensity={0.4}
                    roughness={0.2}
                    metalness={0.9}
                    distort={0.25}
                    speed={2}
                    transparent
                    opacity={0.85}
                />
            </mesh>
        </Float>
    );
}

function InnerCore() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
        meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
            <mesh ref={meshRef} scale={1.1}>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#00d4ff"
                    emissive="#00d4ff"
                    emissiveIntensity={0.8}
                    wireframe
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </Float>
    );
}

function OrbitalRing({ radius, speed, color }: { radius: number; speed: number; color: string }) {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!ref.current) return;
        ref.current.rotation.z = state.clock.elapsedTime * speed;
        ref.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    });

    return (
        <mesh ref={ref}>
            <torusGeometry args={[radius, 0.008, 16, 100]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
                transparent
                opacity={0.4}
            />
        </mesh>
    );
}

function FloatingParticles({ count = 200 }: { count?: number }) {
    const points = useRef<THREE.Points>(null);

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = 4 + Math.random() * 8;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        if (!points.current) return;
        points.current.rotation.y = state.clock.elapsedTime * 0.02;
        points.current.rotation.x = state.clock.elapsedTime * 0.01;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#7b2fff"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.15} />
            <pointLight position={[5, 5, 5]} intensity={1} color="#7b2fff" />
            <pointLight position={[-5, -3, 3]} intensity={0.5} color="#00d4ff" />
            <pointLight position={[0, 3, -5]} intensity={0.3} color="#ff2d95" />
            <spotLight
                position={[0, 10, 0]}
                angle={0.3}
                penumbra={1}
                intensity={0.5}
                color="#7b2fff"
            />

            <HolographicOrb />
            <InnerCore />
            <OrbitalRing radius={3} speed={0.3} color="#00d4ff" />
            <OrbitalRing radius={3.5} speed={-0.2} color="#7b2fff" />
            <OrbitalRing radius={4} speed={0.15} color="#ff2d95" />
            <FloatingParticles count={300} />
            <Stars radius={20} depth={50} count={1000} factor={2} saturation={0} fade speed={0.5} />
        </>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 7], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <Scene />
            </Canvas>
        </div>
    );
}
