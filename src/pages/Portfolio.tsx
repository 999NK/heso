import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowUpRight,
  Activity, 
  Layers, 
  Smile, 
  Users, 
  LayoutDashboard, 
  DollarSign, 
  MessageSquare, 
  ShieldAlert, 
  FileSpreadsheet, 
  X,
  Code,
  TrendingUp,
  Cpu,
  Workflow,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { useConfig, Project } from '../context/ConfigContext';

// Tipo de Categoria
type CategoryType = 'all' | 'landingpage' | 'sistemas' | 'automacoes';

// Mapeador de Ícones
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  Layers,
  Smile,
  Users,
  LayoutDashboard,
  DollarSign,
  MessageSquare,
  ShieldAlert,
  FileSpreadsheet,
  Code
};

export default function Portfolio() {
  const { portfolioProjects, whatsapp } = useConfig();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // Filtra os projetos
  const filteredProjects = selectedCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === selectedCategory);

  // Mapeia categoria para texto amigável
  const getCategoryLabel = (cat: Exclude<CategoryType, 'all'>) => {
    switch (cat) {
      case 'landingpage': return 'Landing Page';
      case 'sistemas': return 'Sistema';
      case 'automacoes': return 'Automação';
    }
  };

  // Abre o modal do projeto e reseta a imagem ativa
  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  // Navegação da galeria de imagens
  const handlePrevImage = (imagesCount: number) => {
    setActiveImageIndex((prev) => (prev === 0 ? imagesCount - 1 : prev - 1));
  };

  const handleNextImage = (imagesCount: number) => {
    setActiveImageIndex((prev) => (prev === imagesCount - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#6D28D9]/30 selection:text-white pt-24 relative overflow-hidden">
      <Navbar />

      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6D28D9]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10">
        
        {/* Breadcrumb / Back button */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Voltar para o início
        </Link>

        {/* Hero Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#6D28D9] font-bold w-fit mb-6"
          >
            PORTFÓLIO HESO & HYDRA CODE
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
          >
            Sistemas e soluções que <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              impulsionam operações.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Explore o histórico de plataformas sob medida, sites institucionais e robôs de automação desenvolvidos para otimizar fluxos de trabalho e maximizar resultados comerciais.
          </motion.p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap gap-2 mb-16 border-b border-white/5 pb-6">
          {(['all', 'landingpage', 'sistemas', 'automacoes'] as CategoryType[]).map((category, idx) => {
            const isActive = selectedCategory === category;
            const labels: Record<CategoryType, string> = {
              all: 'Todos os Projetos',
              landingpage: 'Landing Pages',
              sistemas: 'Sistemas',
              automacoes: 'Automações'
            };

            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-[#6D28D9] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {labels[category]}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              // Busca o componente do ícone no mapa
              const ProjectIcon = iconMap[project.icon] || Code;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 10 }}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'tween', ease: 'easeInOut', duration: 0.25 }}
                  key={project.id}
                  className="group relative bg-white/5 border border-white/5 hover:border-[#6D28D9]/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_40px_-15px_rgba(109,40,217,0.3)] overflow-hidden cursor-pointer"
                  onClick={() => handleOpenProject(project)}
                >
                  {/* Subtle hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.highlightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none`} />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header: Icon & Category Tag */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#6D28D9] transition-colors">
                        <ProjectIcon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white/5 border border-white/10 px-2.5 py-1 rounded-full group-hover:border-[#6D28D9]/30 group-hover:text-white transition-colors">
                        {getCategoryLabel(project.category)}
                      </span>
                    </div>

                    {/* Main Content */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors text-gray-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
                      {project.desc}
                    </p>

                    {/* Footer: Stat & CTA */}
                    <div className="pt-4 border-t border-white/5 mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6D28D9]">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{project.stat}</span>
                      </div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1 group-hover:text-white transition-colors">
                        Ver Detalhes <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty state if any */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}

      </main>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              {/* Top Banner Accent */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${selectedProject.highlightColor.replace('/20', '').replace('/10', '') || 'from-[#6D28D9] to-indigo-500'}`} />

              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 border border-white/5 hover:border-white/20 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer z-30"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Body (Scrollable) */}
              <div className="overflow-y-auto p-6 md:p-10 flex-grow">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300">
                    {getCategoryLabel(selectedProject.category)}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#6D28D9] bg-[#6D28D9]/10 border border-[#6D28D9]/20 px-3 py-1 rounded-full">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{selectedProject.stat}</span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  {selectedProject.desc}
                </p>

                {/* GALERIA DE IMAGENS INTERATIVA */}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="mb-10 relative">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#6D28D9]" /> Galeria de Screenshots
                    </h4>
                    
                    {/* Imagem Principal */}
                    <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center group/gallery">
                      <img 
                        src={selectedProject.images[activeImageIndex]} 
                        alt={`${selectedProject.title} screenshot ${activeImageIndex + 1}`}
                        className="max-h-[90%] max-w-[90%] object-contain select-none transition-transform duration-500 hover:scale-[1.02]"
                      />
                      
                      {/* Grid background lines */}
                      <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />

                      {/* Setas de Navegação */}
                      {selectedProject.images.length > 1 && (
                        <>
                          <button 
                            onClick={() => handlePrevImage(selectedProject.images.length)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/5 hover:border-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer opacity-0 group-hover/gallery:opacity-100"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button 
                            onClick={() => handleNextImage(selectedProject.images.length)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/5 hover:border-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer opacity-0 group-hover/gallery:opacity-100"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </>
                      )}

                      {/* Contador de Imagens */}
                      <div className="absolute bottom-4 right-4 px-2.5 py-1 bg-black/60 border border-white/5 rounded-md text-[10px] font-bold text-white/60 tracking-wider">
                        {activeImageIndex + 1} / {selectedProject.images.length}
                      </div>
                    </div>

                    {/* Miniaturas (Thumbnails) */}
                    {selectedProject.images.length > 1 && (
                      <div className="flex gap-2.5 mt-3 justify-center overflow-x-auto py-1">
                        {selectedProject.images.map((img, idx) => {
                          const isActive = idx === activeImageIndex;
                          return (
                            <button
                              key={idx}
                              onClick={() => setActiveImageIndex(idx)}
                              className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 bg-black/40 transition-all cursor-pointer flex-shrink-0 ${
                                isActive ? 'border-[#6D28D9] scale-105' : 'border-white/5 hover:border-white/20'
                              }`}
                            >
                              <img src={img} alt="thumbnail" className="w-full h-full object-cover opacity-80" />
                              {!isActive && <div className="absolute inset-0 bg-black/20" />}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {/* Grid info: Challenge, Solution, Result */}
                <div className="grid md:grid-cols-2 gap-8 mb-10 pt-4 border-t border-white/5">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-[#6D28D9]" /> O Desafio
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Workflow className="w-4 h-4 text-[#6D28D9]" /> A Solução
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#6D28D9]" /> O Resultado
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {selectedProject.result}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4 text-[#6D28D9]" /> Tecnologias
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.technologies.map((tech, i) => (
                          <span key={i} className="text-xs bg-white/5 border border-white/5 px-2.5 py-1 rounded-md text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                  <a 
                    href={`https://wa.me/${whatsapp}?text=Olá!%20Gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20projeto%20${encodeURIComponent(selectedProject.title)}.`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-6 py-3 bg-[#6D28D9] text-white text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-[#5B21B6] transition-colors shadow-lg shadow-[#6D28D9]/20"
                  >
                    Solicitar Solução Similar
                  </a>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 bg-white/5 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white text-sm font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Voltar ao Portfólio
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CTA />
      <Footer />
    </div>
  );
}
