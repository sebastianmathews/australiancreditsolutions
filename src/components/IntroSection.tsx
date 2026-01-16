import React from 'react';
import Link from 'next/link';

const IntroSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-xl font-bold text-gray-900 mb-6 text-center md:text-[32px]">
          What is Credit Repair & How Does It Work in Australia?
        </h2>
        <div className="text-sm text-gray-600 leading-relaxed md:text-base">
          <p className="mb-4">
            <strong className="text-gray-900">Credit repair</strong> is the process of identifying and removing incorrect, incomplete, or improperly listed negative information from your credit file. In Australia, credit providers must follow strict procedures under the <strong className="text-gray-900">Privacy Act 1988</strong> and the <strong className="text-gray-900">Credit Reporting Code</strong> before listing defaults, late payments, or other negative marks on your credit report.
          </p>
          <p className="mb-4">
            When these procedures aren&apos;t followed correctly — such as failing to send required notices, listing incorrect amounts, or not giving you proper opportunity to dispute — you have the legal right to challenge the listing and have it removed entirely.
          </p>
          <div className="bg-gradient-to-br from-emerald-50/80 to-emerald-300/50 border-l-4 border-emerald-600 px-6 py-5 rounded-r-xl my-6">
            <p className="text-base text-gray-700 md:text-lg">
              <strong className="text-gray-900">The reality:</strong> Many Australians have defaults on their credit file that shouldn&apos;t be there. Credit providers make mistakes. They list defaults without following proper procedures. And ordinary Australians pay the price with years of loan rejections and higher interest rates.
            </p>
          </div>
          <p className="mb-4">
            At Australian Credit Solutions, our legal team investigates every default we take on. We examine whether the credit provider followed all legal requirements. If they didn&apos;t, we build a case for removal. That&apos;s why we maintain a <strong className="text-gray-900">98% success rate</strong> on the cases we accept — we only take on cases where we believe we can win.
          </p>
        </div>
        <div className="text-center mt-8">
          <Link href="/services" className="text-emerald-600 font-semibold hover:underline text-lg">
            Explore Our Credit Repair Services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;