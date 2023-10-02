"use client";
import { urlForImage } from "@/sanity/lib/image";
import { TechnologyProps } from "@/types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  data: TechnologyProps[];
}
const TechnologyDropdown = ({ data }: Props) => {
  const containerRef: any = useRef(null);

  const [technologies, setTechnologies] = useState<TechnologyProps[]>([]);
  const [activeItem, setActiveItem] = useState<TechnologyProps>();
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);

  useEffect(() => {
    if (data?.length > 0) {
      setTechnologies(data);
      setActiveItem(data[0]);
    }
  }, [data]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsDropdownActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      <div ref={containerRef} className="relative w-[150px]">
        {technologies?.length > 0 && activeItem ? (
          <div
            onClick={() => setIsDropdownActive(!isDropdownActive)}
            className="w-full border border-slate-500 rounded-[5px] p-[10px] flex items-center gap-[10px]"
          >
            <div className="w-full flex items-center gap-[10px] font-medium">
              <Image
                src={urlForImage(activeItem?.image.asset).url()}
                alt="icon"
                width={30}
                height={30}
                className="object-cover"
              />
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
                className="w-full flex flex-col gap-[10px] text-white"
              >
                <div className="flex items-center justify-center gap-[10px] ">
                  <Image
                    src={urlForImage(item?.image.asset).url()}
                    alt="icon"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                  <p>{item.name}</p>
                </div>
                <div className="w-full h-[1px] bg-slate-500 " />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TechnologyDropdown;
