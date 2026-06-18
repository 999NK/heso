import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PdvNavbar from '../components/PdvNavbar';
import PdvFooter from '../components/PdvFooter';
import SEO from '../components/SEO';
import Cursor from '../components/Cursor';

export default function AiqfomeSuccess() {
  return (
    <div className="bg-heso-black min-h-screen text-white font-sans noise">
      <SEO 
        title="Autorização Concluída com Sucesso | HESO PDV" 
        description="A autorização da integração com o aplicativo aiqfome foi realizada com sucesso no HESO PDV."
        path="/integracoes/aiqfome/sucesso"
        noindex={true}
      />
      <Cursor />
      <PdvNavbar />

      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-24 bg-grid-white bg-[size:30px_30px] overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />

        <div className="max-w-[600px] mx-auto px-6 relative z-10 text-center">
          <div className="glass-panel p-10 md:p-12 rounded-2xl border-emerald-500/20 glow-emerald flex flex-col items-center">
            
            {/* Success Icon */}
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8 animate-pulse">
              <CheckCircle2 size={44} />
            </div>

            <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-3">Integrado Oficialmente</span>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-[1.2] text-white mb-6">
              Autorização Concluída!
            </h1>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              A conexão entre o seu aplicativo <strong>aiqfome</strong> e a plataforma <strong>HESO PDV</strong> foi estabelecida com sucesso. A partir de agora, o sistema está autorizado a ler e sincronizar os fluxos de pedidos.
            </p>

            <div className="flex gap-3 items-center text-xs text-gray-500 bg-white/5 border border-white/5 px-4 py-2.5 rounded-lg mb-8 max-w-sm">
              <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
              <span>Conexão criptografada segura. Seus tokens de acesso e credenciais de segurança foram transferidos.</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link 
                to="/integracoes/aiqfome" 
                className="px-6 py-3.5 bg-heso-purple hover:bg-heso-violet text-white rounded-full text-xs font-mono uppercase tracking-[0.15em] font-semibold transition-all shadow-lg shadow-heso-purple/20 flex items-center justify-center gap-2"
              >
                Voltar à Integração <ArrowRight size={14} />
              </Link>
              <Link 
                to="/" 
                className="px-6 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full text-xs font-mono uppercase tracking-[0.15em] transition-all flex items-center justify-center"
              >
                Página Inicial
              </Link>
            </div>

          </div>
        </div>
      </section>

      <PdvFooter />
    </div>
  );
}
