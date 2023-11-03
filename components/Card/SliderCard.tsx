import { Project } from "@/types";
import React from "react";
import Image from "next/image";

interface Props {
  data: Project;
}
const SliderCard = ({ data }: Props) => {
  return (
    <div className="w-[200px] h-[170px] relative flex items-center justify-center rounded-lg overflow-hidden shadow-lg">
      <Image
        src={data.image}
        alt="projectImage"
        width={120}
        height={120}
        className="object-cover"
      />
    </div>
  );
};

export default SliderCard;
