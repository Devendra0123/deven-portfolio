"use client"
import TechnologyDropdown from "./TechnologyDropdown";
import { TechnologyProps, TutorialTopicProps } from "@/types";
import TutoralTopics from "./TutoralTopics";
import { sanityFetch } from "@/utils/sanity/client";
import { useEffect, useState } from "react";

interface Props {
  technologydata: TechnologyProps[];
  tutorialTopic: TutorialTopicProps[];
}

const Sidebar = ({
  technologydata,
  tutorialTopic,
}: Props) => {

  let intialTopicDisplayCategorySlug = "abc";

  const initialTopicData = tutorialTopic.filter(item => item.technology.slug.current === intialTopicDisplayCategorySlug)
  const [topicDisplayData, setTopicDisplayData] = useState<TutorialTopicProps[]>(initialTopicData);
  
  const handleTechClick = async(techSlug: string)=>{
      const res = tutorialTopic.filter(item => item.technology.slug.current === techSlug)
    if(res.length > 0){
      setTopicDisplayData(res)
    }
  }

  return (
    <div className="w-full min-h-[100vh] max-h-[100vh] overflow-y-auto bg-gray-300 flex flex-col p-[20px]">
      <div className="max-w-[100px]">
        <TechnologyDropdown data={technologydata} handleTechClick={(slug: string)=> handleTechClick(slug)} />
      </div>

      <div className="mt-[50px]">
        <TutoralTopics tutorialTopic={topicDisplayData} />
      </div>
    </div>
  );
};

export default Sidebar;
