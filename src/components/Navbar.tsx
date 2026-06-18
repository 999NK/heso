import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '../context/ConfigContext';

const navLinks = [
  { href: '/#solucoes', label: 'Soluções' },
  { href: '/#ecossistema', label: 'Ecossistema' },
  { href: '/#diferenciais', label: 'Diferenciais' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { whatsapp } = useConfig();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/imgs/logo.webp" alt="Logo HESO" width="85" height="31" className="w-auto object-contain" style={{ height: '31px' }} />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400">
          {navLinks.map((link, i) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors flex items-center gap-2">
              <span className="text-heso-violet/60 text-[9px]">0{i + 1}</span>
              {link.label}
            </a>
          ))}
          <Link to="/sobre" className="hover:text-white transition-colors flex items-center gap-2">
            <span className="text-heso-violet/60 text-[9px]">04</span>
            Sobre nós
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/portfolio" className="px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-full text-xs font-mono uppercase tracking-[0.15em] hover:bg-white/10 hover:border-heso-purple/50 transition-all">
            Portfólio
          </Link>
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-heso-purple text-white rounded-full text-xs font-mono uppercase tracking-[0.15em] font-semibold hover:bg-heso-violet transition-all shadow-lg shadow-heso-purple/20">
            Falar com especialista
          </a>
        </div>

        <button className="md:hidden text-white/70" onClick={() => setIsOpen(!isOpen)} aria-label="Menu principal">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-panel border-t border-white/5 p-6 flex flex-col gap-5 font-mono text-sm uppercase tracking-[0.15em]"
        >
          <a href="/#solucoes" className="text-white/70" onClick={() => setIsOpen(false)}>Soluções</a>
          <a href="/#ecossistema" className="text-white/70" onClick={() => setIsOpen(false)}>Ecossistema</a>
          <a href="/#diferenciais" className="text-white/70" onClick={() => setIsOpen(false)}>Diferenciais</a>
          <Link to="/portfolio" className="text-white/70" onClick={() => setIsOpen(false)}>Portfólio</Link>
          <Link to="/sobre" className="text-white/70" onClick={() => setIsOpen(false)}>Sobre nós</Link>
          <hr className="border-white/10 my-2" />
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="block text-center w-full px-5 py-3 rounded-full bg-heso-purple text-white text-xs font-semibold">
            Falar com especialista
          </a>
        </motion.div>
      )}
    </nav>
  );
}
