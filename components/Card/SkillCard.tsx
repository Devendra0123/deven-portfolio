import Image from "next/image";
import React from "react";

interface Props {
  icon?: any;
  text: string;
  textStyle?: string;
  visibility?: boolean;
}

const SkillCard = ({ icon, text, textStyle, visibility }: Props) => {
  return (
    <div className="flex items-center gap-[10px] cursor-pointer">
      {icon && (
        <div
          className={`${
            visibility ? "flex items-center justify-center" : "hidden"
          } z-10 w-[70px] h-[70px] rounded-full bg-light `}
        >
          <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-gray1/25 ">
            <Image src={icon} alt="" width={60} height={60} className="" />
          </div>
        </div>
      )}

      <p className={`${visibility ? "flex items-center justify-center" : "hidden"} ${textStyle}`}>{text}</p>
    </div>
  );
};

export default SkillCard;
