import React from "react";
import { RxCross2 } from "react-icons/rx";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookMessenger, FaLinkedin } from "react-icons/fa6";
import getURL from "@/lib/getUrl";

const ShareTutorial = ({ handleCross, postSlug }: any) => {
const postUrl = getURL(`/${postSlug}`)
  const shareOnWhatsApp = () => {
    // Construct a WhatsApp sharing URL with the post content
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(postUrl)}`;
    window.open(url, '_blank');
  };

  const shareOnMessenger = () => {
    // Implement Messenger sharing here
    // You may need to use the Facebook SDK for this.
  };

  const shareOnLinkedIn = () => {
    // Construct a LinkedIn sharing URL with the post content
    const url = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(postUrl)}`;
    window.open(url, '_blank');
  };

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
        <div onClick={shareOnWhatsApp} className="cursor-pointer hover:bg-primaryBlue hover:text-white flex items-center gap-[10px] px-[20px] py-[8px] rounded-[25px] border border-slate-400 shadow shadow-slate-400">
          <IoLogoWhatsapp className="text-[25px] " />
          <p>Whatsapp</p>
        </div>
        <div onClick={shareOnMessenger} className="cursor-pointer hover:bg-primaryBlue hover:text-white flex items-center gap-[10px] px-[20px] py-[8px] rounded-[25px] border border-slate-400 shadow shadow-slate-400">
          <FaFacebookMessenger className="text-[25px] " />
          <p>Messenger</p>
        </div>
        <div onClick={shareOnLinkedIn} className="cursor-pointer hover:bg-primaryBlue hover:text-white flex items-center gap-[10px] px-[20px] py-[8px] rounded-[25px] border border-slate-400 shadow shadow-slate-400">
          <FaLinkedin className="text-[25px] " />
          <p>Linked In</p>
        </div>
      </div>
    </div>
  );
};

export default ShareTutorial;
