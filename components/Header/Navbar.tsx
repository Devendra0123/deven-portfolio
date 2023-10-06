import React from "react";
import Image from "next/image";
import { navLinks } from "@/data/navlinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="w-screen flex items-center justify-between px-[100px]">
        {/*....Logo...*/}
        <div className="">
          <Link href="/">
            <Image src="/logo.png" alt="" width={200} height={70} />
          </Link>
        </div>
        <div className="flex items-center gap-[30px]">
          {/*....Navlinks...*/}
          <ul className="flex items-center gap-[30px]">
            {navLinks?.map((item, index) => (
              <li key={index} className="font-bold cursor-pointer tracking-[1.2px]">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <button className="bg-primaryBlue py-[10px] px-[25px] font-bold text-white rounded-[4px]">
            <Link href="/hire">Hire</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
