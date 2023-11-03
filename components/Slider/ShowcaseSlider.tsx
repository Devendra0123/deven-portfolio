import { projectsData } from "@/data/projectsData";
import React from "react";
import SliderCard from "../Card/SliderCard";

const ShowcaseSlider = () => {
  return (
    <div className="w-full skew-y-12 h-full overflow-hidden">
      <div className="track w-full flex justify-center items-center gap-[30px]">
        {projectsData.map((item, index) => (
          <SliderCard key={index} data={item} />
        ))}
      </div>
      <div className="opposite-track w-full flex justify-center items-center gap-[30px] mt-[30px]">
        {projectsData.map((item, index) => (
          <SliderCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseSlider;
