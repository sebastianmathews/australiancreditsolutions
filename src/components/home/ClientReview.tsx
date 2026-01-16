import { HeroVideoDialog } from "../ui/hero-video-dialog";
import { FaChartLine, FaClock, FaArrowRight } from "react-icons/fa";

const ClientReview = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24 bg-linear-to-b from-white to-blue-50">
      <div className="text-center max-w-xl mx-auto mb-8 md:mb-10">
        <div className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-2">
          See The Proof
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Real Client, Real Results
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg px-2">
          Watch how we helped transform this client&apos;s credit file — with proof.
        </p>
      </div>

      <HeroVideoDialog
        className="block dark:hidden max-w-4xl mx-auto mb-8 md:mb-10 rounded-2xl"
        animationStyle="from-center"
        videoSrc="/video.mp4"
        thumbnailSrc="/clientreview.webp"
        thumbnailAlt="Client Review Video"
      />

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 mb-8 md:mb-10 max-w-3xl mx-auto">
        <div className="bg-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl border border-gray-200 shadow-sm text-center w-full sm:w-auto min-w-35">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-500 mb-1">
            <FaChartLine className="text-gray-400" />
            <span>Before</span>
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-red-600 mb-1">4XX</div>
          <div className="text-xs text-gray-500">2 Defaults on file</div>
        </div>

        <div className="text-2xl sm:text-3xl font-bold text-emerald-600 rotate-90 sm:rotate-0">
          <FaArrowRight />
        </div>

        <div className="bg-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl border border-gray-200 shadow-sm text-center w-full sm:w-auto min-w-35">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-500 mb-1">
            <FaChartLine className="text-gray-400" />
            <span>After</span>
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 mb-1">7XX</div>
          <div className="text-xs text-gray-500">0 Defaults — Clean file</div>
        </div>

        <div className="bg-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl border border-gray-200 shadow-sm text-center w-full sm:w-auto min-w-35">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-500 mb-1">
            <FaClock className="text-gray-400" />
            <span>Timeframe</span>
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-blue-900 mb-1">6 Weeks</div>
          <div className="text-xs text-gray-500">From start to finish</div>
        </div>
      </div>

      <div className="bg-white border-l-4 border-emerald-500 rounded-xl p-4 sm:p-6 text-center shadow-sm mb-6 md:mb-8 max-w-2xl mx-auto">
        <p className="italic text-gray-800 text-sm sm:text-base leading-relaxed mb-2">
          &quot;I went from rejected everywhere to approved for a $650k home loan at
          3.2%. I still can&apos;t believe it.&quot;
        </p>
        <p className="text-sm font-semibold text-gray-500">
          — Michael T, Brisbane
        </p>
      </div>

      <div className="text-center">
        <a
          href="#free-assessment"
          className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-4 text-sm font-bold rounded-xl bg-linear-to-r from-emerald-600 to-emerald-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          Get Your Free Assessment
          <FaArrowRight className="text-xs" />
        </a>
        <p className="mt-2 text-xs text-gray-500">
          Find out if we can do the same for you
        </p>
      </div>
    </div>
  );
};

export default ClientReview;
