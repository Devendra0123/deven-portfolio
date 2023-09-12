import React from "react";
import Image from "next/image";
import { navLinks } from "@/data/navlinks";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-[100px]">
        {/*....Logo...*/}
        <div className="">
          <Image src="/logo.png" alt="" width={200} height={70} />
        </div>
        <div className="flex items-center gap-[30px]">
          {/*....Navlinks...*/}
          <ul className="flex items-center gap-[30px]">
            {navLinks?.map((item, index) => (
              <li key={index} className="font-bold cursor-pointer">
                {item.name}
              </li>
            ))}
          </ul>
          <button className="bg-primaryBlue py-[10px] px-[25px] font-bold text-white">
            Signup
          </button>
        </div>
      </div>

      <svg
          className="bg-gray-700 opacity-[25%] flex items-center justify-center"
          width="100%"
          height="1"
          id="visual"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-2 -2 4 8"
        >
          <path
            d="M 0 0 H 21"
            stroke="#000"
            strokeWidth="0.01"
            fill="none"
          />
        </svg>

    </div>
  );
};

export default Navbar;
