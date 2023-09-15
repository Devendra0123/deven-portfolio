"use client";
import React, { useRef, useEffect, useState } from "react";

interface Props {
  visibility: boolean;
}
const Computer = ({ visibility }: Props) => {
  const pathRef1: any = useRef(null);
  const pathRef2: any = useRef(null);
  const pathRef3: any = useRef(null);

  const animatePaths = () => {
    const path1 = pathRef1.current;
    const path2 = pathRef2.current;
    const path3 = pathRef3.current;
    const pathLength1 = path1.getTotalLength();
    const pathLength2 = path2.getTotalLength();
    const pathLength3 = path3.getTotalLength();

    path1.style.strokeDasharray = pathLength1;
    path1.style.strokeDashoffset = pathLength1;

    path2.style.strokeDasharray = pathLength2;
    path2.style.strokeDashoffset = pathLength2;

    path3.style.strokeDasharray = pathLength3;
    path3.style.strokeDashoffset = pathLength3;

    // Triggering a reflow/repaint
    path1.getBoundingClientRect();
    path2.getBoundingClientRect();
    path3.getBoundingClientRect();

    path1.style.transition = "stroke-dashoffset 2s ease-in-out";
    path1.style.strokeDashoffset = "0";

    path2.style.transition = "stroke-dashoffset 2s ease-in-out";
    path2.style.strokeDashoffset = "0";

    path3.style.transition = "stroke-dashoffset 2s ease-in-out";
    path3.style.strokeDashoffset = "0";
  };

  useEffect(() => {
    // Call the animation initially
    animatePaths();

    // Set up a timer to call the animation function every 1 second
    const intervalId = setInterval(animatePaths, 1000);

    // Cleanup: clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className={`w-max relative ${
        visibility
          ? "opacity-1 transform translate-y-[0px] "
          : "opacity-0 transform -translate-y-[20px] "
      } transition delay-150 duration-300 ease-out`}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
        className="w-[455px] h-[340px] relative flex items-center justify-center rounded-lg"
      >
        {/*...Laptop...*/}
        <svg
          width="305"
          height="305"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5"
            y="8"
            width="38"
            height="24"
            rx="2"
            fill="none"
            stroke="#DD9915"
            strokeWidth="1"
          />
          <path
            d="M4 40L44 40"
            stroke="#DD9915"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            ref={pathRef1}
          />
          <path
            d="M22 14L26 14"
            stroke="#DD9915"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            ref={pathRef2}
          />
          <path
            d="M22 34L26 34"
            stroke="#0CC0DF"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            ref={pathRef3}
          />
        </svg>

        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] ">
          <p className="text-primaryBlue font-bold text-[22px] tracking-wider text-center">
           Highlights
          </p>
        </div>
      </div>

      <div className="absolute top-[-50px] left-[-50px] bg-yellow1 w-[100px] h-[100px] rounded-full z-[-1] " />
      <div className="absolute bottom-[-50px] right-[-50px] bg-primaryBlue w-[100px] h-[100px] rounded-full z-[-1] " />
    </div>
  );
};

export default Computer;
