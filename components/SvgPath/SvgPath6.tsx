"use client"
import React, { useEffect, useRef, useState } from 'react';

const SvgPath6 = () => {
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
            let currentPosition2 = pathLength1;

            // Circle 1
            circle1.setAttribute("cx", path1.getPointAtLength(currentPosition1).x);
            circle1.setAttribute("cy", path1.getPointAtLength(currentPosition1).y);

            setInterval(() => {
                // Move the circles along the paths
                currentPosition1 += 0.1;
                currentPosition2 -= 0.1;
                if (
                    currentPosition1 >= pathLength1 &&
                    currentPosition2 >= 0
                ) {
                    currentPosition1 = 0;
                    currentPosition2 = pathLength1;
                }

                // Update the positions of the circles
                circle1.setAttribute("cx", path1.getPointAtLength(currentPosition1).x);
                circle1.setAttribute("cy", path1.getPointAtLength(currentPosition1).y);

                circle2.setAttribute("cx", path1.getPointAtLength(currentPosition2).x);
                circle2.setAttribute("cy", path1.getPointAtLength(currentPosition2).y);
            }, 20); // Adjust the interval for slower animation
        }
    }, []);

    const svgStyle = {
        width: '70vw',  // Set width to 50% of the viewport width
        height: '400px',  // Set height to 400px
    };

    return (
        <div>
            <svg
                id="visual"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 6"
                style={svgStyle}
                className="ml-auto"  // Use "ml-auto" to align to the right side
            >
                <path
                    ref={pathRef1}
                    className="opacity-[50%]"
                    d="M 0 0 C 1 -1 4 0 4 2 C 4 4 3 3 3 3 C 2 2 4 1 5 1 C 7 1 7 3.6667 10 6 C 12 7 13 4 16 6 M 16 6 M 16 6 M 16 6 M 10 6 M 4 2 M 4 2"
                    stroke="#000"
                    strokeWidth="0.01"
                    fill="none"
                />
                <circle
                    ref={circle1Ref}
                    cx="0" // Initial position (adjust as needed)
                    cy="0" // Initial position (adjust as needed)
                    r="0.1" // Radius of the circle
                    fill="#0CC0DF" // Circle color
                />
                <circle
                    ref={circle2Ref}
                    cx="2" // Initial position (adjust as needed)
                    cy="2" // Initial position (adjust as needed)
                    r="0.1" // Radius of the circle
                    fill="orange" // Circle color
                />
            </svg>
        </div>
    )
}

export default SvgPath6