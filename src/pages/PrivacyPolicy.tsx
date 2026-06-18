import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PdvNavbar from '../components/PdvNavbar';
import PdvFooter from '../components/PdvFooter';
import SEO from '../components/SEO';
import Cursor from '../components/Cursor';

export default function PrivacyPolicy() {
  return (
    <div className="bg-heso-black min-h-screen text-white font-sans noise">
      <SEO 
        title="Política de Privacidade | HESO PDV" 
        description="Saiba quais dados são tratados pelo HESO PDV, incluindo informações da loja, pedidos de delivery, produtos, vendas e detalhes necessários para integrações."
        path="/privacidade"
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
            Política de Privacidade
          </h1>
          <p className="text-xs text-gray-500 font-mono mb-10">Última atualização: 18 de Junho de 2026</p>

          <div className="prose prose-invert max-w-none text-gray-300 space-y-8 text-sm leading-relaxed">
            
            <section className="border-b border-white/5 pb-6">
              <h2 className="text-xl font-display font-semibold text-white mb-3">1. Compromisso com a Privacidade</h2>
              <p>
                O HESO PDV valoriza a segurança e a privacidade das informações compartilhadas por nossos usuários. Esta Política de Privacidade explica de forma transparente quais dados tratamos, os propósitos do tratamento e as medidas adotadas para assegurar a proteção de dados em conformidade com as diretrizes da Lei Geral de Proteção de Dados (LGPD).
              </p>
            </section>

            <section className="border-b border-white/5 pb-6">
              <h2 className="text-xl font-display font-semibold text-white mb-3">2. Dados Tratados pelo Sistema</h2>
              <p>
                Para possibilitar o funcionamento das ferramentas de frente de caixa e integração, o HESO PDV poderá tratar os seguintes tipos de informações:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  <strong>Dados da Loja:</strong> Nome do estabelecimento, CNPJ, telefone de contato, endereço físico e logotipo para exibição ou emissão de cupons.
                </li>
                <li>
                  <strong>Dados de Produtos e Estoque:</strong> Cadastro de itens, SKU, categorias, preços de venda, custos e quantidade física disponível em estoque.
                </li>
                <li>
                  <strong>Dados de Vendas e Faturamento:</strong> Registro de transações financeiras do caixa, métodos de pagamento utilizados, data/hora e cupons de venda emitidos.
                </li>
                <li>
                  <strong>Dados de Pedidos e Delivery:</strong> Dados importados de plataformas parceiras (como aiqfome e iFood), que compreendem itens comprados, valores de entrega, nome do cliente final e endereço de entrega fornecido pelo marketplace.
                </li>
                <li>
                  <strong>Informações de Integração:</strong> Chaves de API, segredos de cliente e tokens de autenticação (OAuth) concedidos para conectar a loja aos marketplaces parceiros.
                </li>
              </ul>
            </section>

            <section className="border-b border-white/5 pb-6">
              <h2 className="text-xl font-display font-semibold text-white mb-3">3. Finalidade do Tratamento de Dados</h2>
              <p>
                Todos os dados são coletados e tratados exclusivamente para garantir a correta prestação dos serviços do HESO PDV:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Processar vendas na frente de caixa e emitir comprovantes operacionais.</li>
                <li>Controlar o nível de estoque físico em tempo real, reduzindo furos e rupturas.</li>
                <li>Estabelecer comunicação segura e autenticada entre sua loja e os servidores do aiqfome/iFood para receber novos pedidos e enviar atualizações de status.</li>
                <li>Gerar relatórios estatísticos de vendas internos para a administração do lojista.</li>
              </ul>
            </section>

            <section className="border-b border-white/5 pb-6">
              <h2 className="text-xl font-display font-semibold text-white mb-3">4. Compartilhamento de Dados</h2>
              <p>
                O HESO PDV não comercializa nem transfere dados cadastrais ou operacionais das lojas integradas para terceiros para fins de publicidade. O compartilhamento ocorre estritamente com:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Plataformas de delivery (como aiqfome e iFood), em obediência às ações comandadas pelo próprio lojista no painel (por exemplo, ao enviar atualizações de cardápio).</li>
                <li>Órgãos fiscais ou judiciais, mediante cumprimento de obrigações legais ou regulatórias decorrentes da emissão de cupons fiscais.</li>
              </ul>
            </section>

            <section className="border-b border-white/5 pb-6">
              <h2 className="text-xl font-display font-semibold text-white mb-3">5. Segurança dos Dados</h2>
              <p>
                Adotamos práticas robustas de segurança da informação, incluindo conexões criptografadas (HTTPS), controle rígido de acesso lógico, servidores protegidos e uso restrito dos tokens OAuth. Os dados sensíveis obtidos temporariamente no fluxo do callback de integração (como códigos de autorização temporários) não são expostos em tela e são protegidos contra acessos não autorizados.
              </p>
            </section>

            <section className="border-b border-white/5 pb-6">
              <h2 className="text-xl font-display font-semibold text-white mb-3">6. Direitos do Lojista</h2>
              <p>
                O lojista, como controlador ou operador de dados sob a LGPD, pode a qualquer momento solicitar a exclusão de sua conta de testes, a revogação de tokens de acesso OAuth concedidos ao HESO PDV nas respectivas plataformas de delivery, ou a exportação das suas informações cadastradas no ERP.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-white mb-3">7. Contato de Privacidade</h2>
              <p>
                Para exercer seus direitos de privacidade, esclarecer dúvidas sobre esta Política de Privacidade ou solicitar a remoção de informações de teste, entre em contato por e-mail com o encarregado de dados no endereço: <a href="mailto:nicollasarcanjo13@gmail.com" className="text-heso-violet hover:underline">nicollasarcanjo13@gmail.com</a>.
              </p>
            </section>

          </div>

        </div>
      </section>

      <PdvFooter />
    </div>
  );
}
