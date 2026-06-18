import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export default function SEO({
  title,
  description = 'HESO PDV - Sistema de PDV e ERP completo para varejo, controle de estoque, vendas e pedidos online integrados com iFood e aiqfome.',
  keywords = 'pdv, erp, controle de estoque, vendas, pdv online, integracao ifood, integracao aiqfome, heso pdv, frente de caixa, sistema comercial',
  path = '',
  image = 'https://pdv.heso.com.br/imgs/logo.webp', // Fallback preview image
  type = 'website',
  noindex = false,
}: SEOProps) {
  const defaultTitle = 'HESO PDV | Frente de Caixa, Estoque e Pedidos Online';
  const fullTitle = title ? `${title} | HESO PDV` : defaultTitle;
  const canonicalUrl = `https://pdv.heso.com.br${path}`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots configuration (e.g. noindex for /adm) */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Facebook / WhatsApp / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="HESO PDV" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
