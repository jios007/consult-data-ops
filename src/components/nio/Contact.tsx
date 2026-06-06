import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, Mail, Linkedin, MapPin } from 'lucide-react';

interface FormState {
  name: string;
  company: string;
  email: string;
  message: string;
}
interface Errors {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', company: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.company.trim()) e.company = 'Please enter your organisation.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 10) e.message = 'Tell me a little more (min. 10 characters).';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const update = (key: keyof FormState) => (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [key]: ev.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch('https://formspree.io/f/mkobbjbw', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error('Formspree error');
    } catch (err) {
      console.error('Contact form submission failed:', err);
    }
    setStatus('done');
    setForm({ name: '', company: '', email: '', message: '' });
  };

  const inputBase =
    'w-full rounded-lg border bg-nio-surface px-4 py-3 text-sm text-nio-heading placeholder-nio-muted outline-none transition-colors focus:border-nio-accent focus:ring-2 focus:ring-nio-accent/20';

  return (
    <section id="contact" className="relative border-t border-nio-line bg-nio-surface px-6 py-28 md:px-12">
      <div className="mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-nio-accent">
            <span className="h-px w-6 bg-nio-accent" /> Get in touch
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-nio-heading sm:text-4xl">
            Tell me about your data problem
          </h2>
          <p className="mt-4 text-lg font-light text-nio-muted">
            A short message is enough to start. I'll reply within one business day and we can book a
            free 30-minute call to see whether I'm the right fit.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <a href="mailto:hello@nordicitops.se" className="inline-flex items-center gap-2 text-nio-text hover:text-nio-accent">
              <Mail className="h-4 w-4 text-nio-accent" /> hello@nordicitops.se
            </a>
            <br />
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-nio-text hover:text-nio-accent">
              <Linkedin className="h-4 w-4 text-nio-accent" /> Connect on LinkedIn
            </a>
            <br />
            <span className="inline-flex items-center gap-2 text-nio-muted">
              <MapPin className="h-4 w-4 text-nio-accent" /> Stockholm, Sweden — working across the Nordics
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-nio-line bg-nio-card p-8">
          {status === 'done' ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-nio-accent/15 text-nio-accent">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-nio-heading">Thanks — message sent</h3>
              <p className="mt-2 max-w-sm text-nio-muted">
                I'll be in touch within one business day.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm font-semibold text-nio-accent hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-nio-text">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Jane Doe"
                    className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-nio-line'}`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-nio-text">Organisation</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={update('company')}
                    placeholder="Company AB"
                    className={`${inputBase} ${errors.company ? 'border-red-400' : 'border-nio-line'}`}
                  />
                  {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company}</p>}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-nio-text">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="jane@company.com"
                  className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-nio-line'}`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-nio-text">What would you like to solve?</label>
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  rows={4}
                  placeholder="We run ~1,200 assets in Maximo and want to reduce unplanned downtime..."
                  className={`${inputBase} resize-none ${errors.message ? 'border-red-400' : 'border-nio-line'}`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-nio-accent px-6 py-3.5 text-base font-semibold text-nio-bg transition-all hover:-translate-y-0.5 disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-nio-muted">
                By submitting you agree to be contacted about your enquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
