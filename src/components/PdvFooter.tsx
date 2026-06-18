import { Link } from 'react-router-dom';

export default function PdvFooter() {
  return (
    <footer className="border-t border-white/5 bg-heso-black pt-20 pb-0 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/imgs/logo.webp" alt="Logo HESO" width="109" height="40" className="h-10 w-auto object-contain" />
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] bg-gradient-to-r from-heso-purple to-heso-violet px-2 py-0.5 rounded text-white -mt-2">
                PDV
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              HESO PDV - Sistema comercial de frente de caixa, gestão de estoque e integração de pedidos online para o seu negócio varejista.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">Integrações</h4>
            <Link to="/integracoes/aiqfome" className="text-sm text-gray-400 hover:text-heso-violet transition-colors">Integração aiqfome</Link>
            <Link to="/integracoes/ifood" className="text-sm text-gray-400 hover:text-heso-violet transition-colors">Integração iFood</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">Legal & Suporte</h4>
            <Link to="/termos" className="text-sm text-gray-400 hover:text-heso-violet transition-colors">Termos de Uso</Link>
            <Link to="/privacidade" className="text-sm text-gray-400 hover:text-heso-violet transition-colors">Política de Privacidade</Link>
            <Link to="/contato" className="text-sm text-gray-400 hover:text-heso-violet transition-colors">Contato Oficial</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">Contato</h4>
            <a href="mailto:nicollasarcanjo13@gmail.com" className="text-sm text-gray-400 hover:text-heso-violet transition-colors break-words">
              nicollasarcanjo13@gmail.com
            </a>
            <span className="text-xs text-gray-500 font-mono">Disponível para suporte e dúvidas comerciais</span>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 pb-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            &copy; {new Date().getFullYear()} HESO PDV. Todos os direitos reservados.
          </div>
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            <Link to="/termos" className="hover:text-white transition-colors">Termos</Link>
            <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>

      {/* Wordmark gigante */}
      <div className="relative select-none pointer-events-none flex justify-center" aria-hidden="true">
        <div className="font-display font-extrabold uppercase leading-[0.75] text-[28vw] tracking-tight text-stroke-faint -mb-[5vw] bg-gradient-to-b from-white/10 to-transparent bg-clip-text">
          HESO PDV
        </div>
      </div>
    </footer>
  );
}
