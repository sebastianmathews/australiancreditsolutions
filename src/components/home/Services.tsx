"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import {
  HiOutlineCursorArrowRays,
  HiOutlineMagnifyingGlass,
  HiOutlineScale,
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiOutlineShieldCheck
} from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";

interface Service {
  icon: IconType;
  title: string;
  description: string;
  link: {
    text: string;
    href: string;
  };
}

const services: Service[] = [
  {
    icon: HiOutlineCursorArrowRays,
    title: "Default Removal",
    description:
      "Our core service. We investigate your default, identify compliance failures, and build a legal case for complete removal.",
    link: {
      text: "Learn about default removal",
      href: "/default-removal",
    },
  },
  {
    icon: HiOutlineMagnifyingGlass,
    title: "Credit Enquiry Removal",
    description:
      "Too many enquiries can lower your score. We help remove excessive or unauthorized enquiries from your file.",
    link: {
      text: "Learn about enquiry removal",
      href: "/credit-enquiry-removal",
    },
  },
  {
    icon: HiOutlineScale,
    title: "Court Judgment Removal",
    description:
      "Court judgments stay for 5 years. Our legal team can challenge judgments obtained improperly or with errors.",
    link: {
      text: "Learn about judgment removal",
      href: "/court-judgment-removal",
    },
  },
  {
    icon: HiOutlineChartBar,
    title: "Credit Report Analysis",
    description:
      "Not sure what's on your file? We provide comprehensive analysis of all three credit bureaus.",
    link: {
      text: "Get your credit analysed",
      href: "/credit-report-analysis",
    },
  },
  {
    icon: HiOutlineDocumentText,
    title: "Repayment History Disputes",
    description:
      "Late payment marks damaging your score? We dispute incorrect entries and work to have them removed.",
    link: {
      text: "Learn about repayment disputes",
      href: "/repayment-history-disputes",
    },
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Identity Theft Recovery",
    description:
      "Been a victim of fraud? We help clear fraudulent accounts and protect your financial identity.",
    link: {
      text: "Learn about fraud recovery",
      href: "/identity-theft-credit-fix",
    },
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-2">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Credit Repair Services We Offer
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Comprehensive solutions to fix your credit file and get you approved
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white p-7 rounded-2xl border border-gray-200 transition hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500"
              >
                <div className="w-14 h-14 mb-5 rounded-2xl flex items-center justify-center bg-emerald-100">
                  <Icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.link.href}
                  className="text-emerald-600 font-semibold text-sm hover:underline inline-flex items-center gap-1"
                >
                  {service.link.text} <FaArrowRight className="text-xs" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
