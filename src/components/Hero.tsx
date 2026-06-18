import { motion } from 'motion/react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

const marqueeItems = ['ERP', 'AUTOMAÇÃO', 'BUSINESS INTELLIGENCE', 'PDV', 'CRM', 'INTEGRAÇÕES API', 'SISTEMAS SOB MEDIDA'];

const stats = [
  { value: '10+', label: 'Módulos integrados' },
  { value: '99.98%', label: 'Uptime garantido' },
  { value: '24/7', label: 'Sincronização' },
  { value: '+42%', label: 'Eficiência média' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-32">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.15]" />
      <div className="absolute -top-40 right-[-10%] w-[700px] h-[700px] bg-heso-purple/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-15%] w-[500px] h-[500px] bg-heso-purple/10 rounded-full blur-[120px] pointer-events-none" />

      {/* "H" fantasma ao fundo */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 font-display font-extrabold text-[42vw] leading-none text-stroke-faint select-none pointer-events-none hidden lg:block" aria-hidden="true">
        H
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-10 flex-1 flex flex-col justify-center">

        {/* Linha de metadados */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-white/40 border-b border-white/10 pb-6 mb-10 md:mb-16"
        >
          <span>Software House <span className="text-heso-violet">/</span> B2B</span>
          <span className="hidden md:inline">Lavras — MG, Brasil</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-heso-violet animate-pulse" />
            Enterprise SaaS Solutions
          </span>
        </motion.div>

        {/* Tipografia massiva */}
        <h1 className="font-display font-extrabold uppercase leading-[0.92] tracking-tight text-[13.5vw] sm:text-[11vw] lg:text-[8.5rem] mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="block"
          >
            Tecnologia
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="block text-stroke"
          >
            que conecta
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="block text-gradient-purple"
          >
            sua empresa<span className="text-white">.</span>
          </motion.span>
        </h1>

        {/* Parágrafo + CTAs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-lg md:text-xl text-gray-400 max-w-md leading-relaxed"
          >
            Sistemas ERP, automações e dashboards desenvolvidos para acelerar operações, integrar processos e escalar negócios globais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="https://wa.me/5535991319992?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20as%20soluções%20da%20HESO."
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-3 hover:bg-heso-violet hover:text-white transition-colors duration-300"
              >
                Começar agora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#ecossistema"
                className="px-8 py-4 border border-white/15 text-white font-semibold rounded-full hover:border-heso-violet hover:text-heso-violet transition-colors flex items-center gap-3"
              >
                Ver ecossistema
                <ArrowDownRight className="w-4 h-4" />
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Marquee de serviços */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative z-10 border-y border-white/10 py-5 mt-16 md:mt-24 overflow-hidden"
      >
        <div className="animate-marquee-slow items-center">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span className="font-display font-bold uppercase text-2xl md:text-3xl text-white/80 px-8 whitespace-nowrap">{item}</span>
              <span className="text-heso-violet text-xl select-none" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* Faixa de stats */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
              className="py-8 md:py-10 px-2 md:px-8 border-r border-white/10 first:pl-0 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
            >
              <div className="font-display font-bold text-3xl md:text-4xl mb-1 text-white">{stat.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
