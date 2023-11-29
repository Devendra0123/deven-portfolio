import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";

const ContactDetails = ({ handleCross }: any) => {
  return (
    <div className="z-30 w-[90%] md:w-[450px] fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex flex-col gap-[20px] bg-white p-[20px] pb-[40px] rounded-lg shadow">
      <div className="w-full">
        <div
          onClick={handleCross}
          className="cursor-pointer float-right w-[35px] h-[35px] rounded-full border border-slate-800 flex items-center justify-center "
        >
          <RxCross2 className="text-[17px] font-bold" />
        </div>
      </div>
      <h1 className="text-2xl font-bold text-primaryBlue">
        <span className="text-yellow1">Contact</span> Details
      </h1>

      <div className="flex flex-col items-start gap-[20px] pl-[30px] ">
        <div className="flex items-center gap-[10px]">
          <IoCallOutline className="text-xl text-primaryBlue" />
          <p className="font-medium">+9779807717694</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <TfiEmail className="text-xl text-primaryBlue" />
          <p className="font-medium">devendra13.dc@gmail.com</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <IoLocationOutline className="text-xl text-primaryBlue" />
          <p className="font-medium">Kathmandu, Nepal</p>
        </div>
      </div>

      <div className="">
        <h1 className="text-xl font-bold w-max rounded-[25px] px-[20px] py-[8px] border border-slate-300 ">
          Connect with me
        </h1>
        <div className="flex items-center gap-[20px] pl-[30px] mt-[13px]">
          <div className="w-[40px] h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-gradient-to-r from-yellow1 to-primaryBlue/50 text-[21px] shadow-lg shadow-slate-400 transform transition-transform hover:scale-105 hover:shadow-neon ">
            <BiLogoLinkedin />
          </div>
          <div className="w-[40px] h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-gradient-to-r from-yellow1 to-primaryBlue/50 text-[21px] shadow-lg shadow-slate-400 transform transition-transform hover:scale-105 hover:shadow-neon ">
            <BiLogoFacebook />
          </div>
          <div className="w-[40px] h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-gradient-to-r from-yellow1 to-primaryBlue/50 text-[21px] shadow-lg shadow-slate-400 transform transition-transform hover:scale-105 hover:shadow-neon ">
            <BiLogoInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
