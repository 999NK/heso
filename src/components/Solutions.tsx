import { motion } from 'motion/react';
import { LayoutDashboard, Store, Briefcase, Bot, Code2, Network, DollarSign, PackageOpen, Users, PcCase } from 'lucide-react';
import { Link } from 'react-router-dom';

export const solutionsData = [
  { id: 'erp', icon: Briefcase, title: 'ERP Empresarial', desc: 'Gestão completa, de finanças a recursos humanos.', image: '/imgs/erp.png' },
  { id: 'pdv', icon: Store, title: 'PDV Inteligente', desc: 'Frente de caixa rápido e perfeitamente integrado.', image: '/imgs/pdv.png' },
  { id: 'dashboard', icon: LayoutDashboard, title: 'Dashboards & BI', desc: 'Decisões baseadas em dados em tempo real.', image: '/imgs/bi.png' },
  { id: 'automacao', icon: Bot, title: 'Automação de Processos', desc: 'Elimine tarefas manuais e reduza erros.', image: '/imgs/automacao.png' },
  { id: 'custom', icon: Code2, title: 'Sistemas Sob Medida', desc: 'Software construído para o DNA da sua empresa.' },
  { id: 'api', icon: Network, title: 'Integrações API', desc: 'Conecte todas as suas ferramentas em um só lugar.', image: '/imgs/api.png' },
  { id: 'financeiro', icon: DollarSign, title: 'Gestão Financeira', desc: 'Controle de fluxo de caixa, DRE e conciliação.', image: '/imgs/financeiro.png' },
  { id: 'estoque', icon: PackageOpen, title: 'Controle de Estoque', desc: 'Rastreabilidade e prevenção de perdas.', image: '/imgs/crm.png' },
  { id: 'crm', icon: Users, title: 'CRM Comercial', desc: 'Aumente vendas e retenha mais clientes.', image: '/imgs/pdv.png' },
  { id: 'offline', icon: PcCase, title: 'Sistemas Offline/Online', desc: 'Opere sem interrupções e sincronize depois.', image: '/imgs/offlineonine.png' },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#6D28D9] font-bold w-fit mb-4"
          >
            NOSSAS SOLUÇÕES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Tudo o que sua operação precisa <br className="hidden md:block"/> num <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">único ecossistema</span>.
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 items-stretch">
          {solutionsData.map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.05 }}
             >
               <Link 
                 to={`/solutions/${item.id}`}
                 className="group bg-white/5 p-6 rounded-2xl hover:bg-white/10 border border-white/5 hover:border-[#6D28D9]/50 transition-all duration-300 block relative overflow-hidden flex flex-col h-full hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(109,40,217,0.3)]"
               >
                 {/* Hover purple glow inside card */}
                 <div className="absolute inset-0 bg-[#6D28D9]/10 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl pointer-events-none" />
                 
                 <div className="relative z-10 flex flex-col h-full">
                   <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center mb-6 border border-white/5 text-gray-400 group-hover:text-[#6D28D9] transition-colors">
                     <item.icon className="w-6 h-6" />
                   </div>
                   <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors text-gray-200">{item.title}</h3>
                   <p className="text-sm text-gray-400 leading-relaxed mb-6">
                     {item.desc}
                   </p>
                   <div className="flex-1" />
                   <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2 mt-2 group-hover:text-[#6D28D9] transition-colors">
                     Saiba mais <span className="text-base leading-none">&rarr;</span>
                   </div>
                 </div>
               </Link>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
