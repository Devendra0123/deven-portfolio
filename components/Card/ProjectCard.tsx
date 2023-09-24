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
  // State to track the mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  // Function to update the mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width; // Calculate X position as a percentage of the card's width
    const y = (e.clientY - top) / height; // Calculate Y position as a percentage of the card's height
    setMousePosition({ x, y });
  };

  // Define a CSS style object with transitions for background-image and background-position
  const cardStyle = {
    backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
  };

  return (
    <div
      className="relative bg-transparent min-w-[250px] max-w-[250px] h-[320px] p-[20px] rounded-lg shadow-lg flex flex-col items-center gap-[20px]"
      onMouseMove={handleMouseMove}
    >
      <div className="relative min-w-[130px] max-w-[130px] min-h-[130px] max-h-[130px] bg-light rounded-full">
        <Image
          src={image}
          alt="company-logo"
          fill
          className="object-contain rounded-full"
        />
      </div>
      <p className="w-full text-slate-700 tracking-wider text-center">
        {name.slice(0, 20) + "..." || "..."}
      </p>
      <div className="flex items-center gap-[20px]">
        <Tooltip
          alignment="bottom"
          text="View Details"
          icon={<SiSololearn className="text-yellow1 text-[18px]" />}
          style="bg-yellow1"
        />
        <Tooltip
          alignment="top"
          text="View Details"
          icon={<BsLink className="text-primaryBlue text-[29px]" />}
          style="bg-primaryBlue text-white"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
