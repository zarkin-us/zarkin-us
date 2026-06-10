import React from 'react';

const developerRates = [
  {
    id: 1,
    title: 'Landing Page / Static Site',
    price: 'IDR 800K',
    period: 'starting from',
    description: 'Single-page or multi-page static website with responsive design, SEO optimization, and modern UI.',
  },
  {
    id: 2,
    title: 'Web Application',
    price: 'IDR 3,000K',
    period: 'starting from',
    description: 'Full-featured web application with user authentication, database integration, and admin dashboard.',
  },
  {
    id: 3,
    title: 'API Development',
    price: 'IDR 2,000K',
    period: 'starting from',
    description: 'RESTful or GraphQL API development with documentation, authentication, and deployment setup.',
  },
  {
    id: 4,
    title: 'Maintenance & Support',
    price: 'IDR 1,500K',
    period: 'per month',
    description: 'Ongoing bug fixes, performance monitoring, security updates, and minor feature enhancements.',
  },
];

const analystRates = [
  {
    id: 1,
    title: 'Weekly Report',
    price: 'IDR 500K',
    period: 'per week',
    description: 'Weekly analysis of 1 social media account, presented in 3–5 slides, including key metrics like engagement rate, follower growth, and content performance.',
  },
  {
    id: 2,
    title: 'Monthly Report',
    price: 'IDR 1,500K',
    period: 'per month',
    description: 'Monthly analysis of 1 social media account, presented in 6–10 slides with in-depth insights and strategic recommendations based on performance trends.',
  },
  {
    id: 3,
    title: 'Quarterly / Annual Report',
    price: 'IDR 2,000K',
    period: 'per report',
    description: 'Comprehensive analysis of long-term performance trends, presented in 10–15 slides with strategic insights, comparative metrics, and actionable recommendations.',
  },
  {
    id: 4,
    title: 'Campaign Adhoc Report',
    price: 'IDR 1,500K',
    period: 'per campaign',
    description: 'One-time report analyzing a specific campaign\'s performance, delivered in 5–8 slides covering key results, audience behavior, and post-campaign recommendations.',
  },
];

const analystNotes = [
  'All prices are subject to adjustment based on data complexity, number of platforms, and special requests.',
  'Reports are delivered in PDF and/or Google Slides format.',
  'Additional platforms charged starting from IDR 200,000 per account/platform.',
  'Tools used include Google Sheets, Google Slides, Sprout Social, or as per client request.',
];

function RateCard({
  number,
  title,
  price,
  period,
  description,
}: {
  number: number;
  title: string;
  price: string;
  period: string;
  description: string;
}) {
  return (
    <div className="group relative flex items-start gap-x-5 py-6 border-b border-neutral-200 dark:border-white/[0.06] last:border-b-0">
      {/* Number */}
      <span className="flex-shrink-0 text-xs font-medium text-neutral-400 dark:text-neutral-600 mt-1.5">
        ({number})
      </span>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-bold text-black dark:text-white uppercase tracking-wide">
          {title}
        </h4>
        <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>

      {/* Price badge */}
      <div className="flex-shrink-0 text-right">
        <span className="inline-block rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200 dark:border-white/10 px-4 py-2">
          <span className="block text-sm font-bold text-black dark:text-white">{price}</span>
          <span className="block text-[11px] text-neutral-500 dark:text-neutral-400">{period}</span>
        </span>
      </div>
    </div>
  );
}

export default function RateCardSection(): React.ReactElement {
  return (
    <section id="rates" className="relative py-24 sm:py-32 bg-white dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Top divider */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-800 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
            Our <span className="gradient-text">Rate Cards</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            Transparent pricing for quality work. Choose the service that fits your needs.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">

          {/* Software Developer */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 hover-lift">
            {/* Card header */}
            <div className="flex items-center gap-x-4 mb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black dark:bg-white">
                <svg className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white">Software Developer</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Rate Card</p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 h-[1px] bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-white/0 dark:via-white/10 dark:to-white/0" />

            {/* Rates */}
            <div>
              {developerRates.map((rate) => (
                <RateCard
                  key={rate.id}
                  number={rate.id}
                  title={rate.title}
                  price={rate.price}
                  period={rate.period}
                  description={rate.description}
                />
              ))}
            </div>

            {/* Notes */}
            <div className="mt-6 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-100 dark:border-white/[0.06] p-5">
              <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Additional Notes</p>
              <ul className="space-y-1.5">
                <li className="text-xs text-neutral-500 dark:text-neutral-400 flex items-start gap-x-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-neutral-400 dark:bg-neutral-600 flex-shrink-0" />
                  Prices vary based on project scope, complexity, and timeline.
                </li>
                <li className="text-xs text-neutral-500 dark:text-neutral-400 flex items-start gap-x-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-neutral-400 dark:bg-neutral-600 flex-shrink-0" />
                  Tech stack includes React, Next.js, Node.js, Python, and cloud platforms.
                </li>
                <li className="text-xs text-neutral-500 dark:text-neutral-400 flex items-start gap-x-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-neutral-400 dark:bg-neutral-600 flex-shrink-0" />
                  Free initial consultation to scope your project requirements.
                </li>
              </ul>
            </div>
          </div>

          {/* Digital Analyst */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 hover-lift">
            {/* Card header */}
            <div className="flex items-center gap-x-4 mb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800 dark:bg-neutral-200">
                <svg className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white">Social Media Analyst</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Ranny Dwinuraini — Rate Card</p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 h-[1px] bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-white/0 dark:via-white/10 dark:to-white/0" />

            {/* Rates */}
            <div>
              {analystRates.map((rate) => (
                <RateCard
                  key={rate.id}
                  number={rate.id}
                  title={rate.title}
                  price={rate.price}
                  period={rate.period}
                  description={rate.description}
                />
              ))}
            </div>

            {/* Notes */}
            <div className="mt-6 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-100 dark:border-white/[0.06] p-5">
              <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Additional Notes</p>
              <ul className="space-y-1.5">
                {analystNotes.map((note, i) => (
                  <li key={i} className="text-xs text-neutral-500 dark:text-neutral-400 flex items-start gap-x-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-neutral-400 dark:bg-neutral-600 flex-shrink-0" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
