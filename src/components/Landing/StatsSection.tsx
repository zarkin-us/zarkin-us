import React from 'react';

const stats = [
  { id: 1, value: '50+', label: 'Projects Delivered' },
  { id: 2, value: '30+', label: 'Happy Clients' },
  { id: 3, value: '5+', label: 'Years Experience' },
  { id: 4, value: '99%', label: 'Client Satisfaction' },
];

export default function StatsSection(): React.ReactElement {
  return (
    <section className="relative py-16 sm:py-20 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-800 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Our Track Record
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="group relative text-center glass-card rounded-2xl p-6 hover-lift"
              >
                <div className="relative">
                  <p className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white stat-glow tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
