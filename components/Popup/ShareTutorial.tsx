import React from "react";
import { RxCross2 } from "react-icons/rx";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookMessenger, FaLinkedin } from "react-icons/fa6";

const ShareTutorial = ({ handleCross }: any) => {
  return (
    <div className="z-30 w-full md:w-[450px] fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex flex-col gap-[20px] bg-white p-[20px] pb-[40px] rounded-lg shadow">
      <div className="w-full">
        <div
          onClick={handleCross}
          className="cursor-pointer float-right w-[35px] h-[35px] rounded-full border border-slate-800 flex items-center justify-center "
        >
          <RxCross2 className="text-[17px] font-bold" />
        </div>
      </div>

      <h1><span className="text-primaryBlue text-xl font-semibold">Share this post</span> to your friends.</h1>

      <div className="flex flex-col gap-[20px]">
        <div className="cursor-pointer hover:bg-primaryBlue hover:text-white flex items-center gap-[10px] px-[20px] py-[8px] rounded-[25px] border border-slate-400 shadow shadow-slate-400">
          <IoLogoWhatsapp className="text-[25px] " />
          <p>Whatsapp</p>
        </div>
        <div className="cursor-pointer hover:bg-primaryBlue hover:text-white flex items-center gap-[10px] px-[20px] py-[8px] rounded-[25px] border border-slate-400 shadow shadow-slate-400">
          <FaFacebookMessenger className="text-[25px] " />
          <p>Messenger</p>
        </div>
        <div className="cursor-pointer hover:bg-primaryBlue hover:text-white flex items-center gap-[10px] px-[20px] py-[8px] rounded-[25px] border border-slate-400 shadow shadow-slate-400">
          <FaLinkedin className="text-[25px] " />
          <p>Linked In</p>
        </div>
      </div>
    </div>
  );
};

export default ShareTutorial;
