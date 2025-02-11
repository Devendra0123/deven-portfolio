import MainSection from "@/components/MainSection";
import CleanCode from "@/components/Sections/Skills/CleanCode";
import ProjectHighlights from "@/components/Sections/Skills/ProjectHighlights";
import SeoOptimization from "@/components/Sections/Skills/SeoOptimization";
import ProjectsDisplay from "@/components/Sections/projects/ProjectsDisplay";
import SvgPath from "@/components/SvgPath/SvgPath";
import SvgPath3 from "@/components/SvgPath/SvgPath3";
import ProfessionalExperience from "@/components/Sections/ProfessionalExperience";

export default async function Home() {

  return (
    <main className=" mt-[-60px] lg:mt-[10px] relative w-full lg:w-[90%] overflow-hidden flex flex-col">
      <SvgPath />
      <MainSection />

      <div className="relative w-full">
        <div className="hidden lg:block w-full h-full absolute top-0 right-[2.5%] mt-[-30px]">
          <SvgPath3 />
        </div>

        <div style={{
          zIndex: 40
        }} className="mt-[40px] lg:mt-[200px] px-[20px] lg:px-[65px] flex flex-col gap-[100px]">
          <CleanCode />
          <SeoOptimization />
          <ProjectHighlights />
          <ProjectsDisplay />
          <ProfessionalExperience />
        </div>
      </div>
    </main>
  );
}
