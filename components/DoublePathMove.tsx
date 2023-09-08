"use client";
import React, { useRef, useState } from "react";

export default function DoublePathMove() {
  const pathRef1: any = useRef(null);
  const pathRef2: any = useRef(null);
  const circle1Ref: any = useRef(null);
  const circle2Ref: any = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);

 
  const animatePath = () => {
    if (!animationStarted) {
      setAnimationStarted(true);
      const path1 = pathRef1.current;
      const path2 = pathRef2.current;
      const circle1 = circle1Ref.current;
      const circle2 = circle2Ref.current;
      const pathLength1 = path1.getTotalLength();
      const pathLength2 = path2.getTotalLength();

      // Set initial position of the circles at the start of the paths
      let currentPosition1 = 0;
      let currentPosition2 = 0;

      // Circle 1
      circle1.setAttribute("cx", path1.getPointAtLength(currentPosition1).x);
      circle1.setAttribute("cy", path1.getPointAtLength(currentPosition1).y);

      // Circle 2
      circle2.setAttribute("cx", path2.getPointAtLength(currentPosition2).x);
      circle2.setAttribute("cy", path2.getPointAtLength(currentPosition2).y);

      const animationInterval = setInterval(() => {
        // Move the circles along the paths
        currentPosition1 += 0.1;
        currentPosition2 += 0.1;

        if (currentPosition1 >= pathLength1 && currentPosition2 >= pathLength2) {
          clearInterval(animationInterval);
          setAnimationStarted(false);
        }

        if (currentPosition1 >= pathLength1) {
          currentPosition1 = pathLength1;
        }

        if (currentPosition2 >= pathLength2) {
          currentPosition2 = pathLength2;
        }

        // Update the positions of the circles
        circle1.setAttribute("cx", path1.getPointAtLength(currentPosition1).x);
        circle1.setAttribute("cy", path1.getPointAtLength(currentPosition1).y);

        circle2.setAttribute("cx", path2.getPointAtLength(currentPosition2).x);
        circle2.setAttribute("cy", path2.getPointAtLength(currentPosition2).y);
      }, 30); // Adjust the interval for slower animation
    }
  };

  return (
    <main className="w-full flex items-center justify-center">
      <div className="flex justify-center relative">
        <svg
          className="absolute flex items-center justify-center"
          width="200"
          height="400"
          id="visual"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-2 -2 4 8" // Adjusted viewBox
        >
          <path
            ref={pathRef2}
            d="M 0 0 L 0 2 L -1 2 L -1 3"
            stroke="#000"
            strokeWidth="0.01"
            fill="none"
          />
          <circle
            ref={circle2Ref}
            cx="0" // Initial position (adjust as needed)
            cy="0" // Initial position (adjust as needed)
            r="0.1" // Radius of the circle
            fill="green" // Circle color
          />
        </svg>

        <svg
          className="flex items-center justify-center"
          width="200"
          height="400"
          id="visual"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-2 -2 4 8" // Adjusted viewBox
        >
          <path
            ref={pathRef1}
            d="M 0 0 L 0 2 L 1 2 L 1 3"
            stroke="#000"
            strokeWidth="0.01"
            fill="none"
          />
          <circle
            ref={circle1Ref}
            cx="0" // Initial position (adjust as needed)
            cy="0" // Initial position (adjust as needed)
            r="0.1" // Radius of the circle
            fill="red" // Circle color
          />
        </svg>
      </div>
      <button onClick={animatePath}>Animate</button>
    </main>
  );
}
