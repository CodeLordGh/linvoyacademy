/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DjmVd5Sg.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, u as useTranslation } from '../../chunks/BaseLayout_D2UNslmg.mjs';
import { s as sanityClient, Q as QUERIES } from '../../chunks/sanity_mdzBUkTw.mjs';
import { A as Accordion } from '../../chunks/Accordion_Z_U1Bpx7.mjs';
export { renderers } from '../../renderers.mjs';

const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "fr";
  const t = useTranslation(lang);
  let faqs = [];
  try {
    faqs = await sanityClient.fetch(QUERIES.allFaqs);
  } catch (_) {
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "title": t.faq.title, "description": t.faq.subtitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-navy-700 text-white py-16 -mt-16 pt-28"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl md:text-5xl font-heading font-bold">${t.faq.title}</h1> <p class="text-gray-300 mt-3 text-lg">${t.faq.subtitle}</p> </div> </div> <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> ${faqs.length === 0 ? renderTemplate`<p class="text-gray-500 text-center py-20">${t.faq.no_items}</p>` : renderTemplate`${renderComponent($$result2, "Accordion", Accordion, { "client:visible": true, "items": faqs, "lang": lang, "client:component-hydration": "visible", "client:component-path": "/home/kash/Desktop/LINVOY/website/pro/src/components/Accordion", "client:component-export": "default" })}`} <div class="mt-12 p-6 bg-cream rounded-xl text-center"> <p class="text-gray-700 mb-3">${t.faq.contact_cta}</p> <a${addAttribute(`/${lang}/contact`, "href")} class="btn-outline">${t.faq.contact_link}</a> </div> </div> ` })}`;
}, "/home/kash/Desktop/LINVOY/website/pro/src/pages/fr/faq.astro", void 0);

const $$file = "/home/kash/Desktop/LINVOY/website/pro/src/pages/fr/faq.astro";
const $$url = "/fr/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
