'use client'
import React, { useEffect, useState } from 'react';

const SvgPath3 = () => {
    const [scrollY, setScrollY] = useState(0);
    const [pathLength, setPathLength] = useState(0);

    useEffect(() => {
        const svgPath: any = document.querySelector('.svg-path path');
        const length = svgPath.getTotalLength();
        setPathLength(length);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Add a scroll event listener to track the scroll position
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const strokeDashOffset = pathLength - (scrollY * 2); // Adjust scroll sensitivity as needed

    return (
        <div
            className="svg-container"
            style={{
                width: "100%",
                height: "suto", // Adjust the container height as needed
            }}
        >
            <svg
                className="svg-path"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-29.5 -0 40 30"
            >
                <path
                    d="M 0 0 V 2 C 0 2 0 3 -1 3 C -2 3 -2 2 -2 2 C -2 2 -2 1 -1 1 C 0 1 0 2 0 2 V 4 C 0 5 -1 6 -2 6 H -14 H -24 C -26 6 -26 7 -26 8 V 16 V 28"
                    stroke="#DD9915"
                    strokeWidth="0.05"
                    fill="none"
                    style={{
                        strokeDasharray: pathLength,
                        strokeDashoffset: strokeDashOffset,
                        transition: "stroke-dashoffset 0.5s linear", // Use "linear" timing function
                    }}
                />
            </svg>
        </div>
    );
};

export default SvgPath3;