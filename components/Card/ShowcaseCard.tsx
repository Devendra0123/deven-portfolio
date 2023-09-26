"use client";
import { ShowcaseCardType } from "@/types";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  data: ShowcaseCardType;
  cardStyle?: string;
}
const ShowcaseCard = ({ data, cardStyle }: Props) => {
  const { image, info, mainFeature, projectLogo, projectTitle } = data;

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex flex-col items-center ${cardStyle} overflow-hidden rounded-[5px] shadow-lg ${
        isHovered === false && "border border-1 border-yellow1"
      } cursor-pointer`}
    >
      <Image
        src={image}
        alt="mainImage"
        priority
        fill
        className="z-[-1] absolute top-0 left-0 right-0 bottom-0 object-cover opacity-75"
      />
      <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-white to-transparent" />

      <div
        className={`${
          isHovered
            ? "absolute left-0 right-0 top-0"
            : "absolute left-0 right-0 bottom-0"
        } flex justify-center bg-gradient-to-r from-white to-transparent w-full transition duration-150 linear`}
      >
        <div className="flex items-center gap-[20px] p-[20px]">
          <Image
            src={projectLogo}
            width={50}
            height={50}
            alt="logo"
            className="rounded-full"
          />
          <h1 className="text-xl font-bold">{projectTitle}</h1>
        </div>
      </div>

      <div
        className={`${
          isHovered
            ? "absolute top-0 left-0 right-0 bottom-0 transform translate-y-[30%]"
            : "absolute top-0 left-0 right-0 bottom-0 transform translate-y-[100%]"
        } bg-gradient-to-t from-white to-transparent w-full flex items-center justify-center gap-[30px] px-[20px] transition duration-150 linear text-[13px]`}
      >
        <div className="bg-white flex flex-col p-[20px] border border-1 border-primaryBlue rounded-[4px]">
          <p className="font-bold">40% less</p>
          <p>lines of code</p>
        </div>

        <div className="bg-white flex flex-col p-[20px] border border-1 border-primaryBlue rounded-[4px]">
          <p className="font-bold">On-Demand ISR</p>
          <p>for faster propagation</p>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
