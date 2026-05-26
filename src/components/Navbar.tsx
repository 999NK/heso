import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '../context/ConfigContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { whatsapp } = useConfig();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/imgs/logo.png" alt="Logo HESO" className="w-auto object-contain" style={{ height: '31px' }} />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="/#solucoes" className="hover:text-white transition-colors">Soluções</a>
          <a href="/#ecossistema" className="hover:text-white transition-colors">Ecossistema</a>
          <a href="/#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
          <Link to="/sobre" className="hover:text-white transition-colors">Sobre nós</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/portfolio" className="px-5 py-2 bg-white/5 border border-white/10 text-white rounded-full text-sm font-semibold hover:bg-white/10 hover:border-[#6D28D9]/50 transition-all">
            Portfólio
          </Link>
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-[#6D28D9] text-white rounded-full text-sm font-semibold hover:bg-[#5B21B6] transition-all shadow-lg shadow-[#6D28D9]/20">
            Falar com especialista
          </a>
        </div>

        <button className="md:hidden text-white/70" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-panel border-t border-white/5 p-6 flex flex-col gap-4"
        >
          <a href="/#solucoes" className="text-white/70" onClick={() => setIsOpen(false)}>Soluções</a>
          <a href="/#ecossistema" className="text-white/70" onClick={() => setIsOpen(false)}>Ecossistema</a>
          <a href="/#diferenciais" className="text-white/70" onClick={() => setIsOpen(false)}>Diferenciais</a>
          <Link to="/portfolio" className="text-white/70" onClick={() => setIsOpen(false)}>Portfólio</Link>
          <Link to="/sobre" className="text-white/70" onClick={() => setIsOpen(false)}>Sobre nós</Link>
          <hr className="border-white/10 my-2" />
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="block text-center w-full px-5 py-2.5 rounded-full bg-heso-purple text-white text-sm font-medium">
            Falar com especialista
          </a>
        </motion.div>
      )}
    </nav>
  );
}
