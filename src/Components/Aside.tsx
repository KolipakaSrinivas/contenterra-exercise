import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMdDoneAll } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { SlSocialReddit } from "react-icons/sl";
import {AsidePropsTypes} from './TypeNode'

const navLinks = [
  {
    Name: "Home",
    Icon: <IoHomeOutline size={25} />
  },
  {
    Name: "Popular",
    Icon: <FiArrowUpRight size={25} />
  },
  {
    Name: "All",
    Icon: <IoMdDoneAll size={25}/>
  }
];

const feeds = [
  {
    id: 1,
    Name: "CUSTOM FEEDS",
    content: [
      {
        Name: "Create a custom feed",
        icon: <AiOutlinePlus />
      }
    ]
  },
  {
    id: 2,
    Name: "COMMUNITIES",
    content: [
      {
        Name: 'Create a community',
        icon: <AiOutlinePlus size={25}/>
      },
      {
        Name: 'r/AajMaineJana',
        icon: <CgProfile size={25}/>
      },
      {
        Name: 'r/announcements',
        icon: <CgProfile size={25}/>
      }
    ]
  },
  {
    id: 3,
    Name: "RESOURCES",
    content: [
      {
        Name: 'About Reddit',
        icon: <SlSocialReddit/>
      }
    ]
  }
];

const date: number = new Date().getFullYear();

const Aside: React.FC<AsidePropsTypes> = ({ hamburgerMenu }) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelected = (index: number): void => {
    setSelected(selected === index ? null : index);
  };

  return (
    <aside
      className={`fixed ${hamburgerMenu
        ? "left-0 transition-left duration-300 ease-in-out" 
        : "left-[-15rem]"} md:left-0 z-10 w-60 h-screen bg-white top-[4rem] px-5 border-r-2 border-b-1 border-neutral-200 dark:border-[#3e4142] border-solid dark:text-gray-200 dark:bg-[#0e1113] transition-all ease-in-out duration-150`}
    >
      <ul className="flex flex-col items-start justify-start py-4">
        {navLinks.map((links, index) => (
          <li
            className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 pl-2 pr-10 rounded-lg py-2 my-1 dark:hover:bg-gray-800"
            key={index}
          >
            {links.Icon}
            <a href="#" className="text-gray-900 dark:text-[#dbe4e9]">
              {links.Name}
            </a>
          </li>
        ))}
      </ul>
      <hr className="w-100 my-sm border-neutral-border-weak" />
      <ul className="text-gray-500 flex flex-col gap-5 my-5 relative dark:text-white">
        {feeds.map(feed => (
          <div key={feed.id} className="flex-row my-2">
            <h6 className="inline-flex items-center gap-2 cursor-pointer mb-4 hover:bg-gray-100 pl-2 pr-10 rounded-lg py-2 my-1 dark:hover:bg-gray-800" onClick={() => handleSelected(feed.id)}>
              {feed.Name} {selected === feed.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h6>
            {selected === feed.id && feed.content?.map((cont, index) => (
              <a
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 text-black m-2 rounded-lg py-1 dark:hover:bg-gray-800 dark:text-white"
                key={index}
              >
                {cont.icon}
                {cont.Name}
              </a>
            ))}
            <hr className="w-100 my-sm border-neutral-border-weak" />
          </div>
        ))}
      </ul>
      <p className="text-gray-400 text-[12px] fixed bottom-[0.5rem]">
        Reddit, Inc. © {date}. All rights reserved.
      </p>
    </aside>
  );
};

export default Aside;