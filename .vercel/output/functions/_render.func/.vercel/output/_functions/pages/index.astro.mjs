/* empty css                                 */
import { d as createAstro, c as createComponent } from '../chunks/astro/server_DjmVd5Sg.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://linvoyacademy.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const acceptLanguage = Astro2.request.headers.get("accept-language") || "";
  const prefersFrench = acceptLanguage.toLowerCase().includes("fr");
  const locale = prefersFrench ? "fr" : "en";
  return Astro2.redirect(`/${locale}/`, 302);
}, "/home/kash/Desktop/LINVOY/website/pro/src/pages/index.astro", void 0);

const $$file = "/home/kash/Desktop/LINVOY/website/pro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
