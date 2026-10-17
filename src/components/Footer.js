import Link from 'next/link';
import { LINKS, NAV } from '@/lib/content';

export default function Footer() {
  return (
    <footer data-dark className="relative overflow-hidden bg-ink px-6 pb-8 pt-16 text-cream sm:px-10 lg:px-16">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <p className="max-w-sm font-display text-2xl font-medium leading-tight tracking-tight">
          Discipline over motivation.
          <span className="block text-cream/60">Consistency over everything.</span>
        </p>

        <nav aria-label="Footer">
          <p className="label mb-4 text-citrus">Explore</p>
          <ul className="space-y-2.5">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-cream/80 transition-colors hover:text-citrus">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="label mb-4 text-citrus">Connect</p>
          <ul className="space-y-2.5">
            {[
              ['Instagram', LINKS.instagram],
              ['YouTube', LINKS.youtube],
              ['Book a consultation', LINKS.book],
              ['Enroll', LINKS.enroll],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 transition-colors hover:text-citrus"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="mt-14 select-none whitespace-nowrap text-center font-display text-[min(11vw,15rem)] font-bold leading-[0.8] tracking-tighter text-cream/[0.06]"
      >
        LIFTINGMONK
      </p>
      <p className="mt-6 text-xs text-cream/50">© {new Date().getFullYear()} LIFTINGMONK. All rights reserved.</p>
    </footer>
  );
}
