import Sidebar from "@/components/TutorialComponents/Sidebar";
import { getTechData, getTutorialTopics } from "../actions";
import InteractiveBar from "@/components/TutorialComponents/InteractiveBar";

export default async function TutorialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const techdata = await getTechData();

  const tutorialTopics = await getTutorialTopics();

  return (
    <section className="w-full flex justify-center gap-[20px]">
      <div className="w-full flex justify-center gap-[20px]">
        <div className="sticky-[20px] min-w-[20%] max-w-[20%]">
          <Sidebar technologydata={techdata} tutorialTopic={tutorialTopics} />
        </div>

        {children}

        <div className="sticky top-[40px] min-w-[10%] max-w-[10%] ">
          <InteractiveBar />
        </div>
      </div>
    </section>
  );
}
