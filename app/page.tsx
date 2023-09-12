import MainSection from "@/components/MainSection";
import SvgPath from "@/components/SvgPath/SvgPath";
import SvgPath3 from "@/components/SvgPath/SvgPath3";

export default function Home() {
  return (
    <main className="mt-[-20px] relative max-w-full overflow-hidden min-h-[90vh] flex flex-col">
      <SvgPath />
      <MainSection />
      <div className="relative w-full min-h-[100vh]">
        <div className="w-full h-full absolute top-0 mt-[-30px]">
          <SvgPath3 />
        </div>

      </div>
    </main>
  );
}
