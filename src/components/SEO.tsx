import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  type?: 'website' | 'article';
  schemaOrgData?: object;
  breadcrumbs?: { name: string; url: string }[];
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  type = 'website',
  schemaOrgData,
  breadcrumbs
}) => {
  const baseUrl = 'https://www.keikouzemi.com';
  const fullCanonicalUrl = `${baseUrl}${canonicalUrl === '/' ? '' : canonicalUrl}`;

  // Default WebSite Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "慶應ROUTE",
    "url": baseUrl
  };

  const breadcrumbsSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${baseUrl}${crumb.url}`
    }))
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="慶應ROUTE" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgData || defaultSchema)}
      </script>
      
      {breadcrumbsSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbsSchema)}
        </script>
      )}
    </Helmet>
  );
};
