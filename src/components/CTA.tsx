import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useConfig } from '../context/ConfigContext';

export default function CTA() {
  const { whatsapp } = useConfig();
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-heso-purple/30 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center bg-white/5 rounded-3xl p-12 md:p-20 border border-white/5 overflow-hidden backdrop-blur-sm">
         <div className="absolute inset-0 bg-grid-white opacity-10" />
         
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-4xl md:text-6xl font-bold tracking-tight mb-6 relative z-10"
         >
           Pronto para <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">transformar</span><br/> sua empresa?
         </motion.h2>
         
         <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto relative z-10"
         >
           Traga o seu desafio de operação, gestão ou escala. Nossa equipe construirá o motor tecnológico que falta para o seu negócio decolar.
         </motion.p>
         
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex flex-col sm:flex-row justify-center gap-4 relative z-10"
         >
           <a 
             href={`https://wa.me/${whatsapp}?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20das%20soluções%20da%20HESO.`} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="px-8 py-4 bg-[#6D28D9] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#5B21B6] transition-colors shadow-lg shadow-[#6D28D9]/20"
           >
             Agendar demonstração
             <ArrowRight className="w-4 h-4" />
           </a>
           <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors flex justify-center items-center">
             Falar com especialista
           </a>
         </motion.div>
      </div>
    </section>
  );
}
