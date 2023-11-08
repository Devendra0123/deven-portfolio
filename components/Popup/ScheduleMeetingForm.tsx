"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ScheduleMeetingForm = (props: any) => {
  const {
    date,
    time,
    handleCross,
    formData,
    loading,
    success,
    error,
    onFormSubmit,
    onFormChange,
  } = props;

  return (
    <form
      onSubmit={onFormSubmit}
      className="z-30 fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex flex-col gap-[20px] bg-white p-[20px] rounded-lg shadow"
    >
      <div className="w-full">
        <div
          onClick={handleCross}
          className="cursor-pointer float-right w-[35px] h-[35px] rounded-full border border-slate-800 flex items-center justify-center "
        >
          <RxCross2 className="text-[17px] font-bold" />
        </div>
      </div>

      <h1 className="text-xl font-bold">
        <span className="text-yellow1 text-2xl">Enter your Email-id</span> to
        schedule meeting.
      </h1>
      <div>
        <p>
          Selected Date :{" "}
          <span className="font-medium text-primaryBlue">{date}</span>
        </p>
        <p>
          Selected Time :{" "}
          <span className="font-medium text-primaryBlue">{time}</span>
        </p>
      </div>

      <div className=" flex flex-col gap-[7px]">
        <label className="font-bold">Enter your Email Id</label>
        <input
          placeholder="e.g. abc@gmail.com"
          name="email"
          required
          value={formData.email || ""}
          onChange={onFormChange}
          className="p-[7px] rounded-[4px] bg-slate-300 border border-slate-300 outline-none w-[85%] "
        />
      </div>

      <div className=" flex flex-col gap-[7px]">
        <label className="font-bold">{`Type message (Optional)`}</label>
        <textarea
          placeholder="Message..."
          name="message"
          value={formData.message || ""}
          onChange={onFormChange}
          className="p-[7px] rounded-[4px] bg-slate-300 border border-slate-300 outline-none w-[85%] "
        />
      </div>
      {error && (
        <p className="text-[14px] text-red-500">
          <span className="">*</span> {error}
        </p>
      )}
      <button className="w-full bg-primaryBlue p-[8px] rounded-[5px] text-white">
        Submit
      </button>

      {loading && <p>Wait...</p>}
      {success && <p>Form submitted successfully!</p>}
      {error && <p>Error: {error}</p>}
    </form>
  );
};

export default ScheduleMeetingForm;
