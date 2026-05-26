import React, { createContext, useContext, useState, useEffect } from 'react';

// Interface do Projeto no Contexto (serializável em JSON)
export interface Project {
  id: string;
  title: string;
  category: 'landingpage' | 'sistemas' | 'automacoes';
  desc: string;
  icon: string; // Nome do ícone como string para salvar em JSON
  stat: string;
  technologies: string[];
  challenge: string;
  solution: string;
  result: string;
  highlightColor: string;
  images: string[];
}

interface ConfigContextType {
  phone: string;
  whatsapp: string;
  instagram: string;
  portfolioProjects: Project[];
  updateConfig: (phone: string, whatsapp: string, instagram: string) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  resetConfig: () => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

// Projetos padrão
const defaultProjects: Project[] = [
  {
    id: 'efit-seu-personal',
    title: 'eFit Seu Personal',
    category: 'sistemas',
    icon: 'Activity',
    desc: 'Aplicativo web (PWA) para personal trainers gerenciarem alunos, prescreverem treinos interativos e receberem pagamentos online (efitseupersonal.com.br).',
    stat: 'App Multi-Plataforma',
    technologies: ['PWA', 'React', 'Node.js', 'Integração de Pagamentos', 'TailwindCSS'],
    challenge: 'Profissionais de educação física precisavam centralizar a gestão de treinos, ter gráficos de evolução (peso, medidas corporais) e controlar pagamentos de forma automatizada em um único lugar.',
    solution: 'Desenvolvimento de uma plataforma responsiva instalável (PWA) com dashboard financeiro para o treinador, gestão de planos e um portal interativo onde o aluno acompanha os treinos (com imagens/gifs) direto do celular.',
    result: 'Automação nas cobranças e entrega de uma consultoria fitness profissional, aumentando o engajamento e a retenção dos alunos.',
    highlightColor: 'from-blue-600/20 to-indigo-500/10',
    images: ['/imgs/crm.png', '/imgs/pdv.png', '/imgs/sobre nos.png']
  },
  {
    id: 'elipersonal-landing',
    title: 'EliPersonal Landing Page',
    category: 'landingpage',
    icon: 'Activity',
    desc: 'Landing page ultra otimizada e responsiva para personal trainer com agendamento direto de planos.',
    stat: '+42% conversão de leads',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite'],
    challenge: 'O personal trainer Eli precisava de uma página online profissional que capturasse leads qualificados de forma simplificada, apresentasse seus planos de treino e permitisse contato imediato via WhatsApp.',
    solution: 'Desenvolvemos uma landing page premium focada na conversão mobile, com velocidade de carregamento sob 0.6s, calculadoras de planos interativas e botões de chamada rápida (CTA) baseados em psicologia de vendas.',
    result: 'Crescimento de 42% no número de contatos qualificados e fechamento de novos alunos no primeiro mês de uso do tráfego pago.',
    highlightColor: 'from-emerald-500/20 to-teal-500/10',
    images: ['/imgs/sobre nos.png', '/imgs/crm.png', '/imgs/inovacao.png']
  },
  {
    id: 'heso-landing',
    title: 'HESO Institucional',
    category: 'landingpage',
    icon: 'Layers',
    desc: 'O website principal do ecossistema HESO, com gráficos interativos de serviços e design futurista.',
    stat: 'Carregamento em 0.4s',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite'],
    challenge: 'Apresentar a complexidade do ecossistema de soluções corporativas da HESO de maneira simples, intuitiva e esteticamente deslumbrante.',
    solution: 'Criamos uma arquitetura de página única de alta performance usando TailwindCSS, gráficos interativos que mostram o fluxo de integração dos módulos ERP/BI e animações dinâmicas de transição de tela.',
    result: 'Fortalecimento da marca no mercado de tecnologia e aumento de 60% na taxa de agendamento de reuniões comerciais qualificadas.',
    highlightColor: 'from-[#6D28D9]/20 to-indigo-500/10',
    images: ['/imgs/logo.png', '/imgs/sobre nos.png', '/imgs/inovacao.png']
  },
  {
    id: 'odonto-landing',
    title: 'Clínica Odonto Prime',
    category: 'landingpage',
    icon: 'Smile',
    desc: 'Website institucional premium de odontologia estética com pré-agendamento interativo.',
    stat: '180+ novos agendamentos/mês',
    technologies: ['React', 'TailwindCSS', 'WhatsApp Business API'],
    challenge: 'Uma clínica de estética odontológica premium desejava aumentar a atração de pacientes de alto ticket, eliminando a lentidão no atendimento inicial.',
    solution: 'Implementamos um website focado em experiência mobile com exibição de casos antes/depois interativos (slide) e um assistente de agendamento que direciona o lead com o procedimento e horário desejados pré-selecionados.',
    result: 'Facilitação no processo de captação que gerou mais de 180 novos contatos mensais qualificados direto para o comercial da clínica.',
    highlightColor: 'from-sky-500/20 to-blue-500/10',
    images: ['/imgs/sobre nos.png', '/imgs/inovacao.png', '/imgs/crm.png']
  },
  {
    id: 'elipersonal-app',
    title: 'EliPersonal Web App',
    category: 'sistemas',
    icon: 'Users',
    desc: 'Aplicativo web completo para personal trainers gerenciarem fichas de treino, evoluções de alunos e mensalidades.',
    stat: 'Gerenciamento de 300+ alunos',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
    challenge: 'Centralizar o acompanhamento físico dos alunos, montagem de treinos diários personalizados e controle de mensalidades sem usar planilhas complexas ou papel.',
    solution: 'Desenvolvemos um sistema web com painel administrativo completo para o profissional e um portal responsivo do aluno. O portal do aluno exibe os treinos com gifs demonstrativos e gera lembretes de cobrança automática.',
    result: 'Redução de 90% do tempo gasto em tarefas operacionais/administrativas do treinador e aumento de 15% na taxa de retenção dos alunos.',
    highlightColor: 'from-amber-500/20 to-orange-500/10',
    images: ['/imgs/crm.png', '/imgs/pdv.png', '/imgs/sobre nos.png']
  },
  {
    id: 'heso-erp',
    title: 'HESO ERP & Dashboard BI',
    category: 'sistemas',
    icon: 'LayoutDashboard',
    desc: 'ERP integrado de ponta a ponta com relatórios em tempo real de faturamento, estoque e fluxo de vendas.',
    stat: '-30% custos em estoque',
    technologies: ['React', 'Chart.js', 'Express', 'PostgreSQL', 'TailwindCSS'],
    challenge: 'A falta de centralização nas vendas de múltiplos canais resultava em furos constantes de estoque e relatórios financeiros defasados de 15 dias.',
    solution: 'Construímos um ERP customizado sob medida com sincronização de estoque em tempo real e painéis de BI integrados que compilam dados financeiros e métricas operacionais.',
    result: 'Redução imediata de 30% em perdas de estoque e fornecimento de dados consolidados para tomadas de decisão rápidas de gestão.',
    highlightColor: 'from-violet-500/20 to-purple-500/10',
    images: ['/imgs/erp.png', '/imgs/bi.png', '/imgs/pdv.png']
  },
  {
    id: 'heso-financeiro',
    title: 'Controle Financeiro HESO',
    category: 'sistemas',
    icon: 'DollarSign',
    desc: 'Módulo financeiro avançado com fluxo de caixa, geração automatizada de DRE e conciliação bancária rápida.',
    stat: '99.8% de precisão de caixa',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    challenge: 'Fazer a conciliação bancária manual de dezenas de transações diárias tomava horas da equipe e gerava erros de contabilidade.',
    solution: 'Sistema financeiro integrado que puxa extratos automáticos via API de bancos digitais e realiza conciliação inteligente de recebíveis, gerando relatórios de fluxo de caixa instantâneos.',
    result: 'Economia de mais de 15 horas semanais da equipe administrativa e eliminação completa de divergências contábeis.',
    highlightColor: 'from-emerald-500/20 to-green-500/10',
    images: ['/imgs/financeiro.png', '/imgs/bi.png', '/imgs/erp.png']
  },
  {
    id: 'whatsapp-bot',
    title: 'WhatsApp Lead Bot',
    category: 'automacoes',
    icon: 'MessageSquare',
    desc: 'Robô de atendimento que qualifica leads, responde dúvidas frequentes e agenda reuniões automaticamente.',
    stat: '+150% leads qualificados',
    technologies: ['Node.js', 'Venom-bot', 'WhatsApp Business API', 'OpenAI API'],
    challenge: 'A equipe comercial perdia tempo respondendo a contatos desqualificados no WhatsApp e demorava para responder a leads corporativos importantes.',
    solution: 'Integramos uma automação de atendimento inteligente que realiza uma triagem conversacional básica, qualifica a empresa do lead e agenda reuniões diretamente no calendário da equipe de vendas.',
    result: 'A equipe comercial passou a falar apenas com leads qualificados, gerando um aumento de 150% na taxa de fechamento de novas soluções.',
    highlightColor: 'from-cyan-500/20 to-teal-500/10',
    images: ['/imgs/automacao.png', '/imgs/api.png', '/imgs/offlineonline.png']
  },
  {
    id: 'telegram-alerts',
    title: 'Telegram Alert & DB Backup Bot',
    category: 'automacoes',
    icon: 'ShieldAlert',
    desc: 'Sistema de monitoramento e backups programados com relatórios instantâneos de status de servidores.',
    stat: 'Zero perda de dados',
    technologies: ['Python', 'PostgreSQL', 'Docker', 'Telegram API'],
    challenge: 'Monitorar a integridade de bancos de dados de múltiplos clientes de forma centralizada e sem a necessidade de checar logs manuais diariamente.',
    solution: 'Criamos scripts em Python rodando em containers Docker que realizam backups automáticos em nuvem diariamente e disparam alertas imediatos para um canal privado do Telegram em caso de anomalia.',
    result: 'Tranquilidade total para a equipe técnica com zero perda de dados relatada desde a implantação.',
    highlightColor: 'from-red-500/20 to-rose-500/10',
    images: ['/imgs/automacao.png', '/imgs/offlineonline.png', '/imgs/api.png']
  },
  {
    id: 'nfe-invoice-automation',
    title: 'Faturamento Automático NF-e',
    category: 'automacoes',
    icon: 'FileSpreadsheet',
    desc: 'Integração de gateway de pagamento para geração e envio imediato de nota fiscal eletrônica de serviço.',
    stat: '100% de emissão automatizada',
    technologies: ['Node.js', 'Express', 'XML Parse', 'APIs Fiscais'],
    challenge: 'A emissão manual de notas fiscais eletrônicas de serviços de centenas de assinantes do app exigia digitação manual no site da prefeitura.',
    solution: 'Construímos um microsserviço que escuta webhooks do gateway de pagamento (Asaas/Stripe) e emite a NFS-e correspondente de forma assíncrona na API da prefeitura, enviando o PDF diretamente para o e-mail do cliente.',
    result: 'Eliminação total do trabalho manual de faturamento mensal e redução a zero de atrasos ou erros de digitação de notas.',
    highlightColor: 'from-yellow-500/20 to-amber-500/10',
    images: ['/imgs/api.png', '/imgs/financeiro.png', '/imgs/erp.png']
  }
];

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [phone, setPhone] = useState<string>(() => {
    return localStorage.getItem('heso_phone') || '(35) 99131-9992';
  });

