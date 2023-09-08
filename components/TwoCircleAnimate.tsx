"use client";
import React, { useRef, useState } from "react";

export default function TwoCircleAnimate() {
  const pathRef: any = useRef(null);
  const circle1Ref: any = useRef(null);
  const circle2Ref: any = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  const animatePath = () => {
    if (!animationStarted) {
      setAnimationStarted(true);
      const path = pathRef.current;
      const circle1 = circle1Ref.current;
      const circle2 = circle2Ref.current;
      const pathLength = path.getTotalLength();

      // Set initial position of the circle at the start of the path
      let currentPosition1 = 0;
      let currentPosition2 = 0;

      //Circle 1
      circle1.setAttribute("cx", path.getPointAtLength(currentPosition1).x);
      circle1.setAttribute("cy", path.getPointAtLength(currentPosition1).y);
      //Circle2
      circle2.setAttribute("cx", path.getPointAtLength(currentPosition2).x);
      circle2.setAttribute("cy", path.getPointAtLength(currentPosition2).y);

      const animationInterval = setInterval(() => {
        // Move the circle along the path
        currentPosition1 += 0.1;
        currentPosition2 += 0.07;

        console.log(currentPosition1, currentPosition2, pathLength);
        if (currentPosition1 >= pathLength && currentPosition2 >= pathLength) {
          clearInterval(animationInterval);
          setAnimationStarted(false);
        }
        if (currentPosition1 >= pathLength) {
          circle1.setAttribute("cx", path.getPointAtLength(pathLength).x);
          circle1.setAttribute("cy", path.getPointAtLength(pathLength).y);
        }
        if (currentPosition2 >= pathLength) {
          circle2.setAttribute("cx", path.getPointAtLength(pathLength).x);
          circle2.setAttribute("cy", path.getPointAtLength(pathLength).y);
        } else {
          //Circle1
          circle1.setAttribute("cx", path.getPointAtLength(currentPosition1).x);
          circle1.setAttribute("cy", path.getPointAtLength(currentPosition1).y);
          //Circle2
          circle2.setAttribute("cx", path.getPointAtLength(currentPosition2).x);
          circle2.setAttribute("cy", path.getPointAtLength(currentPosition2).y);
        }
      }, 30); // Adjust the interval for slower animation
    }
  };

  return (
    <main className="w-full flex items-center justify-center">
      <div className="svg-container">
        <svg
          className="flex items-center justify-center"
          width="100"
          height="400"
          id="visual"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-1 0 2 2"
        >
          <path
            ref={pathRef}
            d="M 0 0 C -2 3 2 1 0 4"
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
          <circle
            ref={circle2Ref}
            cx="0" // Initial position (adjust as needed)
            cy="0" // Initial position (adjust as needed)
            r="0.1" // Radius of the circle
            fill="green" // Circle color
          />
        </svg>
      </div>
      <button onClick={animatePath}>Animate</button>
    </main>
  );
}
