// Navigation configuration for Navbar
import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
}

export interface NavSection {
  title: string;
  icon?: LucideIcon;
  links: NavLink[];
}

export const coreServices: NavSection = {
  title: 'Core Services',
  links: [
    {
      label: 'Credit Repair Australia',
      href: '/credit-repair-australia',
      description: 'Complete credit file repair',
    },
    { label: 'Credit Enquiry Removal', href: '/credit-enquiry-removal' },
    { label: 'Court Judgment Removal', href: '/court-judgment-removal' },
    { label: 'Credit Report Analysis', href: '/credit-report-analysis' },
    { label: 'Credit Score Improvement', href: '/credit-score-improvement' },
  ],
};

export const defaultRemovalServices: NavSection = {
  title: 'Default Removal',
  links: [
    {
      label: 'Default Removal',
      href: '/default-removal',
      description: 'Remove defaults from credit file',
    },
    { label: 'Paid Default Removal', href: '/credit-repair-paid-defaults' },
    { label: 'Multiple Defaults', href: '/credit-repair-multiple-defaults' },
    { label: 'Telco & Utility Defaults', href: '/telco-utility-default-removal' },
    { label: 'Incorrect Default Removal', href: '/incorrect-default-removal' },
    { label: 'Equifax / Experian / Illion', href: '/equifax-experian-illion-defaults' },
  ],
};

export const loanTypeServices: NavSection = {
  title: 'By Loan Type',
  links: [
    { label: 'Home Loans', href: '/credit-repair-for-home-loan' },
    { label: 'Car Loans', href: '/credit-repair-for-car-loan' },
    { label: 'Personal Loans', href: '/credit-repair-for-personal-loan' },
    { label: 'Business Loans', href: '/credit-repair-for-business-loan' },
    { label: 'First Home Buyers', href: '/credit-repair-for-first-home-buyers' },
  ],
};

export const advancedServices: NavSection = {
  title: 'Advanced & Situational',
  links: [
    { label: 'Identity Theft & Fraud', href: '/identity-theft-credit-fix' },
    { label: 'Bankruptcy Credit Repair', href: '/bankruptcy-credit-repair' },
    { label: 'After Debt Agreement (Part IX)', href: '/credit-repair-after-debt-agreement' },
    { label: 'After Divorce', href: '/credit-repair-after-divorce' },
  ],
};

export const locations = {
  nsw: {
    title: 'New South Wales',
    links: [
      { label: 'NSW Overview', href: '/credit-repair-nsw' },
      { label: 'Sydney', href: '/credit-repair-sydney' },
      { label: 'Western Sydney', href: '/credit-repair-western-sydney' },
      { label: 'Newcastle', href: '/credit-repair-newcastle' },
      { label: 'Wollongong', href: '/credit-repair-wollongong' },
      { label: 'Central Coast', href: '/credit-repair-central-coast' },
    ],
  },
  vic: {
    title: 'Victoria',
    links: [
      { label: 'VIC Overview', href: '/credit-repair-vic' },
      { label: 'Melbourne', href: '/credit-repair-melbourne' },
      { label: 'Greater Melbourne', href: '/credit-repair-greater-melbourne' },
      { label: 'Geelong', href: '/credit-repair-geelong' },
      { label: 'Ballarat', href: '/credit-repair-ballarat' },
      { label: 'Bendigo', href: '/credit-repair-bendigo' },
    ],
  },
  qld: {
    title: 'Queensland',
    links: [
      { label: 'QLD Overview', href: '/credit-repair-qld' },
      { label: 'Brisbane', href: '/credit-repair-brisbane' },
      { label: 'Gold Coast', href: '/credit-repair-gold-coast' },
      { label: 'Sunshine Coast', href: '/credit-repair-sunshine-coast' },
      { label: 'Ipswich', href: '/credit-repair-ipswich' },
      { label: 'Logan', href: '/credit-repair-logan' },
    ],
  },
  wa: {
    title: 'Western Australia',
    links: [
      { label: 'WA Overview', href: '/credit-repair-wa' },
      { label: 'Perth', href: '/credit-repair-perth' },
      { label: 'Greater Perth', href: '/credit-repair-greater-perth' },
    ],
  },
  sa: {
    title: 'South Australia',
    links: [
      { label: 'SA Overview', href: '/credit-repair-sa' },
      { label: 'Adelaide', href: '/credit-repair-adelaide' },
      { label: 'Greater Adelaide', href: '/credit-repair-greater-adelaide' },
    ],
  },
  act: {
    title: 'ACT',
    links: [
      { label: 'ACT Overview', href: '/credit-repair-act' },
      { label: 'Canberra', href: '/credit-repair-canberra' },
    ],
  },
  tas: {
    title: 'Tasmania',
    links: [
      { label: 'TAS Overview', href: '/credit-repair-tas' },
      { label: 'Hobart', href: '/credit-repair-hobart' },
      { label: 'Launceston', href: '/credit-repair-launceston' },
    ],
  },
  nt: {
    title: 'Northern Territory',
    links: [
      { label: 'NT Overview', href: '/credit-repair-nt' },
      { label: 'Darwin', href: '/credit-repair-darwin' },
    ],
  },
};

export const educationMenu = {
  creditBasics: {
    title: 'Credit Basics & Guides',
    links: [
      { label: 'How Credit Files Work', href: '/how-credit-files-work' },
      { label: 'What Affects Your Score', href: '/what-affects-credit-score' },
      { label: 'How Long Listings Stay', href: '/how-long-listings-stay' },
      { label: 'Credit Score', href: '/credit-score' },
    ],
  },
  improving: {
    title: 'Improving & Repairing Credit',
    links: [
      { label: 'Repayment History Impact', href: '/repayment-history-guide' },
      { label: 'Enquiries vs Defaults', href: '/enquiries-vs-defaults' },
      { label: 'How Enquiry Removal Works', href: '/how-enquiry-removal-works' },
      { label: 'Credit Score Explained', href: '/credit-score-explained' },
    ],
  },
  badCreditLoans: {
    title: 'Loans & Finance With Bad Credit',
    links: [
      { label: 'Home Loans With Bad Credit', href: '/home-loan-bad-credit' },
      { label: 'Car Loans With Defaults', href: '/car-loans-with-defaults' },
      { label: 'What Lenders Look At', href: '/what-lenders-look-at' },
    ],
  },
  legalDebt: {
    title: 'Legal & Debt Issues',
    links: [
      { label: 'Remove Court Judgment', href: '/remove-court-judgment-australia' },
      { label: 'Garnishee Orders', href: '/garnishee-order-australia' },
      { label: 'Part IX Debt Agreement', href: '/part-ix-debt-agreement' },
      { label: 'Debt Collectors', href: '/debt-collectors-australia' },
      { label: 'Bankruptcy & Credit Files', href: '/bankruptcy-credit-file' },
    ],
  },
};

export const aboutMenu = [
  { label: 'About Australian Credit Solutions', href: '/about' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Leadership & Legal Oversight', href: '/meet-elisa-rothschild' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Licensing & Compliance', href: '/licensing-compliance' },
  { label: 'Complaints Handling Policy', href: '/complaints-handling-policy' },
];

export const educationFooterLinks = [
  { label: '📊 Case Studies', href: '/case-studies' },
  { label: '❓ FAQs', href: '/faqs' },
  { label: '📝 Blog', href: '/blog' },
];

export const mainNav = [
  { label: 'Services', href: '/credit-repair-australia' },
  { label: 'Locations', href: '/locations' },
  { label: 'Education', href: '/education' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
