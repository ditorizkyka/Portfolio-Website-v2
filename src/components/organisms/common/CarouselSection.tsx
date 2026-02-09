"use client";

import React, { useState, useEffect } from 'react';


const CarouselSection: React.FC<{ carousels : Carousel[]}> = ( { carousels }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch data dari tabel carousel_content
  

  // Logic Auto-play
  console.log(carousels);
  useEffect(() => {
    if (carousels.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carousels.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carousels.length]);

  

  return (
    <div className="max-w-4xl mx-auto mb-15 mt-10 md:mb-20  md:px-0">
      <div className="relative w-full h-40 md:h-80 rounded-xl overflow-hidden shadow-2xl bg-[#0A0A0B] border border-[#1f1f1f]">
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carousels.map((carousel) => (
            <CarouselImage 
              key={carousel.id} 
              src={carousel.image_url} 
              alt={carousel.pages || "Carousel"} 
            />
          ))}
        </div>

        {/* Progress Bar Container */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
          <div
            key={currentSlide} // Reset animasi setiap slide berubah
            className="h-full bg-[#6DD33D] animate-progress-timer"
          />
        </div>
      </div>
    </div>
  );
};

import Image from 'next/image';
import { Carousel } from '@/src/types/carousel';

interface CarouselImageProps {
  src: string;
  alt: string;
}

const CarouselImage = ({ src, alt }: CarouselImageProps) => (
  <div className="min-w-full h-full relative">
    <Image
      src={src}
      alt={alt}
      fill
      priority
      className="object-cover w-full h-full"
      sizes="(max-width: 768px) 100vw, 896px"
    />
  </div>
);



export default CarouselSection;