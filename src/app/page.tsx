'use client';

import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/layout/LoadingScreen';
import CustomCursor from '@/components/layout/CustomCursor';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import CreativeLab from '@/components/sections/CreativeLab';
import Resume from '@/components/sections/Resume';
import Philosophy from '@/components/sections/Philosophy';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

const BackgroundParticles = dynamic(() => import('@/components/three/Particles'), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <BackgroundParticles />
      <Navbar />

      <main className="relative z-[2]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CreativeLab />
        <Resume />
        <Philosophy />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
