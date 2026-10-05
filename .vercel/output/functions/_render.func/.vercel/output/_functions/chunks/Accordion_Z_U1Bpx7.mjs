import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

function Accordion({ items, lang }) {
  const [openId, setOpenId] = useState(null);
  return /* @__PURE__ */ jsx("div", { className: "space-y-3", children: items.map((item) => {
    const question = lang === "fr" ? item.questionFr || item.questionEn : item.questionEn;
    const answer = lang === "fr" ? item.answerFr || item.answerEn : item.answerEn;
    const isOpen = openId === item._id;
    return /* @__PURE__ */ jsxs("div", { className: "border border-gray-200 rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setOpenId(isOpen ? null : item._id),
          className: "w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors",
          "aria-expanded": isOpen,
          "aria-controls": `faq-answer-${item._id}`,
          id: `faq-btn-${item._id}`,
          children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy pr-4", children: question }),
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: `w-5 h-5 text-gold flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`,
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          id: `faq-answer-${item._id}`,
          role: "region",
          "aria-labelledby": `faq-btn-${item._id}`,
          className: `overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96" : "max-h-0"}`,
          children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-5 pt-1 text-gray-700 leading-relaxed text-sm border-t border-gray-100", children: answer })
        }
      )
    ] }, item._id);
  }) });
}

export { Accordion as A };
