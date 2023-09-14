import React from "react";

const SeoAnimation = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        zIndex: 0,
      }}
    >
      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-15 -15 20 20" // Adjusted viewBox to fit the entire path
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          d="M 0 0 Q -1 -1 -2 -1 Q -3 -1 -4 0 Q -5 1 -6 1 Q -10 1 -13 -1 Q -13 -1 -13 -1 Q -14 -2 -15 -2 Q -14 -2 -13 -1 Q -13 -3 -14 -4 Q -13 -3 -13 -1 Q -11 -2 -11 -4 Q -11 -2 -13 -1 Q -10 1 -6 1 Q -5 1 -4 0 Q -3 -1 -2 -1 Q -1 -1 0 0 Q -1 -2 0 -4 Q 1 -5 1 -6 Q 0 -8 0 -10 Q 0 -8 1 -6 Q -1 -7 -3 -9 Q -1 -7 1 -6 Q 2 -8 2 -10"
          stroke="#DD9915"
          strokeWidth="0.05"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default SeoAnimation;
