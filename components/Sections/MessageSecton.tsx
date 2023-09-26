"use client";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Tooltip from "../Tooltip";
import { TbMessage2Share } from "react-icons/tb";
import SendMessageForm from "../Forms/SendMessageForm";

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
          <SendMessageForm />
        </div>
      )}
    </div>
  );
};

export default MessageSection;
