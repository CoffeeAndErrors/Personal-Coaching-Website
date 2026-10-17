import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { saveContact } from '@/lib/db';
import { validateContact } from '@/lib/validate';

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function row(label, value, accent) {
  return `
    <div style="background:#111;padding:20px;border:1px solid #222;margin-bottom:16px">
      <p style="color:#888;text-transform:uppercase;font-size:10px;font-weight:bold;margin:0 0 6px">${label}</p>
      <p style="font-size:17px;margin:0;color:${accent ? '#d9f454' : '#fff'};white-space:pre-wrap">${esc(value)}</p>
    </div>`;
}

async function sendEmail({ name, email, phone, message, plan }) {
  const port = Number(process.env.SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await transporter.sendMail({
    from: `"LIFTINGMONK Intake" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFICATION_EMAIL || 'liftingmonkfitness@gmail.com',
    replyTo: email,
    subject: `NEW INTAKE: ${name.replace(/[\r\n]+/g, ' ')}${plan ? ` (${plan})` : ''}`,
    html: `
      <div style="background:#000;color:#fff;padding:32px;font-family:sans-serif;border-left:4px solid #d9f454">
        <h1 style="text-transform:uppercase;letter-spacing:2px;margin:0 0 24px">New Transformation Lead</h1>
        ${row('Client Name', name, true)}
        ${row('Mail ID', email)}
        ${row('Phone Number', phone)}
        ${plan ? row('Interested Plan', plan, true) : ''}
        ${row('Transformation Details', message)}
      </div>`,
  });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field, humans never see it.
  if (body?.website) return NextResponse.json({ success: true });

  const { errors, values } = validateContact(body ?? {});
  if (Object.keys(errors).length) {
    return NextResponse.json({ error: 'Please check the highlighted fields.', fields: errors }, { status: 400 });
  }

  // The lead counts as received if it reached the database OR the coach's inbox.
  const [saved, emailed] = await Promise.allSettled([
    saveContact(values),
    process.env.SMTP_USER && process.env.SMTP_PASS
      ? sendEmail(values)
      : Promise.reject(new Error('SMTP credentials missing')),
  ]);
  if (saved.status === 'rejected') console.error('Contact DB error:', saved.reason?.message);
  if (emailed.status === 'rejected') console.error('Contact email error:', emailed.reason?.message);

  if (saved.status === 'rejected' && emailed.status === 'rejected') {
    return NextResponse.json({ error: 'We could not send your message. Please try again.' }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}
