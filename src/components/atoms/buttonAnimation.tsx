"use client";

import React, { useState, useRef } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseOver = () => {
    // Bersihkan interval yang sedang berjalan jika ada
    if (intervalRef.current) clearInterval(intervalRef.current);

    let iteration = 0;
    const originalText = text;

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        originalText
          .split("")
          .map((char, i) => {
            // Jika iterasi sudah melewati indeks karakter, kembalikan karakter asli
            if (i < iteration) return originalText[i];
            // Jika karakter adalah spasi, biarkan tetap spasi
            if (originalText[i] === " ") return " ";
            // Sisanya, berikan huruf acak
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      // Mengatur kecepatan "scramble"
      iteration += 1 / 2;

      if (iteration >= originalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 30);
  };

  const handleMouseLeave = () => {
    // Bersihkan interval saat kursor keluar agar tidak bertabrakan
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  return (
    <span
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={`${className} cursor-pointer inline-block`}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;