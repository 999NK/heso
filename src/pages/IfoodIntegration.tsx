import { motion } from 'motion/react';
import { Layers, ArrowLeft, CheckCircle2, Shield, Info, Link2, AlertCircle } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import PdvNavbar from '../components/PdvNavbar';
import PdvFooter from '../components/PdvFooter';
import SEO from '../components/SEO';
import Cursor from '../components/Cursor';

export default function IfoodIntegration() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const error = searchParams.get('error');

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

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel p-8 md:p-12 rounded-3xl border-red-500/35 text-center max-w-[650px] mx-auto mb-16 shadow-xl shadow-red-500/5"
            >
              <div className="w-16 h-16 bg-red-500/20 border border-red-500/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={36} className="text-red-500" />
              </div>
              <h1 className="font-display font-extrabold text-3xl tracking-tight text-white mb-4">
                Conectado ao iFood!
              </h1>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                As credenciais de acesso do <strong>iFood Merchant API</strong> foram validadas e salvas com sucesso no seu banco Supabase. O HESO PDV está pronto para receber seus pedidos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="px-6 py-3 bg-red-500/20 hover:bg-red-500/30 text-white rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all">
                  Voltar ao Início
                </Link>
                <button 
                  onClick={() => window.close()} 
                  className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all"
                >
                  Fechar Janela
                </button>
              </div>
            </motion.div>
          ) : error ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel p-8 md:p-12 rounded-3xl border-red-500/35 text-center max-w-[650px] mx-auto mb-16"
            >
              <div className="w-16 h-16 bg-red-500/20 border border-red-500/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle size={36} className="text-red-400" />
              </div>
              <h1 className="font-display font-extrabold text-3xl tracking-tight text-white mb-4">
                Erro de Autenticação
              </h1>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Não foi possível concluir a autenticação OAuth com o iFood. Verifique suas credenciais de Client Secret e tente novamente.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/integracoes/ifood" className="px-6 py-3 bg-red-500/20 hover:bg-red-500/35 text-white rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all">
                  Tentar Novamente
                </Link>
              </div>
            </motion.div>
          ) : (
            <>
              <div className="flex flex-col items-start text-left mb-16">
                <div className="px-3 py-1 bg-red-500/15 border border-red-500/30 rounded text-red-300 font-mono text-xs uppercase font-bold tracking-wider mb-6">
                  Integrações Oficiais
                </div>
                
                <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.1] text-white mb-6">
                  Integração <span className="text-gradient-purple">iFood</span>
                </h1>

                <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
                  O HESO PDV está construindo o módulo de integração oficial com o portal do parceiro <strong>iFood</strong>. Prepare-se para receber novos pedidos e gerenciar todo o fluxo do seu delivery de forma unificada no seu ERP comercial.
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
                      Homologação de Token
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      Para iniciar o fluxo de autorização e salvar as chaves de acesso no banco PostgreSQL do seu Supabase, clique no botão de autorização oficial abaixo.
                    </p>
                  </div>

                  <div>
                    <a 
                      href="https://merchant-api.ifood.com.br/v1.0/oauth/user/authorize?clientId=e11f5ec5-a5e6-4bf7-8479-6f9bc3064135&redirectUri=https://pdv.heso.com.br/api/ifood-callback" 
                      className="w-full text-center block px-6 py-3 bg-red-500/80 hover:bg-red-500 text-white rounded-full text-xs font-mono uppercase tracking-[0.15em] font-semibold transition-all shadow-lg shadow-red-500/20"
                    >
                      Autorizar Acesso ao iFood
                    </a>
                    <div className="flex gap-3 mt-3">
                      <a 
                        href="/api/ifood-callback.php?code=auth_code_simulado_ifood" 
                        className="w-full text-center block px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-red-500/10 hover:border-red-500/30 text-xs text-gray-400 hover:text-red-400 rounded-full font-mono uppercase tracking-wider transition-all"
                      >
                        Simular Callback de Sucesso (Teste Local)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Data Card */}
              <div className="glass-panel p-8 rounded-2xl border-white/5 mb-16">
                <h3 className="font-display font-bold text-xl text-white mb-4 flex items-center gap-3">
                  <Link2 size={20} className="text-red-500" />
                  Dados para Cadastro no Painel do iFood
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Para homologar a integração do HESO PDV com o iFood, utilize as seguintes URLs no formulário de cadastro de aplicativo de terceiros do portal do desenvolvedor iFood:
                </p>

                <div className="space-y-4 font-mono text-xs">
                  <div className="bg-heso-gray border border-white/5 rounded-lg p-4">
                    <span className="text-red-400 block uppercase tracking-wider text-[10px] mb-1">URL do Site do Aplicativo</span>
                    <span className="text-white select-all">https://pdv.heso.com.br</span>
                  </div>
                  
                  <div className="bg-heso-gray border border-white/5 rounded-lg p-4">
                    <span className="text-red-400 block uppercase tracking-wider text-[10px] mb-1">URL de Redirecionamento (Callback OAuth)</span>
                    <span className="text-white select-all">https://pdv.heso.com.br/api/ifood-callback.php</span>
                  </div>

                  <div className="bg-heso-gray border border-white/5 rounded-lg p-4">
                    <span className="text-red-400 block uppercase tracking-wider text-[10px] mb-1">Termos de Uso</span>
                    <span className="text-white select-all">https://pdv.heso.com.br/termos</span>
                  </div>

                  <div className="bg-heso-gray border border-white/5 rounded-lg p-4">
                    <span className="text-red-400 block uppercase tracking-wider text-[10px] mb-1">Política de Privacidade</span>
                    <span className="text-white select-all">https://pdv.heso.com.br/privacidade</span>
                  </div>
                </div>
              </div>

              {/* Info banner */}
              <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 items-start">
                <Info size={24} className="text-red-500 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-400 leading-relaxed text-left">
                  <strong>Aviso Importante:</strong> Esta integração está vinculada à sua instância Supabase e persiste chaves de acesso na tabela `integrations`.
                </p>
              </div>
            </>
          )}

        </div>
      </section>

      <PdvFooter />
    </div>
  );
}
