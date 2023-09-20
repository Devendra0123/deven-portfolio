import React, { useEffect, useRef, useState } from "react";

const SvgPath4 = () => {
    const pathRef1 = useRef(null);

    // Calculate the width of the parent div
    const parentDivWidth = 900 /* calculate the width of the parent div */;

    // Calculate the height based on the aspect ratio of the path
    const aspectRatio = 16 / 8; // Width to Height ratio of the path
    const svgHeight = parentDivWidth / aspectRatio;

    return (
        <div className="absolute top-0 left-0 z-[-1] rotate-[-10deg]">
            <svg
                style={{
                    zIndex: 0,
                }}
                className="mt-[-50px] flex items-center justify-center"
                width="100%"
                height={svgHeight}
                id="visual"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 8" // Adjust the viewBox to match the path dimensions
                preserveAspectRatio="xMinYMin meet" // Ensure the entire path is shown
            >
                <path
                    ref={pathRef1}
                    d="M 0 0 C 1 0 2 1 2 2 C 2 3 3 4 4 4 C 5 4 5 4 6 5 C 7 6 7 6 8 6 C 8.6667 6 9.3333 6 10 6 C 11 7 12 7 13 7 C 14 8 15 8 16 8"
                    stroke="#0CC0DF"
                    strokeWidth="0.03"
                    fill="none"
                />
            </svg>
        </div>
    );
};

export default SvgPath4;
