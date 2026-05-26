import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#6D28D9]/30 selection:text-white pt-24">
      <SEO 
        title="Quem Somos" 
        description="Conheça a HESO (Hydra Ecosystem Solutions Online). Desenvolvemos sistemas ERP adaptáveis, automações e dashboards de BI sob medida em Lavras MG e região."
        path="/sobre"
      />
      <Navbar />
      <main>
        {/* Header Section */}
        <section className="py-20 md:py-32 relative border-b border-white/5">
          <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-[#6D28D9]/10 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#6D28D9] font-bold w-fit mb-6">
                SOBRE A HESO
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Construindo o sistema <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  que conecta a sua empresa.
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed md:max-w-2xl">
                A HESO (Hydra Ecosystem Solutions Online) não é apenas uma fábrica de software. Somos arquitetos de infraestrutura digital. Desenvolvemos o tecido que liga operações, processos e pessoas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Nossa História / Porque existimos */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Por que a HESO existe?
              </h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Observamos que empresas modernas enfrentam um gap tecnológico: ou contratam sistemas de prateleira rígidos que não se adaptam ao próprio negócio, ou arcam com custos absurdos mantendo equipes internas inchadas.
                </p>
                <p>
                  Nascemos para preencher esse espaço. Oferecemos plataformas adaptáveis e soluções customizadas que se moldam à sua operação. Cada linha de código que escrevemos visa um único objetivo: <strong>eliminar atritos operacionais e maximizar controle</strong>.
                </p>
                <p>
                  O nome <em>Hydra</em> reflete nossa arquitetura: um ecossistema com várias "cabeças" (módulos ERP, PDV, BI, CRM) que, juntas, compartilham um mesmo núcleo central invulnerável.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 group order-1 md:order-2"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-[#6D28D9]/20 to-transparent z-10 pointer-events-none opacity-50" />
               <img src="/imgs/sobre nos.webp" alt="Sobre a HESO" className="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 block" />
            </motion.div>
          </div>
        </section>

        {/* Nossos Princípios / Diferenciais aprofundados */}
        <section className="py-24 bg-black/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Nossa Filosofia de Engenharia</h2>
              <p className="text-gray-400">Os pilares que sustentam todos os nossos produtos.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Extensibilidade",
                  desc: "Módulos independentes, mas perfeitamente integrados. Você só adiciona o que precisa, quando precisa."
                },
                {
                  title: "Single Source of Truth",
                  desc: "Seus dados nunca ficam desfocados ou duplicados. De relatórios financeiros ao PDV, a fonte de dados é única e imutável."
                },
                {
                  title: "Frictionless UI",
                  desc: "Sistemas complexos não precisam ser difíceis de usar. Focamos obsessivamente na experiência do usuário para diminuir a curva de aprendizado."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-[#6D28D9]/20 flex items-center justify-center rounded-xl mb-6 text-[#6D28D9] font-bold text-xl">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
