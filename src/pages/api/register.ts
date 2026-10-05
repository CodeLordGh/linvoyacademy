import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request body.' }, 400);
  }

  // ── Sanitise and validate ─────────────────────────────────────────────────
  const studentName    = str(body.student_name);
  const dateOfBirth    = str(body.date_of_birth);
  const gradeApplying  = str(body.grade_applying);
  const parentName     = str(body.parent_name);
  const email          = str(body.email).toLowerCase();
  const phone          = str(body.phone);
  const nationality    = str(body.nationality);
  const boardingNeeded = str(body.boarding_needed);
  const programInterest = str(body.program_interest);
  const message        = str(body.message);

  if (!studentName)   return json({ error: 'Student name is required.' }, 422);
  if (!dateOfBirth)   return json({ error: 'Date of birth is required.' }, 422);
  if (!gradeApplying) return json({ error: 'Grade / class is required.' }, 422);
  if (!parentName)    return json({ error: 'Parent or guardian name is required.' }, 422);
  if (!phone)         return json({ error: 'Phone number is required.' }, 422);

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'A valid email address is required.' }, 422);
  }

  // ── Insert into Supabase ──────────────────────────────────────────────────
  const { error } = await supabase.from('registrations').insert({
    student_name:     studentName,
    date_of_birth:    dateOfBirth,
    grade_applying:   gradeApplying,
    parent_name:      parentName,
    email,
    phone,
    nationality:      nationality || null,
    boarding_needed:  boardingNeeded === 'yes',
    program_interest: programInterest || null,
    message:          message || null,
  });

  if (error) {
    console.error('[register] Supabase error:', error.message);
    return json({ error: 'Could not save your application. Please try again.' }, 500);
  }

  return json({ success: true }, 200);
};

// ── Helpers ───────────────────────────────────────────────────────────────
function str(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

function json(body: object, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