  const [whatsapp, setWhatsapp] = useState<string>(() => {
    return localStorage.getItem('heso_whatsapp') || '5535991319992';
  });

  const [instagram, setInstagram] = useState<string>(() => {
    return localStorage.getItem('heso_instagram') || 'hydracode.dev';
  });

  const [portfolioProjects, setPortfolioProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('heso_portfolio');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Falha ao ler portfólio do localStorage', e);
      }
    }
    return defaultProjects;
  });

  // Salva no localStorage quando alterado
  useEffect(() => {
    localStorage.setItem('heso_phone', phone);
  }, [phone]);

  useEffect(() => {
    localStorage.setItem('heso_whatsapp', whatsapp);
  }, [whatsapp]);

  useEffect(() => {
    localStorage.setItem('heso_instagram', instagram);
  }, [instagram]);

  useEffect(() => {
    localStorage.setItem('heso_portfolio', JSON.stringify(portfolioProjects));
  }, [portfolioProjects]);

  // Ações de alteração
  const updateConfig = (newPhone: string, newWhatsapp: string, newInstagram: string) => {
    setPhone(newPhone);
    setWhatsapp(newWhatsapp);
    setInstagram(newInstagram);
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProj: Project = {
      ...project,
      id: `custom-project-${Date.now()}`
    };
    setPortfolioProjects((prev) => [newProj, ...prev]);
  };

  const updateProject = (updatedProj: Project) => {
    setPortfolioProjects((prev) =>
      prev.map((proj) => (proj.id === updatedProj.id ? updatedProj : proj))
    );
  };

  const deleteProject = (id: string) => {
    setPortfolioProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const resetConfig = () => {
    setPhone('(35) 99131-9992');
    setWhatsapp('5535991319992');
    setInstagram('hydracode.dev');
    setPortfolioProjects(defaultProjects);
  };

  return (
    <ConfigContext.Provider value={{
      phone,
      whatsapp,
      instagram,
      portfolioProjects,
      updateConfig,
      addProject,
      updateProject,
      deleteProject,
      resetConfig
    }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig deve ser utilizado dentro de um ConfigProvider');
  }
  return context;
};
