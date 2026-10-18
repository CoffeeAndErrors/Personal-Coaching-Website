'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, margin: '0px 0px -10% 0px' };

// The hidden `initial` state is server-rendered, so every reveal must animate to its target.
// Under reduced motion that happens instantly on mount instead of on scroll.
function useTrigger(target, onLoad, transition) {
  const reduce = useReducedMotion();
  if (reduce) return { animate: target, transition: { duration: 0 } };
  return onLoad
    ? { animate: target, transition }
    : { whileInView: target, viewport: VIEWPORT, transition };
}

// Fade + rise, on scroll (or on mount with `onLoad`).
export function Reveal({ children, delay = 0, y = 24, className, as = 'div', onLoad = false, ...rest }) {
  const Tag = motion[as];
  const trigger = useTrigger({ opacity: 1, y: 0 }, onLoad, { duration: 0.8, ease: EASE, delay });
  return (
    <Tag className={className} initial={{ opacity: 0, y }} {...trigger} {...rest}>
      {children}
    </Tag>
  );
}

// One line of a headline, unmasked from below.
export function MaskLine({ children, delay = 0, onLoad = false, className = '' }) {
  const trigger = useTrigger({ y: 0 }, onLoad, { duration: 0.9, ease: EASE, delay });
  return (
    <span className={`block overflow-hidden pb-[0.1em] -mb-[0.1em] ${className}`}>
      <motion.span className="block" initial={{ y: '105%' }} {...trigger}>
        {children}
      </motion.span>
    </span>
  );
}

// Clip-path reveal for photographs.
export function ImageReveal({ children, className, delay = 0, onLoad = false }) {
  const trigger = useTrigger(
    { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 },
    onLoad,
    { duration: 1.1, ease: EASE, delay }
  );
  return (
    <motion.div className={className} initial={{ clipPath: 'inset(10% 10% 10% 10%)', opacity: 0 }} {...trigger}>
      {children}
    </motion.div>
  );
}

// Gentle vertical drift of the child inside an overflow-hidden parent.
// Reduced motion is switched off in CSS, so server and client render identical markup.
export function Parallax({ children, amount = 6, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);
  return (
    <div ref={ref} className={className}>
      <motion.div
        className="relative h-full w-full motion-reduce:transform-none!"
        style={{ y, scale: 1 + amount / 50 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
