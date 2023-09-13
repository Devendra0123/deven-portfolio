"use client";

import React, { useEffect, useRef, useState } from "react";

const SvgPath = () => {
  const pathRef1: any = useRef(null);
  const circle1Ref: any = useRef(null);
  const circle2Ref: any = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (!animationStarted) {
      setAnimationStarted(true);
      const path1 = pathRef1.current;
      const circle1 = circle1Ref.current;
      const circle2 = circle2Ref.current;
      const pathLength1 = path1.getTotalLength();

      // Set initial position of the circles at the start of the paths
      let currentPosition1 = 0;
      let currentPosition2 = 0;

      // Circle 1
      circle1.setAttribute("cx", path1.getPointAtLength(currentPosition1).x);
      circle1.setAttribute("cy", path1.getPointAtLength(currentPosition1).y);


       setInterval(() => {
        // Move the circles along the paths
        currentPosition1 += 0.1;
        currentPosition2 += 0.12;

        if (currentPosition1 >= pathLength1 && currentPosition2 >= pathLength1) {
             currentPosition1 = 0;
             currentPosition2 = 0;
        }

        // Update the positions of the circles
        circle1.setAttribute("cx", path1.getPointAtLength(currentPosition1).x);
        circle1.setAttribute("cy", path1.getPointAtLength(currentPosition1).y);

        circle2.setAttribute("cx", path1.getPointAtLength(currentPosition2).x);
        circle2.setAttribute("cy", path1.getPointAtLength(currentPosition2).y);
      }, 20); // Adjust the interval for slower animation
    }
  }, [])
  

  return (
    <div className="absolute top-0 left-0 right-0">
      <svg
        className=""
        id="visual"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -0.3 23 8"
        style={{ width: "100%", height: "470px" }}
      >
        <path
          ref={pathRef1}
          className="opacity-[25%]"
          d="M 0 0 H 23 H 2 V 5.1 H 5 H 2 V 0 H 12 V 7.2 V 0 H 21 V 5 H 19"
          stroke="#000"
          strokeWidth="0.01"
          fill="none"
        />
        <circle
          ref={circle1Ref}
          cx="0" // Initial position (adjust as needed)
          cy="0" // Initial position (adjust as needed)
          r="0.05" // Radius of the circle
          fill="#0CC0DF" // Circle color
        />
         <circle
            ref={circle2Ref}
            cx="0" // Initial position (adjust as needed)
            cy="0" // Initial position (adjust as needed)
            r="0.05" // Radius of the circle
            fill="orange" // Circle color
          />
      </svg>
    </div>
  );
};

export default SvgPath;
