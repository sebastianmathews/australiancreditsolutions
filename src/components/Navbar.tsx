// components/Navbar.tsx
"use client";

import {
  aboutMenu,
  advancedServices,
  coreServices,
  defaultRemovalServices,
  educationFooterLinks,
  educationMenu,
  loanTypeServices,
  locations,
} from "@/lib/navigation";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Car,
  ChevronDown,
  ChevronRight,
  CreditCard,
  FileCheck,
  FileMinus,
  FileText,
  HeartCrack,
  Home,
  Key,
  Lock,
  Menu,
  Phone,
  Shield,
  Star,
  Target,
  X,
  XCircle,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-0 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="">
          <Image
            src="/logo.png"
            alt="Australian Credit Solutions"
            width={250}
            height={80}
            className="w-48 h-12 sm:w-auto max-w-62.5"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* Services Mega Menu */}
          <div className="relative group">
            <Link
              href="/credit-repair-australia"
              className="font-medium text-sm text-gray-700 hover:text-emerald-600 flex items-center gap-1"
            >
              Services{" "}
              <span className="text-xs transition-transform group-hover:rotate-180">
                ▾
              </span>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white min-w-[880px] rounded-2xl shadow-xl border border-gray-100 p-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-1 transition-all duration-200 z-50">
              <div className="grid grid-cols-4 divide-x divide-gray-100">
                {/* Core Services */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase pb-3 mb-3 border-b-2 border-emerald-500">
                    <Shield className="w-4 h-4" /> {coreServices.title}
                  </div>
                  {coreServices.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className={`block py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-600 hover:pl-4 transition-all ${
                        idx === 0
                          ? "p-3 bg-gradient-to-br from-emerald-50 to-blue-50 mb-2 border border-emerald-200 rounded-lg"
                          : ""
                      }`}
                    >
                      {idx === 0 && (
                        <strong className="block text-emerald-600 text-sm">
                          {link.label}
                        </strong>
                      )}
                      {idx === 0 && link.description && (
                        <span className="text-xs text-gray-500">
                          {link.description}
                        </span>
                      )}
                      {idx !== 0 && link.label}
                    </Link>
                  ))}
                </div>
                {/* Default Removal */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase pb-3 mb-3 border-b-2 border-emerald-500">
                    <XCircle className="w-4 h-4" />{" "}
                    {defaultRemovalServices.title}
                  </div>
                  {defaultRemovalServices.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className={`block py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-600 hover:pl-4 transition-all ${
                        idx === 0
                          ? "p-3 bg-gradient-to-br from-emerald-50 to-blue-50 mb-2 border border-emerald-200 rounded-lg"
                          : ""
                      }`}
                    >
                      {idx === 0 && (
                        <strong className="block text-emerald-600 text-sm">
                          {link.label}
                        </strong>
                      )}
                      {idx === 0 && link.description && (
                        <span className="text-xs text-gray-500">
                          {link.description}
                        </span>
                      )}
                      {idx !== 0 && link.label}
                    </Link>
                  ))}
                </div>
                {/* By Loan Type */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase pb-3 mb-3 border-b-2 border-emerald-500">
                    <Target className="w-4 h-4" /> {loanTypeServices.title}
                  </div>
                  {loanTypeServices.links.map((link, idx) => {
                    const iconMap: { [key: string]: React.ReactNode } = {
                      "Home Loans": <Home className="w-5 h-5" />,
                      "Car Loans": <Car className="w-5 h-5" />,
                      "Personal Loans": <CreditCard className="w-5 h-5" />,
                      "Business Loans": <Briefcase className="w-5 h-5" />,
                      "First Home Buyers": <Key className="w-5 h-5" />,
                    };
                    return (
                      <Link
                        key={idx}
                        href={link.href}
                        className="flex items-center gap-2.5 py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-600 hover:pl-4 transition-all"
                      >
                        {iconMap[link.label]} {link.label}
                      </Link>
                    );
                  })}
                </div>
                {/* Advanced & Situational */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase pb-3 mb-3 border-b-2 border-emerald-500">
                    <Zap className="w-4 h-4" /> {advancedServices.title}
                  </div>
                  {advancedServices.links.map((link, idx) => {
                    const iconMap: { [key: string]: React.ReactNode } = {
                      "Identity Theft & Fraud": <Lock className="w-5 h-5" />,
                      "Bankruptcy Credit Repair": (
                        <FileText className="w-5 h-5" />
                      ),
                      "After Debt Agreement (Part IX)": (
                        <FileMinus className="w-5 h-5" />
                      ),
                      "After Divorce": <HeartCrack className="w-5 h-5" />,
                    };
                    return (
                      <Link
                        key={idx}
                        href={link.href}
                        className="flex items-center gap-2.5 py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-600 hover:pl-4 transition-all"
                      >
                        {iconMap[link.label]} {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="bg-gray-50 p-4 border-t border-gray-100 rounded-b-2xl flex items-center justify-between">
                <Link
                  href="#free-assessment"
                  className="flex items-center gap-1.5 bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-emerald-700 transition-all"
                >
                  Get Free Assessment <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-gray-500">
                  Find out if we can help in 60 seconds
                </span>
              </div>
            </div>
          </div>

          {/* Locations Mega Menu */}
          <div className="relative group">
            <Link
              href="/locations"
              className="font-medium text-sm text-gray-700 hover:text-emerald-600 flex items-center gap-1"
            >
              Locations{" "}
              <span className="text-xs transition-transform group-hover:rotate-180">
                ▾
              </span>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white min-w-[800px] rounded-2xl shadow-xl border border-gray-100 p-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-1 transition-all duration-200 z-50">
              <div className="grid grid-cols-5 divide-x divide-gray-100 p-6">
                {Object.entries(locations).map(([key, region]) => (
                  <div key={key} className="px-3 py-2">
                    <div className="text-[13px] font-semibold text-blue-900 uppercase pb-2 mb-1 border-b-2 border-emerald-500">
                      {region.title}
                    </div>
                    {region.links.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        className="block py-1.5 text-[13px] font-medium text-gray-600 hover:text-emerald-600 hover:pl-1 transition-all"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 p-4 border-t border-gray-100 rounded-b-2xl text-center">
                <Link
                  href="/locations"
                  className="text-sm font-semibold text-emerald-600 hover:underline inline-flex items-center gap-1"
                >
                  View All Locations <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Education Mega Menu */}
          <div className="relative group">
            <Link
              href="/education"
              className="font-medium text-sm text-gray-700 hover:text-emerald-600 flex items-center gap-1"
            >
              Education{" "}
              <span className="text-xs transition-transform group-hover:rotate-180">
                ▾
              </span>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white min-w-[820px] rounded-2xl shadow-xl border border-gray-100 p-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-1 transition-all duration-200 z-50">
              <div className="grid grid-cols-4 divide-x divide-gray-100 p-5">
                {/* Credit Basics */}
                <div className="px-4">
                  <Link
                    href="/credit-basics-guides"
                    className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase pb-2.5 mb-2 border-b-2 border-emerald-500 hover:text-emerald-600"
                  >
                    <BookOpen className="w-5 h-5" />{" "}
                    {educationMenu.creditBasics.title}
                  </Link>
                  {educationMenu.creditBasics.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="block py-1.5 px-2.5 text-[13px] font-medium text-gray-600 hover:bg-gray-50 hover:text-emerald-600 hover:pl-3.5 rounded-md transition-all"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                {/* Improving Credit */}
                <div className="px-4">
                  <Link
                    href="/improving-credit"
                    className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase pb-2.5 mb-2 border-b-2 border-emerald-500 hover:text-emerald-600"
                  >
                    <Star className="w-5 h-5" /> {educationMenu.improving.title}
                  </Link>
                  {educationMenu.improving.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="block py-1.5 px-2.5 text-[13px] font-medium text-gray-600 hover:bg-gray-50 hover:text-emerald-600 hover:pl-3.5 rounded-md transition-all"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                {/* Bad Credit Loans */}
                <div className="px-4">
                  <Link
                    href="/bad-credit-loans"
                    className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase pb-2.5 mb-2 border-b-2 border-emerald-500 hover:text-emerald-600"
                  >
                    <CreditCard className="w-5 h-5" />{" "}
                    {educationMenu.badCreditLoans.title}
                  </Link>
                  {educationMenu.badCreditLoans.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="block py-1.5 px-2.5 text-[13px] font-medium text-gray-600 hover:bg-gray-50 hover:text-emerald-600 hover:pl-3.5 rounded-md transition-all"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                {/* Legal & Debt */}
                <div className="px-4">
                  <Link
                    href="/legal-debt-issues"
                    className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase pb-2.5 mb-2 border-b-2 border-emerald-500 hover:text-emerald-600"
                  >
                    <FileCheck className="w-5 h-5" />{" "}
                    {educationMenu.legalDebt.title}
                  </Link>
                  {educationMenu.legalDebt.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="block py-1.5 px-2.5 text-[13px] font-medium text-gray-600 hover:bg-gray-50 hover:text-emerald-600 hover:pl-3.5 rounded-md transition-all"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-4 border-t border-gray-100 rounded-b-2xl flex items-center justify-between">
                <div className="flex gap-5 text-xs font-semibold text-gray-600">
                  {educationFooterLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="hover:text-emerald-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/your-legal-rights"
                  className="text-sm font-semibold text-emerald-600 hover:underline inline-flex items-center gap-1"
                >
                  Know Your Legal Rights <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* About Dropdown */}
          <div className="relative group">
            <Link
              href="/about"
              className="font-medium text-sm text-gray-700 hover:text-emerald-600 flex items-center gap-1"
            >
              About{" "}
              <span className="text-xs transition-transform group-hover:rotate-180">
                ▾
              </span>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white min-w-[220px] rounded-xl shadow-xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-1 transition-all duration-200 z-50">
              {aboutMenu.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-600 hover:pl-6 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="font-medium text-sm text-gray-700 hover:text-emerald-600"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:0489265737"
            className="flex items-center gap-1.5 font-semibold text-sm text-blue-900"
          >
            <Phone className="w-4 h-4" /> 0489 265 737
          </a>
          <a
            href="#free-assessment"
            className="bg-gradient-to-br from-emerald-600 to-emerald-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all"
          >
            Free Assessment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] bg-white z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="px-4 py-4">
          {/* Mobile CTA */}
          <div className="flex flex-col gap-3 mb-6 pb-6 border-b border-gray-200">
            <a
              href="tel:0489265737"
              className="flex items-center justify-center gap-2 py-3 bg-blue-950 text-white rounded-lg font-semibold"
            >
              <Phone className="w-5 h-5" /> Call 0489 265 737
            </a>
            <a
              href="#free-assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 bg-gradient-to-br from-emerald-600 to-emerald-500 text-white rounded-lg font-semibold"
            >
              Free Assessment
            </a>
          </div>

          {/* Services Accordion */}
          <div className="border-b border-gray-200">
            <button
              className="w-full flex items-center justify-between py-4 text-gray-900 font-semibold"
              onClick={() => toggleSubmenu("services")}
            >
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-600" /> Services
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  activeSubmenu === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeSubmenu === "services" ? "max-h-[1000px] pb-4" : "max-h-0"
              }`}
            >
              <div className="pl-4 space-y-1">
                <p className="text-xs font-bold text-gray-500 uppercase mt-2 mb-2">
                  Core Services
                </p>
                {coreServices.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-gray-700 hover:text-emerald-600"
                  >
                    {link.label}
                  </Link>
                ))}
                <p className="text-xs font-bold text-gray-500 uppercase mt-4 mb-2">
                  Default Removal
                </p>
                {defaultRemovalServices.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-gray-700 hover:text-emerald-600"
                  >
                    {link.label}
                  </Link>
                ))}
                <p className="text-xs font-bold text-gray-500 uppercase mt-4 mb-2">
                  By Loan Type
                </p>
                {loanTypeServices.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 py-2 text-sm text-gray-700 hover:text-emerald-600"
                  >
                    <ChevronRight className="w-4 h-4" /> {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Locations Accordion */}
          <div className="border-b border-gray-200">
            <button
              className="w-full flex items-center justify-between py-4 text-gray-900 font-semibold"
              onClick={() => toggleSubmenu("locations")}
            >
              <span className="flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-600" /> Locations
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  activeSubmenu === "locations" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeSubmenu === "locations" ? "max-h-[800px] pb-4" : "max-h-0"
              }`}
            >
              <div className="pl-4 space-y-1">
                {Object.entries(locations).map(([key, region]) => (
                  <div key={key} className="mb-3">
                    <p className="text-xs font-bold text-gray-500 uppercase mt-2 mb-2">
                      {region.title}
                    </p>
                    <div className="grid grid-cols-2 gap-1">
                      {region.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-2 text-sm text-gray-700 hover:text-emerald-600"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Accordion */}
          <div className="border-b border-gray-200">
            <button
              className="w-full flex items-center justify-between py-4 text-gray-900 font-semibold"
              onClick={() => toggleSubmenu("education")}
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600" /> Education
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  activeSubmenu === "education" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeSubmenu === "education" ? "max-h-[600px] pb-4" : "max-h-0"
              }`}
            >
              <div className="pl-4 space-y-1">
                <p className="text-xs font-bold text-gray-500 uppercase mt-2 mb-2">
                  Credit Basics
                </p>
                {educationMenu.creditBasics.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-gray-700 hover:text-emerald-600"
                  >
                    {link.label}
                  </Link>
                ))}
                <p className="text-xs font-bold text-gray-500 uppercase mt-4 mb-2">
                  Improving Credit
                </p>
                {educationMenu.improving.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-gray-700 hover:text-emerald-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* About Accordion */}
          <div className="border-b border-gray-200">
            <button
              className="w-full flex items-center justify-between py-4 text-gray-900 font-semibold"
              onClick={() => toggleSubmenu("about")}
            >
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-emerald-600" /> About
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  activeSubmenu === "about" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeSubmenu === "about" ? "max-h-[300px] pb-4" : "max-h-0"
              }`}
            >
              <div className="pl-4 space-y-1">
                {aboutMenu.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-gray-700 hover:text-emerald-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Link */}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-4 text-gray-900 font-semibold"
          >
            <Phone className="w-5 h-5 text-emerald-600" /> Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[60px] bg-black/20 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
