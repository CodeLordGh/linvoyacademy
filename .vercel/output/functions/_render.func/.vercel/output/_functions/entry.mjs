import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CWnc_WtY.mjs';
import { manifest } from './manifest_CRE1d4A2.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/api/register.astro.mjs');
const _page3 = () => import('./pages/api/revalidate.astro.mjs');
const _page4 = () => import('./pages/en/about.astro.mjs');
const _page5 = () => import('./pages/en/admissions.astro.mjs');
const _page6 = () => import('./pages/en/boarding.astro.mjs');
const _page7 = () => import('./pages/en/contact.astro.mjs');
const _page8 = () => import('./pages/en/faq.astro.mjs');
const _page9 = () => import('./pages/en/fees.astro.mjs');
const _page10 = () => import('./pages/en/gallery.astro.mjs');
const _page11 = () => import('./pages/en/news/_slug_.astro.mjs');
const _page12 = () => import('./pages/en/news.astro.mjs');
const _page13 = () => import('./pages/en/programs.astro.mjs');
const _page14 = () => import('./pages/en/testimonials.astro.mjs');
const _page15 = () => import('./pages/en.astro.mjs');
const _page16 = () => import('./pages/fr/about.astro.mjs');
const _page17 = () => import('./pages/fr/admissions.astro.mjs');
const _page18 = () => import('./pages/fr/boarding.astro.mjs');
const _page19 = () => import('./pages/fr/contact.astro.mjs');
const _page20 = () => import('./pages/fr/faq.astro.mjs');
const _page21 = () => import('./pages/fr/fees.astro.mjs');
const _page22 = () => import('./pages/fr/gallery.astro.mjs');
const _page23 = () => import('./pages/fr/news/_slug_.astro.mjs');
const _page24 = () => import('./pages/fr/news.astro.mjs');
const _page25 = () => import('./pages/fr/programs.astro.mjs');
const _page26 = () => import('./pages/fr/testimonials.astro.mjs');
const _page27 = () => import('./pages/fr.astro.mjs');
const _page28 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/api/register.ts", _page2],
    ["src/pages/api/revalidate.ts", _page3],
    ["src/pages/en/about.astro", _page4],
    ["src/pages/en/admissions.astro", _page5],
    ["src/pages/en/boarding.astro", _page6],
    ["src/pages/en/contact.astro", _page7],
    ["src/pages/en/faq.astro", _page8],
    ["src/pages/en/fees.astro", _page9],
    ["src/pages/en/gallery.astro", _page10],
    ["src/pages/en/news/[slug].astro", _page11],
    ["src/pages/en/news/index.astro", _page12],
    ["src/pages/en/programs.astro", _page13],
    ["src/pages/en/testimonials.astro", _page14],
    ["src/pages/en/index.astro", _page15],
    ["src/pages/fr/about.astro", _page16],
    ["src/pages/fr/admissions.astro", _page17],
    ["src/pages/fr/boarding.astro", _page18],
    ["src/pages/fr/contact.astro", _page19],
    ["src/pages/fr/faq.astro", _page20],
    ["src/pages/fr/fees.astro", _page21],
    ["src/pages/fr/gallery.astro", _page22],
    ["src/pages/fr/news/[slug].astro", _page23],
    ["src/pages/fr/news/index.astro", _page24],
    ["src/pages/fr/programs.astro", _page25],
    ["src/pages/fr/testimonials.astro", _page26],
    ["src/pages/fr/index.astro", _page27],
    ["src/pages/index.astro", _page28]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "47f2edba-b895-460d-b16f-cfa19d7f4708",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
