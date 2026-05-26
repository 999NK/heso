import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  Settings, 
  Plus, 
  Trash2, 
  LogOut, 
  CheckCircle, 
  RefreshCw, 
  Smartphone, 
  Instagram, 
  MessageSquare,
  ArrowLeft,
  ChevronRight,
  ShieldAlert,
  Pencil
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useConfig, Project } from '../context/ConfigContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Gradientes disponíveis para o Portfólio
const gradientOptions = [
  { label: 'Roxo / Indigo', value: 'from-[#6D28D9]/20 to-indigo-500/10' },
  { label: 'Esmeralda / Teal', value: 'from-emerald-500/20 to-teal-500/10' },
  { label: 'Azul / Sky', value: 'from-sky-500/20 to-blue-500/10' },
  { label: 'Laranja / Amber', value: 'from-amber-500/20 to-orange-500/10' },
  { label: 'Vermelho / Rose', value: 'from-red-500/20 to-rose-500/10' },
  { label: 'Ciano / Azul escuro', value: 'from-cyan-500/20 to-teal-500/10' }
];

// Ícones disponíveis para seleção
const iconOptions = [
  { label: 'Atividade (Activity)', value: 'Activity' },
  { label: 'Camadas (Layers)', value: 'Layers' },
  { label: 'Sorriso (Smile)', value: 'Smile' },
  { label: 'Usuários (Users)', value: 'Users' },
  { label: 'Painel (LayoutDashboard)', value: 'LayoutDashboard' },
  { label: 'Dólar (DollarSign)', value: 'DollarSign' },
  { label: 'Mensagem (MessageSquare)', value: 'MessageSquare' },
  { label: 'Escudo de Alerta (ShieldAlert)', value: 'ShieldAlert' },
  { label: 'Planilha (FileSpreadsheet)', value: 'FileSpreadsheet' }
];

