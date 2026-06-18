import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useConfig } from '../context/ConfigContext';
import Magnetic from './Magnetic';

export default function CTA() {
  const { whatsapp } = useConfig();

  return (
    <section className="relative overflow-hidden">
      {/* Marquee de transição */}
      <div className="border-y border-white/10 py-4 overflow-hidden">
        <div className="animate-marquee-reverse items-center">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span className="font-display font-extrabold uppercase text-3xl md:text-4xl text-stroke px-8 whitespace-nowrap">Vamos construir juntos</span>
              <span className="text-heso-violet text-2xl select-none" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="py-28 md:py-44 relative">
        {/* Glow de fundo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] bg-heso-purple/25 blur-[150px] rounded-full" />
        </div>
        <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 mb-10"
          >
            <span className="text-heso-violet">06</span> / Contato
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-extrabold uppercase leading-[0.95] tracking-tight text-5xl md:text-7xl lg:text-8xl mb-10"
          >
            Pronto para <br />
            <span className="text-stroke">transformar</span> <br />
            sua empresa<span className="text-heso-violet">?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg text-gray-400 mb-14 max-w-2xl mx-auto"
          >
            Traga o seu desafio de operação, gestão ou escala. Nossa equipe construirá o motor tecnológico que falta para o seu negócio decolar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-5"
          >
            <Magnetic>
              <a
                href={`https://wa.me/${whatsapp}?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20das%20soluções%20da%20HESO.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-heso-purple text-white font-bold rounded-full flex items-center justify-center gap-3 hover:bg-heso-violet transition-colors shadow-lg shadow-heso-purple/30 text-lg"
              >
                Agendar demonstração
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border border-white/15 text-white font-semibold rounded-full hover:border-heso-violet hover:text-heso-violet transition-colors flex justify-center items-center text-lg"
              >
                Falar com especialista
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
