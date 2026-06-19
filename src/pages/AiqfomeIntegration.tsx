import { motion } from 'motion/react';
import { Layers, ArrowLeft, CheckCircle2, Shield, Info, Link2, AlertCircle } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import PdvNavbar from '../components/PdvNavbar';
import PdvFooter from '../components/PdvFooter';
import SEO from '../components/SEO';
import Cursor from '../components/Cursor';

export default function AiqfomeIntegration() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const error = searchParams.get('error');

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

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel p-8 md:p-12 rounded-3xl border-heso-purple/35 text-center max-w-[650px] mx-auto mb-16 shadow-xl shadow-heso-purple/5"
            >
              <div className="w-16 h-16 bg-heso-purple/20 border border-heso-purple/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={36} className="text-heso-violet" />
              </div>
              <h1 className="font-display font-extrabold text-3xl tracking-tight text-white mb-4">
                Integração Concluída!
              </h1>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                O token de autorização do <strong>aiqfome</strong> foi gerado e salvo com sucesso no banco de dados Supabase. O HESO PDV está agora sincronizado para gerenciar os pedidos da sua loja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="px-6 py-3 bg-heso-purple hover:bg-heso-violet text-white rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all">
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
                Falha na Integração
              </h1>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Ocorreu um erro ao tentar homologar a autorização com o aiqfome. Por favor, reinicie o processo no portal do parceiro.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/integracoes/aiqfome" className="px-6 py-3 bg-red-500/20 hover:bg-red-500/35 text-white rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all">
                  Tentar Novamente
                </Link>
              </div>
            </motion.div>
          ) : (
            <>
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
                      Homologação de Token
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      Para iniciar o fluxo de autorização e salvar as chaves de acesso no banco PostgreSQL do seu Supabase, clique no botão de autorização oficial abaixo.
                    </p>
                  </div>

                  <div>
                    <a 
                      href="https://id.magalu.com/authorize?client_id=s9lbIoAyG5JHynEHuVpzI-9I0Gmp4Vs2TPVJRWIiau8&redirect_uri=https://pdv.heso.com.br/api/aiqfome-callback&response_type=code&scope=aqf:menu:create%20aqf:menu:read%20aqf:order:create%20aqf:order:read%20aqf:store:read%20aqf:store:create" 
                      className="w-full text-center block px-6 py-3 bg-heso-purple hover:bg-heso-violet text-white rounded-full text-xs font-mono uppercase tracking-[0.15em] font-semibold transition-all shadow-lg shadow-heso-purple/20"
                    >
                      Autorizar Acesso ao aiqfome
                    </a>
                    <div className="flex gap-3 mt-3">
                      <a 
                        href="/api/aiqfome-callback?code=auth_code_simulado_123" 
                        className="w-full text-center block px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-purple-500/10 hover:border-purple-500/30 text-xs text-gray-400 hover:text-purple-400 rounded-full font-mono uppercase tracking-wider transition-all"
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
                    <span className="text-white select-all">https://pdv.heso.com.br/api/aiqfome-callback</span>
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
                  <strong>Aviso Importante:</strong> Esta integração utiliza a tabela de banco de dados vinculada à sua instância Supabase para persistência de tokens seguros.
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
