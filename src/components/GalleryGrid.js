'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { EASE, ImageReveal } from './motion';

const PILL = 'label pointer-events-none absolute bottom-3  bg-soft/90 px-3 py-1.5 text-[0.65rem] text-ink shadow-sm backdrop-blur-sm';

/**
 * One transformation in a fixed square frame, so every card in a grid is identical in size:
 * a ready-made collage fills it, a [before, after] pair splits it in two. Before / After labels
 * sit on each half either way.
 */
export function TransformationFrame({ item, sizes, className = '', zoom = true }) {
  const pair = item.photos.length > 1;
  return (
    <div className={`relative aspect-square w-full overflow-hidden bg-ink/5 ${className}`}>
      {pair ? (
        <div className="grid h-full grid-cols-2 gap-[3px] bg-soft">
          {item.photos.map((p) => (
            <div key={p.src} className="relative overflow-hidden">
              <Image src={p.src} alt="" fill sizes={sizes} className={`object-cover ${zoom ? 'transition-transform duration-700 ease-out group-hover:scale-[1.03]' : ''}`} style={{ objectPosition: p.position || 'center' }} />
            </div>
          ))}
        </div>
      ) : (
        // Ready-made collages carry a thin white border of their own; a slight overscan trims it so
        // every card meets its  edge the same way.
        <div className="absolute -inset-[1.5%]">
          <Image src={item.photos[0].src} alt="" fill sizes={sizes} className={`object-cover ${zoom ? 'transition-transform duration-700 ease-out group-hover:scale-[1.03]' : ''}`} style={{ objectPosition: item.photos[0].position || 'center' }} />
        </div>
      )}
      <span className={`${PILL} left-3`}>Before</span>
      <span className={`${PILL} left-[calc(50%+0.75rem)]`}>After</span>
    </div>
  );
}

function Lightbox({ images, index, onClose, onStep }) {
  const reduce = useReducedMotion();
  const dialog = useRef(null);
  const closeBtn = useRef(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtn.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onStep(-1);
      else if (e.key === 'ArrowRight') onStep(1);
      else if (e.key === 'Tab') {
        // Only visible buttons: desktop and mobile controls are swapped with display:none.
        const items = [...dialog.current.querySelectorAll('button')].filter((b) => b.offsetParent);
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onStep]);

  const img = images[index];
  const btn =
    'grid h-12 w-12 place-items-center  bg-cream/10 text-cream transition-colors hover:bg-citrus hover:text-ink';

  return (
    <motion.div
      ref={dialog}
      data-dark
      role="dialog"
      aria-modal="true"
      aria-label="Transformation photo viewer"
      className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.3 }}
      onClick={onClose}
    >
      <div className="flex items-center justify-between p-4 text-cream sm:p-6" onClick={(e) => e.stopPropagation()}>
        <p className="label" aria-live="polite">
          {index + 1} / {images.length}
        </p>
        <button ref={closeBtn} type="button" onClick={onClose} aria-label="Close viewer" className={btn}>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-24">
        <motion.div
          key={index}
          className="flex max-h-full max-w-full touch-pan-y items-center justify-center"
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: EASE }}
          drag={reduce ? false : 'x'}
          dragSnapToOrigin
          dragElastic={0.2}
          onDragEnd={(_, { offset }) => Math.abs(offset.x) > 80 && onStep(offset.x < 0 ? 1 : -1)}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex max-h-full max-w-full items-center justify-center gap-2 sm:gap-3">
            {img.photos.map((p, i) => (
              <Image
                key={p.src}
                src={p.src}
                alt={img.photos.length > 1 ? `${img.alt}, ${i === 0 ? 'before' : 'after'}` : img.alt}
                width={p.width}
                height={p.height}
                sizes="(min-width: 1024px) 70vh, 100vw"
                draggable={false}
                className="min-w-0"
                style={{ width: 'auto', height: 'auto', maxHeight: 'calc(100svh - 11rem)', maxWidth: img.photos.length > 1 ? 'calc(50% - 0.375rem)' : '100%' }}
              />
            ))}
          </div>
        </motion.div>

        <button type="button" onClick={(e) => { e.stopPropagation(); onStep(-1); }} aria-label="Previous photo" className={`${btn} absolute left-3 top-1/2 hidden -translate-y-1/2 sm:grid`}>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m15 6-6 6 6 6" /></svg>
        </button>
        <button type="button" onClick={(e) => { e.stopPropagation(); onStep(1); }} aria-label="Next photo" className={`${btn} absolute right-3 top-1/2 hidden -translate-y-1/2 sm:grid`}>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" /></svg>
        </button>
      </div>

      <div className="flex justify-center gap-4 p-4 sm:hidden" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={() => onStep(-1)} aria-label="Previous photo" className={btn}>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m15 6-6 6 6 6" /></svg>
        </button>
        <button type="button" onClick={() => onStep(1)} aria-label="Next photo" className={btn}>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" /></svg>
        </button>
      </div>
    </motion.div>
  );
}

export default function GalleryGrid({ images }) {
  const [active, setActive] = useState(null);
  const opener = useRef(null);

  const close = useCallback(() => {
    setActive(null);
    opener.current?.focus(); // return focus to the thumbnail that opened the viewer
  }, []);
  const step = useCallback(
    (d) => setActive((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length]
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {images.map((img, i) => (
          <ImageReveal key={img.id} delay={(i % 3) * 0.08}>
            <button
              type="button"
              onClick={(e) => {
                opener.current = e.currentTarget;
                setActive(i);
              }}
              aria-label={`Open full size: ${img.alt}`}
              className="group relative block w-full cursor-zoom-in"
            >
              <TransformationFrame item={img} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" />
              <span className="label absolute right-4 top-4 -translate-y-1 bg-soft px-4 py-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                View
              </span>
            </button>
          </ImageReveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && <Lightbox images={images} index={active} onClose={close} onStep={step} />}
      </AnimatePresence>
    </>
  );
}
