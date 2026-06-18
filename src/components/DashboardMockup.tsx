import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Activity, ArrowUpRight, ChevronDown, DollarSign, Filter, Search } from 'lucide-react';

export default function DashboardMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.4, 1]);

  return (
    <section className="py-28 md:py-40 relative overflow-hidden bg-heso-dark border-y border-white/5">
      <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 flex flex-col items-center">

        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6"
          >
            <span className="text-heso-violet">04</span> / Plataforma
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold uppercase leading-[0.95] tracking-tight text-4xl md:text-6xl"
          >
            Controle gerencial em <br />
            <span className="text-stroke">frações de segundo.</span>
          </motion.h2>
        </div>

        {/* Janela do dashboard com tilt 3D no scroll */}
        <div ref={ref} className="w-full max-w-5xl" style={{ perspective: '1400px' }}>
          <motion.div
            style={{ rotateX, scale, opacity, transformStyle: 'preserve-3d' }}
            className="w-full rounded-3xl bg-heso-purple/5 border border-heso-purple/20 backdrop-blur-sm shadow-2xl shadow-heso-purple/10 overflow-hidden"
          >
            {/* Barra superior */}
            <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>

              <div className="hidden md:flex px-4 items-center h-8 bg-black/40 border border-white/5 rounded-md w-96 font-mono text-xs text-white/30 gap-2">
                <Search className="w-3 h-3" /> Buscar métricas...
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-heso-purple/20 border border-heso-purple/50 flex items-center justify-center text-xs font-bold text-heso-violet">
                  A
                </div>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-6 md:p-8 grid grid-cols-12 gap-6 bg-transparent">
              <div className="col-span-12 flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Visão Geral</h3>
                  <p className="font-mono text-xs text-white/50 mt-1">Atualizado há 2 minutos</p>
                </div>
                <div className="hidden sm:flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 border border-white/10 text-xs text-white/70">
                    <Filter className="w-3 h-3" /> Filtrar
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 border border-white/10 text-xs text-white/70">
                    Últimos 30 dias <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* KPIs */}
              <div className="col-span-12 md:col-span-4 bg-white/5 p-6 rounded-xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-heso-purple/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-heso-purple/20 transition-colors" />
                <DollarSign className="w-6 h-6 text-heso-violet mb-4" />
                <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-1">Faturamento Trimestre</div>
                <div className="text-3xl font-bold">R$ 4.2M</div>
                <div className="flex items-center gap-1 text-green-400 text-[10px] mt-4">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>+12% vs mês anterior</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-4 bg-white/5 p-6 rounded-xl border border-white/5">
                <Activity className="w-6 h-6 text-green-400 mb-4" />
                <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-1">Uptime</div>
                <div className="text-3xl font-bold text-green-400">99.98%</div>
                <div className="flex gap-1 mt-4">
                  <div className="h-2 w-full bg-green-400/20 rounded-sm"></div>
                  <div className="h-2 w-full bg-green-400/20 rounded-sm"></div>
                  <div className="h-2 w-full bg-green-400/50 rounded-sm"></div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-4 bg-white/5 p-6 rounded-xl border border-white/5">
                <DollarSign className="w-6 h-6 text-blue-400 mb-4" />
                <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-1">Tasks</div>
                <div className="text-3xl font-bold">1,204</div>
                <div className="flex items-center gap-1 text-blue-400 text-[10px] mt-4">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>+12.5% vs mês anterior</span>
                </div>
              </div>

              {/* Gráfico principal */}
              <div className="col-span-12 lg:col-span-8 bg-white/5 p-6 rounded-2xl border border-white/5 h-80 flex flex-col relative overflow-hidden">
                <div className="text-sm font-semibold mb-6">Growth Analytics</div>

                <div className="flex-1 w-full relative">
                  <svg className="w-full h-full opacity-50" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M0 35 Q 10 32, 20 38 T 40 25 T 60 30 T 80 15 T 100 20" stroke="#8B5CF6" fill="none" strokeWidth="1.5" />
                    <path d="M0 35 Q 10 32, 20 38 T 40 25 T 60 30 T 80 15 T 100 20 L 100 40 L 0 40 Z" fill="url(#grad)" />
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#6D28D9" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="absolute bottom-4 left-6 flex gap-6">
                  <div className="flex items-center gap-2 text-[10px] text-gray-400"><div className="w-2 h-2 rounded-full bg-heso-violet"></div> Growth</div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400"><div className="w-2 h-2 rounded-full bg-white/20"></div> Prediction</div>
                </div>
              </div>

              {/* Lista lateral */}
              <div className="col-span-12 lg:col-span-4 bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col">
                <div className="text-sm font-semibold mb-6 flex justify-between">
                  <span>Transações Recentes</span>
                  <span className="text-heso-violet text-xs cursor-pointer">Ver todas</span>
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    { name: 'Licença Enterprise', val: '+ R$ 45.000', stat: 'Concluído' },
                    { name: 'Integração API Aws', val: '+ R$ 12.000', stat: 'Processando' },
                    { name: 'Consultoria Dev', val: '+ R$ 5.500', stat: 'Concluído' },
                    { name: 'Manutenção Mensal', val: '+ R$ 8.900', stat: 'Concluído' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center pb-4 border-b border-white/5 last:border-0 last:pb-0">
                      <div>
                        <div className="text-sm">{item.name}</div>
                        <div className="text-[10px] text-white/40">{item.stat}</div>
                      </div>
                      <div className="text-sm font-mono text-green-400">{item.val}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
