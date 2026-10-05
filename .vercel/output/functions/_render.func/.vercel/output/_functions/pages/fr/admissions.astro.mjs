/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DjmVd5Sg.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, u as useTranslation } from '../../chunks/BaseLayout_D8w4rvTB.mjs';
import { s as sanityClient, Q as QUERIES } from '../../chunks/sanity_mdzBUkTw.mjs';
import { R as RegistrationForm } from '../../chunks/RegistrationForm_B_oK0OBE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Admissions = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "fr";
  const t = useTranslation(lang);
  let courses = [];
  try {
    courses = await sanityClient.fetch(QUERIES.allCourses);
  } catch (_) {
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "title": t.admissions.title, "description": t.admissions.subtitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-navy-700 text-white py-16 -mt-16 pt-28"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl md:text-5xl font-heading font-bold">${t.admissions.title}</h1> <p class="text-gray-300 mt-3 text-lg max-w-2xl">${t.admissions.subtitle}</p> </div> </div> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <div class="grid lg:grid-cols-5 gap-12"> <aside class="lg:col-span-2"> <div class="bg-cream rounded-xl p-6 sticky top-24"> <h2 class="text-xl font-heading font-bold text-navy mb-4">${t.admissions.requirements_title}</h2> <ul class="space-y-3"> ${t.admissions.requirements.map((req) => renderTemplate`<li class="flex items-start gap-3 text-sm text-gray-700"> <svg class="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> ${req} </li>`)} </ul> </div> </aside> <div class="lg:col-span-3"> ${renderComponent($$result2, "RegistrationForm", RegistrationForm, { "client:load": true, "lang": lang, "courses": courses, "t": t.admissions, "client:component-hydration": "load", "client:component-path": "/home/kash/Desktop/LINVOY/website/pro/src/components/RegistrationForm", "client:component-export": "default" })} </div> </div> </div> ` })}`;
}, "/home/kash/Desktop/LINVOY/website/pro/src/pages/fr/admissions.astro", void 0);

const $$file = "/home/kash/Desktop/LINVOY/website/pro/src/pages/fr/admissions.astro";
const $$url = "/fr/admissions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admissions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
