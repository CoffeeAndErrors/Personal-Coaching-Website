// Shared by the form (instant feedback) and the API route (the real check).

export const PLAN_OPTIONS = ['3 Months', '6 Months', '12 Months'];

export function validateContact({ name, email, phone, message, plan }) {
  const errors = {};
  const n = String(name ?? '').trim();
  const e = String(email ?? '').trim();
  const p = String(phone ?? '').trim();
  const m = String(message ?? '').trim();

  if (n.length < 2 || n.length > 100) errors.name = 'Please enter your name.';
  if (e.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)) errors.email = 'Please enter a valid email address.';
  if (!/^[+\d][\d\s().-]{5,24}$/.test(p) || p.replace(/\D/g, '').length < 7) {
    errors.phone = 'Please enter a valid mobile number.';
  }
  if (m.length < 5 || m.length > 2000) errors.message = 'Tell us a little about your goals (5 to 2000 characters).';
  if (plan && !PLAN_OPTIONS.includes(plan)) errors.plan = 'Please choose a listed plan.';

  return { errors, values: { name: n, email: e, phone: p, message: m, plan: plan || '' } };
}
