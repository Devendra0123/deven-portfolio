"use client";
import Computer from "@/components/Animations/Computer";
import SkillCard from "@/components/Card/SkillCard";
import { keyProjectHighlights } from "@/data/keyProjectHighlights";
import React, { useState, useEffect } from "react";

const ProjectHighlights = () => {
  const [visible, setVisible] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    const highlightsSection = document.querySelector("#highlights");

    const handleElementOnScroll = () => {
      if (highlightsSection) {
        const rect = highlightsSection.getBoundingClientRect();
        const isVisible = rect.top <= 450;
        setVisible(isVisible);
      }
    };
    if (highlightsSection) {
      window.addEventListener("scroll", handleElementOnScroll);
      return () => {
        window.removeEventListener("scroll", handleElementOnScroll);
      };
    }
  }, []);

  // Show features
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setShowFeatures(true);
      }, 500);
    } else {
      setShowFeatures(false);
    }
  }, [visible]);

  return (
    <div id="highlights">
      <SkillCard
        text="Key Project Highlights"
        icon="/code.png"
        titleStyle="font-bold text-[21px]"
        descriptionStyle=""
        visibility={visible}
        description="I have mentioned few key features that I am good at, but there are many more things that I am good at."
      />

      <div className="relative ml-[100px] mt-[50px] flex items-center justify-between gap-[100px]">
        <div className="flex flex-col gap-[20px] ">
          {keyProjectHighlights?.map(({ title, icon }, index) => (
            <div
              key={index}
              className={`relative w-[400px] ${
                showFeatures
                  ? "opacity-1 transform translate-y-[0px] "
                  : "opacity-0 transform -translate-y-[20px] "
              } transition delay-[${
                150 + index + 100
              }] duration-300 ease-out flex items-center gap-[10px] bg-primaryBlue px-[20px] py-[13px]`}
            >
              <p
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
                className="w-[35px] h-[35px] rounded-full flex items-center justify-center "
              >
                {index + 1}
              </p>
              {icon && icon}
              <p className="text-white">{title}</p>
            </div>
          ))}
        </div>

        <div className="mr-[200px]">
          <Computer visibility={showFeatures} />
        </div>
      </div>
    </div>
  );
};

export default ProjectHighlights;
