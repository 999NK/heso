import { motion } from 'motion/react';
import { Layers, ArrowLeft, CheckCircle2, Shield, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import PdvNavbar from '../components/PdvNavbar';
import PdvFooter from '../components/PdvFooter';
import SEO from '../components/SEO';
import Cursor from '../components/Cursor';

export default function IfoodIntegration() {
  return (
    <div className="bg-heso-black min-h-screen text-white font-sans noise">
      <SEO 
        title="Integração iFood | HESO PDV" 
        description="Conecte sua loja do iFood ao HESO PDV. Gerencie pedidos, sincronize cardápios e acompanhe as entregas diretamente da sua frente de caixa."
        path="/integracoes/ifood"
      />
      <Cursor />
      <PdvNavbar />

      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-grid-white bg-[size:30px_30px] overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-500/10 blur-[120px] pointer-events-none" />

        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-white transition-colors mb-10 group">
            <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" />
            Voltar ao início
          </Link>

          <div className="flex flex-col items-start text-left mb-16">
            <div className="px-3 py-1 bg-red-500/15 border border-red-500/30 rounded text-red-300 font-mono text-xs uppercase font-bold tracking-wider mb-6">
              Em Desenvolvimento
            </div>
            
            <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.1] text-white mb-6">
              Integração <span className="text-gradient-purple">iFood</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
              O HESO PDV está construindo o módulo de integração oficial com o portal do parceiro <strong>iFood</strong>. Prepare-se para receber novos pedidos e gerenciar todo o fluxo do seu delivery de forma unificada no seu ERP comercial, economizando tempo e recursos operacionais.
            </p>
          </div>

          {/* Integration features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-panel p-8 rounded-2xl border-white/5 hover:border-red-500/30 transition-all">
              <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-3">
                <Layers size={20} className="text-red-500" />
                Vantagens da Integração iFood
              </h3>
              
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Controle de Faturamento Centralizado</strong>
                    <span className="text-xs text-gray-400">Consolide as vendas do iFood com suas vendas físicas do PDV em relatórios financeiros unificados.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Impressão Automática de Pedidos</strong>
                    <span className="text-xs text-gray-400">Configure o HESO PDV para imprimir automaticamente a via da cozinha ao receber um pedido do iFood.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Gestão de Estoque em Tempo Real</strong>
                    <span className="text-xs text-gray-400">Quando um produto for vendido no iFood, o HESO PDV dá baixa automática no seu estoque central.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-2xl border-white/5 hover:border-red-500/30 transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-3">
                  <Shield size={20} className="text-red-500" />
                  Segurança e Estabilidade
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Nosso módulo utilizará a API oficial do iFood para desenvolvedores, garantindo a criptografia dos tokens de acesso e das informações de clientes. A infraestrutura em nuvem garante baixa latência na recepção de webhook de novos pedidos.
                </p>
              </div>

              <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-4">
                <span className="text-xs text-red-300 font-semibold uppercase tracking-wider block mb-1">Previsão de Lançamento</span>
                <p className="text-xs text-gray-400">Estamos trabalhando intensamente para liberar o módulo oficial iFood nas próximas semanas para clientes beta.</p>
              </div>
            </div>
          </div>

          {/* Info banner */}
          <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 items-start">
            <Info size={24} className="text-red-500 shrink-0 mt-0.5" />
            <p className="text-xs text-gray-400 leading-relaxed text-left">
              <strong>Nota:</strong> A integração com o iFood está em fase interna de testes de API. Para mais informações ou para participar do grupo de homologação beta, entre em contato pelo e-mail oficial do suporte.
            </p>
          </div>

        </div>
      </section>

      <PdvFooter />
    </div>
  );
}
