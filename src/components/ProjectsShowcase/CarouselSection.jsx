import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AutoCarousel() {
  const slides = [
    {
      id: 1,
      title: "Slide Pertama",
      content: "Ini adalah konten slide pertama dengan background gradien yang indah",
      bg: "bg-gradient-to-br from-purple-600 to-blue-600"
    },
    {
      id: 2,
      title: "Slide Kedua", 
      content: "Slide kedua dengan warna yang berbeda dan animasi yang smooth",
      bg: "bg-gradient-to-br from-pink-600 to-red-600"
    },
    {
      id: 3,
      title: "Slide Ketiga",
      content: "Slide terakhir dengan efek visual yang menarik dan responsif",
      bg: "bg-gradient-to-br from-green-600 to-teal-600"
    },
    {
      id: 4,
      title: "Slide Keempat",
      content: "Carousel ini akan berputar otomatis setiap 4 detik",
      bg: "bg-gradient-to-br from-orange-600 to-yellow-600"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying] = useState(true);

  // Auto slide functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  

  

  return (
    <div className="max-w-4xl mx-auto mb-15 " style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      
      
      <div className="relative w-full h-70 rounded-xl overflow-hidden shadow-2xl">
        {/* Slides Container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`min-w-full h-full flex items-center justify-center ${slide.bg} relative`}
            >
              <div className="text-center text-white p-8">
                <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-xl opacity-90 max-w-2xl drop-shadow-md">
                  {slide.content}
                </p>
              </div>
              
              {/* Slide Number */}
              <div className="absolute top-4 right-4 bg-black bg-opacity-30 text-white px-3 py-1 rounded-full text-sm">
                {index + 1} / {slides.length}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        
        
        

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
          <div 
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{ 
              width: isPlaying ? '100%' : '0%',
              animation: isPlaying ? 'progress 4s linear infinite' : 'none'
            }}
          />
        </div>
      </div>

      {/* Dots Indicator */}
      

      {/* Controls */}
      

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}