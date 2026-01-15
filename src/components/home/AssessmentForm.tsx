"use client";

import { useState } from "react";

const OPTIONS = [
  "Home loan",
  "Car loan",
  "Personal loan",
  "Business finance",
  "Future loan ready",
];

export default function AssessmentForm() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative bg-white rounded-2xl p-7 shadow-2xl border border-gray-100">
      {/* Corner Badge */}
      <div className="absolute -top-2 -right-2 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-lg uppercase tracking-wide">
        No Win No Fee
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 border-b border-gray-200 pb-4 mb-5">
        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-600 to-emerald-400 flex items-center justify-center text-white text-xl">
          📋
        </div>
        <div>
          <h3 className="font-bold text-gray-900">Free Credit Assessment</h3>
          <p className="text-xs text-gray-500">
            Find out if we can help — no obligation
          </p>
        </div>
      </div>

      <form>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          What do you need finance for?
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          {OPTIONS.map((opt, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setSelected(opt)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm transition
                ${
                  selected === opt
                    ? "border-emerald-500 bg-emerald-500/10 text-gray-900 font-medium"
                    : "border-gray-200 bg-gray-50 text-gray-700 hover:border-emerald-400"
                }`}
            >
              <span
                className={`w-5 h-5 rounded-full border flex items-center justify-center
                  ${
                    selected === opt
                      ? "border-emerald-500 bg-emerald-500"
                      : "border-gray-300"
                  }`}
              >
                {selected === opt && (
                  <span className="w-2 h-2 bg-white rounded-full" />
                )}
              </span>
              {opt}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="04XX XXX XXX"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-linear-to-br from-emerald-600 to-emerald-400 text-white py-3 rounded-lg font-semibold shadow-lg hover:-translate-y-0.5 transition"
        >
          Check If We Can Help (60 Seconds)
        </button>

        <p className="text-center text-xs text-gray-500 italic mt-3">
          We'll review your situation and tell you honestly if we can help.
        </p>

        <div className="text-center text-[11px] text-gray-400 mt-3">
          🔒 Your information is 100% confidential
        </div>
      </form>
    </div>
  );
}
