import React from 'react';
import { Phone, Star } from 'lucide-react';

const TopBar: React.FC = () => {
  const currentDate = new Date();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  const updatedText = `Updated: ${month} ${year}`;

  return (
    <div className="bg-blue-950 py-2 px-4 sm:px-6 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center sm:justify-start">
          <a href="tel:0489265737" className="text-white/90 hover:text-white flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-[11px] sm:text-xs">0489 265 737</span>
          </a>
          <span className="text-yellow-400 flex items-center gap-1 text-[11px] sm:text-xs">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            4.9/5 (976+ Reviews)
          </span>
        </div>
        <span className="text-white/70 text-[10px] sm:text-[11px]">{updatedText}</span>
      </div>
    </div>
  );
};

export default TopBar;
