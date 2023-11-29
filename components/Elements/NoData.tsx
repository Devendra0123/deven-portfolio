import React from "react";
import SvgPath5 from "../SvgPath/SvgPath5";
import SvgPath6 from "../SvgPath/SvgPath6";
import Link from "next/link";

const NoData = () => {
  return (
    <div className="w-full min-h-[75vh] max-h-[100vh] flex flex-col justify-center items-center">
      <div className="absolute top-[100px] right-0">
        <SvgPath5 />
      </div>
      <div className="absolute bottom-[0%] left-0">
        <SvgPath6 />
      </div>
      <div className="gradient-circle z-[-1] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[400px] h-[400px] rounded-full " />
      <div className="w-full flex flex-col items-center gap-[20px] p-[30px]">
        <h2 className="text-4xl font-bold">
          <span className="border-r-2 border-yellow1 px-[20px]">0000</span>
          <span className="px-[20px] ">No Data</span>
        </h2>
        <p>Working on this section.</p>
        <Link
          href="/"
          className="bg-yellow1 px-[20px] py-[8px] font-semibold rounded-[4px]"
        >
          <p>Return Home</p>
        </Link>
      </div>
    </div>
  );
};

export default NoData;
