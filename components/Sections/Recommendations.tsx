import { recommendations } from "@/data/recommendations";
import React from "react";
import RecommendationCard from "../Card/RecommendationCard";

const Recommendations = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[70px]">
      <h1 className="text-primaryBlue font-bold text-2xl tracking-wider">Recommendations by Others</h1>
      <div className="w-full flex flex-wrap items-center justify-center gap-[20px] lg:gap-[70px]">
        {recommendations?.length > 0 &&
          recommendations.map((item, index) => (
            <RecommendationCard
              key={index}
              data={item}
              cardStyle={(index === 1) || (index === 2) ? "bg-white" : "bg-white"}
              positionStyle={(index === 1) || (index === 2) ? "bg-white text-yellow1" : "text-yellow1"}
            />
          ))}
      </div>
    </div>
  );
};

export default Recommendations;
