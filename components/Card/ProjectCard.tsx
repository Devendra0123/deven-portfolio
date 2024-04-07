"use client";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsLink } from "react-icons/bs";
import { SiSololearn } from "react-icons/si";
import Tooltip from "../Tooltip";
interface Props {
  data: Project;
}

const ProjectCard = ({ data }: Props) => {
  const { name, image, link, slug } = data;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cursor-pointer relative overflow-hidden bg-transparent min-w-[250px] max-w-[250px] h-[320px] rounded-lg shadow-lg flex flex-col items-center gap-[20px] transition duration-150 ease-in"
      onMouseEnter={() => {
        console.log("is hovered")
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        console.log("not hovered")
        setIsHovered(false)
      }}
    >
      <div className="mt-[20px] relative min-w-[130px] max-w-[130px] min-h-[130px] max-h-[130px] bg-light rounded-full">
        <Image
          src={image}
          alt="company-logo"
          fill
          className="object-contain rounded-full"
        />
      </div>
      <p
        className={`${
          isHovered ? "text-white" : "text-slate-700"
        } w-full tracking-wider text-center`}
      >
        {name.slice(0, 20) + "..." || "..."}
      </p>
      <div className="flex items-center gap-[20px]">
        <Tooltip
          alignment="bottom"
          text="View Details"
          icon={
            <SiSololearn className={`${isHovered ? "text-white" : "text-yellow1"} text-[18px] cursor-pointer hover:scale-110 hover:rotate-45 transition duration-150 ease-in`} />
          }
          style="bg-white"
        />
        <Tooltip
          alignment="bottom"
          text="Visit Link"
          icon={
            <BsLink className={`${isHovered ? "text-white" : "text-primaryBlue"} text-[29px] cursor-pointer hover:scale-110 transition duration-150 ease-in`} />
          }
          style="bg-white"
        />
      </div>

      <div
        className={`z-[-1] absolute bg-yellow1/90 ${
          isHovered
            ? "transform translate-x-[0%] "
            : "transform translate-x-[98%]"
        } w-full h-full transition duration-150 ease-out`}
      />
    </div>
  );
};

export default ProjectCard;
