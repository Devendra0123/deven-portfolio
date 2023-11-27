"use client"
import Image from "next/image";
import React, { useState } from "react";
import { VscSend } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";

const SendMessageForm = () => {

  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("");
  const [boxData, setBoxData] = useState<any>([])
  const handleSubmit = () => {
    if (!email || !message) return;
    setBoxData((prev: any) => {
      const updatedMessageBox = [...prev, {
        id: "",
        userMessage: message,
        adminMessage: ""
      }]
      return updatedMessageBox;
    });

    setMessage("")
  }

  console.log(boxData)
  return (
    <form className="w-[300px] rounded-[5px] shadow-lg shadow-primaryBlue/50 overflow-hidden border border-slate-300">
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your mail id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-[8px] outline-none border-none"
      />
      <div className="w-full h-[1px] bg-yellow1 " />
      {/* message container */}
      <div className="w-full h-[300px] bg-slate-200/95 p-[20px] overflow-y-auto text-[14px] flex flex-col items-center justify-center">
        {
          boxData.length > 0 && boxData[0]?.userMessage ? (
            <div className="w-full h-full overflow-auto flex flex-col items-start">
              {
                boxData.map((item: any, index: number) => (
                  <div key={index} className="w-full flex items-start gap-[5px]">
                    <div className="min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] flex items-center justify-center border border-slate-500 rounded-full text-[19px] ">
                      <CiUser />
                    </div>
                    <p className="bg-yellow1 p-[5px] rounded-[4px]">
                      {item.userMessage}
                    </p>
                  </div>
                ))
              }
            </div>
          ) : (
            <div className="w-full flex flex-col items-center">
              <Image src="/logo.png" alt="" width={100} height={40} />
              <p className="w-full text-center font-bold font-merienda tracking-wider leading-6">
                Make sure to provide your email ID above and necessary informations in message.
              </p>
            </div>
          )
        }

      </div>
      {/* message typing */}
      <div className="bg-primaryBlue flex items-center gap-[20px] p-[10px]">
        <textarea
          id=""
          name="message"
          required
          placeholder="Type messsage..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="scroll-container grow bg-transparent placeholder:text-white/50 outline-none border-none text-white text-base resize-none"
        />
        <div onClick={handleSubmit} className="cursor-pointer bg-white hover:bg-slate-200 w-[30px] h-[30px] rounded-full flex items-center justify-center ">
          <VscSend className="text-yellow1 font-bold" />
        </div>
      </div>
    </form>
  );
};

export default SendMessageForm;
