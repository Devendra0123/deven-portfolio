import { ShowcaseCardType } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  data: ShowcaseCardType;
  cardStyle?: string;
}
const ShowcaseCard = ({ data, cardStyle }: Props) => {
  const { image, info, mainFeature, projectLogo, projectTitle } = data;

  return (
    <div className={`relative ${cardStyle} `}>
      <Image
        src={image}
        alt="mainImage"
        priority
        fill
        className="z-[-1] absolute top-0 left-0 right-0 bottom-0 object-cover opacity-75"
      />
      <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-white" />

      <div className="bg-gradient-to-b from-transparent to-white w-full absolute left-0 right-0 top-[50%] transform translate-y-[70%] ">
        <div className="flex items-center gap-[20px]">
          <Image
            src={projectLogo}
            width={70}
            height={70}
            alt="logo"
            className="rounded-full"
          />
          <h1 className="text-3xl font-bold">{projectTitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
