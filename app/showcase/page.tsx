import ShowcaseCard from "@/components/Card/ShowcaseCard";
import { showcaseData } from "@/data/showcaseData";
import React from "react";

const Showcase = () => {
  return (
    <div className="w-full flex flex-col items-center w-[90%]">
      <div className="w-full flex flex-col gap-[20px] items-center">
        <h1
          style={{
            wordSpacing: "10px",
          }}
          className="w-[70%] text-6xl text-slate-700 font-bold text-center mt-[50px] leading-[1.2] font-lato"
        >
          Unrivaled Prowess, Effectiveness, and Developer Satisfaction.
        </h1>
        <p className="text-lg">{`Next.js earns the confidence of web's titans.`}</p>
      </div>

      <div>
        {showcaseData?.length > 0 &&
          showcaseData.map((item, index) => (
            <ShowcaseCard key={index} data={item} cardStyle="w-[350px] h-[300px] "/>
          ))}
      </div>
    </div>
  );
};

export default Showcase;
