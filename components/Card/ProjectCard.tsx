'use client'
import { Project } from "@/types";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  data: Project;
}

const ProjectCard = ({ data }: Props) => {
  const { name, image, link, slug } = data;

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

  // Calculate linear gradient based on mouse position
  const gradient = `linear-gradient(to bottom right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5))`;

  // Define a CSS style object with transitions for background-image and background-position
  const cardStyle = {
    backgroundImage: `${gradient}, url(${image})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
  };

  return (
    <div
      className="relative min-w-[250px] max-w-[250px] h-[300px] p-[20px] bg-white rounded-lg shadow-lg flex flex-col items-center gap-[20px] cursor-pointer"
      onMouseMove={handleMouseMove}
      style={cardStyle}
    >
      <div className="relative min-w-[130px] max-w-[130px] min-h-[130px] max-h-[130px] bg-light rounded-full">
        <Image
          src={image}
          alt="company-logo"
          fill
          className="object-contain rounded-full"
        />
      </div>
      <p className="font-[600] text-slate-700 tracking-wider text-center">
        {name}
      </p>
    </div>
  );
};

export default ProjectCard;
