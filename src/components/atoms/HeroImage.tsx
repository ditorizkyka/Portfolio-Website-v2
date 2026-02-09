import Image, { StaticImageData } from 'next/image';

interface HeroImageProps {
  src: string | StaticImageData;
}

const HeroImage = ({ src }: HeroImageProps) => (
  <div className="relative overflow-hidden border border-gray-900 rounded-xl md:rounded-lg 
                  w-24 h-24 md:w-70 md:h-70">
    <Image 
      src={src} 
      alt="Andito Rizkyka R." 
      fill 
      priority 
      className="object-cover" 
      sizes="(max-width: 768px) 96px, 360px"
    />
  </div>
);

export default HeroImage;