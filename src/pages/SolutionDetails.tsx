import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { solutionsData } from '../components/Solutions';

export default function SolutionDetails() {
  const { id } = useParams();
  const solution = solutionsData.find((s) => s.id === id);

  if (!solution) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#6D28D9]/30 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Voltar para o início
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col items-start"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6D28D9] mb-8 shadow-[0_0_30px_rgba(109,40,217,0.2)]">
                <solution.icon className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {solution.title}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                {solution.desc} Integração completa e em tempo real com o ecossistema HESO para garantir máxima eficiência na sua operação.
              </p>

              <div className="flex gap-4">
                <button className="px-8 py-4 bg-[#6D28D9] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#5B21B6] transition-colors shadow-lg shadow-[#6D28D9]/20">
                  Agendar Demonstração
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square md:aspect-video lg:aspect-square w-full rounded-3xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center group"
            >
              {'image' in solution && solution.image ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6D28D9]/20 to-transparent z-0 pointer-events-none opacity-80" />
                  <div className="absolute inset-0 bg-grid-white opacity-10 z-0" />
                  <img src={solution.image} alt={solution.title} className="w-[85%] h-[85%] object-contain relative z-20 transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_0_30px_rgba(109,40,217,0.2)]" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6D28D9]/20 to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-grid-white opacity-10" />
                  <solution.icon className="w-32 h-32 text-white/10 absolute z-0" />
                  
                  <div className="relative z-20 flex flex-col gap-6 w-full max-w-sm">
                     <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
                        <div className="h-4 w-1/3 bg-white/10 rounded mb-4"></div>
                        <div className="h-2 w-full bg-white/5 rounded mb-2"></div>
                        <div className="h-2 w-5/6 bg-white/5 rounded mb-2"></div>
                        <div className="h-2 w-4/6 bg-white/5 rounded"></div>
                     </div>
                     <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl translate-x-12">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-full bg-[#6D28D9]/20 flex items-center justify-center text-[#6D28D9]">
                            <solution.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="h-3 w-20 bg-white/10 rounded mb-2"></div>
                            <div className="h-2 w-12 bg-gray-500/50 rounded"></div>
                          </div>
                        </div>
                        <div className="h-20 w-full bg-white/5 rounded"></div>
                     </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>

        {/* Features / Details Section */}
        <div className="max-w-7xl mx-auto px-6 mt-32 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Funcionalidades Core</h2>
            <p className="text-gray-400">Por que o {solution.title} da HESO é diferente do mercado.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Sincronização Nativa',
                desc: 'Esqueça integrações via zapier ou APIs lentas. Funciona direto no núcleo de dados HESO.'
              },
              {
                title: 'Performance em Tempo Real',
                desc: 'Arquitetura reativa que atualiza todos os componentes instantaneamente, sem recarregar a tela.'
              },
              {
                title: 'Escalabilidade Extrema',
                desc: 'Feito para aguentar dias de pico, black fridays e crescimento hiper-acelerado sem gargalos.'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                <CheckCircle2 className="w-6 h-6 text-[#6D28D9] mb-6" />
                <h3 className="text-xl font-bold text-gray-200 mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
