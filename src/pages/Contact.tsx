import { useState, FormEvent } from 'react';
import { ArrowLeft, Mail, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import PdvNavbar from '../components/PdvNavbar';
import PdvFooter from '../components/PdvFooter';
import SEO from '../components/SEO';
import Cursor from '../components/Cursor';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-heso-black min-h-screen text-white font-sans noise">
      <SEO 
        title="Contato | HESO PDV" 
        description="Fale com a equipe do HESO PDV. Entre em contato por e-mail oficial para suporte, dúvidas comerciais ou homologação de integrações."
        path="/contato"
      />
      <Cursor />
      <PdvNavbar />

      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-grid-white bg-[size:30px_30px] overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-heso-purple/10 blur-[120px] pointer-events-none" />

        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-white transition-colors mb-10 group">
            <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" />
            Voltar ao início
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-5 text-left flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-heso-violet mb-3 block">Canal Oficial</span>
                <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-[1.1] text-white mb-6">
                  Fale Conosco
                </h1>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Deseja tirar dúvidas sobre as integrações, solicitar acesso à versão Beta do HESO PDV ou falar com a nossa equipe de suporte? Nosso e-mail oficial de atendimento está à sua disposição.
                </p>

                <div className="space-y-6">
                  {/* Email Box */}
                  <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-heso-purple/20 border border-heso-purple/30 flex items-center justify-center text-heso-violet shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 font-mono block uppercase tracking-wider">E-mail de Suporte</span>
                      <a href="mailto:nicollasarcanjo13@gmail.com" className="text-sm font-semibold text-white hover:text-heso-violet transition-colors break-all select-all">
                        nicollasarcanjo13@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Dev phase warning */}
                  <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-heso-purple/20 border border-heso-purple/30 flex items-center justify-center text-heso-violet shrink-0">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 font-mono block uppercase tracking-wider">Tempo de Resposta</span>
                      <span className="text-sm font-semibold text-white">
                        Até 24 horas úteis
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-xs text-gray-500 font-mono hidden lg:block">
                HESO PDV - Lavras e região.
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
                {isSubmitted ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-2">Mensagem Enviada!</h3>
                    <p className="text-sm text-gray-400 max-w-sm">
                      Agradecemos o seu contato. Nossa equipe analisará sua mensagem e responderá no e-mail fornecido em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Nome Completo</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-heso-gray/80 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-heso-purple transition-all"
                        placeholder="Ex: João Silva" 
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">E-mail de Contato</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-heso-gray/80 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-heso-purple transition-all"
                          placeholder="Ex: joao@estabelecimento.com" 
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Assunto</label>
                        <input 
                          type="text" 
                          id="subject" 
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-heso-gray/80 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-heso-purple transition-all"
                          placeholder="Ex: Integração aiqfome" 
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Mensagem</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-heso-gray/80 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-heso-purple transition-all resize-none"
                        placeholder="Como podemos ajudar a sua empresa?"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 bg-heso-purple hover:bg-heso-violet text-white rounded-full text-xs font-mono uppercase tracking-[0.15em] font-semibold transition-all shadow-lg shadow-heso-purple/20 flex items-center justify-center gap-2"
                    >
                      Enviar Mensagem <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <PdvFooter />
    </div>
  );
}
