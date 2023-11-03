import { projectsData } from "@/data/projectsData";
import React from "react";
import SliderCard from "../Card/SliderCard";

const ShowcaseSlider = () => {
  return (
    <div className="track w-full flex justify-center items-center gap-[30px] overflow-hidden">
      {projectsData.map((item, index) => (
        <SliderCard key={index} data={item} />
      ))}
    </div>
  );
};

export default ShowcaseSlider;
