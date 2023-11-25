import { Recommendation } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  data: Recommendation;
  cardStyle?: string;
  positionStyle?: string;
}

const RecommendationCard = ({ data, cardStyle, positionStyle }: Props) => {
  const { name, image, position, comment } = data;
  return (
    <div
      className={`relative w-[410px] h-[345px] flex flex-col items-center justify-center`}
    >
      <svg className="absolute top-[-20px] left-0 z-[-1] " xmlns="http://www.w3.org/2000/svg" width="382" height="274" viewBox="0 0 282 274" fill="none">
        <path d="M3.10625 225.142C-3.84986 254.687 -1.10952 276.66 48.5335 273.545L251.962 253.941C271.919 251.467 273.172 236.163 273.929 226.909L281.857 38.6761C280.776 17.9606 267.879 7.23069 249.575 5.80405L230.608 4.32571L211.641 2.84738L169.543 1.8495L127.444 0.851616C95.4372 0.505959 76.3397 1.16654 70.792 1.54003C49.4854 3.53278 40.2955 31.668 38.3638 45.4865L3.10625 225.142Z" fill="#0CC0DF" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="410" height="345" viewBox="0 0 410 445" fill="none">
        <path className="shadow-lg shadow-slate-500" d="M2.04583 372.872C-4.77899 419.871 2.04582 453.861 76.3152 442.95L379.816 387.559C409.524 381.265 409.524 357.206 409.524 342.659L398.283 47.658C394.108 15.4304 373.393 0.239746 345.692 0.239746H316.988H288.284L224.854 3.80661L161.424 7.37347C113.249 10.7305 84.6119 14.0876 76.3152 15.3465C44.5199 21.0534 34.1623 66.1218 32.9579 87.9426L2.04583 372.872Z" stroke="#DD9915" fill="white" />
      </svg>
      <div className="absolute top-[-30px] left-[50%] -translate-x-[50%] w-[75%] h-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-[20px]">
          <Image
            src={image}
            alt=""
            width={70}
            height={70}
            className="rounded-full object-cover"
          />
          <div className="w-max flex flex-col items-center gap-[10px]">
            <h1 className="text-2xl font-bold tracking-wider">{name}</h1>
            <p
              className={`w-max text-[13px] font-semibold ${positionStyle} rounded-[4px] tracking-wider`}
            >
              {position}
            </p>
          </div>
        </div>
        <p className="mt-[20px] w-full text-center">{comment}</p>
      </div>

    </div>
  );
};

export default RecommendationCard;
