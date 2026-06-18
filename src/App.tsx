import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import { ConfigProvider } from './context/ConfigContext';

// PDV Pages
import PdvHome from './pages/PdvHome';
import AiqfomeIntegration from './pages/AiqfomeIntegration';
import IfoodIntegration from './pages/IfoodIntegration';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import AiqfomeSuccess from './pages/AiqfomeSuccess';
import AiqfomeError from './pages/AiqfomeError';
import AiqfomeCallback from './pages/AiqfomeCallback';

// Main Site (Heso Agency) Pages
import Home from './pages/Home';
import SolutionDetails from './pages/SolutionDetails';
import AboutPage from './pages/AboutPage';
import Portfolio from './pages/Portfolio';
import Admin from './pages/Admin';

export default function App() {
  // Check hostname and optional local testing URL parameter
  const hostname = window.location.hostname;
  const searchParams = new URLSearchParams(window.location.search);
  const siteParam = searchParams.get('site');
  
  if (siteParam === 'pdv') {
    localStorage.setItem('force_site', 'pdv');
  } else if (siteParam === 'main') {
    localStorage.setItem('force_site', 'main');
  }
  
  const forceSite = localStorage.getItem('force_site');
  const isPdvSubdomain = hostname.startsWith('pdv.') || hostname.includes('pdv.heso.com.br') || forceSite === 'pdv';

  return (
    <ConfigProvider>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          {isPdvSubdomain ? (
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
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/adm" element={<Admin />} />
              <Route path="/solutions/:id" element={<SolutionDetails />} />
            </Routes>
          )}
        </BrowserRouter>
      </HelmetProvider>
    </ConfigProvider>
  );
}

