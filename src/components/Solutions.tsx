import { useRef, useState, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { LayoutDashboard, Store, Briefcase, Bot, Code2, Network, DollarSign, PackageOpen, Users, PcCase, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const solutionsData = [
  { id: 'erp', icon: Briefcase, title: 'ERP Empresarial', desc: 'Gestão completa, de finanças a recursos humanos.', image: '/imgs/erp.webp' },
  { id: 'pdv', icon: Store, title: 'PDV Inteligente', desc: 'Frente de caixa rápido e perfeitamente integrado.', image: '/imgs/pdv.webp' },
  { id: 'dashboard', icon: LayoutDashboard, title: 'Dashboards & BI', desc: 'Decisões baseadas em dados em tempo real.', image: '/imgs/bi.webp' },
  { id: 'automacao', icon: Bot, title: 'Automação de Processos', desc: 'Elimine tarefas manuais e reduza erros.', image: '/imgs/automacao.webp' },
  { id: 'custom', icon: Code2, title: 'Sistemas Sob Medida', desc: 'Software construído para o DNA da sua empresa.' },
  { id: 'api', icon: Network, title: 'Integrações API', desc: 'Conecte todas as suas ferramentas em um só lugar.', image: '/imgs/api.webp' },
  { id: 'financeiro', icon: DollarSign, title: 'Gestão Financeira', desc: 'Controle de fluxo de caixa, DRE e conciliação.', image: '/imgs/financeiro.webp' },
  { id: 'estoque', icon: PackageOpen, title: 'Controle de Estoque', desc: 'Rastreabilidade e prevenção de perdas.', image: '/imgs/crm.webp' },
  { id: 'crm', icon: Users, title: 'CRM Comercial', desc: 'Aumente vendas e retenha mais clientes.', image: '/imgs/pdv.webp' },
  { id: 'offline', icon: PcCase, title: 'Sistemas Offline/Online', desc: 'Opere sem interrupções e sincronize depois.', image: '/imgs/offlineonline.webp' },
];

export default function Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const previewX = useMotionValue(0);
  const previewY = useMotionValue(0);
  const springX = useSpring(previewX, { stiffness: 250, damping: 28, mass: 0.5 });
  const springY = useSpring(previewY, { stiffness: 250, damping: 28, mass: 0.5 });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    previewX.set(e.clientX - rect.left);
    previewY.set(e.clientY - rect.top);
  };

  const activeImage = active !== null ? solutionsData[active].image : undefined;

  return (
    <section id="solucoes" className="py-28 md:py-40 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Cabeçalho da seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6"
            >
              <span className="text-heso-violet">01</span> / Soluções
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-extrabold uppercase leading-[0.95] tracking-tight text-4xl md:text-6xl"
            >
              Um único <br />
              <span className="text-stroke">ecossistema.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-sm leading-relaxed"
          >
            Tudo o que sua operação precisa, de ponta a ponta. Passe o mouse e explore cada módulo.
          </motion.p>
        </div>

        {/* Lista interativa */}
        <div ref={containerRef} onMouseMove={onMouseMove} className="relative">
          {solutionsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.03 }}
            >
              <Link
                to={`/solutions/${item.id}`}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                className="group relative flex items-center gap-4 md:gap-8 border-t border-white/10 last:border-b py-6 md:py-8 transition-colors duration-300 hover:border-white/25"
              >
                {/* Fundo no hover */}
                <div className="absolute inset-0 bg-heso-purple/10 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 pointer-events-none" />

                <span className="relative font-mono text-xs text-white/30 w-8 shrink-0 group-hover:text-heso-violet transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <item.icon className="relative w-5 h-5 text-white/30 shrink-0 group-hover:text-heso-violet transition-colors hidden sm:block" strokeWidth={1.5} />

                <h3 className="relative font-display font-bold uppercase tracking-tight text-xl sm:text-2xl md:text-4xl text-gray-300 group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                  {item.title}
                </h3>

                <p className="relative ml-auto max-w-[240px] text-sm text-gray-500 leading-snug text-right hidden lg:block group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>

                <ArrowUpRight className="relative w-5 h-5 md:w-6 md:h-6 text-white/30 shrink-0 ml-auto lg:ml-0 group-hover:text-heso-violet group-hover:rotate-45 transition-all duration-300" />
              </Link>
            </motion.div>
          ))}

          {/* Preview flutuante (desktop) */}
          <motion.div
            style={{ x: springX, y: springY }}
            animate={{ opacity: active !== null && activeImage ? 1 : 0, scale: active !== null && activeImage ? 1 : 0.85 }}
            transition={{ duration: 0.25 }}
            className="absolute top-0 left-0 z-30 w-[280px] h-[180px] -translate-y-1/2 ml-8 rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-heso-purple/20 pointer-events-none hidden lg:block"
          >
            {activeImage && (
              <img src={activeImage} alt="" className="w-full h-full object-cover" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-heso-purple/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
