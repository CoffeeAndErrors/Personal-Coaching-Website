import CtaBand from '@/components/CtaBand';
import GalleryGrid from '@/components/GalleryGrid';
import { MaskLine, Reveal } from '@/components/motion';
import { GALLERY, LINKS } from '@/lib/content';
import Eyebrow from '@/components/Eyebrow';

export const metadata = {
  title: 'Transformations',
  description: 'Client transformation photographs from LIFTINGMONK online fitness coaching.',
  alternates: { canonical: '/transformations' },
};

export default function Transformations() {
  return (
    <>
      <section className="bg-[linear-gradient(180deg,#bde3f5_0%,#f7f3e9_100%)]">
        <div className="mx-auto w-full max-w-[90rem] px-6 pb-16 pt-32 sm:px-10 lg:px-16 lg:pb-24 lg:pt-40">
          <Eyebrow>Transformation gallery</Eyebrow>
          <h1 className="font-display text-[clamp(2.9rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.03em]">
            <MaskLine onLoad delay={0.1}>The work,</MaskLine>
            <MaskLine onLoad delay={0.2}>in <span className="accent">photographs.</span></MaskLine>
          </h1>
          <Reveal onLoad delay={0.5} className="mt-8 max-w-lg text-lg leading-relaxed text-ink/80">
            Client transformation photographs. Select any image to view it full size.
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[90rem] px-6 pb-24 pt-6 sm:px-10 lg:px-16 lg:pb-36">
        <GalleryGrid images={GALLERY} />
      </section>

      <CtaBand
        title="Want to talk about your own transformation?"
        text="Book a free consultation call with the coach, or send a message."
        primary={{ href: LINKS.book, label: 'Book a consultation' }}
        secondary={{ href: '/plans#contact', label: 'Send a message' }}
      />
    </>
  );
}
