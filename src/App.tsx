import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import PdvHome from './pages/PdvHome';
import AiqfomeIntegration from './pages/AiqfomeIntegration';
import IfoodIntegration from './pages/IfoodIntegration';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import AiqfomeSuccess from './pages/AiqfomeSuccess';
import AiqfomeError from './pages/AiqfomeError';
import AiqfomeCallback from './pages/AiqfomeCallback';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PdvHome />} />
          <Route path="/integracoes/aiqfome" element={<AiqfomeIntegration />} />
          <Route path="/integracoes/ifood" element={<IfoodIntegration />} />
          <Route path="/termos" element={<TermsOfUse />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/integracoes/aiqfome/sucesso" element={<AiqfomeSuccess />} />
          <Route path="/integracoes/aiqfome/erro" element={<AiqfomeError />} />
          <Route path="/api/integrations/aiqfome/callback" element={<AiqfomeCallback />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

