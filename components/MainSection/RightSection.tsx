import Image from "next/image";
import React from "react";

const RightSection = () => {
  return (
    <div  style={{
        zIndex: 1
      }} className="w-[45%] h-[70vh] relative flex justify-center items-center">
      <div className="absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[300px] h-[300px] bg-yellow1 rounded-lg rotate-45 "></div>
      <div className="absolute top-[57%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[300px] h-[300px] bg-gray1 opacity-[83%] rounded-lg rotate-45 "></div>
      <div className="absolute bottom-[50px] left-[-100px]">
        <div className="relative w-[300px] h-[200px]">
          <Image
            src="/arrow.png"
            alt="arrow-icon"
            fill
            style={{
                transform: "scaleY(-1)"
            }}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
