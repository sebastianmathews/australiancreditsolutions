"use client";

import Image from "next/image";

const lenders = [
  { name: "Westpac", logo: "/images/iloveimg-resized/Westpac.png" },
  { name: "ANZ", logo: "/images/iloveimg-resized/ANZ Bank New Zealand.png" },
  { name: "GE Money", logo: "/images/iloveimg-resized/gemoney.png" },
  { name: "CommBank", logo: "/images/iloveimg-resized/coomonwealthbank.png" },
  { name: "Credit Corp", logo: "/images/iloveimg-resized/creditcorpgroup.png" },
  { name: "Flexirent", logo: "/images/iloveimg-resized/flexi rent.png" },
  { name: "Latitude", logo: "/images/iloveimg-resized/Latitude Financial Service.png" },
  { name: "NAB", logo: "/images/iloveimg-resized/National Australia Bank.png" },
  { name: "St George", logo: "/images/iloveimg-resized/St George Bank.png" },
  { name: "Origin", logo: "/images/iloveimg-resized/Origin Energy.png" },
  { name: "Dodo", logo: "/images/iloveimg-resized/dodo.png" },
  { name: "Panthera", logo: "/images/iloveimg-resized/Panthera Finance.png" },
];

const LenderLogos = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">
          Defaults We Remove <span className="text-emerald-600">Every Day</span>
        </h2>

        <p className="text-gray-600 mb-10 text-base md:text-lg">
          We successfully remove defaults from Australia&apos;s biggest banks and credit providers
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {lenders.map((lender) => (
            <div
              key={lender.name}
              className="bg-white border border-gray-200 rounded-lg p-5 flex items-center justify-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={lender.logo}
                alt={lender.name}
                width={100}
                height={50}
                className="object-contain h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LenderLogos;
