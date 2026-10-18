// Small frosted pill that introduces a headline. Shows a citrus dot, or a section number.
export default function Eyebrow({ children, index, className = 'mb-8' }) {
  return (
    <p
      className={`label inline-flex items-center gap-2.5 rounded-full border border-white/80 bg-white/60 py-1.5 pl-1.5 pr-4 text-[0.7rem] leading-none tracking-[0.14em] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_6px_18px_-10px_rgba(11,32,26,0.35)] backdrop-blur-md ${className}`}
    >
      {index ? (
        <span className="grid h-6 min-w-6 place-items-center rounded-full bg-ink px-1.5 font-display text-[0.62rem] tracking-normal text-citrus">
          {index}
        </span>
      ) : (
        <span aria-hidden="true" className="grid h-6 w-6 place-items-center rounded-full bg-ink">
          <span className="h-2 w-2 rounded-full bg-citrus shadow-[0_0_0_3px_rgba(217,244,84,0.25)]" />
        </span>
      )}
      <span className="pt-px">{children}</span>
    </p>
  );
}