export default function Admin() {
  const { 
    phone, 
    whatsapp, 
    instagram, 
    portfolioProjects, 
    updateConfig, 
    addProject, 
    updateProject,
    deleteProject, 
    resetConfig 
  } = useConfig();

  // Estados de Autenticação
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('heso_admin_session') === 'true';
  });

  // Estados do Dashboard
  const [activeTab, setActiveTab] = useState<'variables' | 'portfolio'>('variables');
  const [successMessage, setSuccessMessage] = useState('');
  
  // Estado de Edição de Projetos
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);

  // Campos de Edição de Variáveis
  const [tempPhone, setTempPhone] = useState(phone);
  const [tempWhatsapp, setTempWhatsapp] = useState(whatsapp);
  const [tempInstagram, setTempInstagram] = useState(instagram);

  // Campos de Novo/Edição de Projeto
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'landingpage' | 'sistemas' | 'automacoes'>('landingpage');
  const [newDesc, setNewDesc] = useState('');
  const [newIcon, setNewIcon] = useState('Activity');
  const [newStat, setNewStat] = useState('');
  const [newTechs, setNewTechs] = useState('');
  const [newChallenge, setNewChallenge] = useState('');
  const [newSolution, setNewSolution] = useState('');
  const [newResult, setNewResult] = useState('');
  const [newGradient, setNewGradient] = useState(gradientOptions[0].value);
  const [newImagesText, setNewImagesText] = useState('');

  // Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const serverPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
    
    if (passwordInput === serverPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('heso_admin_session', 'true');
      setAuthError('');
    } else {
      setAuthError('Senha incorreta. Tente novamente.');
    }
  };

  // Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('heso_admin_session');
    setPasswordInput('');
  };

  // Salvar Variáveis Gerais
  const handleSaveVariables = (e: React.FormEvent) => {
    e.preventDefault();
    updateConfig(tempPhone, tempWhatsapp, tempInstagram);
    triggerSuccess('Variáveis gerais atualizadas com sucesso!');
  };

  // Iniciar Edição de Projeto
  const handleStartEdit = (project: Project) => {
    setEditingProjectId(project.id);
    setNewTitle(project.title);
    setNewCategory(project.category);
    setNewDesc(project.desc);
    setNewIcon(project.icon);
    setNewStat(project.stat);
    setNewTechs(project.technologies.join(', '));
    setNewChallenge(project.challenge);
    setNewSolution(project.solution);
    setNewResult(project.result);
    setNewGradient(project.highlightColor);
    setNewImagesText(project.images.join(', '));
    
    setActiveTab('portfolio');
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  // Cancelar Edição
  const handleCancelEdit = () => {
    setEditingProjectId(null);
    setNewTitle('');
    setNewDesc('');
    setNewIcon('Activity');
    setNewStat('');
    setNewTechs('');
    setNewChallenge('');
    setNewSolution('');
    setNewResult('');
    setNewGradient(gradientOptions[0].value);
    setNewImagesText('');
  };

  // Cadastrar ou Editar Projeto
  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newDesc || !newStat || !newChallenge || !newSolution || !newResult) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const techArray = newTechs.split(',').map(t => t.trim()).filter(t => t !== '');
    const imagesArray = newImagesText.split(',')
      .map(img => img.trim())
      .filter(img => img !== '');

    const finalImages = imagesArray.length > 0 ? imagesArray : ['/imgs/sobre nos.png'];

    if (editingProjectId) {
      // Atualizar projeto existente
      updateProject({
        id: editingProjectId,
        title: newTitle,
        category: newCategory,
        desc: newDesc,
        icon: newIcon,
        stat: newStat,
        technologies: techArray.length > 0 ? techArray : ['React', 'TailwindCSS'],
        challenge: newChallenge,
        solution: newSolution,
        result: newResult,
        highlightColor: newGradient,
        images: finalImages
      });
      setEditingProjectId(null);
      triggerSuccess('Projeto atualizado com sucesso!');
    } else {
      // Cadastrar novo projeto
      addProject({
        title: newTitle,
        category: newCategory,
        desc: newDesc,
        icon: newIcon,
        stat: newStat,
        technologies: techArray.length > 0 ? techArray : ['React', 'TailwindCSS'],
        challenge: newChallenge,
        solution: newSolution,
        result: newResult,
        highlightColor: newGradient,
        images: finalImages
      });
      triggerSuccess('Novo projeto adicionado ao portfólio!');
    }

    // Limpar formulário
    setNewTitle('');
    setNewDesc('');
    setNewIcon('Activity');
    setNewStat('');
    setNewTechs('');
    setNewChallenge('');
    setNewSolution('');
    setNewResult('');
    setNewGradient(gradientOptions[0].value);
    setNewImagesText('');
  };

  // Resetar Configurações
  const handleResetAll = () => {
    if (window.confirm('Tem certeza que deseja resetar todas as configurações e o portfólio para os valores padrão de fábrica?')) {
      resetConfig();
      setTempPhone('(35) 99131-9992');
      setTempWhatsapp('5535991319992');
      setTempInstagram('hydracode.dev');
      handleCancelEdit();
      triggerSuccess('Configurações redefinidas para o padrão.');
    }
  };

  const triggerSuccess = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#6D28D9]/30 selection:text-white pt-24 relative overflow-hidden flex flex-col justify-between">
      <Navbar />

      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6D28D9]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 md:py-20 w-full relative z-10">
        
        {/* LOGIN SCREEN */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto py-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
              
              <div className="flex flex-col items-center mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#6D28D9]/20 border border-[#6D28D9]/30 flex items-center justify-center text-[#6D28D9] mb-4 shadow-[0_0_30px_rgba(109,40,217,0.2)]">
                  <Lock className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-center text-white">Painel HESO Admin</h2>
                <p className="text-sm text-gray-400 text-center mt-1">Acesso exclusivo para administradores</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6 relative z-10">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                    Senha de Acesso
                  </label>
                  <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Digite a senha..."
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 hover:border-white/20 focus:border-[#6D28D9] focus:outline-none rounded-xl text-white transition-all text-sm"
                  />
                  {authError && (
                    <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" /> {authError}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#6D28D9]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Entrar no Painel
                </button>
              </form>
            </motion.div>
          </div>
        ) : (
          /* DASHBOARD VIEW */
          <div>
            {/* Header / Meta bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
              <div>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <span>Administração</span> <ChevronRight className="w-4 h-4" /> <span>Painel de Variáveis</span>
                </div>
                <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Settings className="w-8 h-8 text-[#6D28D9]" /> Dashboard de Controle
                </h1>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleResetAll}
                  className="px-5 py-2.5 bg-red-500/10 border border-red-500/20 hover:border-red-500/50 text-red-400 text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" /> Resetar Padrões
                </button>
                <button
                  onClick={handleLogout}
                  className="px-5 py-2.5 bg-white/5 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" /> Encerrar Sessão
                </button>
              </div>
            </div>

            {/* Sucess alert toast */}
            <AnimatePresence>
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3 text-emerald-400 text-sm"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>{successMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Dashboard Tabs Switcher */}
            <div className="flex border-b border-white/5 mb-10 pb-4 gap-2">
              <button
                onClick={() => setActiveTab('variables')}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'variables' 
                    ? 'bg-[#6D28D9] text-white shadow-lg shadow-[#6D28D9]/20' 
                    : 'text-gray-400 hover:text-white bg-white/5 border border-white/5 hover:border-white/10'
                }`}
              >
                Variáveis Gerais do Site
              </button>
              <button
                onClick={() => setActiveTab('portfolio')}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'portfolio' 
                    ? 'bg-[#6D28D9] text-white shadow-lg shadow-[#6D28D9]/20' 
                    : 'text-gray-400 hover:text-white bg-white/5 border border-white/5 hover:border-white/10'
                }`}
              >
                Gerenciar Portfólio ({portfolioProjects.length})
              </button>
            </div>

            {/* TAB CONTENTS */}
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2 space-y-8">
                {activeTab === 'variables' ? (
                  /* TAB: VARIABLES FORM */
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md relative"
                  >
                    <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
                    
                    <h2 className="text-xl font-bold mb-6 text-gray-200">Editar Dados de Redirecionamento</h2>
                    
                    <form onSubmit={handleSaveVariables} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                            Celular de Exibição (Texto)
                          </label>
                          <div className="relative">
                            <Smartphone className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                            <input
                              type="text"
                              value={tempPhone}
                              onChange={(e) => setTempPhone(e.target.value)}
                              placeholder="(35) 99131-9992"
                              className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/10 focus:border-[#6D28D9] focus:outline-none rounded-xl text-white text-sm"
                            />
                          </div>
                          <p className="text-[10px] text-gray-500 mt-1">Como aparece escrito no rodapé.</p>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                            Número do WhatsApp (Redirecionamento)
                          </label>
                          <div className="relative">
                            <MessageSquare className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                            <input
                              type="text"
                              value={tempWhatsapp}
                              onChange={(e) => setTempWhatsapp(e.target.value)}
                              placeholder="5535991319992"
                              className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/10 focus:border-[#6D28D9] focus:outline-none rounded-xl text-white text-sm"
                            />
                          </div>
                          <p className="text-[10px] text-gray-500 mt-1">Apenas números (com DDI). Utilizado nos links de redirecionamento do WhatsApp.</p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                          Instagram Handle / Usuário
                        </label>
                        <div className="relative">
                          <Instagram className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={tempInstagram}
                            onChange={(e) => setTempInstagram(e.target.value)}
                            placeholder="hydracode.dev"
                            className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/10 focus:border-[#6D28D9] focus:outline-none rounded-xl text-white text-sm"
                          />
                        </div>
                        <p className="text-[10px] text-gray-500 mt-1">Apenas o nome do usuário/perfil (ex: `hydracode.dev`).</p>
                      </div>

                      <button
                        type="submit"
                        className="px-6 py-3.5 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#6D28D9]/20 cursor-pointer text-sm"
                      >
                        Salvar Alterações
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  /* TAB: ADD/EDIT PORTFOLIO PROJECT */
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md relative"
                  >
                    <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
                    
                    <h2 className="text-xl font-bold mb-6 text-gray-200 flex items-center gap-2">
                      {editingProjectId ? <Pencil className="w-6 h-6 text-[#6D28D9]" /> : <Plus className="w-6 h-6 text-[#6D28D9]" />}
                      {editingProjectId ? `Editar Projeto: ${newTitle}` : 'Cadastrar Novo Projeto'}
                    </h2>

                    <form onSubmit={handleAddProject} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                            Título do Projeto *
                          </label>
                          <input
                            type="text"
                            required
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            placeholder="Ex: ERP Logística Express"
                            className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#6D28D9] focus:outline-none rounded-xl text-white text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                            Categoria *
                          </label>
                          <select
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value as any)}
                            className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#6D28D9] focus:outline-none rounded-xl text-white text-sm cursor-pointer"
                          >
                            <option value="landingpage" className="bg-[#121212]">Landing Page</option>
                            <option value="sistemas" className="bg-[#121212]">Sistema (Web/Desktop)</option>
                            <option value="automacoes" className="bg-[#121212]">Automação / Bot</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                          Descrição Curta (Card) *
                        </label>
                        <input
                          type="text"
                          required
                          value={newDesc}
                          onChange={(e) => setNewDesc(e.target.value)}
                          placeholder="Ex: Plataforma de logística e faturamento de cargas integrada com API de transportadoras."
                          className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#6D28D9] focus:outline-none rounded-xl text-white text-sm"
                        />
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                            Métrica de Impacto (Stat) *
                          </label>
                          <input
                            type="text"
                            required
                            value={newStat}
                            onChange={(e) => setNewStat(e.target.value)}
                            placeholder="Ex: +150% eficiência"
                            className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#6D28D9] focus:outline-none rounded-xl text-white text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                            Ícone Representativo *
                          </label>
                          <select
                            value={newIcon}
                            onChange={(e) => setNewIcon(e.target.value)}
                            className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#6D28D9] focus:outline-none rounded-xl text-white text-sm cursor-pointer"
                          >
                            {iconOptions.map((opt) => (
                              <option key={opt.value} value={opt.value} className="bg-[#121212]">
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                            Cor de Destaque / Hover *
                          </label>
                          <select
                            value={newGradient}
                            onChange={(e) => setNewGradient(e.target.value)}
                            className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#6D28D9] focus:outline-none rounded-xl text-white text-sm cursor-pointer"
                          >
                            {gradientOptions.map((opt) => (
                              <option key={opt.value} value={opt.value} className="bg-[#121212]">
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                          Tecnologias (Separadas por vírgula)
                        </label>
                        <input
                          type="text"
                          value={newTechs}
                          onChange={(e) => setNewTechs(e.target.value)}
                          placeholder="Ex: React, Node.js, PostgreSQL, Docker"
                          className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#6D28D9] focus:outline-none rounded-xl text-white text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                          O Desafio *
                        </label>
                        <textarea
                          required
                          value={newChallenge}
                          onChange={(e) => setNewChallenge(e.target.value)}
                          placeholder="Qual era o problema enfrentado pelo cliente antes da solução?"
                          rows={3}
                          className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#6D28D9] focus:outline-none rounded-xl text-white text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                          A Solução *
                        </label>
                        <textarea
                          required
                          value={newSolution}
                          onChange={(e) => setNewSolution(e.target.value)}
                          placeholder="Como a HESO / Hydra Code construiu o sistema para resolver a dor?"
                          rows={3}
                          className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#6D28D9] focus:outline-none rounded-xl text-white text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                          O Resultado *
                        </label>
                        <textarea
                          required
                          value={newResult}
                          onChange={(e) => setNewResult(e.target.value)}
                          placeholder="Quais foram as métricas de sucesso, economia de tempo ou retorno financeiro?"
                          rows={3}
                          className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#6D28D9] focus:outline-none rounded-xl text-white text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                          Links das Imagens da Galeria (Separados por vírgula)
                        </label>
                        <textarea
                          value={newImagesText}
                          onChange={(e) => setNewImagesText(e.target.value)}
                          placeholder="Ex: /imgs/erp.png, /imgs/bi.png (Você pode usar caminhos locais ou URLs públicas)"
                          rows={2}
                          className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#6D28D9] focus:outline-none rounded-xl text-white text-sm"
                        />
                        <p className="text-[10px] text-gray-500 mt-1">Insira os caminhos das imagens. Caso deixe vazio, usaremos um placeholder padrão.</p>
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="submit"
                          className="px-8 py-4 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#6D28D9]/20 cursor-pointer text-sm"
                        >
                          {editingProjectId ? 'Salvar Alterações' : 'Cadastrar Projeto no Portfólio'}
                        </button>
                        {editingProjectId && (
                          <button
                            type="button"
                            onClick={handleCancelEdit}
                            className="px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold rounded-xl transition-colors cursor-pointer text-sm"
                          >
                            Cancelar Edição
                          </button>
                        )}
                      </div>
                    </form>
                  </motion.div>
                )}
              </div>

              {/* SIDEBAR: ACTIVE PROJECTS LIST (CRUD) */}
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md relative">
                  <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
                  
                  <h3 className="text-lg font-bold mb-4 text-gray-200">Portfólio Ativo</h3>
                  <p className="text-xs text-gray-400 mb-6">Lista de projetos exibidos publicamente na rota `/portfolio`.</p>

                  <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                    {portfolioProjects.map((proj) => (
                      <div 
                        key={proj.id}
                        className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between gap-3 hover:border-white/10 transition-colors"
                      >
                        <div className="overflow-hidden">
                          <h4 className="text-sm font-bold text-gray-200 truncate">{proj.title}</h4>
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                            {proj.category === 'landingpage' ? 'Landing Page' : proj.category === 'sistemas' ? 'Sistema' : 'Automação'}
                          </span>
                        </div>
                        <div className="flex gap-1.5 flex-shrink-0">
                          <button
                            onClick={() => handleStartEdit(proj)}
                            className="w-8 h-8 rounded-lg bg-[#6D28D9]/10 hover:bg-[#6D28D9]/20 text-[#6D28D9] flex items-center justify-center border border-[#6D28D9]/10 hover:border-[#6D28D9]/30 transition-colors cursor-pointer"
                            title="Editar projeto"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Excluir o projeto "${proj.title}" permanentemente do portfólio?`)) {
                                if (editingProjectId === proj.id) {
                                  handleCancelEdit();
                                }
                                deleteProject(proj.id);
                                triggerSuccess(`Projeto "${proj.title}" removido com sucesso.`);
                              }
                            }}
                            className="w-8 h-8 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 flex items-center justify-center border border-red-500/10 hover:border-red-500/30 transition-colors cursor-pointer"
                            title="Excluir projeto"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                    {portfolioProjects.length === 0 && (
                      <p className="text-sm text-gray-500 text-center py-4">Nenhum projeto cadastrado.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
