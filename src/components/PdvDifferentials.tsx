import { motion } from 'motion/react';
import { Cloud, Zap, Shield, Repeat, Clock, Cpu, Code, Headphones } from 'lucide-react';

const differentials = [
  { icon: Shield, title: 'Segurança Empresarial', text: 'Criptografia e proteção de dados nível bank, em todas as camadas da aplicação.', span: 'md:col-span-7', featured: true },
  { icon: Zap, title: 'Performance Elevada', text: 'Tempos de resposta ultrarrápidos.', span: 'md:col-span-5' },
  { icon: Cloud, title: 'Arquitetura Escalável', text: 'Desenvolvimento focado em crescimento.', span: 'md:col-span-4' },
  { icon: Clock, title: 'Tempo Real', text: 'Dados atualizados sem precisar de refresh.', span: 'md:col-span-4' },
  { icon: Repeat, title: 'Multiempresa', text: 'Gerencie múltiplas unidades numa só tela.', span: 'md:col-span-4' },
  { icon: Cpu, title: 'Integrações Avançadas', text: 'APIs limpas e documentadas para o seu tech stack.', span: 'md:col-span-5' },
  { icon: Code, title: 'Dev Personalizado', text: 'Sem caixas pretas. O sistema se adapta a você, nunca o contrário.', span: 'md:col-span-7', featured: true },
  { icon: Headphones, title: 'Suporte Especializado', text: 'Atendimento técnico humano e ágil.', span: 'md:col-span-12' },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-28 md:py-40 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">

        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6"
            >
              <span className="text-heso-violet">03</span> / Por que a HESO
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-extrabold uppercase leading-[0.95] tracking-tight text-4xl md:text-6xl"
            >
              Arquitetura de <br />
              <span className="text-stroke">nível global.</span>
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

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border p-8 md:p-10 transition-all duration-500 ${item.span} ${
                item.featured
                  ? 'bg-heso-purple/10 border-heso-purple/30 hover:border-heso-purple/60'
                  : 'bg-white/[0.03] border-white/10 hover:border-white/25 hover:bg-white/[0.05]'
              }`}
            >
              {/* Glow no hover */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-heso-purple/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Número fantasma */}
              <span className="absolute top-6 right-8 font-display font-extrabold text-5xl text-stroke-faint select-none" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10 flex flex-col gap-5 h-full">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors ${
                  item.featured
                    ? 'bg-heso-purple/20 border-heso-purple/40 text-heso-violet'
                    : 'bg-white/5 border-white/10 text-white/50 group-hover:text-heso-violet'
                }`}>
                  <item.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="mt-auto">
                  <h4 className="font-display font-bold uppercase tracking-tight text-xl md:text-2xl text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400 max-w-md">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
