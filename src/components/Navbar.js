'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { LINKS, NAV } from '@/lib/content';
import { EASE } from './motion';

// Frosted pill: warm translucent fill, a bright top edge and one soft drop shadow.
const GLASS =
  'rounded-full border border-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_1px_2px_rgba(16,37,31,0.06),0_18px_44px_-18px_rgba(16,37,31,0.38)] backdrop-blur-2xl backdrop-saturate-150';

function Arrow({ className = '' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function Brand({ onClick }) {
  return (
    <Link href="/" onClick={onClick} aria-label="LIFTINGMONK home" className="group flex items-center gap-3 rounded-full">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-[11px] font-bold tracking-[0.02em] text-citrus shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-500 group-hover:rotate-[-10deg]">
        LM
      </span>
      <span className="hidden font-display text-[14px] font-semibold tracking-[0.14em] sm:inline">
        LIFTING<span className="text-ink/40">MONK</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);
  const spring = reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 };

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-5">
      <nav
        aria-label="Primary"
        className={`relative grid w-full grid-cols-[1fr_auto] items-center p-1.5 transition-[max-width,background-color] duration-500 md:grid-cols-[1fr_auto_1fr] ${GLASS} ${
          scrolled ? 'max-w-[56rem] bg-soft/85' : 'max-w-[66rem] bg-soft/65'
        }`}
      >
        <Brand onClick={close} />

        <ul className="hidden items-center gap-1 rounded-full bg-ink/[0.035] p-1 md:flex">
          {NAV.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href} className="relative">
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={spring}
                    className="absolute inset-0 rounded-full bg-ink shadow-[0_6px_16px_-8px_rgba(16,37,31,0.6)]"
                  />
                )}
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative block rounded-full px-4 py-2 text-[14px] font-medium tracking-[-0.01em] transition-colors duration-300 ${
                    active ? 'text-cream' : 'text-ink/65 hover:bg-white/70 hover:text-ink'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-end gap-2">
          <a
            href={LINKS.enroll}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden h-11 items-center gap-3 rounded-full bg-ink pl-5 pr-1.5 text-[14px] font-semibold tracking-[-0.01em] text-cream shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors duration-300 hover:bg-[#1b3a31] md:inline-flex"
          >
            Get Started
            <span className="grid h-8 w-8 place-items-center rounded-full bg-citrus text-ink">
              <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-full bg-ink text-cream md:hidden"
          >
            <span aria-hidden="true" className="relative block h-3 w-4">
              <span className={`absolute left-0 h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ${open ? 'top-[5px] rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 h-[1.5px] rounded-full bg-current transition-all duration-300 ${open ? 'top-[5px] w-4 -rotate-45' : 'top-[10px] w-2.5'}`} />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={reduce ? false : { opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="absolute inset-x-0 top-full mt-2 origin-top rounded-[28px] border border-white/80 bg-soft p-2 shadow-[0_24px_60px_-20px_rgba(16,37,31,0.45)] md:hidden"
            >
              <ul>
                {NAV.map(({ href, label }, i) => {
                  const active = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={close}
                        aria-current={active ? 'page' : undefined}
                        className={`flex items-baseline gap-4 rounded-2xl px-4 py-3.5 transition-colors ${active ? 'bg-white shadow-sm' : 'hover:bg-white/60'}`}
                      >
                        <span className="w-5 font-display text-[11px] font-medium text-ink/40">{String(i + 1).padStart(2, '0')}</span>
                        <span className="font-display text-2xl font-medium tracking-[-0.02em]">{label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <a
                href={LINKS.enroll}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="mt-2 flex items-center justify-between rounded-full bg-ink py-2 pl-6 pr-2 text-sm font-semibold text-cream"
              >
                Get Started
                <span className="grid h-9 w-9 place-items-center rounded-full bg-citrus text-ink">
                  <Arrow className="h-4 w-4" />
                </span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
