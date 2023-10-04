"use client"
import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiComment, BiSolidComment } from "react-icons/bi";
import { VscLiveShare } from "react-icons/vsc";
import { PiInfo } from "react-icons/pi";
import Tooltip from "../Tooltip";

const InteractiveBar = () => {
const [isLikeHovered, setIsLikeHovered] = useState(false);
const [isCommentHovered, setIsCommentHovered] = useState(false);
const [isShareHovered, setIsShareHovered] = useState(false);
const [isInfoHovered, setIsInfoHovered] = useState(false);

  return (
    <div className="w-full flex justify-center sticky top-[40px]">
      <div className="flex flex-col items-center gap-[20px] mt-[30px]">
        <div onMouseEnter={()=> setIsLikeHovered(true)} onMouseLeave={()=> setIsLikeHovered(false)} className="w-max">
          <Tooltip
            icon={isLikeHovered ? <AiFillHeart className="text-[19px] text-red-500 " /> : <AiOutlineHeart className="text-[19px] " />}
            alignment="left"
            text="like"
            iconContainerStyle="w-[40px] h-[40px] rounded-full shadow-lg border border-slate-300 "
            style="bg-red-500 p-[10px] rounded-[4px]"
          />
        </div>

        <div onMouseEnter={()=> setIsCommentHovered(true)} onMouseLeave={()=> setIsCommentHovered(false)} className="w-max">
          <Tooltip
            icon={isCommentHovered ? <BiSolidComment className="text-[19px] text-yellow1 " /> : <BiComment className="text-[19px] " />}
            alignment="left"
            text="Give feedback"
            iconContainerStyle="w-[40px] h-[40px] rounded-full shadow-lg border border-slate-300 "
            style="bg-yellow1 p-[10px] rounded-[4px]"
          />
        </div>

        <div onMouseEnter={()=> setIsShareHovered(true)} onMouseLeave={()=> setIsShareHovered(false)} className="w-max">
          <Tooltip
            icon={<VscLiveShare className={`text-[19px] ${isShareHovered && "text-primaryBlue"} `} />}
            alignment="left"
            text="Share this post"
            iconContainerStyle="w-[40px] h-[40px] rounded-full shadow-lg border border-slate-300 "
            style="bg-primaryBlue p-[10px] rounded-[4px]"
          />
        </div>

        <div onMouseEnter={()=>setIsInfoHovered(true)} onMouseLeave={()=>setIsInfoHovered(false)} className="w-max">
          <Tooltip
            icon={<PiInfo className={`text-[19px] ${isInfoHovered && "text-slate-700"} `} />}
            alignment="left"
            text="Post details"
            iconContainerStyle="w-[40px] h-[40px] rounded-full shadow-lg border border-slate-300 "
            style="bg-slate-700 p-[10px] rounded-[4px] text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveBar;
