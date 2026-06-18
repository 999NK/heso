import { motion } from 'motion/react';
import { ShoppingBag, Package, TrendingUp, Cpu, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PdvNavbar from '../components/PdvNavbar';
import PdvFooter from '../components/PdvFooter';
import SEO from '../components/SEO';
import Cursor from '../components/Cursor';

export default function PdvHome() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-heso-black min-h-screen text-white font-sans noise">
      <SEO 
        title="Início | HESO PDV" 
        description="Apresentamos o HESO PDV: o sistema definitivo de PDV/ERP para gestão de estoque, vendas rápidas e pedidos online integrados para o varejo moderno."
        path="/"
      />
      <Cursor />
      <PdvNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-grid-white bg-[size:30px_30px]">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-heso-purple/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-heso-violet/5 blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-heso-purple/30 bg-heso-purple/10 text-xs font-mono uppercase tracking-[0.2em] text-heso-violet mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-heso-violet opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-heso-violet"></span>
                </span>
                Próxima Geração de ERP & PDV
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05] text-white mb-6"
              >
                HESO PDV: <br />
                <span className="text-gradient-purple">Vendas, Estoque</span> <br />
                & Pedidos Online.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-8"
              >
                O ecossistema completo de PDV e ERP projetado para revolucionar o varejo. Controle estoque, feche vendas em segundos e receba pedidos integrados dos maiores aplicativos de delivery em uma única tela.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Link
                  to="/contato"
                  className="px-8 py-4 bg-heso-purple hover:bg-heso-violet text-white rounded-full text-sm font-semibold tracking-wider uppercase transition-all shadow-lg shadow-heso-purple/20 flex items-center justify-center gap-2 group"
                >
                  Demonstração Grátis
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/integracoes/aiqfome"
                  className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-full text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                >
                  Ver Integrações
                </Link>
              </motion.div>
            </div>

            {/* Hero Image Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative border border-white/10 rounded-2xl overflow-hidden glass-panel glow-purple p-2">
                <img 
                  src="/imgs/pdv.webp" 
                  alt="HESO PDV Interface" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-heso-gray/90 border border-white/5 rounded-xl p-4 shadow-2xl backdrop-blur max-w-[200px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">Status do Sistema</div>
                    <div className="text-sm font-semibold text-white">100% Online</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Pillars / Features */}
      <section className="py-24 border-t border-white/5 bg-heso-dark/50 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-heso-violet mb-3">Tudo o que você precisa</h2>
            <h3 className="font-display font-bold text-3xl md:text-5xl text-white">Uma plataforma para unificar seu comércio</h3>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Feature 1 */}
            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl hover:border-heso-purple/40 transition-all group duration-300">
              <div className="w-12 h-12 rounded-xl bg-heso-purple/10 border border-heso-purple/20 flex items-center justify-center text-heso-violet mb-6 group-hover:scale-110 transition-transform">
                <ShoppingBag size={24} />
              </div>
              <h4 className="font-display font-semibold text-xl text-white mb-3">Frente de Caixa (PDV)</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Vendas rápidas e ágeis com poucos cliques, compatível com múltiplos leitores e impressoras térmicas para otimizar sua frente de caixa.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl hover:border-heso-purple/40 transition-all group duration-300">
              <div className="w-12 h-12 rounded-xl bg-heso-purple/10 border border-heso-purple/20 flex items-center justify-center text-heso-violet mb-6 group-hover:scale-110 transition-transform">
                <Package size={24} />
              </div>
              <h4 className="font-display font-semibold text-xl text-white mb-3">Controle de Estoque</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Atualização em tempo real de entradas e saídas, controle de lotes, datas de validade e avisos automáticos de estoque baixo.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl hover:border-heso-purple/40 transition-all group duration-300">
              <div className="w-12 h-12 rounded-xl bg-heso-purple/10 border border-heso-purple/20 flex items-center justify-center text-heso-violet mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <h4 className="font-display font-semibold text-xl text-white mb-3">Pedidos e Vendas</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Acompanhe o faturamento, ticket médio e produtos mais vendidos por meio de gráficos inteligentes e relatórios interativos.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl hover:border-heso-purple/40 transition-all group duration-300">
              <div className="w-12 h-12 rounded-xl bg-heso-purple/10 border border-heso-purple/20 flex items-center justify-center text-heso-violet mb-6 group-hover:scale-110 transition-transform">
                <Cpu size={24} />
              </div>
              <h4 className="font-display font-semibold text-xl text-white mb-3">Integrações API</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Pronto para o futuro. Sincronize pedidos de delivery das plataformas mais populares diretamente dentro do seu ERP comercial.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Highlights */}
      <section className="py-24 border-t border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-left">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-heso-violet mb-3">Marketplace Delivery</h2>
              <h3 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">Integrações em Preparação</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Centralize o gerenciamento de pedidos dos principais marketplaces de delivery. Em breve, você poderá receber, aprovar e enviar pedidos do <strong>iFood</strong> e <strong>aiqfome</strong> diretamente da tela do HESO PDV, sem precisar de múltiplos aparelhos ou telas extras.
              </p>
              <div className="flex gap-4">
                <Link to="/integracoes/aiqfome" className="text-sm text-heso-violet hover:text-white transition-colors font-semibold uppercase tracking-wider flex items-center gap-2">
                  Ver aiqfome <ArrowRight size={16} />
                </Link>
                <span className="text-white/20">|</span>
                <Link to="/integracoes/ifood" className="text-sm text-heso-violet hover:text-white transition-colors font-semibold uppercase tracking-wider flex items-center gap-2">
                  Ver iFood <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* aiqfome Box */}
              <div className="glass-panel p-8 rounded-2xl relative overflow-hidden hover:border-heso-purple/40 transition-all group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full pointer-events-none" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 bg-purple-500/15 border border-purple-500/30 rounded text-purple-300 font-mono text-[10px] uppercase font-bold tracking-wider">
                    Beta em breve
                  </div>
                </div>
                <h4 className="font-display font-bold text-2xl text-white mb-3">Integração aiqfome</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  HESO PDV está sendo homologado e estruturado para receber e gerenciar pedidos do app aiqfome de forma direta e centralizada.
                </p>
                <Link to="/integracoes/aiqfome" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-all">
                  Saiba mais <ArrowRight size={12} />
                </Link>
              </div>

              {/* iFood Box */}
              <div className="glass-panel p-8 rounded-2xl relative overflow-hidden hover:border-heso-purple/40 transition-all group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-full pointer-events-none" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 bg-red-500/15 border border-red-500/30 rounded text-red-300 font-mono text-[10px] uppercase font-bold tracking-wider">
                    Em desenvolvimento
                  </div>
                </div>
                <h4 className="font-display font-bold text-2xl text-white mb-3">Integração iFood</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Integre seu cardápio, acompanhe as vendas do iFood e faça a sincronização automática do estoque físico com a sua loja virtual.
                </p>
                <Link to="/integracoes/ifood" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-all">
                  Saiba mais <ArrowRight size={12} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5 bg-gradient-to-b from-heso-dark to-heso-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-heso-purple/5 blur-[150px] pointer-events-none" />
        <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
            Pronto para transformar a gestão da sua loja?
          </h2>
          <p className="text-gray-400 md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Fale conosco hoje mesmo para agendar uma demonstração exclusiva das capacidades do HESO PDV e entender como podemos acelerar seu faturamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="px-8 py-4 bg-heso-purple hover:bg-heso-violet text-white rounded-full text-sm font-semibold tracking-wider uppercase transition-all shadow-lg shadow-heso-purple/20 flex items-center justify-center gap-2"
            >
              Fale Conosco
            </Link>
            <Link
              to="/termos"
              className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-center"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </section>

      <PdvFooter />
    </div>
  );
}
