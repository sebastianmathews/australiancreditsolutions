"use client";

import Link from "next/link";
import Script from "next/script";
import { FaArrowRight, FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  initials: string;
  location: string;
  review: string;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    initials: "SM",
    location: "Sydney, NSW",
    review:
      "I had a $12,000 default blocking my home loan. I was sceptical anyone could help, but ACS got it removed in just 4 weeks. Now I'm a homeowner — still can't believe it!",
    result: "$12,000 default removed - Home loan approved",
  },
  {
    name: "David G.",
    initials: "DG",
    location: "Melbourne, VIC",
    review:
      "I was sceptical that a large debt could be removed. ACS challenged it and it was successfully deleted. Genuinely impressed — would highly recommend.",
    result: "$8,500 default removed - Car finance approved",
  },
  {
    name: "Michelle T.",
    initials: "MT",
    location: "Brisbane, QLD",
    review:
      "Multiple defaults were stopping me from getting business finance. ACS removed them all in 6 weeks. Professional, responsive, and they deliver what they promise.",
    result: "3 defaults removed - $150K business loan approved",
  },
];

const Testimonials = () => {
  return (
    <>
      <section id="testimonials" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Credit Repair Success Stories From Real Australians
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Join 5,000+ Australians who&apos;ve removed defaults and got their
              financial lives back on track
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition"
              >
                <div className="text-amber-400 text-lg mb-3 flex gap-0.5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  &quot;{testimonial.review}&quot;
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-3 mb-4">
                  <div className="text-[10px] uppercase tracking-wide font-semibold text-emerald-600">
                    Result
                  </div>
                  <div className="text-xs font-semibold text-gray-900">
                    {testimonial.result}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-800 to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Live Reviews */}
          <div className="mt-14">
            <h3 className="text-center text-xl font-bold text-gray-900 mb-6">
              Latest Reviews From Verified Clients
            </h3>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                data-romw-token="Un2YoIQfGfa3N1fM3aK9jrRYmudhaHraWDe42ioCB7Sy0POe2h"
                data-romw-lazy=""
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link
              href="/testimonials"
              className="text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1"
            >
              Read All Success Stories (976+ Reviews) <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews on My Website Script */}
      <Script
        src="https://reviewsonmywebsite.com/js/v2/embed.js?id=4a24b3ba631386ba5f4ec3ef018ac9ca"
        strategy="lazyOnload"
      />
    </>
  );
};

export default Testimonials;
