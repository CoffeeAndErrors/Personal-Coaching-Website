import Link from 'next/link';

const VARIANTS = {
  citrus: 'bg-citrus text-ink hover:bg-ink hover:text-citrus',
  ink: 'bg-ink text-cream hover:bg-citrus hover:text-ink',
  ghost: 'border border-current/30 text-current hover:bg-ink hover:text-cream hover:border-ink',
};

function Arrow() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

// Internal paths render as <Link>; absolute URLs open in a new tab.
export default function Button({ href, variant = 'ink', arrow = true, className = '', children }) {
  const cls = `group inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-semibold transition-colors duration-300 ${VARIANTS[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );
  if (/^https?:/.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
