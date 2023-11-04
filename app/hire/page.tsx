import TextAnimation from "@/components/Animations/TextAnimation";
import Laptop from "@/components/Elements/Laptop";
import SkillsAndExpertise from "@/components/Sections/SkillsAndExpertise";
import WhatToExpect from "@/components/Sections/WhatToExpect";

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
      <div className="w-[80%] flex flex-col gap-[100px] mt-[50px]">
        <Laptop />
        <SkillsAndExpertise />
        <WhatToExpect />

        <div className="flex items-center gap-[30px] mt-[-30px]">
          <button className="px-[30px] py-[8px] rounded-[25px] text-xl font-bold bg-yellow1">Schedule a Meeting</button>
          <button className="px-[30px] py-[8px] rounded-[25px] text-xl font-bold border border-primaryBlue text-primaryBlue">
            Contact me
          </button>
        </div>
      </div>

    </div>
  );
};

export default Hire;
