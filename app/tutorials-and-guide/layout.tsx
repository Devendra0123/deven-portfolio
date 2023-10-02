import Sidebar from "@/components/TutorialComponents/Sidebar";
import { TechnologyProps, TutorialTopicProps } from "@/types";
import { sanityFetch } from "@/utils/sanity/client";
import { fetchPost } from "../actions";

export default async function TutorialsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const techdata = await sanityFetch<TechnologyProps[]>({
    query: `*[_type == "technology"]`,
    tags: [],
  });

  const tutorialTopics = await sanityFetch<TutorialTopicProps[]>({
    query: `*[_type == "topic"]`,
    tags: [],
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
