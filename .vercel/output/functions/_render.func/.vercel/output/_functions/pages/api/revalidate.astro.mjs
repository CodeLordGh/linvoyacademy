import '../../chunks/sanity_mdzBUkTw.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const authHeader = request.headers.get("authorization");
  authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;
  request.headers.get("x-revalidate-secret");
  new URL(request.url).searchParams.get("secret");
  {
    console.error("CRON_SECRET not configured");
    return new Response(JSON.stringify({ message: "Server misconfiguration" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
