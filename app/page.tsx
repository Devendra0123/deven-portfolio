import CurvePathAnimate from "@/components/CurvePathAnimate";
import DoublePathMove from "@/components/DoublePathMove";
import IconAlongPath from "@/components/IconAlongPath";
import TwoCircleAnimate from "@/components/TwoCircleAnimate";

export default function Home() {
  return (
    <main className="w-full min-h-[90vh] flex flex-col items-center justify-center">
      <p className="mt-[30px] font-bold text-sky-500">SVG Animation || Pure javascript</p>
      <TwoCircleAnimate />
      <DoublePathMove />
      <CurvePathAnimate />
      <IconAlongPath />
    </main>
  );
}
