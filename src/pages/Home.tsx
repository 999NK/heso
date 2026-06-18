import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import Ecosystem from '../components/Ecosystem';
import Differentials from '../components/Differentials';
import DashboardMockup from '../components/DashboardMockup';
import ErpPdvSection from '../components/ErpPdvSection';
import Technologies from '../components/Technologies';
import About from '../components/About';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Cursor from '../components/Cursor';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <div className="bg-heso-black min-h-screen text-white font-sans noise">
      <SEO path="/" />
      <Cursor />

      {/* Barra de progresso do scroll */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-heso-purple to-heso-violet origin-left z-[60]"
      />

      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Ecosystem />
        <Differentials />
        <DashboardMockup />
        <ErpPdvSection />
        <Technologies />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
