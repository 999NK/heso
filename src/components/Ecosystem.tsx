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
    <section id="ecossistema" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#6D28D9]/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="flex-1 max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#6D28D9] font-bold w-fit mb-4">HESO Ecosystem</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Módulos <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">perfeitamente</span><br /> conectados.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-8">
              Desenvolvemos um ecossistema onde cada módulo da sua empresa conversa nativamente com os outros. Sem gambiarras. Sem perdas. Fluidez total em tempo real.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 bg-transparent text-[#6D28D9] border border-[#6D28D9] rounded-full text-sm font-semibold hover:bg-[#6D28D9]/10 transition-all">
              Ver arquitetura completa
            </button>
          </motion.div>
        </div>

        <div className="flex-1 relative h-[500px] w-full flex items-center justify-center lg:justify-end pr-0 lg:pr-10">
          <div className="relative w-[450px] h-[450px] flex items-center justify-center">
             {/* Center Core */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 rounded-full bg-[#6D28D9]/20 border border-[#6D28D9]/50 flex items-center justify-center shadow-[0_0_40px_rgba(109,40,217,0.3)]">
               <div className="w-24 h-24 rounded-full bg-[#6D28D9] flex items-center justify-center shadow-2xl">
                 <img src="/imgs/logo.webp" alt="Logo HESO" width="89" height="89" className="object-contain" style={{ width: '88.9861px', height: '88.9861px' }} />
               </div>
             </div>

             {/* Orbit Rings */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/10 animate-[spin_60s_linear_infinite] pointer-events-none" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/5 animate-[spin_80s_reverse_linear_infinite] pointer-events-none" />

             {/* Nodes */}
             {nodes.map((node, i) => {
               // Calculate positions on a circle
               const angle = (i / nodes.length) * Math.PI * 2;
               const radius = i % 2 === 0 ? 150 : 225; // alternate rings
               
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
                     <div className="w-12 h-12 rounded-full bg-[#121212] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all cursor-pointer shadow-lg">
                       <node.icon className="w-5 h-5" />
                     </div>
                     <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
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
