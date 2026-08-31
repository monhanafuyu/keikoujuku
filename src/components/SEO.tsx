import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = '慶應ROUTE｜一般も、推薦も。慶應合格へのルートを、一つに絞らない。',
  description = '現役慶應生とつくる、あなただけの慶應合格戦略。一般選抜・慶應法FIT・総合型選抜・指定校推薦まで対応。受験戦略の設計から毎週の学習管理、分からない問題の個別解説まで、慶應合格に向けて一貫してサポートします。',
  keywords = '慶應, 慶應義塾大学, 受験, 合格, 一般選抜, 推薦入試, FIT入試, 総合型選抜, 指定校推薦, 慶應ROUTE, オンライン塾, 個別指導',
  canonicalUrl = 'https://keio-route.example.com',
  ogImage = 'https://keio-route.example.com/ogp.jpg',
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};
