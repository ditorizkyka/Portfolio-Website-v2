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
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Deteksi perangkat
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Cek saat pertama kali render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Carousel auto play
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  // ✅ Komponen bersama
  const CarouselWrapper = ({ height }) => (
    <div className={`relative w-full ${height} rounded-xl overflow-hidden shadow-2xl`}>
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((image, index) => (
          <div key={index} className="min-w-full h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div
          className="h-full bg-white"
          style={{
            width: isPlaying ? '100%' : '0%',
            animation: isPlaying ? 'progress 4s linear infinite' : 'none',
          }}
        />
      </div>
    </div>
  );

  // ✅ Tampilkan berdasarkan perangkat
  if (isMobile) {
    return (
      <div className="max-w-md mx-auto mb-15 mt-10">
        <CarouselWrapper height="h-40" />

        <style jsx>{`
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  } else {
    return (
      <div className="max-w-4xl mx-auto mb-20">
        <CarouselWrapper height="h-80" />

        <style jsx>{`
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }
}
