'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CodingDemo = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const description = "Let's make it interactive. See the magic of tailwind.";

  useEffect(() => {

    const divstyle = ["w-full flex items-center justify-center mt-[10px]"];
    const imgStyle = ["w-full flex items-center justify-center mt-[10px]"];

    let currentIndex = 0;
    let currentText = "";
    const interval = setInterval(() => {
      // for div style
      if (currentIndex < divstyle.length) {
        currentText = divstyle[currentIndex].substring(0, text1.length + 1);
        setText1(currentText);
        if (currentText === divstyle[currentIndex]) {
          clearInterval(interval); // Clear the interval for divstyle

          let currentIndex2 = 0;
          let currentText2 = "";

          const interval2 = setInterval(() => {
            if (currentIndex2 < imgStyle.length) {
              currentText2 = imgStyle[currentIndex2].substring(
                0,
                text2.length + 1
              );
              setText2(currentText2);
            } else {
              clearInterval(interval2);
            }
            currentIndex2++;
          }, 100);
        }
      } else {
        clearInterval(interval);
      }
      currentIndex++;
    }, 100); // Typing speed (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full flex justify-evenly gap-[50px]">
      <code className="min-w-[55%] max-w-[55%] flex flex-col items-start bg-black p-[20px] text-white rounded-xl">
        <span>
          <span>{"<div"}</span>
          <span> </span>
          <span className="text-primaryBlue">className</span>
          <span>{`=`}</span>
          <span>{`'`}</span>
          <span className="text-amber-500">{text1}</span>
          <span>{`'`}</span>
          <span>{">"}</span>
        </span>

        <span className="ml-[20px]">
          <span>{"<Image"}</span>
          <span> </span>
          <span className="text-primaryBlue">{"className"}</span>
          <span>{`=`}</span>
          <span>{`'`}</span>
          <span className="text-amber-500">{text2}</span>
          <span>{`'`}</span>
          <br />
          <span className="text-primaryBlue ml-[30px]">{"src"}</span>
          <span>{`=`}</span>
          <span>{`'`}</span>
          <span>
            {"/devendra.png"}
          </span>
          <span>{"'"}</span>
          <span>{" "}</span>
          <span className="text-primaryBlue ml-[5px]">{"alt"}</span>
          <span>{`=`}</span>
          <span>{`'`}</span>
          <span>
            {"image"}
          </span>
          <span>{"'"}</span>
          <br />
          <span className="text-primaryBlue ml-[30px]">{"width"}</span>
          <span>{`=`}</span>
          <span>{`'`}</span>
          <span>
            {"100"}
          </span>
          <span>{"'"}</span>
          <span>{" "}</span>
          <span className="text-primaryBlue ml-[5px]">{"height"}</span>
          <span>{`=`}</span>
          <span>{`'`}</span>
          <span>
            {"100"}
          </span>
          <span>{"'"}</span>
          <span>{" "}</span>
          <span>{"/>"}</span>
        </span>

        <span className="ml-[20px]">
          <span>{"<p>"}</span>
          <br />
          <span className="ml-[20px]">{description}</span>
          <br />
          <span className="">{"</p>"}</span>
        </span>
        <span>{"</div>"}</span>
      </code>

      <div className="relative w-max h-max mt-[-105px]">
        <div style={{
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }} className="w-max h-max p-[20px] rounded-lg flex flex-col items-center text-center">
          <Image src="/person.png" alt="person" width={100} height={100} className="object-contain" />
          <p>
            Let's make it interactive.<br /> See the magic of tailwind.
          </p>
        </div>

        {/*...Background...*/}
        <div style={{
          zIndex: -1
        }} className=" absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-full h-full">
          <div className="relative w-full h-full">
            <div className="absolute top-[-20px] left-[-20px] w-[60px] h-[60px] rounded-full bg-yellow1 "></div>
            <div className="absolute bottom-[-20px] right-[-20px] w-[60px] h-[60px] rounded-full bg-yellow1 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingDemo;