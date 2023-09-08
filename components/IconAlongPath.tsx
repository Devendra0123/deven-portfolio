"use client";
import React, { useEffect, useState, useRef } from "react";

function DivAlongPath() {
    const [animate, setAnimate] = useState(false);
    const pathRef:any = useRef(null);
  
    const handleAnimateClick = () => {
        const pathLength = pathRef.current.getTotalLength();
        pathRef.current.style.transition = "none";
        pathRef.current.style.strokeDasharray = pathLength;
        pathRef.current.style.strokeDashoffset = pathLength;
        pathRef.current.getBoundingClientRect(); // Force reflow to apply styles
        pathRef.current.style.transition = "stroke-dashoffset 2s ease-in-out";
        pathRef.current.style.strokeDashoffset = "0";
  
      setAnimate(true);
  
      const textPath:any = document.getElementById("textPath");
      textPath.style.animation = "none"; // Reset text animation
      setTimeout(() => {
        textPath.style.animation = "textAnimation 2s linear";
      }, 100); // Delay to ensure text rotation starts at the right time
    };
  
    return (
      <div>
        <svg width="400" height="200">
          <path
            id="path"
            ref={pathRef}
            d="M10,80 C60,10 140,10 190,80 S320,150 370,80"
            fill="transparent"
            stroke="green"
            strokeWidth="2"
            style={{ animation: animate ? "pathAnimation 5s linear" : "none" }}
          />
          <text>
            <textPath
              id="textPath"
              xlinkHref="#path"
              startOffset="50%"
              textAnchor="middle"
            >
              🚀
            </textPath>
          </text>
        </svg>
        <button onClick={handleAnimateClick}>Animate</button>
      </div>
  );
}

export default DivAlongPath;
