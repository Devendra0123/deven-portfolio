"use client";
import SeoAnimation from "@/components/Animations/SeoAnimation";
import SkillCard from "@/components/Card/SkillCard";
import React, { useEffect, useState } from "react";

const SeoOptimization = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seoSection = document.querySelector("#seoOptimization");

    const handleElementOnScroll = () => {
      if (seoSection) {
        const rect = seoSection.getBoundingClientRect();
        console.log(rect.top);
        const isVisible = rect.top <= 600 && rect.bottom <= window.innerHeight;
        setVisible(isVisible);
      }
    };
    if (seoSection) {
      window.addEventListener("scroll", handleElementOnScroll);
      return () => {
        window.removeEventListener("scroll", handleElementOnScroll);
      };
    }
  }, []);

  return (
    <div id="seoOptimization" className="">
      <SkillCard
        text="SEO Optimization"
        icon="/seo_icon.png"
        titleStyle="font-bold text-[21px]"
        descriptionStyle=""
        visibility={visible}
        description="Having understood about the need for any website to appear on the top in the search engine, I prioritize in optimizing images, decreasing loading time, adding meta tags and many more."
      />

      <div className="relative ml-[100px] mt-[50px] ">
        <SeoAnimation />
      </div>
    </div>
  );
};

export default SeoOptimization;
