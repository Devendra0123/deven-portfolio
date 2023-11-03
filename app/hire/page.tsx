import TextAnimation from "@/components/Animations/TextAnimation";
import SliderCard from "@/components/Card/SliderCard";
import Laptop from "@/components/Elements/Laptop";
import ShowcaseSlider from "@/components/Slider/ShowcaseSlider";

const Hire = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center px-[20px]">
      <h1 className="text-center text-4xl mt-[50px]">
        <span className="font-bold pr-[10px] text-primaryBlue">Hi there!</span>
        Warm welcome.
      </h1>

      <div className="w-full lg:max-w-[65%] flex justify-center items-center whitespace-normal flex-wrap text-xl mt-[30px] text-center">
        <p>My name is</p>
        <span className="text-2xl font-bold text-slate-700 pl-[10px]">
          <TextAnimation text="Devendra Chaudhary." />
        </span>
        I am a professional web developer with good proficiency in
        <span className="pl-[5px] underline underline-offset-8 decoration-primaryBlue font-bold tracking-wider"> React & Next.js.</span> I have been in web development journey
        for more than 2 years.
      </div>

      {/* <div className="w-[90%] overflow-hidden mt-[50px] bg-slate-300 shadow-lg shadow-yellow1/75 p-[20px] flex justify-center">
        <ShowcaseSlider />
      </div> */}
      <div className="mt-[50px]">
      <Laptop />
      </div>

    </div>
  );
};

export default Hire;
