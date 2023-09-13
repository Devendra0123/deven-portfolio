"use client";
import SkillCard from "@/components/Card/SkillCard";
import React, { useEffect, useState } from "react";

const CleanCode = () => {
    const [visible, setVisible] = useState(false)

  useEffect(() => {
    const cleanCodeSection = document.querySelector("#cleanCodeSection");

    const handleElementOnScroll = () => {
      if (cleanCodeSection) {
        const rect = cleanCodeSection.getBoundingClientRect();
        console.log(rect.top)
        const isVisible = rect.top <= 400 && rect.bottom <= window.innerHeight;
        setVisible(isVisible)
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
        textStyle="font-bold text-[21px]"
        visibility={visible}
      />
    </div>
  );
};

export default CleanCode;
