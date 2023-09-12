import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Image from "next/image";
import { shortInfo } from "@/data/shortInfo";
import ShortInfoCard from "../Card/ShortInfoCard";
import SvgPath2 from "../SvgPath/SvgPath2";

const MainSection = () => {
  return (
    <div className="relative">
      <div className="w-full relative flex lg:justify-around items-center">
        <LeftSection />
        <RightSection />
      </div>
      <SvgPath2 />
      <div className="ml-[150px] mt-[20px] w-full flex justify-start items-center gap-[30px] flex-wrap">
        {shortInfo?.map((item, index) => (
          <ShortInfoCard key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
