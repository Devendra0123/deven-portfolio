import { seoPoints } from "@/data/seoPoints";
import Image from "next/image";
import React from "react";

const SeoAnimation = () => {
  return (
    <div
      className=" w-full h-[50vh]"
    >
      <div className="w-full flex items-center gap-[60px] flex-wrap">
        {
          seoPoints?.map(({ title, icon }: any, index) => (
            <div key={index} className="w-max relative">
               <div className={`w-[50px] h-[50px] ${index % 2 == 0 ? "bg-primaryBlue" : "bg-yellow1"} z-[-1] absolute left-[50%] right-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-full z-[-1]`} />
            <div style={{
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              transition: "all 0.3s ease", // Add a transition for flex-direction
            }} className={`relative w-max ${index % 2 != 0 ? "text-primaryBlue" : "text-yellow1"} flex items-center gap-[10px] px-[20px] py-[10px]`}>
              {icon}
              <button  className="text-black z-10">
            {title}
              </button>
            </div>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default SeoAnimation;
