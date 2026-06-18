import { motion } from 'motion/react';
import { Layers, ArrowLeft, CheckCircle2, Shield, Info, Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PdvNavbar from '../components/PdvNavbar';
import PdvFooter from '../components/PdvFooter';
import SEO from '../components/SEO';
import Cursor from '../components/Cursor';

export default function AiqfomeIntegration() {
  return (
    <div className="bg-heso-black min-h-screen text-white font-sans noise">
      <SEO 
        title="Integração aiqfome | HESO PDV" 
        description="Saiba como conectar sua loja do aiqfome ao HESO PDV para centralizar a recepção de pedidos, gerenciar cardápio e atualizar estoque em tempo real."
        path="/integracoes/aiqfome"
      />
      <Cursor />
      <PdvNavbar />

      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-grid-white bg-[size:30px_30px] overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-white transition-colors mb-10 group">
            <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" />
            Voltar ao início
          </Link>

          <div className="flex flex-col items-start text-left mb-16">
            <div className="px-3 py-1 bg-purple-500/15 border border-purple-500/30 rounded text-purple-300 font-mono text-xs uppercase font-bold tracking-wider mb-6">
              Integrações Oficiais
            </div>
            
            <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.1] text-white mb-6">
              Integração <span className="text-gradient-purple">aiqfome</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
              O HESO PDV está sendo preparado e homologado para receber e gerenciar pedidos do <strong>aiqfome</strong> diretamente dentro do sistema de retaguarda e frente de caixa. Centralize sua operação de delivery, elimine erros manuais e acelere seu atendimento.
            </p>
          </div>

          {/* Integration Status / Roadmap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-panel p-8 rounded-2xl border-white/5 hover:border-purple-500/30 transition-all">
              <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-3">
                <Layers size={20} className="text-heso-violet" />
                Como funcionará a integração?
              </h3>
              
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 size={18} className="text-heso-violet shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Sincronização de Pedidos</strong>
                    <span className="text-xs text-gray-400">Os pedidos feitos no app do aiqfome entram automaticamente no HESO PDV para preparo imediato.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 size={18} className="text-heso-violet shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Gestão de Cardápio Centralizada</strong>
                    <span className="text-xs text-gray-400">Edite preços, pause itens e configure novos produtos no HESO PDV, refletindo instantaneamente no aiqfome.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 size={18} className="text-heso-violet shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Atualização de Status de Entrega</strong>
                    <span className="text-xs text-gray-400">Ao despachar o pedido no PDV, o cliente do aiqfome é notificado automaticamente que o motoboy está a caminho.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-2xl border-white/5 hover:border-purple-500/30 transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-3">
                  <Shield size={20} className="text-heso-violet" />
                  Ambiente de Testes / OAuth
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Se você é administrador ou testador, pode validar o fluxo técnico de redirecionamento OAuth utilizando o botão abaixo. O fluxo simula o retorno de credenciais seguras exigidas pelas diretrizes do aiqfome.
                </p>
              </div>

              <div>
                <a 
                  href="/api/integrations/aiqfome/callback?code=auth_code_simulado_12345" 
                  className="w-full text-center block px-6 py-3 bg-heso-purple hover:bg-heso-violet text-white rounded-full text-xs font-mono uppercase tracking-[0.15em] font-semibold transition-all shadow-lg shadow-heso-purple/20"
                >
                  Testar Callback de Sucesso
                </a>
                <div className="flex gap-3 mt-3">
                  <a 
                    href="/api/integrations/aiqfome/callback?error=access_denied" 
                    className="w-1/2 text-center block px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-red-500/10 hover:border-red-500/30 text-xs text-gray-400 hover:text-red-400 rounded-full font-mono uppercase tracking-wider transition-all"
                  >
                    Testar Erro
                  </a>
                  <a 
                    href="/api/integrations/aiqfome/callback" 
                    className="w-1/2 text-center block px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-red-500/10 hover:border-red-500/30 text-xs text-gray-400 hover:text-red-400 rounded-full font-mono uppercase tracking-wider transition-all"
                  >
                    Testar Sem Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Data Card */}
          <div className="glass-panel p-8 rounded-2xl border-white/5 mb-16">
            <h3 className="font-display font-bold text-xl text-white mb-4 flex items-center gap-3">
              <Link2 size={20} className="text-heso-violet" />
              Dados para Cadastro no Painel do aiqfome
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Para homologar a integração do HESO PDV com o aiqfome, utilize as seguintes URLs no formulário de cadastro de aplicativo de terceiros do portal do desenvolvedor aiqfome:
            </p>

            <div className="space-y-4 font-mono text-xs">
              <div className="bg-heso-gray border border-white/5 rounded-lg p-4">
                <span className="text-heso-violet block uppercase tracking-wider text-[10px] mb-1">URL do Site do Aplicativo</span>
                <span className="text-white select-all">https://pdv.heso.com.br</span>
              </div>
              
              <div className="bg-heso-gray border border-white/5 rounded-lg p-4">
                <span className="text-heso-violet block uppercase tracking-wider text-[10px] mb-1">URL de Redirecionamento (Callback OAuth)</span>
                <span className="text-white select-all">https://pdv.heso.com.br/api/integrations/aiqfome/callback</span>
              </div>

              <div className="bg-heso-gray border border-white/5 rounded-lg p-4">
                <span className="text-heso-violet block uppercase tracking-wider text-[10px] mb-1">Termos de Uso</span>
                <span className="text-white select-all">https://pdv.heso.com.br/termos</span>
              </div>

              <div className="bg-heso-gray border border-white/5 rounded-lg p-4">
                <span className="text-heso-violet block uppercase tracking-wider text-[10px] mb-1">Política de Privacidade</span>
                <span className="text-white select-all">https://pdv.heso.com.br/privacidade</span>
              </div>
            </div>
          </div>

          {/* Info banner */}
          <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 items-start">
            <Info size={24} className="text-heso-violet shrink-0 mt-0.5" />
            <p className="text-xs text-gray-400 leading-relaxed text-left">
              <strong>Aviso Importante:</strong> Esta integração está em fase de homologação (sandbox/beta). O HESO PDV não exige, no momento, a persistência de credenciais reais ou o processamento financeiro de pedidos de produção nesta página pública.
            </p>
          </div>

        </div>
      </section>

      <PdvFooter />
    </div>
  );
}
