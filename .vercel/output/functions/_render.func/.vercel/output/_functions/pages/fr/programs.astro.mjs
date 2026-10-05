/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DjmVd5Sg.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, u as useTranslation } from '../../chunks/BaseLayout_D8w4rvTB.mjs';
import { s as sanityClient, Q as QUERIES } from '../../chunks/sanity_mdzBUkTw.mjs';
export { renderers } from '../../renderers.mjs';

const $$Programs = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "fr";
  const t = useTranslation(lang);
  let courses = [];
  try {
    courses = await sanityClient.fetch(QUERIES.allCourses);
  } catch (_) {
  }
  const levelMeta = {
    kindergarten: { label: "Maternelle (KG)", order: 1, icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "from-pink-400 to-rose-500", bg: "bg-pink-50" },
    primary: { label: "\xC9cole Primaire", order: 2, icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", color: "from-blue-400 to-navy-600", bg: "bg-blue-50" },
    junior_high: { label: "Coll\xE8ge (JHS)", order: 3, icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", color: "from-emerald-400 to-teal-600", bg: "bg-emerald-50" },
    professional: { label: "Professionnel / Adulte", order: 4, icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 002-2h-4a2 2 0 002-2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 002-2H5a2 2 0 002 2v10a2 2 0 002 2z", color: "from-purple-400 to-indigo-600", bg: "bg-purple-50" }
  };
  const byLevel = {};
  courses.forEach((c) => {
    const lvl = c.level || "professional";
    if (!byLevel[lvl]) byLevel[lvl] = [];
    byLevel[lvl].push(c);
  });
  const levels = t.programs.levels;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "title": t.programs.title, "description": t.programs.subtitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-navy-700 text-white py-20 relative overflow-hidden -mt-16 pt-32"> <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle, #f0a500 1px, transparent 1px); background-size: 28px 28px;"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <span class="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-3">Aligné GES · Français comme Matière · Éducation de Base</span> <h1 class="text-4xl md:text-5xl font-heading font-bold">${t.programs.title}</h1> <p class="text-gray-300 mt-3 text-lg max-w-2xl">${t.programs.subtitle}</p> </div> </div>  <div class="bg-gold/10 border-b border-gold/20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5"> <div class="flex flex-wrap items-center gap-2 text-sm"> <span class="font-semibold text-navy">Parcours scolaire au Ghana :</span> ${[
    { label: "KG 1\u20132", sub: "4\u20135 ans" },
    { label: "Basic 1\u20136", sub: "6\u201311 ans" },
    { label: "JHS 1\u20133", sub: "12\u201314 ans \xB7 BECE" }
  ].map((step, i) => renderTemplate`<div class="flex items-center gap-2"> ${i > 0 && renderTemplate`<svg class="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`} <span class="inline-flex flex-col items-center bg-white rounded-lg px-3 py-1.5 shadow-sm border border-gold/20"> <span class="font-bold text-navy text-xs">${step.label}</span> <span class="text-gray-500 text-xs">${step.sub}</span> </span> </div>`)} <span class="ml-2 text-gray-500 hidden sm:inline">Français enseigné comme matière dédiée à chaque niveau</span> </div> </div> </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20"> <section> <div class="text-center mb-12 reveal"> <span class="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-3">Niveaux Scolaires</span> <h2 class="section-title">${t.programs.levels_intro_title}</h2> </div> <div class="space-y-10"> ${levels.map((lvl, i) => {
    const meta = levelMeta[lvl.key];
    const sanityCoursesForLevel = byLevel[lvl.key] || [];
    return renderTemplate`<div class="reveal group grid md:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-400"${addAttribute(i * 80, "data-delay")}> <div${addAttribute(`md:col-span-1 bg-gradient-to-br ${meta?.color || "from-navy-700 to-navy-900"} p-6 flex flex-col items-center justify-center text-white text-center`, "class")}> <svg class="w-10 h-10 mb-3 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${addAttribute(meta?.icon, "d")}></path> </svg> <div class="font-heading font-bold text-lg leading-tight">${lvl.label}</div> <div class="text-white/80 text-sm mt-1">${lvl.grades}</div> <div class="mt-2 bg-white/20 rounded-full px-3 py-1 text-xs font-medium">${lvl.ages}</div> <div class="mt-1 text-white/70 text-xs">${lvl.years}</div> </div> <div class="md:col-span-4 bg-white p-7 flex flex-col justify-between"> <div> <p class="text-gray-700 leading-relaxed mb-5">${lvl.description}</p> <ul class="grid sm:grid-cols-2 gap-x-6 gap-y-2"> ${lvl.highlights.map((h) => renderTemplate`<li class="flex items-start gap-2 text-sm text-gray-700"> <svg class="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> ${h} </li>`)} </ul> </div> ${sanityCoursesForLevel.length > 0 && renderTemplate`<div class="mt-6 pt-6 border-t border-gray-100"> <h4 class="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Cours spécialisés à ce niveau</h4> <div class="flex flex-wrap gap-2"> ${sanityCoursesForLevel.map((c) => renderTemplate`<span${addAttribute(`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full
                          ${c.category === "language" ? "bg-blue-100 text-blue-700" : c.category === "business" ? "bg-yellow-100 text-yellow-700" : "bg-emerald-100 text-emerald-700"}`, "class")}> ${c.titleFr || c.titleEn} ${c.fees && renderTemplate`<span class="opacity-70">· ${c.fees}</span>`} </span>`)} </div> </div>`} <div class="mt-5 flex items-center gap-4"> <a${addAttribute(`/${lang}/admissions`, "href")} class="btn-primary text-sm"> ${t.programs.apply_now} <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </a> <a${addAttribute(`/${lang}/fees`, "href")} class="text-sm text-gold font-semibold hover:underline">Voir les Frais →</a> </div> </div> </div>`;
  })} </div> </section> <!-- ── Ce qui distingue Linvoy ── --> <section class="reveal"> <div class="bg-navy-700 rounded-3xl p-8 md:p-14 text-white relative overflow-hidden"> <div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image: radial-gradient(circle, #f0a500 1px, transparent 1px); background-size: 32px 32px;"></div> <div class="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none"></div> <div class="relative text-center mb-12"> <span class="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-3">Pourquoi Choisir Linvoy</span> <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Ce qui Distingue Linvoy</h2> <p class="text-gray-400 max-w-2xl mx-auto">Nous sommes la seule école au Ghana qui réunit tout cela — en un seul endroit, pour chaque enfant.</p> </div> <div class="relative grid sm:grid-cols-2 gap-5"> ${[
    {
      number: "01",
      title: "Le seul Holistique \xC9ducation de Base au Ghana",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      desc: "De la Maternelle jusqu'au Coll\xE8ge \u2014 une seule \xE9cole, une seule communaut\xE9, un ensemble coh\xE9rent de valeurs. Pas de transitions, pas de ruptures.",
      accent: "bg-gold/20 text-gold"
    },
    {
      number: "02",
      title: "Fran\xE7ais comme Mati\xE8re D\xE9di\xE9e",
      icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
      desc: "Le fran\xE7ais est enseign\xE9 comme mati\xE8re d\xE9di\xE9e de la KG au JHS \u2014 un programme linguistique complet et progressif qui donne aux dipl\xF4m\xE9s une vraie ma\xEEtrise de la langue.",
      accent: "bg-blue-400/20 text-blue-300"
    },
    {
      number: "03",
      title: "Internat S\xFBr et Encadr\xE9",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      desc: "Parents de maison qualifi\xE9s, surveillance 24h/24, heures d'\xE9tude structur\xE9es et repas sains \u2014 un foyer bienveillant loin de chez soi pour les \xE9l\xE8ves venant de tout le Ghana.",
      accent: "bg-emerald-400/20 text-emerald-300"
    },
    {
      number: "04",
      title: "Campus S\xE9curis\xE9 \u2014 CCTV 24h/24",
      icon: "M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
      desc: "L'int\xE9gralit\xE9 du campus est couverte par des cam\xE9ras CCTV op\xE9rationnelles 24h/24, 7j/7. Les parents peuvent avoir une totale confiance dans la s\xE9curit\xE9 de leur enfant \xE0 tout moment.",
      accent: "bg-rose-400/20 text-rose-300"
    },
    {
      number: "05",
      title: "Chaque Enfant Est le Bienvenu",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
      desc: "Les enfants de toute tribu, religion et nationalit\xE9 sont toujours les bienvenus \u2014 sans exception. Notre diversit\xE9 n'est pas une note de bas de page ; elle est au c\u0153ur de ce que nous sommes.",
      accent: "bg-purple-400/20 text-purple-300"
    },
    {
      number: "06",
      title: "Align\xE9 GES \u2014 Dipl\xF4mes Reconnus",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      desc: "Notre programme est enti\xE8rement align\xE9 sur le Ghana Education Service (GES). Les \xE9l\xE8ves passent le BECE et le WASSCE dans des conditions officielles, avec des dipl\xF4mes reconnus dans tout le pays.",
      accent: "bg-teal-400/20 text-teal-300"
    }
  ].map((d) => renderTemplate`<div class="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/40 rounded-2xl p-6 transition-all duration-300 flex gap-5"> <div${addAttribute(`w-11 h-11 rounded-xl ${d.accent} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`, "class")}> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${addAttribute(d.icon, "d")}></path> </svg> </div> <div> <p class="text-white/30 text-xs font-bold tracking-widest mb-1">${d.number}</p> <h3 class="font-heading font-bold text-white text-base mb-2">${d.title}</h3> <p class="text-gray-400 text-sm leading-relaxed">${d.desc}</p> </div> </div>`)} </div> </div> </section> <section class="reveal text-center"> <h2 class="text-2xl font-heading font-bold text-navy mb-3">Prêt à rejoindre Linvoy Academy ?</h2> <p class="text-gray-500 mb-7 max-w-lg mx-auto">Les inscriptions sont ouvertes pour tous les niveaux. Postulez en ligne ou contactez-nous pour réserver une visite du campus.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a${addAttribute(`/${lang}/admissions`, "href")} class="btn-primary">${t.cta_banner.button}</a> <a${addAttribute(`/${lang}/fees`, "href")} class="btn-outline">Voir les Frais &amp; Paiement</a> <a${addAttribute(`/${lang}/contact`, "href")} class="btn-secondary" style="color: #1a2e6e; border-color: #1a2e6e;">${t.cta_banner.secondary}</a> </div> </section> </div> ` })}`;
}, "/home/kash/Desktop/LINVOY/website/pro/src/pages/fr/programs.astro", void 0);

const $$file = "/home/kash/Desktop/LINVOY/website/pro/src/pages/fr/programs.astro";
const $$url = "/fr/programs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Programs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
