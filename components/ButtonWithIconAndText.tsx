import React from "react";
import Image from "next/image";
interface Props {
  icon: any;
  text: string;
  textStyle?: string;
}
const ButtonWithIconAndText = ({ icon, text, textStyle }: Props) => {
  return (
    <div className="flex items-center cursor-pointer">
      {icon && <Image src={icon} alt="" width={60} height={60} className="" />}

      <p className={`${textStyle}`}>{text}</p>
    </div>
  );
};

export default ButtonWithIconAndText;
