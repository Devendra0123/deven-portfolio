import { Recommendation } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  data: Recommendation;
  cardStyle?: string;
  positionStyle?: string
}

const RecommendationCard = ({ data, cardStyle,positionStyle }: Props) => {
  const { name, image, position, comment } = data;
  return (
    <div className={`relative w-full md:w-[500px] ${cardStyle} rounded-[5px] p-[20px] shadow-lg flex flex-col gap-[10px]`}>
      <Image
        src={image}
        alt=""
        width={70}
        height={70}
        className="rounded-full object-cover -mt-[70px] "
      />
      <div className="flex flex-col gap-[10px]">
        <h1 className="font-bold">{name}</h1>
        <p className={`w-max text-[13px] font-[900] ${positionStyle} rounded-[4px] p-[6px] tracking-wider`}>{position}</p>
      </div>

      <p>{comment}</p>
    </div>
  );
};

export default RecommendationCard;
