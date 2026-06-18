import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PdvNavbar from '../components/PdvNavbar';
import PdvFooter from '../components/PdvFooter';
import SEO from '../components/SEO';
import Cursor from '../components/Cursor';

export default function TermsOfUse() {
  return (
    <div className="bg-heso-black min-h-screen text-white font-sans noise">
      <SEO 
        title="Termos de Uso | HESO PDV" 
        description="Termos de uso do HESO PDV. Conheça as regras de utilização, responsabilidades do usuário e o funcionamento em fase de testes/beta do nosso sistema comercial."
        path="/termos"
      />
      <Cursor />
      <PdvNavbar />

      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-grid-white bg-[size:30px_30px] overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-heso-purple/10 blur-[120px] pointer-events-none" />

        <div className="max-w-[800px] mx-auto px-6 relative z-10 text-left">
          
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-white transition-colors mb-10 group">
            <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" />
            Voltar ao início
          </Link>

          <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-[1.1] text-white mb-4">
            Termos de Uso
          </h1>
          <p className="text-xs text-gray-500 font-mono mb-10">Última atualização: 18 de Junho de 2026</p>

          <div className="prose prose-invert max-w-none text-gray-300 space-y-8 text-sm leading-relaxed">
            
            <section className="border-b border-white/5 pb-6">
              <h2 className="text-xl font-display font-semibold text-white mb-3">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar o site institucional e o sistema <strong>HESO PDV</strong> (disponível sob o subdomínio <code>https://pdv.heso.com.br</code>), você declara ter lido, compreendido e aceitado todos os termos e condições descritos neste documento. Se você não concordar com estes termos, não deverá acessar nem utilizar nossos serviços.
              </p>
            </section>

            <section className="border-b border-white/5 pb-6">
              <h2 className="text-xl font-display font-semibold text-white mb-3">2. Funcionamento em Fase de Desenvolvimento (Beta / Sandbox)</h2>
              <p>
                O HESO PDV está atualmente em <strong>fase de desenvolvimento, testes e homologação de integrações (Beta)</strong>. Durante esta fase:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>O sistema é fornecido "como está" (as-is), sem garantias implícitas ou explícitas de funcionamento ininterrupto.</li>
                <li>As rotas de callback de APIs e integrações com aplicativos de terceiros (como aiqfome e iFood) destinam-se unicamente a propósitos de homologação técnica e testes de fluxo OAuth.</li>
                <li>Não há armazenamento persistente de dados transacionais reais de vendas ou pedidos nesta fase, a menos que expressamente acordado por meio de contrato de piloto específico.</li>
              </ul>
            </section>

            <section className="border-b border-white/5 pb-6">
              <h2 className="text-xl font-display font-semibold text-white mb-3">3. Responsabilidades do Usuário</h2>
              <p>
                Como usuário do HESO PDV, você se compromete a:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Utilizar a plataforma apenas para fins legais e de acordo com a legislação comercial e fiscal brasileira vigente.</li>
                <li>Não realizar engenharia reversa, testes de intrusão maliciosos, ou sobrecarregar as rotas de API da aplicação (incluindo as rotas técnicas de callback OAuth).</li>
                <li>Fornecer dados cadastrais válidos e manter a segurança de quaisquer credenciais que venham a ser geradas para o uso das ferramentas.</li>
              </ul>
            </section>

            <section className="border-b border-white/5 pb-6">
              <h2 className="text-xl font-display font-semibold text-white mb-3">4. Uso Correto da Plataforma e Integrações</h2>
              <p>
                O HESO PDV serve como frente de caixa eletrônica e hub de integração com marketplaces parceiros. O usuário é o único responsável pela veracidade e exatidão dos preços de cardápios, descrição de produtos, imagens e prazos configurados que venham a ser exportados para os aplicativos integrados.
              </p>
            </section>

            <section className="border-b border-white/5 pb-6">
              <h2 className="text-xl font-display font-semibold text-white mb-3">5. Limitação de Responsabilidade</h2>
              <p>
                Em nenhuma circunstância a HESO ou seus desenvolvedores serão responsáveis por quaisquer danos indiretos, lucros cessantes, perda de dados ou interrupção de negócios decorrentes de falhas técnicas nos marketplaces integrados, instabilidade em provedores de hospedagem ou mau uso das ferramentas por parte do lojista.
              </p>
            </section>

            <section className="border-b border-white/5 pb-6">
              <h2 className="text-xl font-display font-semibold text-white mb-3">6. Alterações nos Termos de Uso</h2>
              <p>
                Reservamo-nos o direito de alterar ou atualizar estes Termos de Uso a qualquer momento, visando refletir melhorias do sistema ou novos requisitos regulatórios. O uso continuado da plataforma após as alterações constituirá sua aceitação das novas regras.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white mb-3">7. Contato e Suporte</h2>
              <p>
                Para sanar qualquer dúvida referente a estes Termos de Uso ou obter suporte com relação à plataforma, entre em contato através do e-mail oficial: <a href="mailto:nicollasarcanjo13@gmail.com" className="text-heso-violet hover:underline">nicollasarcanjo13@gmail.com</a>.
              </p>
            </section>

          </div>

        </div>
      </section>

      <PdvFooter />
    </div>
  );
}
