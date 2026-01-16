"use client";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    step: 1,
    title: "Free Assessment",
    description:
      "We review your credit file for free. If we can't help, we'll tell you straight away — no obligation.",
  },
  {
    step: 2,
    title: "Case Investigation",
    description:
      "Our legal team investigates how your default was listed and identifies compliance breaches.",
  },
  {
    step: 3,
    title: "Challenge & Remove",
    description:
      "We formally challenge the default with evidence. Most cases resolve within 2-8 weeks.",
  },
  {
    step: 4,
    title: "Get Approved",
    description:
      "With a clean credit file, you can finally get approved for the finance you deserve.",
  },
];

const Process = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-2">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            How We Remove Defaults From Your Credit File
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Our proven 4-step process has helped 5,000+ Australians
          </p>
        </div>

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-gray-600 leading-relaxed">
            Unlike DIY approaches that rarely succeed, our legal team knows exactly
            what to look for. We identify the specific compliance failures that
            give you grounds for removal — failures that credit providers hope
            you&apos;ll never discover.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-1 rounded-full bg-gradient-to-r from-emerald-500 to-blue-800" />

          {steps.map((item) => (
            <div key={item.step} className="relative text-center">
              <div
                className={`w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full text-white text-2xl font-extrabold shadow-lg ${
                  item.step % 2 === 1
                    ? "bg-gradient-to-br from-emerald-500 to-emerald-400"
                    : "bg-gradient-to-br from-blue-800 to-blue-900"
                }`}
              >
                {item.step}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
