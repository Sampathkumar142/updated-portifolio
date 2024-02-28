"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import Logo from "../public/logo-crop.jpeg";

const NavBar = (status) => {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center h-20 pr-12">
        <div className="sm:w-1/5 w-3/5 h-full ">
          <Image
            className={menuStatus ? "hidden" : "object-contain h-full"}
            src={Logo}
            alt="Logo"
          />
        </div>
        <div className="hidden sm:flex space-x-2 md:space-x-4 lg:space-x-8 sm:w-3/5 justify-end items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/asserts/resume.pdf"}>
            <button className="px-4 py-2 rounded-lg border-2 border-solid border-orange-600">
              <FiDownload className="inline mr-2" size={23} />
              Download CV
            </button>
          </Link>
        </div>

        <div className={`${menuStatus ? "hidden" : "flex"} sm:hidden flex`}>
          <button onClick={() => setMenuStatus(true)} className="space-y-1">
            <div className="h-1 w-6 bg-slate-200"></div>
            <div className="h-1 w-6 bg-slate-200"></div>
            <div className="h-1 w-6 bg-slate-200"></div>
          </button>
        </div>
      </nav>

      <div
        className={`${
          menuStatus ? "flex flex-col" : "hidden"
        } py-12 absolute top-0 -left-14 -right-14 bg-[#1e242e] text-slate-200 gap-8 z-10 text-center overflow-x-hidden`}
      >
        <div className="flex justify-end pr-16">
          <button onClick={() => setMenuStatus(false)} className="">
            <ImCross size={20}></ImCross>
          </button>
        </div>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/asserts/resume.pdf"}>
          <button className="px-4 py-2 rounded-lg border-2 border-solid border-orange-600">
            <FiDownload className="inline mr-2" size={23} />
            Download CV
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
