"use client"
import Image from "next/image";
import React, { useState,useRef } from "react";
import { VscSend } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { handleMail } from "@/lib/handleMail";

const SendMessageForm = () => {
  const form: any = useRef();
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("");
  const [boxData, setBoxData] = useState<any>([]);
  const [error, setError] = useState('');
  
  const handleSubmit = async(e: any) => {
    e.preventDefault();

    if (!email || !message) {
      if (!email) {
        setError("Please Enter Your Email ID above.");
        return;
      }
      if (!message) {
        setError("Please Type Message before sending.");
        return;
      }
    };
    setBoxData((prev: any) => {
      const updatedMessageBox = [...prev, {
        id: "",
        userMessage: message,
        adminMessage: ""
      }]
      return updatedMessageBox;
    });

    setMessage("");

    form.current.message.value = JSON.stringify(boxData);

    await handleMail(form.current).then(res =>{
      console.log(res)
    })
  }

  return (
    <div className="w-[300px] rounded-[5px] shadow-lg shadow-primaryBlue/50 overflow-hidden border border-slate-300">
      <form onSubmit={handleSubmit} className="w-full rounded-[5px] bg-slate-200/95">
        <div className="w-full p-[8px] flex items-center gap-[5px]">
          <MdEmail className="text-[19px] " />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your mail id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="grow outline-none border-none bg-transparent"
          />
        </div>

        <div className="w-full h-[1px] bg-yellow1 " />
        {/* message container */}
        <div className="w-full h-[300px] bg-slate-200/95 p-[20px] overflow-y-auto text-[14px] flex flex-col items-center justify-center">
          {
            boxData.length > 0 && boxData[0]?.userMessage ? (
              <div className="w-full h-full overflow-auto flex flex-col items-start gap-[10px]">
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
                  {error ? error : "Make sure to provide your email ID above and necessary informations in message."}
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
          <button type="submit" disabled={!message} onClick={handleSubmit} className="cursor-pointer bg-white hover:bg-slate-200 w-[30px] h-[30px] rounded-full flex items-center justify-center ">
            <VscSend className="text-yellow1 font-bold" />
          </button>
        </div>
      </form>

      {/* SMTP form */}
      <form ref={form} onSubmit={handleMail} className="hidden">
        <input
          type="text"
          name="user_name"
          readOnly
          value={process.env.NEXT_PUBLIC_PERSONAL_MAIL}
        />

        <input
          type="email"
          name="user_email"
          readOnly
          value={process.env.NEXT_PUBLIC_PERSONAL_MAIL}
        />

        <textarea
          name="message"
          readOnly
          value={JSON.stringify(boxData)}
          className="hidden"
        />
      </form>
    </div>
  );
};

export default SendMessageForm;
