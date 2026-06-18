import { motion } from 'motion/react';
import { ShieldCheck, RefreshCw, Smartphone, TrendingUp } from 'lucide-react';

export default function ErpPdvSection() {
  return (
    <section id="erp-pdv-integrado" className="py-28 md:py-40 border-t border-white/5 relative overflow-hidden bg-heso-dark/20">
      <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-heso-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-20 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="flex-1 max-w-xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6">
              <span className="text-heso-violet">05</span> / Sincronização de Sistemas
            </div>
            <h2 className="font-display font-extrabold uppercase leading-[0.95] tracking-tight text-4xl md:text-6xl mb-8">
              ERP & PDV <br />
              <span className="text-stroke">totalmente</span> <br />
              integrados.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-8">
              Sua retaguarda administrativa conectada em tempo real com a frente de caixa. Quando uma venda é concluída no HESO PDV, o estoque é atualizado, o fluxo de caixa é gerado e a nota fiscal é emitida automaticamente no ERP.
            </p>
            <a
              href="https://pdv.heso.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white bg-heso-purple hover:bg-heso-violet rounded-full px-8 py-4 shadow-lg shadow-heso-purple/20 transition-all duration-300"
            >
              Conhecer HESO PDV
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        {/* Right Content Grid */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="glass-panel p-8 rounded-2xl border-white/5 hover:border-heso-purple/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-heso-purple/10 border border-heso-purple/20 flex items-center justify-center text-heso-violet mb-6">
              <RefreshCw size={20} />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Sincronização Instantânea</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Esqueça integrações manuais. Dados de estoque, cadastros de produtos e vendas fluem em tempo real entre o PDV e o ERP central.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-8 rounded-2xl border-white/5 hover:border-heso-purple/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-heso-purple/10 border border-heso-purple/20 flex items-center justify-center text-heso-violet mb-6">
              <TrendingUp size={20} />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Gestão Financeira e DRE</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Conciliação bancária facilitada, fluxo de caixa atualizado e geração de relatórios de demonstrativos de resultados de forma simplificada.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-8 rounded-2xl border-white/5 hover:border-heso-purple/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-heso-purple/10 border border-heso-purple/20 flex items-center justify-center text-heso-violet mb-6">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Automação de Notas Fiscais</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Emissão automática de cupons e notas fiscais eletrônicas (NF-e, NFC-e) no momento exato do fechamento da venda ou do pedido.
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-panel p-8 rounded-2xl border-white/5 hover:border-heso-purple/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-heso-purple/10 border border-heso-purple/20 flex items-center justify-center text-heso-violet mb-6">
              <Smartphone size={20} />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Controle Multi-loja</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Acompanhe as vendas de todas as suas unidades ou filiais de forma unificada e online, direto do seu smartphone, tablet ou computador.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
