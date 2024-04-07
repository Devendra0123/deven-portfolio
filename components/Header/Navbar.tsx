import React from "react";
import Image from "next/image";
import { navLinks } from "@/data/navlinks";
import Link from "next/link";
import {Freehand} from "next/font/google";


const freehand = Freehand({
  subsets:["khmer", "latin"],
  weight: ['400']
});

const Navbar = () => {

  return (
    <div>
      <div className="w-screen flex items-center justify-between px-[20px] md:px-[50px] lg:px-[100px]">
        {/*....Logo...*/}
        <div className="">
          <Link href="/">
            <Image src="/logo.png" alt="" width={200} height={70} />
          </Link>
        </div>
        <div className="grow lg:w-max flex items-center gap-[30px]">
          {/*....Nav links...*/}
          <ul className="grow flex items-center justify-evenly lg:justify-end gap-[30px]">
            {navLinks?.map((item, index) => (
              <li
                key={index}
                className="hover:opacity-[70%] hover:scale-95 font-bold cursor-pointer tracking-[1.2px] transition duration-150 ease-out"
              >
                <Link
                  href={item.link}
                  className="lg:hidden w-[35px] h-[35px] flex items-center justify-center bg-slate-300 rounded-full "
                >
                  <item.icon className="" />
                </Link>
                <Link href={item.link} className={`${item?.name == "Know me" && `${freehand.className} underline underline-offset-8 decoration-yellow1 font-bold text-xl`} hidden lg:block`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="bg-primaryBlue tracking-wider py-[10px] px-[25px] font-bold text-white rounded-[4px]">
            <Link href="/hire">Hire</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
