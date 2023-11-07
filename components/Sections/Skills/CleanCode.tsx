"use client";
import SkillCard from "@/components/Card/SkillCard";
import CodingDemo from "@/components/Animations/CodingDemo";
import React, { useEffect, useState } from "react";

const CleanCode = () => {
  const [visible, setVisible] = useState(false);
  const [codingDemoVisibility, setCodingDemoVisibility] = useState(false);
  useEffect(() => {
    const cleanCodeSection = document.querySelector("#cleanCodeSection");

    const handleElementOnScroll = () => {
      if (cleanCodeSection) {
        const rect = cleanCodeSection.getBoundingClientRect();
        const isVisible = rect.top <= 400 && rect.bottom <= window.innerHeight;
        setVisible(isVisible);

        const isCodingDemoVisible =
          rect.top <= 300 && rect.bottom <= window.innerHeight;
        setCodingDemoVisibility(isCodingDemoVisible);
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
        description="I follow the best coding practices and maintain a clean code with proper comment. This makes code scalable and easy to understand."
      />

      <div className="ml-[100px] mt-[50px] ">
        <CodingDemo visibility={codingDemoVisibility} />
      </div>
    </div>
  );
};

export default CleanCode;
