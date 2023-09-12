import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Image from "next/image";

const MainSection = () => {
  return (
    <div className="relative">
      <svg
        className="absolute mt-[-70px] opacity-[25%] flex items-center justify-center"
        width="400"
        height="30"
        id="visual"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-2 -2 4 8"
      >
        <path
          d="M 0 0 H 4 V 8 H 9"
          stroke="#000"
          strokeWidth="0.01"
          fill="none"
        />
      </svg>
      <div className="w-full relative flex lg:justify-around items-center">
        <LeftSection />
        <RightSection />
      </div>
      <svg
        style={{
          zIndex: 0,
        }}
        className="mt-[-70px] bg-gray-700 opacity-[25%] flex items-center justify-center"
        width="100%"
        height="1"
        id="visual"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-2 -2 4 8"
      >
        <path d="M 0 0 H 21" stroke="#000" strokeWidth="0.01" fill="none" />
      </svg>
    </div>
  );
};

export default MainSection;
