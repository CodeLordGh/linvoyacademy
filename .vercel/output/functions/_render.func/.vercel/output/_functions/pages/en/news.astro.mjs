/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DjmVd5Sg.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, u as useTranslation } from '../../chunks/BaseLayout_D2UNslmg.mjs';
import { s as sanityClient, Q as QUERIES } from '../../chunks/sanity_mdzBUkTw.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "en";
  const t = useTranslation(lang);
  let posts = [];
  try {
    posts = await sanityClient.fetch(QUERIES.allNews);
  } catch (_) {
  }
  function getYouTubeVideoId(url) {
    if (!url) return null;
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "title": t.news.title, "description": t.news.subtitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-navy-700 text-white py-16 -mt-16 pt-28"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl md:text-5xl font-heading font-bold">${t.news.title}</h1> <p class="text-gray-300 mt-3 text-lg">${t.news.subtitle}</p> </div> </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> ${posts.length === 0 ? renderTemplate`<p class="text-gray-500 text-center py-20">${t.news.no_posts}</p>` : renderTemplate`<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => {
    const videoId = getYouTubeVideoId(post.youtubeUrl || "");
    const hasVideo = videoId;
    return renderTemplate`<article class="card group"> ${hasVideo ? renderTemplate`<div class="aspect-video overflow-hidden relative bg-gray-900"> <img${addAttribute(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"${addAttribute((e) => {
      e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }, "onerror")}> <div class="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors"> <button class="play-button w-16 h-16 bg-gold/90 hover:bg-gold rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="Play video"> <svg class="w-6 h-6 text-navy ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg> </button> </div> </div>` : post.imageUrl ? renderTemplate`<div class="aspect-video overflow-hidden"> <img${addAttribute(`${post.imageUrl}?w=600&fm=webp`, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"> </div>` : null} <div class="p-6"> <time class="text-xs text-gray-400 mb-2 block"> ${new Date(post.publishedAt).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })} </time> <h2 class="font-heading font-bold text-navy text-lg mb-3 line-clamp-2">${post.title}</h2> ${post.excerpt && renderTemplate`<p class="text-gray-600 text-sm line-clamp-3 mb-4">${post.excerpt}</p>`} <a${addAttribute(`/${lang}/news/${post.slug?.current}`, "href")} class="text-gold font-semibold text-sm hover:underline"> ${t.news.read_more} →
</a> </div> </article>`;
  })} </div>`} </div> ` })}`;
}, "/home/kash/Desktop/LINVOY/website/pro/src/pages/en/news/index.astro", void 0);

const $$file = "/home/kash/Desktop/LINVOY/website/pro/src/pages/en/news/index.astro";
const $$url = "/en/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
