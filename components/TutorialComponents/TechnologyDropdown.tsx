"use client";
import { urlForImage } from "@/sanity/lib/image";
import { TechnologyProps } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  data: TechnologyProps[];
}
const TechnologyDropdown = ({ data }: Props) => {
  const [activeItem, setActiveItem] = useState<TechnologyProps>();

  useEffect(() => {
    if (data?.length > 0) {
      setActiveItem(data[0]);
    }
  }, [data]);

  if (activeItem) {
    console.log(data, activeItem, urlForImage(activeItem?.image.asset).url());
  }

  if (!activeItem) return null;
  return (
    <div suppressHydrationWarning>
      <div>
        {activeItem ? (
          <div></div>
        ) : (
          <div>
            <p>No Technology</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnologyDropdown;
