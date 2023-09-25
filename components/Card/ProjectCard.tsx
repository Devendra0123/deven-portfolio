"use client"
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
    backgroundImage: `${gradient}`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
  };

  return (
    <div
      className="relative min-w-[250px] max-w-[250px] h-[300px] p-[20px] flex flex-col items-center gap-[20px] cursor-pointer"
      onMouseMove={handleMouseMove}
      style={{
        background: "rgba(44, 48, 58, 0.9)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(1px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "10px",
        transition: "all 0.3s ease", // Add a transition for flex-direction
      }}
    >
      <div className="relative min-w-[130px] max-w-[130px] min-h-[130px] max-h-[130px] bg-light rounded-full">
        <Image
          src={image}
          alt="company-logo"
          fill
          className="object-contain rounded-full"
        />
      </div>
      <p className=" text-white tracking-wider text-center">
        {name}
      </p>
    </div>
  );
};

export default ProjectCard;
