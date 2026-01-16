"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBalanceScale,
  FaBookOpen,
  FaBriefcase,
  FaCar,
  FaChartLine,
  FaCreditCard,
  FaEnvelope,
  FaFileAlt,
  FaFileContract,
  FaHeartBroken,
  FaHome,
  FaKey,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaPhone,
  FaShieldAlt,
  FaTrophy,
  FaUserShield,
} from "react-icons/fa";

// ============================================
// EDITABLE CONTENT - Modify these to update footer
// ============================================

const COMPANY_INFO = {
  name: "Australian Credit Solutions",
  tagline:
    "Australia's award-winning credit repair specialists. Helping Australians remove defaults and rebuild their financial future since 2015.",
  abn: "ABN 12 345 678 901",
  acl: "ACL 532003",
  address: "Collins Street, Melbourne VIC 3000",
  primaryPhone: "0489 265 737",
  secondaryPhone: "1300 368 302",
  email: "info@australiancreditsolutions.com.au",
};

const CTA = {
  heading: "Ready to Fix Your Credit?",
  subheading:
    "Get a free assessment from Melbourne's leading credit repair specialists",
  primaryButton: { text: "Free Assessment", href: "#free-assessment" },
  secondaryButton: { text: "0489 265 737", href: "tel:0489265737" },
};

const TRUST_BADGES = [
  {
    icon: <FaShieldAlt className="text-emerald-400" />,
    title: "ASIC Licensed",
    subtitle: "ACL 532003",
  },
  {
    icon: <FaTrophy className="text-yellow-400" />,
    title: "Award Winner",
    subtitle: "2022 • 2023 • 2024",
  },
];

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com/australiancreditsolutions",
    icon: "facebook",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/australian-credit-solutions",
    icon: "linkedin",
  },
  {
    name: "Google",
    href: "https://google.com/maps?cid=australiancreditsolutions",
    icon: "google",
  },
];

