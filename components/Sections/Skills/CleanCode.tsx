"use client";
import SkillCard from "@/components/Card/SkillCard";
import CodingDemo from "@/components/CodingDemo";
import React, { useEffect, useState } from "react";

const CleanCode = () => {
  const [visible, setVisible] = useState(false);
const [codingDemoVisibility, setCodingDemoVisibility] = useState(false)
  useEffect(() => {
    const cleanCodeSection = document.querySelector("#cleanCodeSection");

    const handleElementOnScroll = () => {
      if (cleanCodeSection) {
        const rect = cleanCodeSection.getBoundingClientRect();
        console.log(rect.top);
        const isVisible = rect.top <= 400 && rect.bottom <= window.innerHeight;
        setVisible(isVisible);

        const isCodingDemoVisible = rect.top <= 300 && rect.bottom <= window.innerHeight;
        setCodingDemoVisibility(isCodingDemoVisible)
      }
    };
    if (cleanCodeSection) {
      window.addEventListener("scroll", handleElementOnScroll);
      return () => {
        window.removeEventListener("scroll", handleElementOnScroll);
      };
    }
  }, []);

  return (
    <div id="cleanCodeSection">
      <SkillCard
        text="Clean Code  &&  Best Practices"
        icon="/code.png"
        titleStyle="font-bold text-[21px]"
        descriptionStyle=""
        visibility={visible}
      />

      <div className="ml-[100px] mt-[50px] ">
        <CodingDemo visibility={codingDemoVisibility} />
      </div>
    </div>
  );
};

export default CleanCode;
