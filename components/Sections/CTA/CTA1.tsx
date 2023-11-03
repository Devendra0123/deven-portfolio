"use client";
import Overlay from "@/components/Overlay";
import ContactDetails from "@/components/Popup/ContactDetails";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

const CTA1 = () => {
  const [isContactBtnClicked, setIsContactBtnClicked] = useState(false);
  return (
    <div className="w-full flex items-center justify-center gap-[50px]">
      <Link href="/schedule-meeting">
        <button className="flex items-center gap-[12px] px-[30px] py-[8px] rounded-[25px] text-2xl font-bold bg-yellow1 hover:opacity-[85%]">
          <AiOutlineSchedule /> Schedule a Meeting
        </button>
      </Link>

      <button
        onClick={() => setIsContactBtnClicked(true)}
        className="flex items-center gap-[12px] px-[30px] py-[8px] rounded-[25px] text-2xl font-bold border border-primaryBlue text-primaryBlue"
      >
        <IoCallOutline /> Contact me
      </button>

      {isContactBtnClicked && (
        <ContactDetails handleCross={() => setIsContactBtnClicked(false)} />
      )}
      {isContactBtnClicked && <Overlay />}
    </div>
  );
};

export default CTA1;
