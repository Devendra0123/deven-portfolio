"use client";
import React, { useState } from "react";

interface Props {
  text: string;
  alignment: "left" | "right" | "top" | "bottom";
  style?: string;
  icon: any;
  handleTooltipClick?: any
}
const Tooltip = ({ text, alignment, style, icon,handleTooltipClick }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
        onClick={handleTooltipClick}
      >
        {icon}
        {isHovered && (
          <div
            className={`${style} w-max p-[8px] rounded-[5px] absolute ${
              alignment === "top"
                ? "top-[-40px] left-[50%] transform -translate-x-[50%]"
                : alignment === "bottom"
                ? "bottom-[-45px] left-[50%] transform -translate-x-[50%]"
                : alignment === "left"
                ? "top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[120%]"
                : alignment === "right"
                ? ""
                : null
            } transition duration-150 ease-in`}
          >
            <p className="text-[13px]">{text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
