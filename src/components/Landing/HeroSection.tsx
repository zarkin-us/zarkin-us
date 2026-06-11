import React, { useState } from 'react';

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '/blog' },
];

export default function HeroSection(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative isolate overflow-hidden bg-black">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Gradient blobs — subtle white/gray glows */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-screen filter blur-[128px] opacity-[0.04] animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-neutral-400 rounded-full mix-blend-screen filter blur-[128px] opacity-[0.06] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-screen filter blur-[128px] opacity-[0.03] animate-blob animation-delay-4000" />

      {/* SVG grid decoration */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/[0.04]"
      >
        <defs>
          <pattern id="hero-grid" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" strokeWidth="0" />
      </svg>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-5 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
            <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <span className="text-xl font-bold !text-white tracking-tight">
            Zarkin<span className="!text-neutral-400">Digital</span>
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium !text-neutral-400 hover:!text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-200 transition-all duration-200"
            style={{ color: '#000' }}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden !text-neutral-400 hover:!text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-0 inset-x-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="pt-20 pb-6 px-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-base font-medium !text-neutral-400 hover:!text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center rounded-full bg-white px-5 py-3 text-sm font-semibold mt-4"
              style={{ color: '#000' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:flex lg:items-center lg:gap-x-16 lg:px-8 lg:pt-32 lg:pb-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-x-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-medium !text-neutral-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Available for new projects
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight !text-white sm:text-6xl lg:text-7xl">
            We Build{' '}
            <span className="gradient-text-light">Software</span>.{' '}
            <br className="hidden sm:block" />
            We Decode{' '}
            <span className="gradient-text-light">Data</span>.
          </h1>

          <p className="mt-6 text-lg leading-8 !text-neutral-400 max-w-lg">
            A husband-and-wife team combining cutting-edge software development with expert social media analytics.
            We build powerful digital solutions and turn your social media data into growth strategies.
          </p>

          <div className="mt-10 flex flex-col items-start gap-y-5 sm:flex-row sm:items-center sm:gap-x-6">
            <a
              href="#contact"
              className="group relative inline-flex justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold hover:bg-neutral-100 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full sm:w-auto"
              style={{ color: '#000' }}
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="group inline-flex justify-center text-sm font-semibold leading-6 !text-neutral-400 hover:!text-white transition-colors items-center gap-x-2 w-full sm:w-auto"
            >
              Explore Services
              <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Hero image / visual */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-20">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-white/[0.03] rounded-2xl blur-2xl" />
              <img
                src="/img/image-me-her.png"
                alt="Zarkin Digital founders - Professional couple portrait"
                width={600}
                height={600}
                className="relative w-[28rem] lg:w-[36rem] rounded-2xl border border-white/10 shadow-2xl grayscale"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
