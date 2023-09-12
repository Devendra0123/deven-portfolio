import React from 'react';

const SvgPath3 = () => {
    return (
        <svg
            style={{
                width: "100%", // Adjust the width to fill the container
                height: "auto",
                zIndex: 0
            }}
            className=""
            id="visual"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-29.5 -0 40 30" // Adjusted viewBox to show the entire path
        >
            <path
                d="M 0 0 V 2 C 0 2 0 3 -1 3 C -2 3 -2 2 -2 2 C -2 2 -2 1 -1 1 C 0 1 0 2 0 2 V 4 C 0 5 -1 6 -2 6 H -14 H -24 C -26 6 -26 7 -26 8 V 16 V 28"
                stroke="#DD9915"
                strokeWidth="0.05"
                fill="none"
            />
        </svg>
    );
};

export default SvgPath3;
