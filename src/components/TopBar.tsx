import React from 'react';
import Link from 'next/link';
import { Phone, Star } from 'lucide-react';

const TopBar: React.FC = () => {
  const currentDate = new Date();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  const updatedText = `Updated: ${month} ${year}`;

  return (
    <div className="bg-blue-950 py-2 px-6 text-xs">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a href="tel:0489265737" className="text-white/90 hover:text-white flex items-center gap-1.5">
            <Phone className="w-4 h-4" /> 0489 265 737
          </a>
          <span className="text-yellow-400 flex items-center gap-1"><Star className="w-4 h-4 fill-current" /> 4.9/5 (976+ Reviews)</span>
        </div>
        <span className="text-white/70 text-[11px]">{updatedText}</span>
      </div>
    </div>
  );
};

export default TopBar;