"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SiGooglemeet } from "react-icons/si";
import DatePicker from "@/components/Elements/DatePicker";
import TimePicker from "@/components/Elements/TimePicker";
import { FaCircleInfo } from "react-icons/fa6";
import ScheduleMeetingForm from "@/components/Popup/ScheduleMeetingForm";
import Overlay from "@/components/Overlay";
import withFormHandling from "@/lib/FormHandler";
import { handleMail } from "@/lib/handleMail";

const ScheduleMeeting = () => {
  const form: any = useRef();

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<number>(
    new Date().getDate()
  );
  const [activeMonth, setactiveMonth] = useState(new Date().getMonth());
  const [selectedTime, setSelectedTime] = useState("");
  const [isTimeClicked, setIsTimeClicked] = useState(false);

  const [userMail, setUserMail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  // Handle Date Click
  const handleDateClick = (day: number) => {
    setSelectedDate(day);
  };

  // Handle Prev month
  const handlePrevMonth = () => {
    if (activeMonth > 0) {
      setactiveMonth((prev) => prev - 1);
    } else {
      setactiveMonth(11);
      setCurrentYear((prevYear) => prevYear - 1);
    }
  };

  // Handle Next month
  const handleNextMonth = () => {
    if (activeMonth < 11) {
      setactiveMonth((prev) => prev + 1);
    } else {
      setactiveMonth(0);
      setCurrentYear((prevYear) => prevYear + 1);
    }
  };

  // Submit form
  const submitFormLogic = async (formData: any) => {
    const { email, message } = formData;

    form.current.message.value = `<p>Meeting Schedule:</p>
    <p>User EmailId : <span>${email}</span></p>
    <p>date-<span>${currentYear}/${activeMonth}/${selectedDate}</span></p>
     <p>time-<span>${selectedTime}</span></p>
     <p>message-<span>${message}</span></p>`;

    await handleMail(form.current).then((res) => {
      console.log(res);
    });
  };

  // Wrapping feedback form with form Handler
  const FormWithHandling = withFormHandling(ScheduleMeetingForm);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[85%] flex items-start justify-evenly gap-[30px] mt-[40px] ">
        <div className="w-[25%] flex flex-col gap-[20px]">
          <div>
            <div className="relative w-[100px] h-[100px] rounded-full bg-yellow1 overflow-hidden ">
              <Image
                src="/person.png"
                alt="person"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="uppercase font-bold text-lg mt-[10px]">
              Devendra Chaudhary
            </h2>
          </div>

          <p className="text-slate-600 text-justify">
            Hi, I am Devendra, a web developer. I am available to talk about any
            web development project. If you are in need of any kind of website,
            feel free to schedule a meeting.
          </p>

          <div className="flex flex-col gap-[10px] text-slate-800">
            <div className="flex items-center gap-[10px]">
              <div className="bg-slate-300 w-[40px] h-[40px] rounded-full flex items-center justify-center">
                <AiOutlineClockCircle className="text-[23px] font-bold " />
              </div>
              <p className="font-bold">30 minutes</p>
            </div>
            <div className="flex items-start gap-[10px]">
              <div className="bg-slate-300 min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center">
                <SiGooglemeet className="text-[23px] font-bold " />
              </div>
              <p className="font-bold">
                Meeting details will be provided to you upon confirmation by me.
              </p>
            </div>
          </div>
        </div>

        <div className="grow">
          <h1 className="text-xl font-bold uppercase">Select Date and Time</h1>
          <div className="mt-[20px] flex items-start justify-evenly gap-[30px]">
            <div className="w-max p-[10px] border border-slate-300 rounded-[10px] shadow-lg">
              <DatePicker
                currentYear={currentYear}
                handleDateClick={handleDateClick}
                activeMonth={activeMonth}
                handleNextMonth={handleNextMonth}
                handlePrevMonth={handlePrevMonth}
                selectedDate={selectedDate}
              />

              <div className="max-w-[500px] mt-[40px] flex items-start gap-[10px]">
                <FaCircleInfo className="text-yellow1 text-[21px]" />
                <p className="text-slate-500">
                  Make sure to select both date and time. I will be get in touch
                  with you very soon.
                </p>
              </div>
            </div>
            <div>
              <div>
                <p>
                  {currentYear}/{activeMonth}/{selectedDate}
                </p>

                <div className="mt-[20px]">
                  <TimePicker
                    handleTimeClick={(time: string, timeZone: string) => {
                      setSelectedTime(`${time}-${timeZone}`);
                      setIsTimeClicked(true);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isTimeClicked && (
        <FormWithHandling
          onSubmit={(formData: any) => submitFormLogic(formData)}
          date={`${currentYear}/${activeMonth}/${selectedDate}`}
          time={selectedTime}
          handleCross={() => setIsTimeClicked(false)}
        />
      )}

      {isTimeClicked && <Overlay />}
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
          value={userMessage}
          className="hidden"
        />
      </form>
    </div>
  );
};

export default ScheduleMeeting;
