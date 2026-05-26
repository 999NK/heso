import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SolutionDetails from './pages/SolutionDetails';
import AboutPage from './pages/AboutPage';
import Portfolio from './pages/Portfolio';
import Admin from './pages/Admin';
import ScrollToTop from './components/ScrollToTop';
import { ConfigProvider } from './context/ConfigContext';

export default function App() {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/adm" element={<Admin />} />
          <Route path="/solutions/:id" element={<SolutionDetails />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}
