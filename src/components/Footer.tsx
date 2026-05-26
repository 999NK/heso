import { Link } from 'react-router-dom';
import { useConfig } from '../context/ConfigContext';

export default function Footer() {
  const { phone, whatsapp, instagram } = useConfig();
  return (
    <footer className="border-t border-white/5 bg-heso-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img src="/imgs/logo.webp" alt="Logo HESO" width="109" height="40" className="h-10 w-auto object-contain" />
              </div>
             <p className="text-sm text-gray-400 leading-relaxed">
               Hydra Ecosystem Solutions Online.<br />
               Tecnologia corporativa escalável para o seu negócio.
             </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-gray-200">Soluções</h4>
            <a href="/#solucoes" className="text-sm text-gray-400 hover:text-[#6D28D9] transition-colors">ERP Empresarial</a>
            <a href="/#solucoes" className="text-sm text-gray-400 hover:text-[#6D28D9] transition-colors">Dashboards BI</a>
            <a href="/#solucoes" className="text-sm text-gray-400 hover:text-[#6D28D9] transition-colors">Sistemas Desktop e Web</a>
            <a href="/#solucoes" className="text-sm text-gray-400 hover:text-[#6D28D9] transition-colors">Automação Custom</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-gray-200">Empresa</h4>
            <Link to="/sobre" className="text-sm text-gray-400 hover:text-[#6D28D9] transition-colors">Sobre Nós</Link>
            <Link to="/portfolio" className="text-sm text-gray-400 hover:text-[#6D28D9] transition-colors">Portfólio</Link>
            <Link to="/sobre" className="text-sm text-gray-400 hover:text-[#6D28D9] transition-colors">Por Que Nós</Link>
            <a href="#" className="text-sm text-gray-400 hover:text-[#6D28D9] transition-colors">Casos de Sucesso</a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#6D28D9] transition-colors">Contato</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-gray-200">Contato</h4>
            <a href="mailto:contato@heso.com.br" className="text-sm text-gray-400 hover:text-[#6D28D9] transition-colors">contato@heso.com.br</a>
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-[#6D28D9] transition-colors">WhatsApp: {phone}</a>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors" title="LinkedIn">
                 <span className="sr-only">LinkedIn</span>
                 <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors" title={`@${instagram}`}>
                 <span className="sr-only">Instagram @{instagram}</span>
                 <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="text-xs text-white/50">
             &copy; {new Date().getFullYear()} HESO. Todos os direitos reservados.
           </div>
           <div className="flex gap-6 text-xs text-white/50">
             <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
             <a href="#" className="hover:text-white transition-colors">Privacidade</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
