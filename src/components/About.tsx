import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

export default function About() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section id="sobre" className="py-28 md:py-40 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 mb-10"
        >
          <span className="text-heso-violet">05</span> / Sobre a HESO
        </motion.div>

        {/* Statement editorial */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold leading-[1.15] tracking-tight text-3xl md:text-5xl max-w-5xl mb-16 md:mb-20"
        >
          <span className="text-white">A HESO não é apenas uma software house.</span>{' '}
          <span className="text-white/35">Entregamos infraestrutura digital, gestão empresarial, automação e</span>{' '}
          <span className="text-gradient-purple">inteligência operacional</span>{' '}
          <span className="text-white/35">para que seu ecossistema tecnológico seja o motor do seu crescimento.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-6 lg:pt-4"
          >
            <p className="text-lg text-gray-400 leading-relaxed">
              Criamos sistemas inteligentes, escaláveis e integrados que conectam setores, automatizam processos e fornecem controle total para empresas modernas que não aceitam estagnação.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Projetamos o futuro do software B2B e infraestruturas escaláveis para corporações exigentes.
            </p>

            <Magnetic>
              <Link to="/sobre" className="group inline-flex items-center gap-3 mt-4 font-mono text-xs uppercase tracking-[0.2em] text-white border border-white/15 rounded-full px-6 py-3 hover:border-heso-violet hover:text-heso-violet transition-all">
                Descubra por que existimos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
          </motion.div>

          {/* Imagem com parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div ref={imgRef} className="relative h-[340px] md:h-[420px] w-full rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-heso-purple/25 to-transparent z-10 pointer-events-none" />
              <motion.img
                style={{ y: imgY }}
                src="/imgs/inovacao.webp"
                alt="Inovação HESO"
                width="1000"
                height="625"
                className="w-full h-[125%] object-cover opacity-90 relative z-0 -mt-[6%]"
              />
              <div className="absolute bottom-6 left-6 z-20 font-mono text-[10px] uppercase tracking-[0.25em] text-white/70 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
                Visão & Inovação
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
