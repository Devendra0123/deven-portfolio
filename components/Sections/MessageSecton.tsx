"use client";
import { useState } from "react";
import { VscSend } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import Tooltip from "../Tooltip";
import { TbMessage2Share } from "react-icons/tb";
import Image from "next/image";

const MessageSection = () => {
  const [isIconClicked, setIsIconClicked] = useState(false);

  return (
    <div>
      <div className="fixed bottom-[45px] right-[45px] z-10 bg-yellow1 shadow-lg w-[40px] h-[40px] rounded-full flex items-center justify-center">
        <Tooltip
          alignment="left"
          text="Send me message"
          icon={
            <TbMessage2Share
              className={`text-[21px] cursor-pointer hover:scale-110 transition duration-150 ease-in`}
            />
          }
          style="bg-yellow1"
          handleTooltipClick={() => {
            setIsIconClicked((prev) => !prev);
          }}
        />
      </div>
      {isIconClicked && (
        <div
          className={`fixed bottom-[95px] right-[45px] z-10 transition duration-150 ease-in`}
        >
          <div
            onClick={() => setIsIconClicked(false)}
            className="cursor-pointer float-right transform -translate-y-[100%] bg-slate-200 w-[35px] h-[35px] rounded-full shadow-lg flex items-center justify-center "
          >
            <RxCross2 className="text-[19px] font-bold " />
          </div>
          <form className="w-[300px] rounded-[5px] shadow-lg overflow-hidden">
            <input
              type="email"
              required
              placeholder="Enter your mail id"
              className="w-full p-[8px] outline-none border-none"
            />
            <div className="w-full h-[1px] bg-yellow1 " />
            <div className="w-full h-[350px] bg-slate-200/95 p-[20px] overflow-y-auto text-[14px] flex flex-col items-center justify-center">
              <div className="w-full flex flex-col items-center">
                <Image src="/logo.png" alt="" width={100} height={40} />
                <p className="w-full text-center font-bold font-merienda tracking-wider leading-6">
                  Make sure to provide your informations.
                </p>
              </div>
            </div>
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
        </div>
      )}
    </div>
  );
};

export default MessageSection;
