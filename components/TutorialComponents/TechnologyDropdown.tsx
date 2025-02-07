"use client";
import { urlForImage } from "@/sanity/lib/image";
import { TechnologyProps } from "@/types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import HandleOutsideClick from "../HandleOutsideClick";
interface Props {
  data: TechnologyProps[];
  handleTechClick: any
}
const TechnologyDropdown = ({ data, handleTechClick }: Props) => {
  const containerRef: any = useRef(null);

  const [technologies, setTechnologies] = useState<TechnologyProps[]>(data);
  const [activeItem, setActiveItem] = useState<TechnologyProps>();
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);

  useEffect(() => {
    if (data?.length > 0) {
      setTechnologies(data);
      setActiveItem(data[0]);
    }
  }, [data]);

  return (
    <div className="w-full">
      <div ref={containerRef} className="relative w-[150px]">
        {technologies?.length > 0 && activeItem ? (
          <div
            onClick={() => setIsDropdownActive(!isDropdownActive)}
            className="w-full cursor-pointer hover:bg-primaryBlue border border-slate-500 rounded-[5px] p-[10px] flex items-center gap-[10px]"
          >
            <div className="w-full flex items-center gap-[10px] font-medium">
              {activeItem?.image && (
                <Image
                  src={urlForImage(activeItem?.image.asset).url()}
                  alt="icon"
                  width={30}
                  height={30}
                  className="object-cover"
                />
              )}

              <p>{activeItem.name}</p>
            </div>
            <BsChevronDown className="text-xl font-bold" />
          </div>
        ) : null}

        {isDropdownActive && technologies?.length > 0 ? (
          <div className="flex flex-col items-center w-full absolute top-[60px] left-[50%] transform -translate-x-[50%] rounded-[5px] p-[10px] bg-primaryBlue shadow-xl">
            {technologies.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer w-full flex flex-col gap-[10px] text-white p-[5px]"
                onClick={()=> {
                  handleTechClick(item?.slug?.current)
                  setActiveItem(item)
                  setIsDropdownActive(false)
                }}
              >
                <div className="flex items-center justify-center gap-[10px] ">
                  {item?.image && (
                    <Image
                      src={urlForImage(item?.image.asset).url()}
                      alt="icon"
                      width={20}
                      height={20}
                      className="object-cover"
                    />
                  )}

                  <p>{item.name}</p>
                </div>
                <div className="w-full h-[1px] bg-slate-500 " />
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <HandleOutsideClick
        containerRef={containerRef}
        handleFunc={() => setIsDropdownActive(false)}
      />
    </div>
  );
};

export default TechnologyDropdown;
