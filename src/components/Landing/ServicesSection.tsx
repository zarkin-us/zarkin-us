import React from 'react';

const services = [
  {
    id: 'software-development',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Software Development',
    who: 'Built by Him',
    description: 'From concept to deployment — we build modern, scalable software solutions that power your business forward.',
    features: [
      'Full-Stack Web Applications',
      'REST & GraphQL APIs',
      'Cloud Infrastructure & DevOps',
      'AI Automation',
      'Payment Gateway Integration'
    ],
  },
  {
    id: 'digital-analytics',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Social Media Analytics',
    who: 'Driven by Her',
    description: 'Transform your social media data into actionable insights. We analyze your content performance, audience engagement, and growth trends to optimize your social media strategy.',
    features: [
      'Social Media Performance Reporting',
      'Engagement & Growth Analysis',
      'Content Strategy Insights',
      'Campaign Performance Tracking',
      'Audience Behavior Analysis',
      'Competitive Benchmarking',
    ],
  },
];

export default function ServicesSection(): React.ReactElement {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-white dark:bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
            Two Experts.{' '}
            <span className="gradient-text">One Team.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            We combine technical excellence in software engineering with sharp social media analytics
            to deliver complete digital solutions.
          </p>
        </div>

        {/* Service cards */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative glass-card rounded-2xl p-8 hover-lift"
            >
              {/* Top border */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />

              {/* Icon */}
              <div className="inline-flex items-center justify-center rounded-xl bg-black dark:bg-white p-3 text-white dark:text-black shadow-lg">
                {service.icon}
              </div>

              {/* Content */}
              <div className="mt-6">
                <div className="flex items-center gap-x-3">
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-white/10 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:text-neutral-300">
                    {service.who}
                  </span>
                </div>
                <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                  {service.description}
                </p>
              </div>

              {/* Feature list */}
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-x-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-black dark:text-white mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
