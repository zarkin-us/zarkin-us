import React from 'react';

export default function CTASection(): React.ReactElement {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Decorative elements */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-white/[0.04] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern id="cta-grid" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" strokeWidth="0" />
      </svg>

      {/* Subtle glows */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-[128px] opacity-[0.03] animate-blob" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-neutral-400 rounded-full mix-blend-screen filter blur-[128px] opacity-[0.03] animate-blob animation-delay-2000" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight !text-white sm:text-4xl lg:text-5xl">
          Ready to Start Your{' '}
          <span className="gradient-text-light">Next Project</span>?
        </h2>
        <p className="mt-6 text-lg leading-8 !text-neutral-400 max-w-2xl mx-auto">
          Whether you need a powerful web application, social media analytics and reporting, or a complete digital
          transformation — we're here to make it happen. Let's talk about your vision.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello.zarkin@gmail.com"
            className="group w-full sm:w-auto rounded-full bg-white px-8 py-4 text-sm font-semibold shadow-xl hover:bg-neutral-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            style={{ color: '#000000' }}
          >
            <span className="flex items-center justify-center gap-x-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Get in Touch
            </span>
          </a>
          <a
            href="#services"
            className="group w-full sm:w-auto text-sm font-semibold !text-white border border-white/20 rounded-full px-8 py-4 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-x-2"
          >
            View Our Services
            <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm !text-neutral-500">
          <div className="flex items-center gap-x-2">
            <svg className="h-4 w-4 !text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Free Consultation
          </div>
          <div className="flex items-center gap-x-2">
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Quick Response
          </div>
          <div className="flex items-center gap-x-2">
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            No Obligation
          </div>
        </div>
      </div>
    </section>
  );
}
