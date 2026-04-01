'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', message: '' });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-10 bg-gray-900/50 border border-orange-500/30 rounded-none text-center backdrop-blur-xl">
        <div className="w-20 h-20 bg-orange-500 rounded-none flex items-center justify-center mx-auto mb-6">

          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-black italic uppercase mb-2 leading-none">Successful!</h3>
        <p className="text-gray-400">Your mission has been logged. We'll contact you within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="mt-8 text-orange-500 font-bold uppercase tracking-widest text-xs hover:underline decoration-2">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-6 bg-gray-950/50 p-10 border border-gray-800 rounded-none backdrop-blur-xl">

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Your Name</label>
        <input
          required
          placeholder="Name or Username"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-black border border-gray-800 focus:border-orange-500 p-4 rounded-none outline-none transition-all placeholder:text-gray-700"

        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Mail ID</label>
          <input
            required
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-black border border-gray-800 focus:border-orange-500 p-4 rounded-none outline-none transition-all placeholder:text-gray-700"

          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Mobile Number</label>
          <input
            required
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-black border border-gray-800 focus:border-orange-500 p-4 rounded-none outline-none transition-all placeholder:text-gray-700"

          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Transformation Details</label>
        <textarea
          required
          placeholder="Tell us about your fitness goals..."
          rows="4"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-black border border-gray-800 focus:border-orange-500 p-4 rounded-none outline-none transition-all placeholder:text-gray-700"

        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-orange-500 py-6 rounded-none font-black uppercase text-xl transition-all hover:scale-[1.02] active:scale-95 disabled:grayscale"
      >

        {loading ? 'Transmitting...' : 'Initiate Transformation'}
      </button>
    </form>
  );
}