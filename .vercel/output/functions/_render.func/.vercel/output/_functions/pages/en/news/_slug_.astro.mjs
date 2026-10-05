/* empty css                                       */
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_DjmVd5Sg.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, u as useTranslation } from '../../../chunks/BaseLayout_fDfeTooz.mjs';
import { s as sanityClient } from '../../../chunks/sanity_mdzBUkTw.mjs';
import { PortableText } from '@portabletext/react';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://linvoyacademy.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const lang = "en";
  const t = useTranslation(lang);
  const { slug } = Astro2.params;
  let post = null;
  try {
    post = await sanityClient.fetch(
      `*[_type == "newsPost" && slug.current == $slug][0] {
      _id, title, slug, publishedAt, body, youtubeUrl,
      "imageUrl": image.asset->url
    }`,
      { slug }
    );
  } catch (_) {
  }
  if (!post) {
    return Astro2.redirect(`/${lang}/news`, 302);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "title": post.title, "ogImage": post.imageUrl }, { "default": async ($$result2) => renderTemplate`  ${post.youtubeUrl ? renderTemplate`${maybeRenderHead()}<div class="w-full aspect-video overflow-hidden -mt-16 bg-gray-900"> <iframe${addAttribute(`https://www.youtube-nocookie.com/embed/${getYouTubeVideoId(post.youtubeUrl)}?rel=0&modestbranding=1&playsinline=1`, "src")}${addAttribute(post.title, "title")} class="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div>` : post.imageUrl ? renderTemplate`<div class="w-full aspect-[16/5] overflow-hidden -mt-16"> <img${addAttribute(`${post.imageUrl}?w=1200&fm=webp`, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover"> </div>` : renderTemplate`<div class="bg-navy-700 -mt-16 pt-28 pb-10"> <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"> <a${addAttribute(`/${lang}/news`, "href")} class="text-gold/80 text-sm font-semibold hover:text-gold block mb-4">${t.news.back}</a> <h1 class="text-3xl md:text-4xl font-heading font-bold text-white">${post.title}</h1> </div> </div>`}<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <a${addAttribute(`/${lang}/news`, "href")} class="text-gold text-sm font-semibold hover:underline mb-6 block"> ${t.news.back} </a> <time class="text-sm text-gray-400"> ${new Date(post.publishedAt).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })} </time> <h1 class="text-3xl md:text-4xl font-heading font-bold text-navy mt-2 mb-8">${post.title}</h1> ${post.youtubeUrl && post.imageUrl && renderTemplate`<div class="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-8"> <iframe${addAttribute(`https://www.youtube-nocookie.com/embed/${getYouTubeVideoId(post.youtubeUrl)}?rel=0&modestbranding=1&playsinline=1`, "src")}${addAttribute(post.title, "title")} class="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div>`} <!-- Portable Text body --> <div class="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy prose-a:text-gold"> ${post.body && renderTemplate`${renderComponent($$result2, "PortableText", PortableText, { "value": post.body })}`} </div> </div> ` })} `;
}, "/home/kash/Desktop/LINVOY/website/pro/src/pages/en/news/[slug].astro", void 0);

const $$file = "/home/kash/Desktop/LINVOY/website/pro/src/pages/en/news/[slug].astro";
const $$url = "/en/news/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
