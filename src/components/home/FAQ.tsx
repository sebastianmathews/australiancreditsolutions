"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does credit repair cost in Australia?",
    a: "At Australian Credit Solutions, we charge a $330 administration fee upfront, with the success fee only payable when we successfully remove your negative listing. Our No Win No Fee policy means if we can't remove your default, you don't pay the success fee.",
  },
  {
    q: "How long does credit repair take in Australia?",
    a: "Most credit repair cases are resolved within 2–8 weeks, depending on the complexity. Simple cases can be resolved in 2–3 weeks. More complex cases involving multiple defaults may take 6–8 weeks.",
  },
  {
    q: "Is credit repair legal in Australia?",
    a: "Yes, credit repair is 100% legal in Australia under the Privacy Act 1988 and the Credit Reporting Code. You have the right to challenge inaccurate or improperly listed defaults. We are ASIC licensed (ACL 532003).",
  },
  {
    q: "What types of credit listings can be removed?",
    a: "We can help remove defaults, court judgments, late payment records, excessive credit enquiries, and other negative listings that were listed incorrectly or without following proper legal procedures.",
  },
  {
    q: "Can I repair my credit myself for free?",
    a: "Yes, you can dispute credit file errors yourself for free by contacting the credit bureau directly. However, credit providers often have legal teams, which is why our 98% success rate comes from legal expertise in identifying compliance breaches.",
  },
  {
    q: "What if you can't remove my default?",
    a: "If we assess your case and believe we cannot remove your listing, we'll tell you upfront during our free assessment. If we take on your case and are unsuccessful, you don't pay our success fee under our No Win No Fee policy.",
  },
  {
    q: "How do I know if my default can be removed?",
    a: "The best way to find out is through our free credit assessment. We'll review your credit file and identify if there are grounds for removal such as improper notices, incorrect amounts, disputed debts, or listing errors.",
  },
  {
    q: "What happens after a default is removed?",
    a: "Once a default is removed, many clients see a significant improvement in their credit score. This often helps them secure home loans, car finance, and business loans within weeks.",
  },
  {
    q: "Do I still owe the debt if the default is removed?",
    a: "Removing a default from your credit file is separate from the underlying debt. If the debt is valid, you may still owe it, although procedural errors can sometimes impact enforceability.",
  },
  {
    q: "Why choose Australian Credit Solutions?",
    a: "We're led by Elisa Rothschild, a BA/LLB qualified lawyer with over 10 years in credit law. We're ASIC licensed (ACL 532003), have won Industry Excellence Awards for three consecutive years, and maintain a 98% success rate helping over 5,000 Australians.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-2">
            FAQs
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Frequently Asked Questions About Credit Repair
          </h2>
          <p className="text-gray-600">
            Get answers to the most common questions about fixing your credit in
            Australia
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition ${
                  isOpen
                    ? "border-emerald-500 shadow-lg bg-white"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left px-6 py-5 font-semibold text-gray-900 focus:outline-none"
                >
                  <span>{item.q}</span>
                  <span
                    className={`text-2xl text-emerald-600 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
