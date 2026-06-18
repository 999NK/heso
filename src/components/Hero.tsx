import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Database, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-heso-purple/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        
        {/* Left Column - Content */}
        <div className="flex flex-col gap-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#6D28D9] font-bold w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9] animate-pulse" />
            Enterprise SaaS Solutions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl font-bold leading-[1.1] tracking-tight"
          >
            Tecnologia que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">conecta toda</span> <br/>
            <span className="text-[#6D28D9]">sua empresa.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-md leading-relaxed"
          >
            Sistemas ERP, automações e dashboards desenvolvidos para acelerar operações, integrar processos e escalar negócios globais.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 pt-4"
          >
            <a 
              href="https://wa.me/5535991319992?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20as%20soluções%20da%20HESO." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:bg-gray-200 transition-colors"
            >
              Começar Agora
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#ecossistema" 
              className="px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center"
            >
              Ver Ecossistema
            </a>
          </motion.div>
        </div>

        {/* Right Column - Visual Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Main Dashboard Panel */}
          <div className="w-full max-w-md aspect-[4/5] bg-[#6D28D9]/5 border border-[#6D28D9]/20 rounded-3xl backdrop-blur-sm p-6 relative z-20 overflow-hidden flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/50" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                 <div className="w-3 h-3 rounded-full bg-green-500/50" />
               </div>
               <div className="text-xs text-white/40 font-mono">HESO_OS_v2.4</div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="col-span-2 glass-panel bg-white/5 rounded-xl p-4 border border-white/5 flex flex-col gap-2">
                <span className="text-xs text-white/50 uppercase tracking-wider">Receita Mensal</span>
                <div className="text-2xl font-semibold">R$ 1.284.400</div>
                <div className="w-full h-12 mt-2 flex items-end gap-1">
                  {[40, 60, 45, 80, 55, 90, 70, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-heso-purple/40 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="glass-panel bg-white/5 rounded-xl p-4 border border-white/5">
                 <BarChart3 className="w-5 h-5 text-heso-purple mb-2" />
                 <div className="text-xl font-semibold">+42%</div>
                 <span className="text-xs text-white/50">Eficiência</span>
              </div>
              <div className="glass-panel bg-white/5 rounded-xl p-4 border border-white/5">
                 <Layers className="w-5 h-5 text-heso-purple mb-2" />
                 <div className="text-xl font-semibold">24/7</div>
                 <span className="text-xs text-white/50">Sincronização</span>
              </div>
            </div>
            
            {/* Fake glowing lines */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-heso-purple/20 to-transparent pointer-events-none" />
          </div>

          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 bg-[#121212] border border-white/10 p-3 rounded-2xl shadow-2xl flex items-center gap-3 z-30"
          >
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
               <Database className="w-5 h-5 text-[#6D28D9]" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">Automation</div>
              <div className="text-xs font-semibold">System Active</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 -right-4 bg-[#121212] border border-white/10 p-3 rounded-2xl shadow-2xl z-30"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-[10px] font-bold text-white">API Integration</span>
            </div>
            <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[90%] bg-green-500"></div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
