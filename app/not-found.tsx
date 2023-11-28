
import SvgPath5 from "@/components/SvgPath/SvgPath5";
import SvgPath6 from "@/components/SvgPath/SvgPath6";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-[75vh] max-h-[100vh] flex flex-col justify-center items-center">
      <div className="absolute top-[100px] right-0">
        <SvgPath5 />
      </div>
      <div className="absolute bottom-[0%] left-0">
        <SvgPath6 />
      </div>
      <div className="gradient-circle z-[-1] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[400px] h-[400px] rounded-full " />
      <div className="w-full flex flex-col items-center gap-[20px] p-[30px]">
        <h2 className="text-4xl font-bold">
          <span className="border-r-2 border-yellow1 px-[20px]">404</span>
          <span className="px-[20px] ">Not Found</span>
        </h2>
        <p>Could not find requested resource</p>
        <Link
          href="/"
          className="bg-yellow1 px-[20px] py-[8px] font-semibold rounded-[4px]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
