"use client";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  data: Project;
}

const ProjectCard = ({ data }: Props) => {
  const { name, image, link, slug } = data;

  const [isHovered, setIsHovered] = useState(false)
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
      className="group relative bg-[#fff]/50 min-w-[250px] max-w-[250px] h-[360px] p-[20px] rounded-lg shadow-lg flex flex-col items-center gap-[20px] cursor-pointer"
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
      <p className="text-slate-700 tracking-wider text-center">{name.slice(0,15) || "..."}</p>
      <div className={`flex flex-col justify-center items-center gap-[10px]`}>
        <Link href={link} className="w-full border border-primaryBlue text-primaryBlue px-[20px] py-[13px] rounded-[5px]">
          Visit Website
        </Link>
        <Link href={``} className="w-full bg-primaryBlue px-[20px] py-[13px] rounded-[5px] text-white">Case Study</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
