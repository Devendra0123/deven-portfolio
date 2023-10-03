import Sidebar from "@/components/TutorialComponents/Sidebar";
import { TechnologyProps, TutorialTopicProps } from "@/types";
import { sanityFetch } from "@/utils/sanity/client";

export default async function CreateLayout({
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
    <section className="">
        {children}
    </section>
  );
}