const FOOTER_COLUMNS = [
  {
    sections: [
      {
        title: "Core Services",
        links: [
          { text: "Credit Repair Australia", href: "/credit-repair-australia" },
          { text: "Credit Enquiry Removal", href: "/credit-enquiry-removal" },
          { text: "Court Judgment Removal", href: "/court-judgment-removal" },
          { text: "Credit Report Analysis", href: "/credit-report-analysis" },
          {
            text: "Credit Score Improvement",
            href: "/credit-score-improvement",
          },
        ],
      },
      {
        title: "Default Removal",
        links: [
          { text: "Default Removal", href: "/default-removal" },
          {
            text: "Paid Default Removal",
            href: "/credit-repair-paid-defaults",
          },
          {
            text: "Multiple Defaults",
            href: "/credit-repair-multiple-defaults",
          },
          {
            text: "Telco & Utility Defaults",
            href: "/telco-utility-default-removal",
          },
          {
            text: "Incorrect Default Removal",
            href: "/incorrect-default-removal",
          },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "By Loan Type",
        links: [
          {
            text: "Home Loans",
            href: "/credit-repair-for-home-loan",
            icon: <FaHome className="text-emerald-400" />,
          },
          {
            text: "Car Loans",
            href: "/credit-repair-for-car-loan",
            icon: <FaCar className="text-emerald-400" />,
          },
          {
            text: "Personal Loans",
            href: "/credit-repair-for-personal-loan",
            icon: <FaCreditCard className="text-emerald-400" />,
          },
          {
            text: "Business Loans",
            href: "/credit-repair-for-business-loan",
            icon: <FaBriefcase className="text-emerald-400" />,
          },
          {
            text: "First Home Buyers",
            href: "/credit-repair-for-first-home-buyers",
            icon: <FaKey className="text-emerald-400" />,
          },
        ],
      },
      {
        title: "Advanced & Situational",
        links: [
          {
            text: "Identity Theft & Fraud",
            href: "/identity-theft-credit-fix",
            icon: <FaUserShield className="text-emerald-400" />,
          },
          {
            text: "Bankruptcy Credit Repair",
            href: "/bankruptcy-credit-repair",
            icon: <FaFileAlt className="text-emerald-400" />,
          },
          {
            text: "After Debt Agreement",
            href: "/credit-repair-after-debt-agreement",
            icon: <FaFileContract className="text-emerald-400" />,
          },
          {
            text: "After Divorce",
            href: "/credit-repair-after-divorce",
            icon: <FaHeartBroken className="text-emerald-400" />,
          },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Locations",
        isGrid: true,
        links: [
          { text: "NSW", href: "/credit-repair-nsw" },
          { text: "VIC", href: "/credit-repair-vic" },
          { text: "QLD", href: "/credit-repair-qld" },
          { text: "WA", href: "/credit-repair-wa" },
          { text: "SA", href: "/credit-repair-sa" },
          { text: "ACT", href: "/credit-repair-act" },
          { text: "TAS", href: "/credit-repair-tas" },
          { text: "NT", href: "/credit-repair-nt" },
        ],
      },
      {
        title: "Major Cities",
        links: [
          { text: "Sydney", href: "/credit-repair-sydney" },
          {
            text: "Melbourne",
            href: "/credit-repair-melbourne",
            highlight: true,
            hasArrow: true,
          },
          { text: "Brisbane", href: "/credit-repair-brisbane" },
          { text: "Perth", href: "/credit-repair-perth" },
          { text: "Adelaide", href: "/credit-repair-adelaide" },
          { text: "Gold Coast", href: "/credit-repair-gold-coast" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Education Hub",
        links: [
          {
            text: "Credit Basics & Guides",
            href: "/credit-basics-guides",
            icon: <FaBookOpen className="text-emerald-400" />,
          },
          {
            text: "Improving Credit",
            href: "/improving-credit",
            icon: <FaChartLine className="text-emerald-400" />,
          },
          {
            text: "Bad Credit Loans",
            href: "/bad-credit-loans",
            icon: <FaMoneyBillWave className="text-emerald-400" />,
          },
          {
            text: "Legal & Debt Issues",
            href: "/legal-debt-issues",
            icon: <FaBalanceScale className="text-emerald-400" />,
          },
          { text: "Your Legal Rights", href: "/your-legal-rights" },
          { text: "Case Studies", href: "/case-studies" },
          { text: "FAQs", href: "/faqs" },
          { text: "Blog", href: "/blog" },
        ],
      },
      {
        title: "Company",
        links: [
          { text: "About Us", href: "/about" },
          { text: "Meet Elisa Rothschild", href: "/meet-elisa-rothschild" },
          { text: "Testimonials", href: "/testimonials" },
          { text: "Licensing & Compliance", href: "/licensing-compliance" },
          { text: "Contact Us", href: "/contact" },
        ],
      },
    ],
  },
];

const LEGAL_LINKS = [
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Terms of Service", href: "/terms-of-service" },
  { text: "Disclaimer", href: "/disclaimer" },
  { text: "Complaints", href: "/complaints-handling-policy" },
  { text: "Sitemap", href: "/sitemap" },
];

// ============================================
// SOCIAL ICONS
// ============================================

const SocialIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    facebook: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    linkedin: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    google: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  };
  return icons[type] || null;
};

// ============================================
// FOOTER COMPONENT
// ============================================

const lastUpdated = new Date().toLocaleString("en-AU", {
  month: "long",
  year: "numeric",
});

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-800 text-gray-300">
      {/* CTA Strip */}
      <div className="bg-linear-to-r from-blue-900 to-emerald-800">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-base sm:text-lg">
              {CTA.heading}
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm">{CTA.subheading}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
            <Link
              href={CTA.primaryButton.href}
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 sm:px-5 py-2 rounded-lg font-semibold text-sm transition-colors text-center inline-flex items-center justify-center gap-1"
            >
              {CTA.primaryButton.text} <FaArrowRight />
            </Link>
            <a
              href={CTA.secondaryButton.href}
              className="bg-white/10 hover:bg-white/20 text-white px-4 sm:px-5 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <FaPhone className="text-sm" /> {CTA.secondaryButton.text}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Image
              src="/logo.png"
              alt="Australian Credit Solutions"
              width={250}
              height={80}
              className="mb-4 w-48 sm:w-auto max-w-62.5"
            />
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 sm:mb-5">
              {COMPANY_INFO.tagline}
            </p>

            {/* Contact */}
            <div className="space-y-1.5 mb-4 text-xs sm:text-sm">
              <a
                href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <FaPhone /> {COMPANY_INFO.primaryPhone}
              </a>
              <a
                href={`tel:${COMPANY_INFO.secondaryPhone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <FaPhone className="text-slate-500" />{" "}
                {COMPANY_INFO.secondaryPhone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-white break-all text-[11px] sm:text-sm"
              >
                <FaEnvelope className="text-slate-500 shrink-0" />{" "}
                {COMPANY_INFO.email}
              </a>
              <div className="flex items-center gap-2 text-[11px] sm:text-sm">
                <FaMapMarkerAlt className="text-slate-500 shrink-0" />{" "}
                {COMPANY_INFO.address}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4">
              {TRUST_BADGES.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-lg"
                >
                  <span className="text-base sm:text-lg">{badge.icon}</span>
                  <div className="text-xs sm:text-sm">
                    <div className="font-semibold text-white">
                      {badge.title}
                    </div>
                    <div className="text-slate-400 text-[10px] sm:text-xs">
                      {badge.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors"
                >
                  <SocialIcon type={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_COLUMNS.map((column, colIdx) => (
            <div key={colIdx} className="space-y-4">
              {column.sections.map((section, secIdx) => (
                <div key={secIdx}>
                  <h4 className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wide border-b-2 border-emerald-500 inline-block pb-2 mb-3 sm:mb-4">
                    {section.title}
                  </h4>
                  {"isGrid" in section && section.isGrid ? (
                    <div className="grid grid-cols-4 gap-1">
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-[10px] sm:text-sm bg-slate-800 hover:bg-emerald-600 px-1.5 sm:px-2 py-1 rounded text-center transition-colors"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-0.5 sm:space-y-1">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className={`text-[11px] sm:text-sm hover:text-emerald-400 transition-colors flex items-center gap-1.5 ${
                              "highlight" in link && link.highlight
                                ? "text-emerald-400 font-semibold"
                                : ""
                            }`}
                          >
                            {"hasArrow" in link && link.hasArrow && (
                              <FaArrowLeft className="text-[10px]" />
                            )}
                            {"icon" in link && link.icon && (
                              <span className="text-[10px]">{link.icon}</span>
                            )}
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] sm:text-sm">
            <div className="text-center md:text-left">
              <div className="text-slate-400">
                © {new Date().getFullYear()} {COMPANY_INFO.name} Pty Ltd. All
                rights reserved. {COMPANY_INFO.abn}
              </div>
              <div className="text-slate-500 text-[9px] sm:text-[11px] mt-1">
                ASIC licensed credit repair service ({COMPANY_INFO.acl}).
                Results vary. Past results do not guarantee future outcomes.
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end space-y-2">
              <div className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-4">
                {LEGAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-emerald-400 transition text-[10px] sm:text-sm"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>

              <div className="text-[9px] sm:text-[11px] text-gray-500 bg-white/5 px-2 sm:px-2.5 py-1 rounded">
                Last Updated: {lastUpdated}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
