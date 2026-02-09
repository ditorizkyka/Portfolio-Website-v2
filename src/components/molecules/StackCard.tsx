import { TechStack } from '@/src/types/techStack';
import { ChevronRight } from 'lucide-react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';



const StackCard = ({ stack }: { stack: TechStack }) => (
  <a
    href={stack.doc_url}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-[#0A0A0B] border border-[#1f1f1f] rounded-xl md:rounded-2xl p-3 md:px-4 md:py-3 
               hover:bg-[#0A0A0B]/50 hover:border-[#333333] transition-all duration-300 
               flex items-center justify-between gap-3"
  >
    <div className="flex items-center gap-4 min-w-0">
      <StackIcon src={stack.icon_url} alt={stack.name} />
      <div className="min-w-0">
        <h3 className="text-sm md:text-md font-semibold text-white truncate mb-2">
          {stack.name}
        </h3>
        <p className="text-[#999999] text-[10px] md:text-xs truncate">
          {stack.category}
        </p>
      </div>
    </div>
    <ChevronRight className="w-4 h-4 text-[#999999] group-hover:text-white group-hover:translate-x-1 transition-all" />
  </a>
);

interface StackIconProps {
  src: string | StaticImageData;
  alt: string;
}

const StackIcon = ({ src, alt }: StackIconProps) => (
  <div className="w-10 h-10 md:w-15 md:h-15 rounded-lg md:rounded-xl bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0 overflow-hidden p-1.5 md:p-2">
    <div className="relative w-full h-full">
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-contain" 
        sizes="(max-width: 768px) 24px, 40px"
      />
    </div>
  </div>
);

export default StackCard;