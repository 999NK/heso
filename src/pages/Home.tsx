import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import Ecosystem from '../components/Ecosystem';
import Differentials from '../components/Differentials';
import DashboardMockup from '../components/DashboardMockup';
import Technologies from '../components/Technologies';
import About from '../components/About';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#6D28D9]/30 selection:text-white">
      <SEO path="/" />
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Ecosystem />
        <Differentials />
        <DashboardMockup />
        <Technologies />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
