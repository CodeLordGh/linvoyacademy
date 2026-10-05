import { useState } from 'react';

interface Props {
  t: {
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
      validation: { required: string; email: string };
    };
  };
}

export default function ContactForm({ t }: Props) {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  function validate() {
    const e: Record<string, string> = {};
    if (!fields.name.trim()) e.name = t.form.validation.required;
    if (!fields.email.trim()) {
      e.email = t.form.validation.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = t.form.validation.email;
    }
    if (!fields.message.trim()) e.message = t.form.validation.required;
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
      } else {
        setServerError(data.error || t.form.error);
        setStatus('error');
      }
    } catch {
      setServerError(t.form.error);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-green-800 font-semibold text-lg">{t.form.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t.form.name} <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => setFields({ ...fields, name: e.target.value })}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/50 ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
            aria-required="true"
          />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="c_email" className="block text-sm font-medium text-gray-700 mb-1">
            {t.form.email} <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="c_email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/50 ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
            aria-required="true"
          />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          {t.form.subject}
        </label>
        <input
          id="subject"
          type="text"
          value={fields.subject}
          onChange={(e) => setFields({ ...fields, subject: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/50"
        />
      </div>

      <div>
        <label htmlFor="c_message" className="block text-sm font-medium text-gray-700 mb-1">
          {t.form.message} <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="c_message"
          rows={5}
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/50 resize-y ${errors.message ? 'border-red-400' : 'border-gray-300'}`}
          aria-required="true"
        />
        {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm" role="alert">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary py-3 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? t.form.submitting : t.form.submit}
      </button>
    </form>
  );
}
