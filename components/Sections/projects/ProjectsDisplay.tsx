"use client";
import ProjectCard from "@/components/Card/ProjectCard";
import SkillCard from "@/components/Card/SkillCard";
import SvgPath4 from "@/components/SvgPath/SvgPath4";
import { projectsData } from "@/data/projectsData";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ProjectsDisplay = () => {
  const [visible, setVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // CSS class for the growing rectangle
  const rectangleClass = isVisible ? 'rectangle-visible' : 'rectangle-hidden';

  useEffect(() => {
    const projectsSection = document.querySelector("#projects");

    const handleElementOnScroll = () => {
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        console.log(rect.top);
        const isVisible = rect.top <= 700;
        setVisible(isVisible);
        setIsVisible(true)
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

      {projectsData?.length > 0 && (
        <div className="relative ml-[100px] mt-[50px] flex items-center gap-[50px] justify-start flex-wrap ">
          {projectsData.map((item, index) => (
            <ProjectCard key={index} data={item} />
          ))}
        </div>
      )}

    
    </div>
  );
};

export default ProjectsDisplay;
