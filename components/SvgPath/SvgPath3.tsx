"use client";
import React, { useEffect, useState } from "react";

const SvgPath3 = () => {
  const [showButton, setShowButton] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({
    fill: "#0CC0DF",
    transition: "fill 0.3s ease",
  });
  useEffect(() => {
    const svgPath: any = document.querySelector(".svg-path path");
    const length = svgPath.getTotalLength();

    svgPath.style.strokeDasharray = length + " " + length;
    svgPath.style.strokeDashoffset = length;

    const handleScroll = () => {
      const scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      const drawLength = length * scrollPercentage;

      svgPath.style.strokeDashoffset = length - drawLength * 1.7;

      setShowButton(scrollPercentage >= 0.2);
    };

    // Add a scroll event listener to track the scroll position
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonX = -14;
  const buttonY = 2;
  const buttonWidth = 4;
  const buttonHeight = 1.7;
  const buttonText = "Key Highlights";

  // Change button fill color on hover
  const handleButtonHover = () => {
    setButtonStyle({
      fill: "#A6A6A6",
      transition: "fill 0.3s ease",
    });
  };

  // Restore initial fill color when not hovering
  const handleButtonLeave = () => {
    setButtonStyle({
      fill: "#0CC0DF",
      transition: "fill 0.3s ease",
    });
  };

  return (
    <div
      className="svg-container"
      style={{
        width: "100%",
        height: "auto",
        zIndex: 0,
      }}
    >
      <svg
        className="svg-path"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-29.5 -0 40 50"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          d="M 0 0 C 0 2 -1 2 -3 2 H -21 H -24 V 2 C -26 2 -26 3 -26 4 V 56 V 56"
          stroke="#DD9915"
          strokeWidth="0.05"
          fill="none"
        />
        {/* Conditionally render the button */}
        {showButton && (
          <g>
            <rect
              x={buttonX}
              y={buttonY}
              width={buttonWidth}
              height={buttonHeight}
              fill={buttonStyle.fill} // Use the dynamic fill color
              onMouseEnter={handleButtonHover} // Change fill color on hover
              onMouseLeave={handleButtonLeave}
              className="cursor-pointer"
            />
            {/* Add text inside the button */}
            <text
              x={buttonX + buttonWidth / 2}
              y={buttonY + buttonHeight / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize="0.5"
              className="cursor-pointer"
              onMouseEnter={handleButtonHover} // Change fill color on hover
              onMouseLeave={handleButtonLeave}
            >
              {buttonText}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default SvgPath3;
