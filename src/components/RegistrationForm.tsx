import { useState } from 'react';

interface Course {
  _id: string;
  titleEn: string;
  titleFr: string;
}

interface FormStrings {
  student_name: string;
  date_of_birth: string;
  grade_applying: string;
  grade_placeholder: string;
  parent_name: string;
  email: string;
  phone: string;
  nationality: string;
  boarding: string;
  boarding_yes: string;
  boarding_no: string;
  program: string;
  program_placeholder: string;
  message: string;
  submit: string;
  submitting: string;
  success: string;
  error: string;
  validation: { required: string; email: string };
}

interface Props {
  lang: string;
  courses: Course[];
  t: { form: FormStrings };
}

function Field({
  label,
  id,
  required,
  error,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}{required && <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && <p id={`${id}_err`} className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}

const inputClass = (hasError: boolean) =>
  `w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e6e]/40 transition-colors ${
    hasError ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
  }`;

export default function RegistrationForm({ lang, courses, t }: Props) {
  const [fields, setFields] = useState({
    student_name:     '',
    date_of_birth:    '',
    grade_applying:   '',
    parent_name:      '',
    email:            '',
    phone:            '',
    nationality:      '',
    boarding_needed:  'no',
    program_interest: '',
    message:          '',
  });

  const [errors, setErrors]       = useState<Record<string, string>>({});
  const [status, setStatus]       = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  function validate() {
    const e: Record<string, string> = {};
    if (!fields.student_name.trim())   e.student_name   = t.form.validation.required;
    if (!fields.date_of_birth.trim())  e.date_of_birth  = t.form.validation.required;
    if (!fields.grade_applying.trim()) e.grade_applying = t.form.validation.required;
    if (!fields.parent_name.trim())    e.parent_name    = t.form.validation.required;
    if (!fields.phone.trim())          e.phone          = t.form.validation.required;
    if (!fields.email.trim()) {
      e.email = t.form.validation.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = t.form.validation.email;
    }
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error
      const firstErr = document.getElementById(Object.keys(errs)[0]);
      firstErr?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setErrors({});
    setStatus('loading');
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-green-800 font-heading font-bold text-xl mb-2">Application Received!</h3>
        <p className="text-green-700">{t.form.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* ── Section: Student Details ── */}
      <fieldset className="border border-gray-200 rounded-xl p-5">
        <legend className="text-sm font-semibold text-navy px-2 uppercase tracking-wider">
          {lang === 'fr' ? 'Informations de l\'élève' : 'Student Details'}
        </legend>
        <div className="grid sm:grid-cols-2 gap-4 mt-3">
          <Field label={t.form.student_name} id="student_name" required error={errors.student_name}>
            <input
              id="student_name"
              type="text"
              autoComplete="name"
              value={fields.student_name}
              onChange={set('student_name')}
              className={inputClass(!!errors.student_name)}
              aria-required="true"
              aria-describedby={errors.student_name ? 'student_name_err' : undefined}
            />
          </Field>

          <Field label={t.form.date_of_birth} id="date_of_birth" required error={errors.date_of_birth}>
            <input
              id="date_of_birth"
              type="date"
              value={fields.date_of_birth}
              onChange={set('date_of_birth')}
              className={inputClass(!!errors.date_of_birth)}
              aria-required="true"
            />
          </Field>

          <Field label={t.form.grade_applying} id="grade_applying" required error={errors.grade_applying}>
            <input
              id="grade_applying"
              type="text"
              placeholder={t.form.grade_placeholder}
              value={fields.grade_applying}
              onChange={set('grade_applying')}
              className={inputClass(!!errors.grade_applying)}
              aria-required="true"
            />
          </Field>

          <Field label={t.form.nationality} id="nationality">
            <input
              id="nationality"
              type="text"
              autoComplete="country-name"
              value={fields.nationality}
              onChange={set('nationality')}
              className={inputClass(false)}
            />
          </Field>
        </div>
      </fieldset>

      {/* ── Section: Parent / Guardian ── */}
      <fieldset className="border border-gray-200 rounded-xl p-5">
        <legend className="text-sm font-semibold text-navy px-2 uppercase tracking-wider">
          {lang === 'fr' ? 'Parent / Tuteur' : 'Parent / Guardian'}
        </legend>
        <div className="grid sm:grid-cols-2 gap-4 mt-3">
          <Field label={t.form.parent_name} id="parent_name" required error={errors.parent_name}>
            <input
              id="parent_name"
              type="text"
              autoComplete="name"
              value={fields.parent_name}
              onChange={set('parent_name')}
              className={inputClass(!!errors.parent_name)}
              aria-required="true"
            />
          </Field>

          <Field label={t.form.email} id="email" required error={errors.email}>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={fields.email}
              onChange={set('email')}
              className={inputClass(!!errors.email)}
              aria-required="true"
            />
          </Field>

          <Field label={t.form.phone} id="phone" required error={errors.phone}>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={fields.phone}
              onChange={set('phone')}
              className={inputClass(!!errors.phone)}
              aria-required="true"
            />
          </Field>
        </div>
      </fieldset>

      {/* ── Section: Preferences ── */}
      <fieldset className="border border-gray-200 rounded-xl p-5">
        <legend className="text-sm font-semibold text-navy px-2 uppercase tracking-wider">
          {lang === 'fr' ? 'Préférences' : 'Preferences'}
        </legend>
        <div className="space-y-4 mt-3">
          {/* Boarding */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">{t.form.boarding}</p>
            <div className="flex gap-4">
              {(['yes', 'no'] as const).map((val) => (
                <label key={val} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="boarding_needed"
                    value={val}
                    checked={fields.boarding_needed === val}
                    onChange={set('boarding_needed')}
                    className="accent-[#1a2e6e]"
                  />
                  <span className="text-sm text-gray-700">
                    {val === 'yes' ? t.form.boarding_yes : t.form.boarding_no}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Program */}
          <Field label={t.form.program} id="program_interest">
            <select
              id="program_interest"
              value={fields.program_interest}
              onChange={set('program_interest')}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e6e]/40 bg-white hover:border-gray-400 transition-colors"
            >
              <option value="">{t.form.program_placeholder}</option>
              {courses.map((c) => (
                <option key={c._id} value={lang === 'fr' ? (c.titleFr || c.titleEn) : c.titleEn}>
                  {lang === 'fr' ? (c.titleFr || c.titleEn) : c.titleEn}
                </option>
              ))}
            </select>
          </Field>

          {/* Message */}
          <Field label={t.form.message} id="message">
            <textarea
              id="message"
              rows={4}
              value={fields.message}
              onChange={set('message')}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e6e]/40 resize-y hover:border-gray-400 transition-colors"
            />
          </Field>
        </div>
      </fieldset>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 text-red-700 text-sm" role="alert">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
            </svg>
            {t.form.submitting}
          </span>
        ) : t.form.submit}
      </button>
    </form>
  );
}
