// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import { Shield, XCircle, Target, Zap, Home, Car, CreditCard, Briefcase, Key, Lock, FileText, FileMinus, MapPin, BookOpen, Users, Star, FileCheck, AlertCircle, HeartCrack } from 'lucide-react';
import {
  coreServices,
  defaultRemovalServices,
  loanTypeServices,
  advancedServices,
  locations,
  educationMenu,
  aboutMenu,
  educationFooterLinks,
} from '@/lib/navigation';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <svg className="h-11 w-auto" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E3A8A" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
            <circle cx="22" cy="25" r="18" fill="url(#logoGrad)" />
            <text x="22" y="30" textAnchor="middle" fill="white" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="10">ACS</text>
            <text x="52" y="22" fill="#172554" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="12">Australian</text>
            <text x="52" y="36" fill="#172554" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="12">Credit Solutions</text>
          </svg>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {/* Services Mega Menu */}
          <div className="relative group">
            <Link href="/credit-repair-australia" className="font-medium text-sm text-gray-700 hover:text-emerald-600 flex items-center gap-1">
              Services <span className="text-xs transition-transform group-hover:rotate-180">▾</span>
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
                        idx === 0 ? 'p-3 bg-gradient-to-br from-emerald-50 to-blue-50 mb-2 border border-emerald-200 rounded-lg' : ''
                      }`}
                    >
                      {idx === 0 && <strong className="block text-emerald-600 text-sm">{link.label}</strong>}
                      {idx === 0 && link.description && (
                        <span className="text-xs text-gray-500">{link.description}</span>
                      )}
                      {idx !== 0 && link.label}
                    </Link>
                  ))}
                </div>
                {/* Default Removal */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase pb-3 mb-3 border-b-2 border-emerald-500">
                    <XCircle className="w-4 h-4" /> {defaultRemovalServices.title}
                  </div>
                  {defaultRemovalServices.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className={`block py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-600 hover:pl-4 transition-all ${
                        idx === 0 ? 'p-3 bg-gradient-to-br from-emerald-50 to-blue-50 mb-2 border border-emerald-200 rounded-lg' : ''
                      }`}
                    >
                      {idx === 0 && <strong className="block text-emerald-600 text-sm">{link.label}</strong>}
                      {idx === 0 && link.description && (
                        <span className="text-xs text-gray-500">{link.description}</span>
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
                      'Home Loans': <Home className="w-5 h-5" />,
                      'Car Loans': <Car className="w-5 h-5" />,
                      'Personal Loans': <CreditCard className="w-5 h-5" />,
                      'Business Loans': <Briefcase className="w-5 h-5" />,
                      'First Home Buyers': <Key className="w-5 h-5" />,
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
                      'Identity Theft & Fraud': <Lock className="w-5 h-5" />,
                      'Bankruptcy Credit Repair': <FileText className="w-5 h-5" />,
                      'After Debt Agreement (Part IX)': <FileMinus className="w-5 h-5" />,
                      'After Divorce': <HeartCrack className="w-5 h-5" />,
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
                <Link href="#free-assessment" className="flex items-center gap-1.5 bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-emerald-700 transition-all">Get Free Assessment →</Link>
                <span className="text-xs text-gray-500">Find out if we can help in 60 seconds</span>
              </div>
            </div>
          </div>

          {/* Locations Mega Menu */}
          <div className="relative group">
            <Link href="/locations" className="font-medium text-sm text-gray-700 hover:text-emerald-600 flex items-center gap-1">
              Locations <span className="text-xs transition-transform group-hover:rotate-180">▾</span>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white min-w-[800px] rounded-2xl shadow-xl border border-gray-100 p-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-1 transition-all duration-200 z-50">
              <div className="grid grid-cols-5 divide-x divide-gray-100 p-6">
                {Object.entries(locations).map(([key, region]) => (
                  <div key={key} className="px-3 py-2">
                    <div className="text-[13px] font-semibold text-blue-900 uppercase pb-2 mb-1 border-b-2 border-emerald-500">{region.title}</div>
                    {region.links.map((link, idx) => (
                      <Link key={idx} href={link.href} className="block py-1.5 text-[13px] font-medium text-gray-600 hover:text-emerald-600 hover:pl-1 transition-all">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 p-4 border-t border-gray-100 rounded-b-2xl text-center">
                <Link href="/locations" className="text-sm font-semibold text-emerald-600 hover:underline">View All Locations →</Link>
              </div>
            </div>
          </div>

          {/* Education Mega Menu */}
          <div className="relative group">
            <Link href="/education" className="font-medium text-sm text-gray-700 hover:text-emerald-600 flex items-center gap-1">
              Education <span className="text-xs transition-transform group-hover:rotate-180">▾</span>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white min-w-[820px] rounded-2xl shadow-xl border border-gray-100 p-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-1 transition-all duration-200 z-50">
              <div className="grid grid-cols-4 divide-x divide-gray-100 p-5">
                {/* Credit Basics */}
                <div className="px-4">
                  <Link href="/credit-basics-guides" className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase pb-2.5 mb-2 border-b-2 border-emerald-500 hover:text-emerald-600">
                    <BookOpen className="w-5 h-5" /> {educationMenu.creditBasics.title}
                  </Link>
                  {educationMenu.creditBasics.links.map((link, idx) => (
                    <Link key={idx} href={link.href} className="block py-1.5 px-2.5 text-[13px] font-medium text-gray-600 hover:bg-gray-50 hover:text-emerald-600 hover:pl-3.5 rounded-md transition-all">
                      {link.label}
                    </Link>
                  ))}
                </div>
                {/* Improving Credit */}
                <div className="px-4">
                  <Link href="/improving-credit" className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase pb-2.5 mb-2 border-b-2 border-emerald-500 hover:text-emerald-600">
                    <Star className="w-5 h-5" /> {educationMenu.improving.title}
                  </Link>
                  {educationMenu.improving.links.map((link, idx) => (
                    <Link key={idx} href={link.href} className="block py-1.5 px-2.5 text-[13px] font-medium text-gray-600 hover:bg-gray-50 hover:text-emerald-600 hover:pl-3.5 rounded-md transition-all">
                      {link.label}
                    </Link>
                  ))}
                </div>
                {/* Bad Credit Loans */}
                <div className="px-4">
                  <Link href="/bad-credit-loans" className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase pb-2.5 mb-2 border-b-2 border-emerald-500 hover:text-emerald-600">
                    <CreditCard className="w-5 h-5" /> {educationMenu.badCreditLoans.title}
                  </Link>
                  {educationMenu.badCreditLoans.links.map((link, idx) => (
                    <Link key={idx} href={link.href} className="block py-1.5 px-2.5 text-[13px] font-medium text-gray-600 hover:bg-gray-50 hover:text-emerald-600 hover:pl-3.5 rounded-md transition-all">
                      {link.label}
                    </Link>
                  ))}
                </div>
                {/* Legal & Debt */}
                <div className="px-4">
                  <Link href="/legal-debt-issues" className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase pb-2.5 mb-2 border-b-2 border-emerald-500 hover:text-emerald-600">
                    <FileCheck className="w-5 h-5" /> {educationMenu.legalDebt.title}
                  </Link>
                  {educationMenu.legalDebt.links.map((link, idx) => (
                    <Link key={idx} href={link.href} className="block py-1.5 px-2.5 text-[13px] font-medium text-gray-600 hover:bg-gray-50 hover:text-emerald-600 hover:pl-3.5 rounded-md transition-all">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-4 border-t border-gray-100 rounded-b-2xl flex items-center justify-between">
                <div className="flex gap-5 text-xs font-semibold text-gray-600">
                  {educationFooterLinks.map((link, idx) => (
                    <Link key={idx} href={link.href} className="hover:text-emerald-600">{link.label}</Link>
                  ))}
                </div>
                <Link href="/your-legal-rights" className="text-sm font-semibold text-emerald-600 hover:underline">Know Your Legal Rights →</Link>
              </div>
            </div>
          </div>

          {/* About Dropdown */}
          <div className="relative group">
            <Link href="/about" className="font-medium text-sm text-gray-700 hover:text-emerald-600 flex items-center gap-1">
              About <span className="text-xs transition-transform group-hover:rotate-180">▾</span>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white min-w-[220px] rounded-xl shadow-xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-1 transition-all duration-200 z-50">
              {aboutMenu.map((link, idx) => (
                <Link key={idx} href={link.href} className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-600 hover:pl-6 transition-all">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className="font-medium text-sm text-gray-700 hover:text-emerald-600">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a href="tel:0489265737" className="flex items-center gap-1.5 font-semibold text-sm text-blue-900">📞 0489 265 737</a>
          <a href="#free-assessment" className="bg-gradient-to-br from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all">Free Assessment</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl">☰</button>
      </div>
    </header>
  );
};

export default Navbar;