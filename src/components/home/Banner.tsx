import Image from "next/image";
import AssessmentForm from "./AssessmentForm";
import { FaCheck, FaStar, FaShieldAlt, FaMoneyBillWave, FaClock, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-linear-to-b from-sky-50 to-white px-4 sm:px-6 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Founder Strip */}
          <div className="flex items-center gap-3 sm:gap-4 bg-white border border-gray-100 rounded-xl p-3 sm:p-4 shadow-sm mb-4 sm:mb-5">
            <Image
              src="/elisa.jpeg"
              alt="Elisa Rothschild"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-md"
            />
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-xs sm:text-sm">
                Led by Elisa Rothschild
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500">
                BA/LLB • Principal Lawyer & Credit Specialist
              </span>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4">
            <FaCheck /> Award Winner 2022 • 2023 • 2024
          </div>

          {/* H1 */}
          <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight text-gray-900 mb-2 sm:mb-3">
            Credit Repair Australia —{" "}
            <span className="text-emerald-600">
              Remove Defaults & Fix Your Credit File Fast
            </span>
          </h1>

          {/* H2 */}
          <h2 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4">
            <span className="text-red-600">Rejected For a Loan?</span> We Can
            Help You Get Approved Again
          </h2>

          {/* Intro */}
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-2 sm:mb-3">
            <strong>Australian Credit Solutions</strong> is Australia's leading{" "}
            <strong> credit repair</strong> service. If a{" "}
            <strong>default on your credit file</strong> is blocking a home
            loan, car finance, or personal loan, our award-winning legal team
            can help. With a <strong>98% success rate</strong>, we've helped
            over 5,000 Australians <strong>fix their credit</strong> and get
            approved again.
          </p>

          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
            That default is costing you{" "}
            <strong>thousands in higher interest</strong> or blocking approval
            entirely. Let us fix it.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <a
              href="#free-assessment"
              className="w-full sm:w-auto text-center bg-linear-to-br from-emerald-600 to-emerald-400 text-white px-5 sm:px-7 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:-translate-y-0.5 transition"
            >
              Check If My Default Can Be Removed <FaArrowRight className="inline ml-1" />
            </a>
            <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              <FaClock /> Takes 60 Seconds
            </span>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-wrap gap-3 sm:gap-5 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500 flex">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </span>{" "}
              <strong className="text-gray-900">4.9/5</strong> from 976+ Reviews
            </div>
            <div className="flex items-center gap-1">
              <FaShieldAlt className="text-emerald-600" /> <strong className="text-gray-900">ASIC Licensed</strong> ACL
              532003
            </div>
            <div className="flex items-center gap-1">
              <FaMoneyBillWave className="text-emerald-600" /> <strong className="text-gray-900">No Win No Fee</strong>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div id="free-assessment">
          <AssessmentForm />
        </div>
      </div>
    </section>
  );
};

export default Banner;
