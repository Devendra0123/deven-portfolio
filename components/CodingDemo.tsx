'use client'
import React, { useEffect, useState } from "react";

const CodingDemo = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const divstyle = ["w-full flex items-center justify-center mt-[10px]"];
  const imgStyle = ["w-full flex items-center justify-center mt-[10px]"];

  useEffect(() => {
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
  }, [text1, text2, imgStyle, divstyle]);

  return (
    <div className="">
      <div>
        <code className="w-[700px] flex flex-col items-start bg-black p-[20px] text-white rounded-xl">
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
          </span>
          <span>
            
          </span>
          <span>{"</div>"}</span>
        </code>
      </div>
    </div>
  );
};

export default CodingDemo;
