import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#6D28D9] font-bold w-fit mb-4">SOBRE A HESO</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Nascemos para <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">transformar operações</span>.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            A HESO não é apenas uma software house. Entregamos infraestrutura digital, gestão empresarial, automação e inteligência operacional. Nosso objetivo é garantir que seu ecossistema tecnológico seja o motor principal do seu crescimento.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Criamos sistemas inteligentes, escaláveis e integrados que conectam setores, automatizam processos e fornecem controle total para empresas modernas que não aceitam estagnação.
          </p>
          
          <Link to="/sobre" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-semibold transition-all">
            Descubra por que existimos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex flex-col gap-6"
        >
           <div className="relative h-[320px] w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 group">
             <div className="absolute inset-0 bg-gradient-to-br from-[#6D28D9]/20 to-transparent z-10 pointer-events-none opacity-50" />
             <img src="/imgs/inovacao.webp" alt="Inovação HESO" width="1000" height="625" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 block relative z-0" />
           </div>
           
           <div className="px-2">
             <div className="text-xl font-bold mb-2 text-white">Visão & Inovação</div>
             <div className="text-gray-400 leading-relaxed">Projetando o futuro do software B2B e infraestruturas escaláveis para corporações exigentes.</div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
