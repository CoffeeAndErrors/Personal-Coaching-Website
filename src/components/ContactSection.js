import ContactForm from './ContactForm';
import Button from './Button';
import { Reveal } from './motion';
import { LINKS } from '@/lib/content';
import Eyebrow from './Eyebrow';

// `plan` pre-selects the plan field; key remounts the form when it changes.
export default function ContactSection({ plan = '' }) {
  return (
    <section id="contact" className="px-3 pb-3 sm:px-6 sm:pb-6 lg:px-10 lg:pb-10">
      <div className="grid gap-10 bg-powder p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:p-16">
        <Reveal className="flex flex-col justify-between gap-10">
          <div>
            <Eyebrow className="mb-5">Start the conversation</Eyebrow>
            <h2 className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.025em] sm:text-6xl">
              Tell us where
              <br />
              you want to <span className="accent">be.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-ink-soft">
              Share your goals and we will reply within 24 hours. Prefer to talk it through? Book a free call.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={LINKS.book} variant="ink">
              Book a free consultation
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm key={plan} defaultPlan={plan} />
        </Reveal>
      </div>
    </section>
  );
}
