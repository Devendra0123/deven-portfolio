
import CTA1 from "@/components/Sections/CTA/CTA1";

const Hire = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center p-[20px]">
      <div className="w-full bg-dark1 flex flex-col items-center gap-[40px] p-[30px] mt-[30px]">
        <h1 className="text-slate-300 text-3xl font-bold text-center">
          Get In Touch
        </h1>
        <p className="w-[90%] lg:w-[50%] mt-[-20px] text-center text-slate-300 text-xl font-medium">
          Do you want to discuss about the web development project?
        </p>
        {/* CTA SECTION */}
        <CTA1 />
      </div>
    </div>
  );
};

export default Hire;
