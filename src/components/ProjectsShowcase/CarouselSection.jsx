import React, { useState, useEffect } from 'react';
import satu from '../../assets/carousel-image/1.png';
import dua from '../../assets/carousel-image/2.png';
import tiga from '../../assets/carousel-image/3.png';
import empat from '../../assets/carousel-image/4.png';
import lima from '../../assets/carousel-image/5.png';

export default function AutoCarousel() {
  const slides = [satu, dua, tiga, empat, lima];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
          <div
            className="h-full bg-white"
            style={{
              width: isPlaying ? '100%' : '0%',
              animation: isPlaying ? 'progress 4s linear infinite' : 'none'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
