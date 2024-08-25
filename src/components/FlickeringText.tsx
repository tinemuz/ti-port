import React, { useState } from "react";

interface FlickeringTextProps {
  text: string;
}

const FlickeringText: React.FC<FlickeringTextProps> = ({ text }) => {
  const [isFlickering, setIsFlickering] = useState(false);

  const handleMouseEnter = () => setIsFlickering(true);
  const handleMouseLeave = () => setIsFlickering(false);

  // Function to generate a random delay
  const getRandomDelay = () => `${Math.random() * 0.5}s`;

  return (
    <span
      className={`flickering-text ${isFlickering ? "flicker" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="char"
          style={{ animationDelay: isFlickering ? getRandomDelay() : "0s" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default FlickeringText;
