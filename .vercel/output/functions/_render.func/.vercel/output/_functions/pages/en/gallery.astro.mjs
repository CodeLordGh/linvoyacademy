/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment } from '../../chunks/astro/server_DjmVd5Sg.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, u as useTranslation } from '../../chunks/BaseLayout_fDfeTooz.mjs';
import { s as sanityClient, Q as QUERIES } from '../../chunks/sanity_mdzBUkTw.mjs';
export { renderers } from '../../renderers.mjs';

const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "en";
  const t = useTranslation(lang);
  let items = [];
  try {
    items = await sanityClient.fetch(QUERIES.allGallery);
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
  function getYouTubeEmbedUrl(url) {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return null;
    return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "title": t.gallery.title, "description": t.gallery.subtitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-navy-700 text-white py-16 -mt-16 pt-28"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl md:text-5xl font-heading font-bold">${t.gallery.title}</h1> <p class="text-gray-300 mt-3 text-lg">${t.gallery.subtitle}</p> </div> </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> ${items.length === 0 ? renderTemplate`<p class="text-gray-500 text-center py-20">${t.gallery.no_items}</p>` : renderTemplate`<div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"> ${items.map((item) => {
    const youtubeEmbedUrl = getYouTubeEmbedUrl(item.youtubeUrl || "");
    const hasVideo = youtubeEmbedUrl || item.videoUrl;
    return renderTemplate`<div class="break-inside-avoid rounded-xl overflow-hidden shadow-sm group relative"> ${hasVideo ? renderTemplate`<div class="aspect-video bg-gray-900"> ${youtubeEmbedUrl ? renderTemplate`<iframe${addAttribute(youtubeEmbedUrl, "src")}${addAttribute(item.captionEn || "YouTube Video", "title")} class="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>` : renderTemplate`<iframe${addAttribute(item.videoUrl, "src")}${addAttribute(item.captionEn || "Video", "title")} class="w-full h-full" allowfullscreen loading="lazy"></iframe>`} </div>` : item.imageUrl ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <img${addAttribute(`${item.imageUrl}?w=800&fm=webp`, "src")}${addAttribute(item.captionEn || "Gallery image", "alt")} class="w-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-zoom-in" loading="lazy" data-lightbox> ${item.captionEn && renderTemplate`<div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity"> <p class="text-white text-sm">${item.captionEn}</p> </div>`}` })}` : null} </div>`;
  })} </div>`} </div>  <div id="lightbox" class="fixed inset-0 z-50 bg-black/90 hidden items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Image viewer"> <button id="lightbox-close" class="absolute top-4 right-4 text-white/80 hover:text-white" aria-label="Close lightbox"> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <img id="lightbox-img" src="" alt="" class="max-w-full max-h-[90vh] object-contain rounded-lg"> </div>  ` })}`;
}, "/home/kash/Desktop/LINVOY/website/pro/src/pages/en/gallery.astro", void 0);

const $$file = "/home/kash/Desktop/LINVOY/website/pro/src/pages/en/gallery.astro";
const $$url = "/en/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
