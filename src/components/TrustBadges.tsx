import React from 'react';
import { Star, Check, DollarSign, Shield } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <section className="bg-blue-950 py-8 px-6">
      <div className="max-w-6xl mx-auto flex justify-center flex-wrap gap-8">
        <div className="flex items-center gap-3 text-white">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-yellow-400 text-xl">
            <Star className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <strong className="block text-base font-bold">4.9/5 Rating</strong>
            976+ Verified Reviews
          </div>
        </div>
        <div className="flex items-center gap-3 text-white">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-yellow-400 text-xl">
            <Check className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <strong className="block text-base font-bold">98% Success Rate</strong>
            When We Take Cases
          </div>
        </div>
        <div className="flex items-center gap-3 text-white">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-yellow-400 text-xl">
            <DollarSign className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <strong className="block text-base font-bold">No Win No Fee</strong>
            $330 Admin Fee Only
          </div>
        </div>
        <div className="flex items-center gap-3 text-white">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-yellow-400 text-xl">
            <Shield className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <strong className="block text-base font-bold">ASIC Licensed</strong>
            ACL 532003
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;