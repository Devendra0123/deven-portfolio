"use client";
import SkillCard from "@/components/Card/SkillCard";
import React, { useState, useEffect } from "react";

const ProjectsDisplay = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const projectsSection = document.querySelector("#projects");

    const handleElementOnScroll = () => {
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        console.log(rect.top);
        const isVisible = rect.top <= 700;
        setVisible(isVisible);
      }
    };
    if (projectsSection) {
      window.addEventListener("scroll", handleElementOnScroll);
      return () => {
        window.removeEventListener("scroll", handleElementOnScroll);
      };
    }
  }, []);

  return (
    <div id="projects">
      <SkillCard
        text="Projects"
        icon="/task-icon.png"
        titleStyle="font-bold text-[21px]"
        descriptionStyle=""
        visibility={visible}
        description="I have listed few projects completed by me."
      />
    </div>
  );
};

export default ProjectsDisplay;
