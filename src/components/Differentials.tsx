import { motion } from 'motion/react';
import { Cloud, Zap, Shield, Repeat, Clock, Cpu, Code, Headphones } from 'lucide-react';

const differentials = [
  { icon: Cloud, title: 'Arquitetura Escalável', text: 'Desenvolvimento focado em crescimento.' },
  { icon: Zap, title: 'Performance Elevada', text: 'Tempos de resposta ultrarrápidos.' },
  { icon: Shield, title: 'Segurança Empresarial', text: 'Criptografia e proteção de dados nível bank.' },
  { icon: Repeat, title: 'Multiempresa', text: 'Gerencie múltiplas unidades numa só tela.' },
  { icon: Clock, title: 'Tempo Real', text: 'Dados atualizados sem precisar de refresh.' },
  { icon: Cpu, title: 'Integrações Avançadas', text: 'APIs limpas e documentadas para o seu tech stack.' },
  { icon: Code, title: 'Dev Personalizado', text: 'Sem caixas pretas. O sistema se adapta a você.' },
  { icon: Headphones, title: 'Suporte Especializado', text: 'Atendimento técnico humano e ágil.' },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#6D28D9] font-bold w-fit mb-4"
            >
              POR QUE A HESO?
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Arquitetura de <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">nível global</span>.
            </motion.h2>
          </div>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-lg text-gray-400 max-w-md"
          >
            Não usamos templates prontos. Construímos infraestruturas robustas preparadas para suportar o amanhã.
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
           {differentials.map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="flex flex-col gap-4"
             >
               <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#6D28D9]">
                 <item.icon className="w-5 h-5" strokeWidth={1.5} />
               </div>
               <div>
                 <h4 className="text-lg font-semibold text-gray-200 mb-2">{item.title}</h4>
                 <p className="text-sm text-gray-400">{item.text}</p>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
