import Button from './Button';
import { Reveal } from './motion';

// Closing call-to-action on a deep ink surface.
export default function CtaBand({ title, text, primary, secondary }) {
  return (
    <section className="px-3 pb-3 sm:px-6 sm:pb-6 lg:px-10 lg:pb-10">
      <Reveal
        data-dark
        className="bg-ink p-8 text-cream sm:p-14 lg:p-20"
      >
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[0.95] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
          {title}
        </h2>
        {text && <p className="mt-6 max-w-lg text-lg text-cream/70">{text}</p>}
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={primary.href} variant="citrus">{primary.label}</Button>
          {secondary && (
            <Button href={secondary.href} variant="ghost" arrow={false} className="!text-cream hover:!bg-cream hover:!text-ink">
              {secondary.label}
            </Button>
          )}
        </div>
      </Reveal>
    </section>
  );
}
