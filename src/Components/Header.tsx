import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { TbMessageDots } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";
import { GiArrowScope } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";

import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";

import { MyHeaderProps } from "./TypeNode";

const MyHeader: React.FC<MyHeaderProps> = ({
  handleHamburgerMenu,
  handleDarkMode,
  darkMode
}) => {
  return (
    <header className="fixed dark:bg-[#0e1113] z-10 border-b-2 flex bg-white justify-between px-6 items-center h-[4rem]  w-full dark:border-[#3e4142]  border-neutral-200 border-solid">
      <button className="md:hidden">
        <RxHamburgerMenu
          size={30}
          onClick={() => handleHamburgerMenu()}
          className="dark:text-white"
        />
      </button>
      <a href="#" className="flex items-center gap-2">
        <img
          src="https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-120x120.png"
          alt=""
          width="35px"
          height="35px"
        />
        <h1 className="text-[#FF4500] font-extrabold text-xl dark:text-white">
          Reddit
        </h1>
      </a>
      <a href="#">
        <div className="relative">
          <IoMdSearch className="top-3 left-2 absolute hidden md:block text-ok dark:text-[#eef1f3]" />
          <input
            type="text"
            placeholder="Search Reddit"
            className="p-4 pl-7 outline-none border-gray-500 dark:bg-gray-600 bg-slate-100 indent-1 rounded-2xl text-lg w-100 h-10 hidden md:block"
          />
        </div>
      </a>
      <ul className="flex gap-5">
        <button onClick={() => handleDarkMode()} className="">
          {darkMode
            ? <FiSun size={20} className="text-white" />
            : <FaRegMoon size={20} className="" />}
        </button>
        <ul className=" hidden sm:flex gap-6">
          <li>
            <a href="">
              <GiArrowScope
                size={25}
                className="hover:scale-125 rounded-xl transition-all duration-300 text-ok dark:text-white"
              />
            </a>
          </li>
          <li>
            <a href="">
              <TbMessageDots
                size={25}
                className="hover:scale-125 rounded-xl transition-all duration-300 text-ok dark:text-white"
              />
            </a>
          </li>
          <li>
            <a href="">
              <AiOutlinePlus
                size={25}
                className="hover:scale-125 rounded-xl transition-all duration-300 text-ok dark:text-white"
              />
            </a>
          </li>
          <li>
            <a href="">
              <IoMdNotificationsOutline
                size={25}
                className="hover:scale-125 rounded-xl transition-all duration-300 hidden md:block text-ok dark:text-white"
              />
            </a>
          </li>
        </ul>
        <li>
          <a href="">
            <CgProfile
              size={25}
              className="hover:scale-125 rounded-xl transition-all duration-300 text-ok dark:text-white"
            />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default MyHeader;
