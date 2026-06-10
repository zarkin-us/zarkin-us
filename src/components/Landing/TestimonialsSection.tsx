import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Zarkin Digital transformed our outdated platform into a modern, data-driven application. The combination of solid engineering and analytics insight gave us a competitive edge we didn't know we needed.",
    name: 'Sarah Chen',
    role: 'CEO, TechVenture Co.',
    avatar: 'SC',
  },
  {
    id: 2,
    quote: "Working with a team that understands both the technical and analytical sides was a game-changer. Our conversion rates improved by 40% after implementing their recommendations.",
    name: 'Marcus Rivera',
    role: 'Marketing Director, GrowthHub',
    avatar: 'MR',
  },
  {
    id: 3,
    quote: "The personal attention we received was exceptional. It felt like they were an extension of our team, always available and deeply invested in our success.",
    name: 'Emily Watson',
    role: 'Founder, DataDriven.io',
    avatar: 'EW',
  },
];

export default function TestimonialsSection(): React.ReactElement {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neutral-200 dark:bg-white/[0.02] rounded-full blur-[128px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Trusted by <span className="gradient-text">Great Clients</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            Don't just take our word for it — hear what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative glass-card rounded-2xl p-8 hover-lift"
            >
              {/* Quote icon */}
              <svg className="absolute top-6 right-6 h-8 w-8 text-black/5 dark:text-white/5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849H10v10H0z" />
              </svg>

              {/* Stars */}
              <div className="flex gap-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-neutral-800 dark:text-neutral-200" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-x-3 border-t border-neutral-200/50 dark:border-white/10 pt-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-black dark:bg-white text-sm font-bold text-white dark:text-black">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-black dark:text-white">{testimonial.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
