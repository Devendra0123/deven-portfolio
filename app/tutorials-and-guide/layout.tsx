import Sidebar from "@/components/TutorialComponents/Sidebar";
import { TechnologyProps, TutorialTopicProps } from "@/types";
import { sanityFetch } from "@/utils/sanity/client";

export default async function TutorialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const techdata = await sanityFetch<TechnologyProps[]>({
    query: `*[_type == "technology"]`,
    tags: ['technology'],
  });

  const tutorialTopics = await sanityFetch<TutorialTopicProps[]>({
    query: `*[_type == "topic"]`,
    tags: ['topic'],
  });

  return (
    <section className="w-full flex justify-center gap-[20px]">
      <div className="w-full flex justify-center gap-[20px]">
        <Sidebar
          technologydata={techdata}
          tutorialTopic={tutorialTopics}
        />
        {children}
      </div>
    </section>
  );
}
