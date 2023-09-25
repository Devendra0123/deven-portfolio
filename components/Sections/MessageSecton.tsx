"use client";
import { useState } from "react";
import { VscSend } from "react-icons/vsc";
import Tooltip from "../Tooltip";
import { TbMessage2Share } from "react-icons/tb";

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
            setIsIconClicked(true);
          }}
        />
      </div>
      {isIconClicked && (
        <form className="w-[300px] fixed bottom-[105px] right-[45px] z-10 rounded-[5px] shadow-lg">
          <input type="email" required placeholder="enter your mail id" className="w-full p-[8px]" />
          <div className="w-full h-[1px] bg-yellow1 " />
          <div className="w-full h-[350px] bg-slate-300 p-[20px] overflow-y-auto"></div>
          <div className="bg-primaryBlue flex items-center p-[10px]">
            <textarea placeholder="type your messsage" className="grow bg-transparent" />
            <div>
              <VscSend />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default MessageSection;
