"use client"
import React, { useRef } from 'react';

const SvgPath5 = () => {
    const pathRef1: any = useRef();

    const svgStyle = {
        width: '40vw',  // Set width to 50% of the viewport width
        height: '400px',  // Set height to 400px
    };

    return (
        <div className='w-max'>
            <svg
                id="visual"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 4 10"
                style={svgStyle}
                className="ml-auto"  // Use "ml-auto" to align to the right side
            >
                <path
                    ref={pathRef1}
                    className="opacity-[50%]"
                    d="M 0 0 C 2 2 2 3 3 3 C 4 3 4 2 5 2 C 6 2 7 4 9 6 M 9 6"
                    stroke="#000"
                    strokeWidth="0.01"
                    fill="none"
                />

                <polygon
                    x={2}
                    y={2}
                    points="0,0 0.2,0.2 0.4,0"
                    fill="#0CC0DF" />
            </svg>
        </div>
    );
};

export default SvgPath5;
