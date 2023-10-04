import Link from "next/link";
import TechnologyDropdown from "./TechnologyDropdown";
import { TechnologyProps, TutorialTopicProps } from "@/types";

interface Props {
  technologydata: TechnologyProps[];
  tutorialTopic: TutorialTopicProps[];
}

const Sidebar = ({
  technologydata,
  tutorialTopic,
}: Props) => {
  return (
    <div className="w-full min-h-[100vh] max-h-[100vh] overflow-y-auto bg-gray-300 flex flex-col p-[20px]">
      <div className="max-w-[100px]">
        <TechnologyDropdown data={technologydata} />
      </div>

      <div className="mt-[50px]">
        {tutorialTopic?.length > 0 && (
          <ul className="flex flex-col gap-[10px]">
            {tutorialTopic.map((topic, index) => (
              <li key={index} className={` text-[16px] ${index % 2 === 0 ? "bg-slate-300" : "bg-white"} p-[10px] shadow rounded-[4px]`}>
                <Link href={`/tutorials-and-guide/${topic.slug.current}`}>
                  {topic.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
