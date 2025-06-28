import React, { useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function ScrambleText({ text, className }) {
  const [displayText, setDisplayText] = useState(text);

  const handleMouseOver = () => {
    let iteration = 0;
    const originalText = text;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((char, i) => {
            if (i < iteration) return originalText[i];
            if (originalText[i] === " ") return " ";
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      iteration += 1 / 2;
      if (iteration >= originalText.length) clearInterval(interval);
    }, 30);
  };

  const handleMouseLeave = () => {
    setDisplayText(text);
  };

  return (
    <span
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={`${className} cursor-pointer`}
    >
      {displayText}
    </span>
  );
}
