import { Academic } from '@/src/types/academic';
import Image from 'next/image';


interface AcademicBadgeProps {
  children: React.ReactNode;
}

const AcademicBadge = ({ children }: AcademicBadgeProps) => (
  <span className="bg-[#1f1f1f] text-[#999999] text-[9px] md:text-xs px-2 py-1 rounded-full whitespace-nowrap hidden md:inline-block">
    {children}
  </span>
);

const AcademicCard = ({ academics }: { academics: Academic }) => (
  <div className="bg-[#0A0A0B] border border-[#1f1f1f] rounded-xl p-3 md:p-6 transition-all hover:border-[#333333]">
    {/* Top Section: Logo, Info, Category, and Duration */}
    <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-3 md:space-y-0 mb-4">
      <div className="flex items-center space-x-3 md:space-x-4">
        <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
          <Image 
            src={academics.logo_url} 
            alt={academics.institution} 
            fill 
            className="rounded-md md:rounded-lg object-cover" 
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className="text-white font-semibold text-sm md:text-lg truncate">{academics.institution}</h3>
            <AcademicBadge>{academics.degree}</AcademicBadge>
          </div>
          <p className="text-[#999999] text-[10px] md:text-sm truncate">{academics.website}</p>
        </div>
      </div>
      <div className="text-white font-bold md:font-semibold text-sm md:text-lg border-t border-[#1f1f1f] md:border-none pt-3 md:pt-0">
        {academics.duration}
      </div>
    </div>

    {/* Description Box */}
    <div className="bg-black border border-[#1a1a1a] rounded-xl p-4 space-y-2">
      <h4 className="text-white font-semibold text-sm md:text-base">{academics.major}</h4>
      <p className="text-[#999999] text-[12px] md:text-sm leading-relaxed">
        {academics.description}
      </p>
    </div>
  </div>
);

export default AcademicCard;