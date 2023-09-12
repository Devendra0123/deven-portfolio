import MainSection from "@/components/MainSection";
import SvgPath from "@/components/SvgPath/SvgPath";

export default function Home() {
  return (
    <main className="mt-[-20px] relative max-w-full overflow-hidden min-h-[90vh] flex flex-col">
      <SvgPath />
      <MainSection />
    </main>
  );
}
