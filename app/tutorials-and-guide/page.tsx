import React from "react";
import { FaRegHandPointLeft } from "react-icons/fa";

const TutorialsAndGuide = () => {
  return (
    <div className="grow min-h-[100vh]">
      <h1 className="text-start text-3xl font-bold mt-[30px] underline underline-offset-8 decoration-yellow1">
        Tutorial & Guide
      </h1>
      <div className="flex flex-col gap-[20px] mt-[30px]">
        <h1 className="tracking-wider">
          Click on the topic to see the detailed document <br /> about particular
          topic.
        </h1>
        <div>
          <FaRegHandPointLeft className="text-[50px] font-bold text-primaryBlue " />
        </div>
      </div>

      <div className="clip-path-circle" />
    </div>
  );
};

export default TutorialsAndGuide;
