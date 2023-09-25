"use client"
import React, { useEffect, useRef, useState } from "react";

const SvgPath4 = () => {
    const pathRef1 = useRef(null);

    // Calculate the width of the parent div
    const parentDivWidth = 1000; // Replace with the actual width of the parent div

    // Calculate the height based on the aspect ratio of the path
    const aspectRatio = 16 / 8; // Width to Height ratio of the path
    const svgHeight = parentDivWidth / aspectRatio;

    return (
        <div className="absolute top-[50px] left-0 z-[-1]" style={{ width: "100%" }}>
            <svg
                style={{
                    zIndex: 0,
                }}
                className="flex items-center justify-center"
                width="100%"
                height="100%"
                id="visual"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -0.3 9 8"// Adjust the viewBox to match the path dimensions
                preserveAspectRatio="xMidYMid meet" // Ensure the entire path is shown
            >
                <path
                    ref={pathRef1}
                    d="M 0 0 L 1 -1 L 2 1 L 3 -2 L 4 1 L 5 -1 L 6 0 H 7 C 7 1 7 1 8 1 C 9 1 9 1 9 0 C 9 -1 10 -1 10 -1 C 10 -1 11 -1 11 0"
                    stroke="#DD9915"
                    strokeWidth="0.01"
                    fill="none"
                />
            </svg>
        </div>
    );
};

export default SvgPath4;
