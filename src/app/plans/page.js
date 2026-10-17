import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import { MaskLine, Reveal } from '@/components/motion';
import { BENEFITS, PLANS } from '@/lib/content';
import Eyebrow from '@/components/Eyebrow';

export const metadata = {
  title: 'Coaching Plans',
  description:
    'Choose a 3, 6 or 12 month coaching journey. Every plan includes personalized training, practical nutrition, habit coaching, weekly check-ins and accountability.',
  alternates: { canonical: '/plans' },
};

const WRAP = 'mx-auto w-full max-w-[90rem] px-6 sm:px-10 lg:px-16';

// Three tonal treatments: light, deep ink, powder blue.
const TONES = [
  { panel: 'bg-soft text-ink', accent: 'text-sky', cta: 'bg-ink text-cream hover:bg-citrus hover:text-ink' },
  { panel: 'bg-ink text-cream lg:-mt-10 lg:pb-16', accent: 'text-citrus', cta: 'bg-citrus text-ink hover:bg-cream', dark: true },
  { panel: 'bg-powder text-ink', accent: 'text-ink/50', cta: 'bg-ink text-cream hover:bg-citrus hover:text-ink' },
];

export default async function Plans({ searchParams }) {
  const { plan } = await searchParams;
  const selected = PLANS.find((p) => p.id === plan)?.value ?? '';

  return (
    <>
      <section className="bg-[linear-gradient(180deg,#bde3f5_0%,#f7f3e9_100%)]">
        <div className={`${WRAP} pb-16 pt-32 lg:pb-24 lg:pt-40`}>
          <Eyebrow>Coaching plans</Eyebrow>
          <h1 className="font-display text-[clamp(2.9rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.03em]">
            <MaskLine onLoad delay={0.1}>Three ways</MaskLine>
            <MaskLine onLoad delay={0.2}>to <span className="accent">commit.</span></MaskLine>
          </h1>
          <Reveal onLoad delay={0.5} className="mt-8 max-w-lg text-lg leading-relaxed text-ink/80">
            Choose the length of your coaching journey. Every plan includes the full coaching system below.
          </Reveal>
        </div>
      </section>

      <section className={`${WRAP} pb-20 pt-6 lg:pb-32`}>
        <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:pt-10">
          {PLANS.map((p, i) => {
            const t = TONES[i];
            return (
              <Reveal
                key={p.id}
                delay={i * 0.1}
                data-dark={t.dark ? '' : undefined}
                className={`group relative flex flex-col overflow-hidden p-8 transition-transform duration-500 hover:-translate-y-1 sm:p-10 ${t.panel}`}
              >

                <p className="label relative">{p.eyebrow}</p>
                <p
                  aria-hidden="true"
                  className={`relative mt-6 font-display text-[8.5rem] font-semibold leading-[0.8] tracking-[-0.04em] ${t.accent}`}
                >
                  {p.numeral}
                </p>
                <h2 className="relative mt-6 font-display text-3xl font-semibold tracking-tight">{p.value}</h2>
                <p className="relative mt-4 flex-1 leading-relaxed opacity-80">{p.description}</p>
                <p className="label relative mt-8 border-t border-current/20 pt-5 opacity-70">
                  Full coaching system included
                </p>
                <Link
                  href={`/plans?plan=${p.id}#contact`}
                  scroll
                  className={`relative mt-6 inline-flex items-center justify-between gap-3 px-7 py-4 text-sm font-semibold transition-colors duration-300 ${t.cta}`}
                >
                  Contact to Know More
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className={`${WRAP} pb-20 lg:pb-32`}>
        <Reveal>
          <Eyebrow className="mb-5">Included in every plan</Eyebrow>
          <h2 className="mb-12 max-w-2xl font-display text-4xl font-semibold leading-[0.95] tracking-[-0.025em] sm:text-6xl">
            One system. Your timeline.
          </h2>
        </Reveal>
        <ul className="grid gap-x-12 sm:grid-cols-2">
          {BENEFITS.map((b) => (
            <Reveal as="li" key={b.title} className="flex gap-4 border-t border-ink/15 py-6">
              <svg className="mt-1 h-5 w-5 shrink-0 text-ink" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight">{b.title}</h3>
                <p className="mt-1 text-ink-soft">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <ContactSection plan={selected} />
    </>
  );
}
