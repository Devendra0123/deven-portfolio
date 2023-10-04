import { getTechData, getTutorialTopics } from "@/app/actions";


export default async function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const techdata = await getTechData()

  const tutorialTopics = await getTutorialTopics()

  return (
    <section className="">
        {children}
    </section>
  );
}
