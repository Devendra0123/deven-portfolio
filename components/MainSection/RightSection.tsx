import Image from "next/image";
import React from "react";

const RightSection = () => {
  return (
    <div
      style={{
        zIndex: 1,
      }}
      className="w-[45%] h-[470px] relative flex justify-between lg:justify-center items-center"
    >
      <div className="absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] md:w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-yellow1 rounded-lg rotate-45 "></div>
      <div className="absolute top-[57%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] md:w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-gray1 opacity-[83%] rounded-lg rotate-45 "></div>
      <div className="absolute top-[0%] left-[50%] transform -translate-x-[50%]">
        {/*...Personal Image...*/}
        <div className="md:mt-[100px] lg:mt-[0px] md:w-[200px] lg:w-[300px] md:h-[200px] lg:h-[300px] relative">
          <Image src="/person.png" alt="" fill className="object-contain" />
        </div>
      </div>

      <div className="absolute left-[-100px] bottom-[0px]">
        {/*...Arrow Icon...*/}
        <div className="relative w-[300px] h-[200px]">
          <Image
            src="/arrow.png"
            alt="arrow-icon"
            fill
            style={{
              transform: "scaleY(-1)",
            }}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
