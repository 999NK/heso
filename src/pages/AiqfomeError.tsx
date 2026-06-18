import { AlertTriangle, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PdvNavbar from '../components/PdvNavbar';
import PdvFooter from '../components/PdvFooter';
import SEO from '../components/SEO';
import Cursor from '../components/Cursor';

export default function AiqfomeError() {
  return (
    <div className="bg-heso-black min-h-screen text-white font-sans noise">
      <SEO 
        title="Erro na Autorização | HESO PDV" 
        description="Ocorreu um erro no processo de autorização da integração com o aiqfome no HESO PDV."
        path="/integracoes/aiqfome/erro"
        noindex={true}
      />
      <Cursor />
      <PdvNavbar />

      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-24 bg-grid-white bg-[size:30px_30px] overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-red-500/10 blur-[100px] pointer-events-none" />

        <div className="max-w-[600px] mx-auto px-6 relative z-10 text-center">
          <div className="glass-panel p-10 md:p-12 rounded-2xl border-red-500/20 glow-red flex flex-col items-center">
            
            {/* Error Icon */}
            <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-8">
              <AlertTriangle size={40} />
            </div>

            <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-red-400 uppercase mb-3">Erro de Integração</span>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-[1.2] text-white mb-6">
              Falha na Autorização
            </h1>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Não foi possível concluir a autorização do aplicativo no <strong>aiqfome</strong>. Isto pode ter acontecido porque a permissão foi negada, o token expirou ou houve uma instabilidade de comunicação temporária com os servidores externos.
            </p>

            <div className="flex gap-3 items-center text-xs text-gray-500 bg-white/5 border border-white/5 px-4 py-2.5 rounded-lg mb-8 max-w-sm">
              <AlertTriangle size={18} className="text-red-400 shrink-0" />
              <span>Verifique se você concedeu todas as permissões de acesso ao aplicativo no painel do aiqfome e tente novamente.</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link 
                to="/integracoes/aiqfome" 
                className="px-6 py-3.5 bg-heso-purple hover:bg-heso-violet text-white rounded-full text-xs font-mono uppercase tracking-[0.15em] font-semibold transition-all shadow-lg shadow-heso-purple/20 flex items-center justify-center gap-2"
              >
                <RefreshCw size={14} className="animate-spin-slow" /> Repetir Processo
              </Link>
              <Link 
                to="/" 
                className="px-6 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full text-xs font-mono uppercase tracking-[0.15em] transition-all flex items-center justify-center"
              >
                Voltar ao Início
              </Link>
            </div>

          </div>
        </div>
      </section>

      <PdvFooter />
    </div>
  );
}
