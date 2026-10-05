import { s as supabase } from '../../chunks/supabase_DmU6-gT5.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body." }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!name) {
    return new Response(JSON.stringify({ error: "Name is required." }), {
      status: 422,
      headers: { "Content-Type": "application/json" }
    });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: "A valid email address is required." }), {
      status: 422,
      headers: { "Content-Type": "application/json" }
    });
  }
  if (!message) {
    return new Response(JSON.stringify({ error: "Message is required." }), {
      status: 422,
      headers: { "Content-Type": "application/json" }
    });
  }
  const { error } = await supabase.from("contact_messages").insert({
    name,
    email,
    subject: subject || null,
    message
  });
  if (error) {
    console.error("[contact] Supabase error:", error.message);
    return new Response(
      JSON.stringify({ error: "Could not send your message. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
