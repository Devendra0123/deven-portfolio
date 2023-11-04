"use client";
import React, { useEffect, useState } from "react";

const TextAnimation = ({ text }: { text: string }) => {
  const colors = ["orange", "black", "teal", "black", "black", "teal", "black","orange"];
  const fontSizes = ["24px", "24px", "24px", "24px", "24px", "40px", "44px","44px"];

  const [animatedText, setAnimatedText] = useState(
    text
      .split("")
      .map((letter, index) => ({ letter, color: "black", fontSize: "16px" }))
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      setTimeout(() => {
        setAnimatedText((prevText) =>
          prevText.map((item, index) => {
            if (index === currentIndex) {
              return {
                ...item,
                color: colors[currentIndex],
                fontSize: fontSizes[currentIndex],
              };
            }
            return item;
          })
        );
        setCurrentIndex(currentIndex + 1);
      }, 400); // Adjust the delay as needed (in milliseconds)
    }
  }, [currentIndex, text, colors, fontSizes]);

  return (
    <div>
      {animatedText.map((item, index) => (
        <span
          key={index}
          style={{
            color: item.color,
            fontSize: item.fontSize,
            transition: "color 0.5s ease, font-size 0.5s ease",
          }}
        >
          {item.letter}
        </span>
      ))}
    </div>
  );
};

export default TextAnimation;
