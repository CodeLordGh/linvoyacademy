import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://xstpkpxupbrcjbdiksvs.supabase.co";
const supabaseAnonKey = "sb_publishable_9l2qjClytm_U3iVK83a6ig_h68z-yQB";
const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

export { supabase as s };
