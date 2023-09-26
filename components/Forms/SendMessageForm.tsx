import Image from "next/image";
import React from "react";
import { VscSend } from "react-icons/vsc";

const SendMessageForm = () => {
  return (
    <form className="w-[300px] rounded-[5px] shadow-lg overflow-hidden">
      <input
        type="email"
        required
        placeholder="Enter your mail id"
        className="w-full p-[8px] outline-none border-none"
      />
      <div className="w-full h-[1px] bg-yellow1 " />
      {/* message container */}
      <div className="w-full h-[300px] bg-slate-200/95 p-[20px] overflow-y-auto text-[14px] flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center">
          <Image src="/logo.png" alt="" width={100} height={40} />
          <p className="w-full text-center font-bold font-merienda tracking-wider leading-6">
            Make sure to provide your informations.
          </p>
        </div>
      </div>
      {/* message typing */}
      <div className="bg-primaryBlue flex items-center gap-[20px] p-[10px]">
        <textarea
          id=""
          placeholder="Type messsage..."
          className="scroll-container grow bg-transparent placeholder:text-white/50 outline-none border-none text-white text-base resize-none"
        />
        <div className="cursor-pointer bg-white hover:bg-slate-200 w-[30px] h-[30px] rounded-full flex items-center justify-center ">
          <VscSend className="text-yellow1 font-bold" />
        </div>
      </div>
    </form>
  );
};

export default SendMessageForm;
