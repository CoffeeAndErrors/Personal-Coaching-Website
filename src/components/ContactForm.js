'use client';

import { useRef, useState } from 'react';
import { PLAN_OPTIONS, validateContact } from '@/lib/validate';
import { LINKS } from '@/lib/content';

const FIELD =
  'w-full border border-ink/20 bg-soft px-4 py-3.5 text-base outline-none transition-colors placeholder:text-ink/40 focus:border-ink aria-[invalid=true]:border-red-700';

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="label mb-2 block text-ink-soft">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-800">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm({ defaultPlan = '' }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', plan: defaultPlan, website: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverError, setServerError] = useState('');
  const busy = useRef(false); // blocks double-submits before state re-renders

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const props = (key) => ({
    id: `cf-${key}`,
    value: form[key],
    onChange: set(key),
    className: FIELD,
    'aria-invalid': errors[key] ? 'true' : undefined,
    'aria-describedby': errors[key] ? `cf-${key}-error` : undefined,
  });

  async function submit(e) {
    e.preventDefault();
    if (busy.current) return;

    const { errors: found } = validateContact(form);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`cf-${Object.keys(found)[0]}`)?.focus();
      return;
    }

    busy.current = true;
    setStatus('loading');
    setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrors(data.fields ?? {});
        throw new Error(data.error || 'Something went wrong.');
      }
      setStatus('success');
    } catch (err) {
      setServerError(err.message || 'Something went wrong.');
      setStatus('error');
    } finally {
      busy.current = false;
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="bg-soft p-8 text-center sm:p-10">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center bg-citrus">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-semibold tracking-tight">Message received.</h3>
        <p className="mt-2 text-ink-soft">Thank you. We will get back to you within 24 hours.</p>
        <button
          type="button"
          onClick={() => {
            setForm({ name: '', email: '', phone: '', message: '', plan: '', website: '' });
            setStatus('idle');
          }}
          className="mt-6 text-sm font-semibold underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-5 bg-soft p-6 sm:p-8">
      <Field id="cf-name" label="Your name" error={errors.name}>
        <input {...props('name')} autoComplete="name" placeholder="Name or username" maxLength={100} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="cf-email" label="Email" error={errors.email}>
          <input {...props('email')} type="email" autoComplete="email" placeholder="you@example.com" />
        </Field>
        <Field id="cf-phone" label="Mobile number" error={errors.phone}>
          <input {...props('phone')} type="tel" autoComplete="tel" placeholder="+91 98765 43210" />
        </Field>
      </div>

      <Field id="cf-plan" label="Plan you are interested in" error={errors.plan}>
        <select {...props('plan')}>
          <option value="">Not sure yet</option>
          {PLAN_OPTIONS.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </Field>

      <Field id="cf-message" label="Your goals" error={errors.message}>
        <textarea {...props('message')} rows={4} placeholder="Tell us about your fitness goals…" maxLength={2000} />
      </Field>

      {/* Honeypot: hidden from people and assistive tech */}
      <input
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.website}
        onChange={set('website')}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        name="website"
      />

      {status === 'error' && (
        <p role="alert" className="bg-red-50 px-4 py-3 text-sm text-red-900">
          {serverError} You can also{' '}
          <a href={LINKS.book} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            book a call
          </a>{' '}
          or{' '}
          <a href={LINKS.enroll} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            use the enrollment form
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-ink px-7 py-4 text-sm font-semibold text-cream transition-colors hover:bg-citrus hover:text-ink disabled:cursor-wait disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
