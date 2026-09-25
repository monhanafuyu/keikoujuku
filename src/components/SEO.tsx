import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  type?: 'website' | 'article';
  schemaOrgData?: object;
  breadcrumbs?: { name: string; url?: string; item?: string }[];
  faqItems?: { question: string; answer: string }[];
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  type = 'website',
  schemaOrgData,
  breadcrumbs,
  faqItems,
  noindex
}) => {
  const baseUrl = 'https://www.keikouzemi.com';
  // Normalize canonical URL (strip trailing slash if not root)
  const cleanPath = canonicalUrl === '/' ? '' : canonicalUrl.replace(/\/+$/, '');
  const fullCanonicalUrl = `${baseUrl}${cleanPath}`;

  // Default WebSite & Organization Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "慶應ROUTE",
    "url": baseUrl,
    "description": "現役慶應生とつくる、あなただけの慶應合格戦略。一般選抜・慶應法FIT・総合型選抜・指定校推薦まで対応。"
  };

  const breadcrumbsSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${baseUrl}${crumb.url || crumb.item || ''}`
    }))
  } : null;

  const faqSchema = (faqItems && faqItems.length > 0) ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="慶應ROUTE" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgData || defaultSchema)}
      </script>
      
      {breadcrumbsSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbsSchema)}
        </script>
      )}

      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};
