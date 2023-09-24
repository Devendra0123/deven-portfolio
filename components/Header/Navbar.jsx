import React from "react";
import Image from "next/image";
import { navLinks } from "@/data/navlinks";

const Navbar = () => {
  return (
    <div>
      <div className="w-screen flex items-center justify-between px-[100px]">
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
    </div>
  );
};

export default Navbar;
