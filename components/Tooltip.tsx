"use client";
import React, { useState } from "react";

interface Props {
  text: string;
  alignment: "left" | "right" | "top" | "bottom";
  style?: string;
  icon: any;
}
const Tooltip = ({ text, alignment, style, icon }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        {icon}
        {isHovered && (
          <div
            className={`${style} w-max p-[8px] rounded-[5px] absolute ${
              alignment === "top"
                ? "top-[-40px] left-[50%] transform -translate-x-[50%]"
                : alignment === "bottom" ? "bottom-[-45px] left-[50%] transform -translate-x-[50%]" : ""
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
