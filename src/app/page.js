import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import ContactSection from '@/components/ContactSection';
import { TransformationFrame } from '@/components/GalleryGrid';
import { ImageReveal, MaskLine, Parallax, Reveal } from '@/components/motion';
import { BENEFITS, GALLERY, STATS } from '@/lib/content';
import Eyebrow from '@/components/Eyebrow';

export const metadata = {
  title: { absolute: 'LIFTINGMONK | Premium Online Fitness Coaching' },
  alternates: { canonical: '/' },
};

const WRAP = 'mx-auto w-full max-w-[90rem] px-6 sm:px-10 lg:px-16';

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#65b9e8_0%,#a6d8f1_45%,#bde3f5_75%,#f7f3e9_100%)]">
      <div className={`${WRAP} grid items-center gap-12 pb-24 pt-32 lg:min-h-[56rem] lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-36`}>
        <div className="lg:col-span-7">
          <Eyebrow>Online fitness coaching</Eyebrow>

          <h1 className="font-display text-[clamp(2.9rem,8.2vw,6rem)] font-semibold uppercase leading-[0.92] tracking-[-0.015em]">
            <MaskLine onLoad delay={0.1}>Discipline</MaskLine>
            <MaskLine onLoad delay={0.2}><span className="accent text-ink/55">over</span></MaskLine>
            <MaskLine onLoad delay={0.3}>motivation.</MaskLine>
          </h1>

          <Reveal onLoad delay={0.55} className="mt-8 max-w-md text-lg leading-relaxed text-ink/80">
            Science-based, structured and sustainable coaching. When your habits change, your body follows.
          </Reveal>

          <Reveal onLoad delay={0.7} className="mt-10 flex flex-wrap gap-3">
            <Button href="/plans" variant="ink">Explore Coaching</Button>
            <Button href="/transformations" variant="ghost" arrow={false}>View Transformations</Button>
          </Reveal>

          <Reveal onLoad delay={0.85} className="mt-14 flex gap-10">
            {STATS.slice(0, 2).map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-semibold tracking-tight">{s.value}</p>
                <p className="label mt-1 text-ink-soft">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="relative lg:col-span-5">
          <ImageReveal onLoad delay={0.2} className="relative aspect-[4/5] overflow-hidden bg-ink lg:aspect-auto lg:h-[44rem]">
            <Parallax className="absolute inset-0" amount={5}>
              <Image
                src="/coach.jpg"
                alt="Coach Amritangshu Mahapatra in the gym, arms crossed and smiling"
                fill
                preload
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[45%_30%]"
              />
            </Parallax>
          </ImageReveal>

          <Reveal onLoad delay={1} className="absolute -bottom-5 left-4 bg-soft px-5 py-4 shadow-xl sm:left-8 lg:-left-16">
            <p className="label text-ink-soft">The standard</p>
            <p className="mt-1 font-display text-xl font-semibold leading-tight tracking-tight">
              Consistency
              <br />
              over everything.
            </p>
          </Reveal>
        </div>
      </div>

      <div aria-hidden="true" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink lg:flex">
        <span className="label">Scroll</span>
        <span className="cue relative block h-10 w-px overflow-hidden bg-ink/20" />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className={`${WRAP} py-24 lg:py-36`}>
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow index="01" className="mb-6">The coach</Eyebrow>
            <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-5xl">
              No shortcuts. No motivation dependency. Just habits, structure and execution, every single day.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            <p>
              With over 10 years of experience in the fitness industry, Amritangshu Mahapatra helps people unlock their
              full potential. The approach is science-based, results-driven, and designed for those who demand discipline
              over temporary motivation.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="ghost">Meet the coach</Button>
            </div>
          </Reveal>
        </div>

        <ImageReveal className="relative aspect-square overflow-hidden lg:col-span-4 lg:col-start-9">
          <Parallax className="absolute inset-0" amount={4}>
            <Image
              src="/transformation.jpg"
              alt="Transformation journey: before on a beach, after in the gym"
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover"
            />
          </Parallax>
        </ImageReveal>
      </div>

      <dl className="mt-20 grid grid-cols-2 border-t border-ink/15 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="flex flex-col border-b border-ink/15 py-8 pr-4 lg:border-b-0">
            <dt className="label order-2 mt-2 text-ink-soft">{s.label}</dt>
            <dd className="order-1 font-display text-5xl font-semibold tracking-[-0.025em] sm:text-6xl">{s.value}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}

function Preview() {
  const shots = GALLERY.slice(0, 3);
  return (
    <section className="bg-powder py-24 lg:py-36">
      <div className={WRAP}>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Eyebrow index="02" className="mb-5">Transformations</Eyebrow>
            <h2 className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.025em] sm:text-7xl">
              The work,
              <br />
              in <span className="accent">photographs.</span>
            </h2>
          </Reveal>
          <Button href="/transformations" variant="ink">See all transformations</Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 lg:gap-8">
          {shots.map((img, i) => (
            <ImageReveal key={img.id} delay={i * 0.1}>
              <Link href="/transformations" aria-label={`${img.alt}. See all transformations`} className="group block">
                <TransformationFrame item={img} sizes="(min-width: 640px) 30vw, 100vw" />
              </Link>
            </ImageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className={`${WRAP} grid gap-14 py-24 lg:grid-cols-12 lg:py-36`}>
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <Eyebrow index="03" className="mb-5">Inside the coaching</Eyebrow>
            <h2 className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.025em] sm:text-6xl">
              Built to keep you <span className="accent">consistent.</span>
            </h2>
            <div className="mt-8">
              <Button href="/plans" variant="ink">View coaching plans</Button>
            </div>
          </Reveal>
        </div>
      </div>

      <ol className="lg:col-span-7 lg:col-start-6">
        {BENEFITS.map((b, i) => (
          <Reveal key={b.title} as="li" className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-ink/15 py-8">
            <span className="font-display text-sm font-medium text-ink-soft">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{b.title}</h3>
              <p className="mt-2 max-w-md text-ink-soft">{b.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Preview />
      <Benefits />
      <ContactSection />
    </>
  );
}
