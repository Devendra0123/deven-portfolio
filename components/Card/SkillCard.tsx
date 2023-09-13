import Image from "next/image";
import React from "react";

interface Props {
  icon?: any;
  text: string;
  titleStyle?: string;
  descriptionStyle?: string;
  visibility?: boolean;
}

const SkillCard = ({ icon, text, titleStyle, descriptionStyle, visibility }: Props) => {
  return (
    <div className="w-full flex gap-[10px] cursor-pointer">
      {icon && (
        <div
          className={`${
            visibility
              ? "opacity-1 transform translate-y-[0px] "
              : "opacity-0 transform -translate-y-[20px] "
          } transition delay-150 duration-300 ease-out z-10 flex items-center justify-center w-[70px] h-[70px] rounded-full bg-light`}
        >
          <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-gray1/25 ">
            <Image src={icon} alt="" width={60} height={60} />
          </div>
        </div>
      )}
      <div className="max-w-[500px] flex flex-col text-start">
        <p
          className={`${
            visibility
              ? "opacity-1 transform translate-y-[0px] "
              : "opacity-0 transform translate-y-[20px]"
          } w-full text-start transition delay-150 duration-300 ease-out ${titleStyle}`}
        >
          {text}
        </p>

        <p
          className={`${
            visibility
              ? "opacity-1 transform translate-y-[0px] "
              : "opacity-0 transform translate-y-[20px]"
          } transition delay-150 duration-300 ease-out ${descriptionStyle} text-start`}
        >
          I follow the best coding practices and maintain a clean code with
          proper comment. This makes code scalable and easy to understand.
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
