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
  description = 'Sistemas ERP, automações inteligentes e dashboards de BI sob medida em Lavras MG e região. Escale sua empresa com a tecnologia da Heso.',
  keywords = 'sistemas ERP empresariais, desenvolvimento de software sob medida, automação de processos comerciais, criação de dashboards BI, Lavras MG, tecnologia Lavras, software Lavras, ERP Lavras',
  path = '',
  image = 'https://heso.com.br/imgs/heso_og_image.png', // Fallback preview image
  type = 'website',
  noindex = false,
}: SEOProps) {
  const defaultTitle = 'Heso | Sistemas ERP, Automações e Dashboards de BI em Lavras e Região';
  const fullTitle = title ? `${title} | Heso` : defaultTitle;
  const canonicalUrl = `https://heso.com.br${path}`;

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
      <meta property="og:site_name" content="Heso" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
