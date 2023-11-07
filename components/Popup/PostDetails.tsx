import React from "react";
import { RxCross2 } from "react-icons/rx";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidGroup } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";

const PostDetails = ({
  handleCross,
  currentLikes,
  postDetails,
  feedback,
}: any) => {
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

      <h1 className="text-xl font-semibold text-primaryBlue">Post Details</h1>
      <div className="flex items-center gap-[10px] px-[20px] py-[8px] rounded-[5px] border border-slate-400 shadow shadow-yellow1/75 ">
        <BiSolidGroup className="text-yellow1" />
        <p>{`Devendra Chaudhary(Contributor)`}</p>
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center gap-[10px] px-[20px] py-[8px] rounded-[25px] border border-slate-400 shadow shadow-red-600/75 ">
          <AiFillHeart className="text-red-600" />
          <p>{currentLikes || 0}</p>
        </div>

        <div className="flex items-center gap-[10px] px-[20px] py-[8px] rounded-[25px] border border-slate-400 shadow shadow-teal-500/75 ">
          <VscFeedback className="text-teal-600" />
          <p>{`${feedback?.length} (Feedback)`}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
