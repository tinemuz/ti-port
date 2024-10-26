import React from "react";

interface FlickeringTextProps {
  text: string;
}

const FlickeringText: React.FC<FlickeringTextProps> = ({ text }) => {
  const getRandomDelay = () => `${Math.random() * 0.6}s`;

  return (
    <span className="flickering-text">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="char"
          style={{ animationDelay: getRandomDelay() }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default FlickeringText;
