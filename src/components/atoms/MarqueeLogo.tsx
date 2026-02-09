import Image, { StaticImageData } from 'next/image';

interface MarqueeLogoProps {
  href: string;
  src: string | StaticImageData;
  alt: string;
}

const MarqueeLogo = ({ href, src, alt }: MarqueeLogoProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
  >
    <div className="relative w-20 h-20 md:w-32 md:h-32">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 80px, 128px"
      />
    </div>
  </a>
);

export default MarqueeLogo;