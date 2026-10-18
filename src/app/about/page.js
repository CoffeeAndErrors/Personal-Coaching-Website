import Image from 'next/image';
import Button from '@/components/Button';
import CtaBand from '@/components/CtaBand';
import { ImageReveal, MaskLine, Parallax, Reveal } from '@/components/motion';
import { FOR_YOU, LINKS, NOT_FOR_YOU, STATS } from '@/lib/content';
import Eyebrow from '@/components/Eyebrow';

export const metadata = {
  title: 'About the Coach',
  description:
    'Meet Amritangshu Mahapatra: over 10 years in fitness, a science-based, results-driven approach and a focus on discipline over temporary motivation.',
  alternates: { canonical: '/about' },
};

const WRAP = 'mx-auto w-full max-w-[90rem] px-6 sm:px-10 lg:px-16';

const PILLARS = [
  ['Discipline', 'Over temporary motivation. Structure you can rely on when enthusiasm fades.'],
  ['Consistency', 'Routines that keep you going even on bad days.'],
  ['Training', 'Structured workouts based on your goal and lifestyle.'],
  ['Nutrition', 'No extreme dieting. Just practical eating you can follow daily.'],
  ['Accountability', 'Weekly check-ins and daily support. Stay on track. No excuses.'],
];

export default function About() {
  return (
    <>
      <section className="bg-[linear-gradient(180deg,#b4e3d6_0%,#f7f3e9_100%)]">
        <div className={`${WRAP} grid items-center gap-12 pb-20 pt-32 lg:grid-cols-12 lg:pb-28 lg:pt-40`}>
          <div className="lg:col-span-7">
            <Eyebrow>The person behind the results</Eyebrow>
            <h1 className="font-display text-[clamp(2.9rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.03em]">
              <MaskLine onLoad delay={0.1}>Amritangshu</MaskLine>
              <MaskLine onLoad delay={0.2}>Mahapatra</MaskLine>
            </h1>
            <Reveal onLoad delay={0.5} className="mt-8 max-w-lg text-lg leading-relaxed text-ink/80">
              With over 10 years of experience in the fitness industry, I have dedicated my life to helping people
              unlock their full potential. My approach is science-based, results-driven, and designed for those who
              demand discipline over temporary motivation.
            </Reveal>
          </div>

          <ImageReveal onLoad delay={0.2} className="relative aspect-[4/5] overflow-hidden bg-ink lg:col-span-5">
            <Parallax className="absolute inset-0" amount={5}>
              <Image
                src="/coach.jpg"
                alt="Coach Amritangshu Mahapatra in the gym"
                fill
                preload
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[45%_30%]"
              />
            </Parallax>
          </ImageReveal>
        </div>
      </section>

      <section className={`${WRAP} grid gap-10 py-20 lg:grid-cols-12 lg:py-32`}>
        <Reveal className="lg:col-span-5">
          <p className="font-display text-[clamp(7rem,22vw,16rem)] font-semibold leading-[0.8] tracking-[-0.035em]">
            10<span className="text-sky">+</span>
          </p>
          <p className="label mt-4 text-ink-soft">Years in the fitness industry</p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-5xl">
            No shortcuts. No motivation dependency.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
            Just habits, structure and execution, every single day. This coaching is not about quick transformations.
            It is about building a mindset that does not quit. When your habits change, your body follows.
          </p>
        </Reveal>
      </section>

      <section className="bg-powder py-20 lg:py-32">
        <div className={WRAP}>
          <Reveal>
            <Eyebrow className="mb-5">Philosophy</Eyebrow>
            <h2 className="mb-14 max-w-2xl font-display text-4xl font-semibold leading-[0.95] tracking-[-0.025em] sm:text-6xl">
              Five things the results are <span className="accent">built on.</span>
            </h2>
          </Reveal>
          <ul>
            {PILLARS.map(([word, line]) => (
              <Reveal
                as="li"
                key={word}
                className="grid items-baseline gap-2 border-t border-ink/20 py-7 lg:grid-cols-[1.2fr_1fr] lg:gap-10"
              >
                <h3 className="font-display text-4xl font-semibold tracking-[-0.025em] sm:text-6xl">{word}</h3>
                <p className="max-w-md text-ink/75">{line}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${WRAP} py-20 lg:py-32`}>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow className="mb-5">By the numbers</Eyebrow>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="label order-2 mt-2 text-ink-soft">{s.label}</dt>
                  <dd className="order-1 font-display text-5xl font-semibold tracking-[-0.025em]">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <Eyebrow className="mb-5">Follow the work</Eyebrow>
            <p className="max-w-md text-lg text-ink-soft">
              Training breakdowns, mindset and client progress, shared on Instagram and YouTube.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={LINKS.instagram} variant="ink">Instagram</Button>
              <Button href={LINKS.youtube} variant="ghost">YouTube</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`${WRAP} pb-20 lg:pb-32`}>
        <div className="grid overflow-hidden md:grid-cols-2">
          <Reveal className="bg-soft p-8 sm:p-12">
            <h2 className="mb-8 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              For you <span className="text-sky">if</span>
            </h2>
            <ul className="space-y-5">
              {FOR_YOU.map((t) => (
                <li key={t} className="flex gap-4">
                  <span aria-hidden="true" className="mt-1 h-5 w-[3px] shrink-0 bg-sky" />
                  <span className="text-lg">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal data-dark delay={0.1} className="bg-ink p-8 text-cream sm:p-12">
            <h2 className="mb-8 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Not for you <span className="text-citrus">if</span>
            </h2>
            <ul className="space-y-5">
              {NOT_FOR_YOU.map((t) => (
                <li key={t} className="flex gap-4">
                  <span aria-hidden="true" className="mt-1 h-5 w-[3px] shrink-0 bg-citrus" />
                  <span className="text-lg text-cream/80">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready to build the discipline?"
        text="Explore the coaching plans, or book a free consultation call to talk it through."
        primary={{ href: '/plans', label: 'Explore plans' }}
        secondary={{ href: LINKS.book, label: 'Book a consultation' }}
      />
    </>
  );
}
