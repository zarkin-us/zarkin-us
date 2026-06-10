import React from 'react';

export default function AboutSection(): React.ReactElement {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white dark:bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center">
          {/* Left: Visual element */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-neutral-100 dark:bg-white/[0.02] rounded-3xl blur-2xl" />

              <div className="relative glass-card rounded-3xl p-8 sm:p-12">
                {/* Team visual */}
                <div className="flex items-center justify-center gap-x-6 mb-8">
                  {/* Him */}
                  <div className="text-center">
                    <div className="mx-auto w-20 h-20 rounded-full bg-black dark:bg-white flex items-center justify-center shadow-lg">
                      <svg className="h-10 w-10 text-white dark:text-black" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-black dark:text-white">Developer</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Software Engineering</p>
                  </div>

                  {/* Connection */}
                  <div className="flex flex-col items-center gap-y-1">
                    <div className="w-8 h-[2px] bg-gradient-to-r from-neutral-300 to-neutral-600 dark:from-neutral-700 dark:to-neutral-400" />
                    <svg className="h-5 w-5 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                    <div className="w-8 h-[2px] bg-gradient-to-r from-neutral-600 to-neutral-300 dark:from-neutral-400 dark:to-neutral-700" />
                  </div>

                  {/* Her */}
                  <div className="text-center">
                    <div className="mx-auto w-20 h-20 rounded-full bg-neutral-800 dark:bg-neutral-200 flex items-center justify-center shadow-lg">
                      <svg className="h-10 w-10 text-white dark:text-black" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-black dark:text-white">Analyst</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Social Media Analytics</p>
                  </div>
                </div>

                {/* Decorative code/data lines */}
                <div className="space-y-2">
                  {[
                    { width: 'w-full', opacity: 'opacity-20' },
                    { width: 'w-4/5', opacity: 'opacity-15' },
                    { width: 'w-3/4', opacity: 'opacity-10' },
                    { width: 'w-5/6', opacity: 'opacity-[0.08]' },
                    { width: 'w-2/3', opacity: 'opacity-[0.06]' },
                  ].map((line, i) => (
                    <div key={i} className={`h-2 ${line.width} ${line.opacity} bg-black dark:bg-white rounded-full`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="mt-16 lg:mt-0">
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
              A Unique Partnership for{' '}
              <span className="gradient-text">Complete Solutions</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              We're not your typical agency. As a husband-and-wife team, we bring a deeply
              collaborative approach where software development and social media analytics work hand-in-hand
              from day one.
            </p>
            <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Every application we build is designed with measurability in mind. Every social media
              strategy we craft is backed by real data and performance insights. The result? Digital solutions
              that don't just work — they perform, engage, and deliver measurable impact.
            </p>

            {/* Value props */}
            <div className="mt-8 space-y-4">
              {[
                { title: 'Seamless Collaboration', desc: 'No handoff delays between development and social media teams.' },
                { title: 'Data-Informed Development', desc: 'Every feature built with social media integration and tracking in mind.' },
                { title: 'Personal Attention', desc: 'Direct communication with the people doing the actual work.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/5 dark:bg-white/10">
                      <svg className="h-3.5 w-3.5 text-black dark:text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-white">{item.title}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
