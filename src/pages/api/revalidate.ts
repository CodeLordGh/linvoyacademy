import type { APIRoute } from 'astro';
import { sanityClient } from '../../lib/sanity';

export const POST: APIRoute = async ({ request }) => {
  // Accept secret from multiple sources for compatibility:
  // - Sanity webhook: x-revalidate-secret header
  // - GitHub Actions: Authorization: Bearer <secret> header
  // - Query param fallback
  const authHeader = request.headers.get('authorization');
  const bearerSecret = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;
  const headerSecret = request.headers.get('x-revalidate-secret');
  const querySecret = new URL(request.url).searchParams.get('secret');
  
  const providedSecret = bearerSecret || headerSecret || querySecret;
  const expectedSecret = import.meta.env.CRON_SECRET;

  if (!expectedSecret) {
    console.error('CRON_SECRET not configured');
    return new Response(JSON.stringify({ message: 'Server misconfiguration' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (providedSecret !== expectedSecret) {
    return new Response(JSON.stringify({ message: 'Invalid secret' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json().catch(() => ({}));
    const { _type, slug } = body;

    // Vercel ISR handles revalidation automatically via the adapter
    // This endpoint just logs and acknowledges the trigger
    console.log(`Revalidation triggered for ${_type || 'unknown'}: ${slug || 'N/A'} from ${request.headers.get('user-agent') || 'unknown'}`);

    return new Response(JSON.stringify({ 
      message: 'Revalidation triggered',
      type: _type || 'scheduled',
      slug,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Revalidation error:', error);
    return new Response(JSON.stringify({ message: 'Error triggering revalidation' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};