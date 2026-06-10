import React from 'react';
import type {ReactNode} from 'react';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {PageMetadata, SkipToContentFallbackId} from '@docusaurus/theme-common';
import SkipToContent from '@theme/SkipToContent';
import LayoutProvider from '@theme/Layout/Provider';
import ErrorPageContent from '@theme/ErrorPageContent';
import HeroSection from '@site/src/components/Landing/HeroSection';
import ServicesSection from '@site/src/components/Landing/ServicesSection';
import RateCardSection from '@site/src/components/Landing/RateCardSection';
import AboutSection from '@site/src/components/Landing/AboutSection';
import CTASection from '@site/src/components/Landing/CTASection';
import FooterSection from '@site/src/components/Landing/FooterSection';

export default function Home(): ReactNode {
  return (
    <LayoutProvider>
      <PageMetadata
        title="Software Development & Digital Analytics"
        description="Zarkin Digital — A husband-and-wife freelance team specializing in software development and social media analytics. We build powerful applications and turn your social media data into growth strategies."
      />
      <SkipToContent />
      <div id={SkipToContentFallbackId}>
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          <main>
            <HeroSection />
            <ServicesSection />
            <RateCardSection />
            <AboutSection />
            <CTASection />
            <FooterSection />
          </main>
        </ErrorBoundary>
      </div>
    </LayoutProvider>
  );
}
