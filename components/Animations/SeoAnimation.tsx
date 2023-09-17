import { seoPoints } from "@/data/seoPoints";
import Image from "next/image";
import React from "react";

interface Props {
  visibility: boolean;
}

const SeoAnimation = ({ visibility }: Props) => {
  return (
    <div className=" w-full">
      <div className="w-full flex items-center gap-[60px] flex-wrap">
        {seoPoints?.map(({ title, icon }: any, index) => (
          <div
            key={index}
            className={`w-max relative ${
              visibility
                ? "opacity-1 transform translate-y-[0px] "
                : "opacity-0 transform -translate-y-[20px] "
            } group transition delay-150 duration-300 ease-out`}
          >
            <div
              className={`w-[50px] h-[50px] ${
                index % 2 == 0 ? "bg-primaryBlue" : "bg-yellow1"
              } z-[-1] absolute left-[50%] right-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-full z-[-1]`}
            />
             <div
              className={`w-[50px] h-[50px] ${
                index % 2 == 0 ? "bg-yellow1" : "bg-primaryBlue"
              } z-[-2] absolute left-[50%] right-[50%] transform -translate-x-[50%] -translate-y-[50%] group-hover:-skew-x-12 group-hover:-skew-y-12 rounded-full z-[-1] transition duration-300 ease-out`}
            />
            <div
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                transition: "all 0.3s ease", // Add a transition for flex-direction
              }}
              className={`relative w-max ${
                index % 2 != 0 ? "text-primaryBlue" : "text-yellow1"
              } flex items-center gap-[10px] px-[20px] py-[10px]`}
            >
              {icon}
              <button className="text-black z-10">{title}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeoAnimation;
