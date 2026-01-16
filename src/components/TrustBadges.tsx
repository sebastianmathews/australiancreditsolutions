import React from 'react';
import { Star, Check, DollarSign, Shield } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <section className="bg-blue-950 py-4 px-4 sm:py-8 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:flex sm:justify-center sm:flex-wrap gap-4 sm:gap-8">
        <div className="flex items-center gap-2 sm:gap-3 text-white">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-xl flex items-center justify-center text-yellow-400">
            <Star className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="text-[10px] sm:text-xs">
            <strong className="block text-sm sm:text-base font-bold">4.9/5 Rating</strong>
            976+ Verified Reviews
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-white">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-xl flex items-center justify-center text-yellow-400">
            <Check className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="text-[10px] sm:text-xs">
            <strong className="block text-sm sm:text-base font-bold">98% Success Rate</strong>
            When We Take Cases
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-white">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-xl flex items-center justify-center text-yellow-400">
            <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="text-[10px] sm:text-xs">
            <strong className="block text-sm sm:text-base font-bold">No Win No Fee</strong>
            $330 Admin Fee Only
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-white">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-xl flex items-center justify-center text-yellow-400">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="text-[10px] sm:text-xs">
            <strong className="block text-sm sm:text-base font-bold">ASIC Licensed</strong>
            ACL 532003
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;