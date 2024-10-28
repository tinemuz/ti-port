import React from "react";

interface WordsImageProps {
  src: string;
  alt: string;
}

const WordsImage: React.FC<WordsImageProps> = ({ src }, { alt }) => {
  return (
    <img
      className="rounded-lg border-2 border-skin-border/50"
      src={src}
      alt={alt}
    />
  );
};

export default WordsImage;
