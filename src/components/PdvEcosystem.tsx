import { motion } from 'motion/react';
import { Settings, BarChart, Database, Map, Box, Lock, Globe, Server } from 'lucide-react';
import { useState } from 'react';
import ArchitectureModal from './ArchitectureModal';

export default function Ecosystem() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nodes = [
    { icon: Settings, label: 'Automação', delay: 0 },
    { icon: BarChart, label: 'Analytics', delay: 0.2 },
    { icon: Database, label: 'Dados', delay: 0.4 },
    { icon: Box, label: 'Estoque', delay: 0.6 },
    { icon: Lock, label: 'Segurança', delay: 0.8 },
    { icon: Globe, label: 'Cloud', delay: 1.0 },
    { icon: Map, label: 'Integrações', delay: 1.2 },
    { icon: Server, label: 'Infra', delay: 1.4 },
  ];

  return (
    <section id="ecossistema" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-heso-purple/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-heso-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-heso-black to-transparent z-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-20 flex flex-col lg:flex-row items-center gap-16">

        <div className="flex-1 max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6">
              <span className="text-heso-violet">02</span> / Ecossistema
            </div>
            <h2 className="font-display font-extrabold uppercase leading-[0.95] tracking-tight text-4xl md:text-6xl mb-8">
              Módulos <br />
              <span className="text-stroke">perfeitamente</span> <br />
              conectados.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-10">
              Desenvolvemos um ecossistema onde cada módulo da sua empresa conversa nativamente com os outros. Sem gambiarras. Sem perdas. Fluidez total em tempo real.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-heso-violet border border-heso-purple/50 rounded-full px-6 py-3 hover:bg-heso-purple hover:text-white transition-all duration-300">
              Ver arquitetura completa
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        </div>

        <div className="flex-1 relative h-[500px] w-full flex items-center justify-center lg:justify-end pr-0 lg:pr-10">
          <div className="relative w-[450px] h-[450px] flex items-center justify-center">
             {/* Núcleo central */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 rounded-full bg-heso-purple/20 border border-heso-purple/50 flex items-center justify-center shadow-[0_0_40px_rgba(109,40,217,0.3)]">
               <div className="w-24 h-24 rounded-full bg-heso-purple flex items-center justify-center shadow-2xl">
                 <img src="/imgs/logo.webp" alt="Logo HESO" width="89" height="89" className="object-contain" style={{ width: '88.9861px', height: '88.9861px' }} />
               </div>
             </div>

             {/* Anéis de órbita */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/10 animate-[spin_60s_linear_infinite] pointer-events-none" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/5 animate-[spin_80s_reverse_linear_infinite] pointer-events-none" />

             {/* Nós */}
             {nodes.map((node, i) => {
               const angle = (i / nodes.length) * Math.PI * 2;
               const radius = i % 2 === 0 ? 150 : 225;

               return (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, scale: 0 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: node.delay, duration: 0.5 }}
                   className="absolute z-30"
                   style={{
                     left: `calc(50% + ${Math.cos(angle) * radius}px - 24px)`,
                     top: `calc(50% + ${Math.sin(angle) * radius}px - 24px)`,
                   }}
                 >
                   <div className="group relative">
                     <div className="w-12 h-12 rounded-full bg-heso-dark border border-white/10 flex items-center justify-center text-gray-400 hover:text-heso-violet hover:border-heso-purple/60 hover:shadow-[0_0_20px_rgba(109,40,217,0.4)] transition-all cursor-pointer shadow-lg">
                       <node.icon className="w-5 h-5" strokeWidth={1.5} />
                     </div>
                     <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] text-white/50 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                       {node.label}
                     </div>
                   </div>
                 </motion.div>
               )
             })}
          </div>
        </div>
      </div>

      <ArchitectureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
