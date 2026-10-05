import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '[Supabase] Missing PUBLIC_SUPABASE_URL or PUBLIC_SUPABASE_ANON_KEY. ' +
    'Form submissions will not work until these env vars are set.'
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

// ─── Types ───────────────────────────────────────────────────────────────────

export interface RegistrationInsert {
  full_name: string;
  email: string;
  phone: string;
  nationality?: string;
  program_interest?: string;
  message?: string;
}

export interface ContactMessageInsert {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
