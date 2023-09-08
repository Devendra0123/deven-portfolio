"use client";
import { useRef } from "react";

export default function CurvePathAnimate() {
  const pathRef: any = useRef(null);

  const animatePath = () => {
    const pathLength = pathRef.current.getTotalLength();
    pathRef.current.style.transition = "none";
    pathRef.current.style.strokeDasharray = pathLength;
    pathRef.current.style.strokeDashoffset = pathLength;
    pathRef.current.getBoundingClientRect(); // Force reflow to apply styles
    pathRef.current.style.transition = "stroke-dashoffset 2s ease-in-out";
    pathRef.current.style.strokeDashoffset = "0";
  };
  return (
    <main className="w-full flex items-center justify-center">
      <div className="svg-container">
        <svg
          className="flex items-center justify-center"
          width="200"
          height="400"
          id="visual"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-2 -2 4 8"
        >
          <path
            ref={pathRef}
            d="M 0 0 L 0 3 Q 0 4 -1 4 Q -2 4 -2 3 Q -2 2 -1 2 Q 0 2 0 3 V 5"
            stroke="#000"
            strokeWidth="0.01"
            fill="none"
          />
        </svg>
      </div>
      <button onClick={animatePath}>Animate</button>
    </main>
  );
}
