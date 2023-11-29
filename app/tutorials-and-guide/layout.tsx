import Sidebar from "@/components/TutorialComponents/Sidebar";
import { getTechData, getTutorialTopics } from "../actions";

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
        <div className="sticky top-[40px] w-[30%] lg:min-w-[20%] w-[30%] lg:max-w-[20%]">
          <Sidebar technologydata={techdata} tutorialTopic={tutorialTopics} />
        </div>

        {children}
      </div>
    </section>
  );
}
