import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/integracoes/aiqfome', label: 'aiqfome' },
  { to: '/integracoes/ifood', label: 'iFood' },
  { to: '/contato', label: 'Contato' },
];

export default function PdvNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/imgs/logo.webp" 
              alt="Logo HESO" 
              width="85" 
              height="31" 
              className="w-auto object-contain" 
              style={{ height: '31px' }} 
            />
            <span className="font-mono text-xs font-bold tracking-[0.2em] bg-gradient-to-r from-heso-purple to-heso-violet px-2 py-0.5 rounded text-white">
              PDV
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400">
          {navLinks.map((link, i) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className={`hover:text-white transition-colors flex items-center gap-2 ${isActive(link.to) ? 'text-white font-semibold' : ''}`}
            >
              <span className={`text-[9px] ${isActive(link.to) ? 'text-heso-violet' : 'text-heso-violet/60'}`}>0{i + 1}</span>
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link 
            to="/termos" 
            className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-full text-xs font-mono uppercase tracking-[0.15em] hover:bg-white/10 hover:border-heso-purple/50 transition-all"
          >
            Termos
          </Link>
          <a 
            href="/contato" 
            className="px-5 py-2.5 bg-heso-purple text-white rounded-full text-xs font-mono uppercase tracking-[0.15em] font-semibold hover:bg-heso-violet transition-all shadow-lg shadow-heso-purple/20"
          >
            Experimentar PDV
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white/70 hover:text-white transition-colors" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Menu principal"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-panel border-t border-white/5 p-6 flex flex-col gap-5 font-mono text-sm uppercase tracking-[0.15em]"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className={`text-white/70 hover:text-white transition-colors ${isActive(link.to) ? 'text-white' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/termos" 
            className="text-white/70 hover:text-white transition-colors" 
            onClick={() => setIsOpen(false)}
          >
            Termos de Uso
          </Link>
          <Link 
            to="/privacidade" 
            className="text-white/70 hover:text-white transition-colors" 
            onClick={() => setIsOpen(false)}
          >
            Política de Privacidade
          </Link>
          <hr className="border-white/10 my-2" />
          <Link 
            to="/contato" 
            className="block text-center w-full px-5 py-3 rounded-full bg-heso-purple text-white text-xs font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Experimentar PDV
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
