"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { FaHome, FaMoneyBillWave, FaClock, FaCar, FaArrowRight } from "react-icons/fa";

interface PainPoint {
  icon: IconType;
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
}

const painPoints: PainPoint[] = [
  {
    icon: FaHome,
    title: "Home Loan Rejections",
    description:
      "That dream home keeps slipping away. Banks see your default and say \"no\" before they even look at your income or savings.",
    link: {
      text: "Learn how we help",
      href: "/credit-repair-home-loan",
    },
  },
  {
    icon: FaMoneyBillWave,
    title: "Sky-High Interest Rates",
    description:
      "A 2% higher rate on a $500k loan costs you $10,000+ per year. That's money straight out of your family's pocket that could be saved.",
  },
  {
    icon: FaClock,
    title: "5 Years of Waiting",
    description:
      "Defaults stay on your credit file for 5 years. That's 5 years of missed opportunities unless you take action to have them removed.",
  },
  {
    icon: FaCar,
    title: "Car & Equipment Finance Denied",
    description:
      "Need a new car or equipment for work? Bad credit means either rejection or predatory rates.",
    link: {
      text: "Get help with car finance",
      href: "/credit-repair-car-finance",
    },
  },
];

const PainPoints = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-2">
            The Problem
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            That Default Is Costing You More Than You Think
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Every day you wait, you&apos;re losing money and missing opportunities
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-gray-50 p-7 rounded-2xl border border-gray-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center bg-red-50">
                  <Icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {point.description}
                  {point.link && (
                    <Link
                      href={point.link.href}
                      className="text-emerald-600 font-medium hover:underline ml-1 inline-flex items-center gap-1"
                    >
                      {point.link.text} <FaArrowRight className="text-xs" />
                    </Link>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
