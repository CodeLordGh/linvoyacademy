import { useState } from 'react';

interface FaqItem {
  _id: string;
  questionEn: string;
  questionFr: string;
  answerEn: string;
  answerFr: string;
}

interface Props {
  items: FaqItem[];
  lang: string;
}

export default function Accordion({ items, lang }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const question = lang === 'fr' ? (item.questionFr || item.questionEn) : item.questionEn;
        const answer = lang === 'fr' ? (item.answerFr || item.answerEn) : item.answerEn;
        const isOpen = openId === item._id;

        return (
          <div key={item._id} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item._id)}
              className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item._id}`}
              id={`faq-btn-${item._id}`}
            >
              <span className="font-semibold text-navy pr-4">{question}</span>
              <svg
                className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={`faq-answer-${item._id}`}
              role="region"
              aria-labelledby={`faq-btn-${item._id}`}
              className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
              <div className="px-6 pb-5 pt-1 text-gray-700 leading-relaxed text-sm border-t border-gray-100">
                {answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
