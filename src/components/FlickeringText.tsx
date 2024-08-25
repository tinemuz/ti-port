import React from "react"; // Ensure React is imported

interface FlickeringTextProps {
  text: string;
  isFlickering: boolean;
}

const FlickeringText: React.FC<FlickeringTextProps> = ({
  text,
  isFlickering,
}) => {
  const getRandomDelay = () => `${Math.random() * 0.6}s`;

  return (
    <span className={`flickering-text ${isFlickering ? "flicker" : ""}`}>
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
