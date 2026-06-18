import PdvNavbar from '../components/PdvNavbar';
import PdvHero from '../components/PdvHero';
import PdvSolutions from '../components/PdvSolutions';
import PdvEcosystem from '../components/PdvEcosystem';
import PdvDifferentials from '../components/PdvDifferentials';
import PdvDashboardMockup from '../components/PdvDashboardMockup';
import PdvTechnologies from '../components/PdvTechnologies';
import PdvAbout from '../components/PdvAbout';
import PdvCTA from '../components/PdvCTA';
import PdvFooter from '../components/PdvFooter';
import SEO from '../components/SEO';
import Cursor from '../components/Cursor';

export default function PdvHome() {
  return (
    <div className="bg-heso-black min-h-screen text-white font-sans noise">
      <SEO 
        title="Início | HESO PDV" 
        description="Apresentamos o HESO PDV: o sistema definitivo de PDV/ERP para gestão de estoque, vendas rápidas e pedidos online integrados para o varejo moderno."
        path="/"
      />
      <Cursor />
      <PdvNavbar />
      <main>
        <PdvHero />
        <PdvSolutions />
        <PdvEcosystem />
        <PdvDifferentials />
        <PdvDashboardMockup />
        <PdvTechnologies />
        <PdvAbout />
        <PdvCTA />
      </main>
      <PdvFooter />
    </div>
  );
}
