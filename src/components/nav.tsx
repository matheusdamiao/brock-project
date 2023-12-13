import React, { useEffect, useState } from "react";
import logo from "./../../public/logo-brock.svg";
import useWindowDimensions from "@/utils/useWindowDimensions";

const Nav = () => {
  const size = useWindowDimensions();
  const [windowHeight, setWindowHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (size !== undefined) {
      setWindowHeight(size.scrollY);
      if (size?.width > 1000) {
        setIsOpen(false);
      }
    }
  }, [size]);

  return (
    <div className="bg-white w-full h-24 lg:h-32 flex items-center justify-center flex-col px-6 relative">
      <div className=" flex items-center justify-between max-w-7xl w-full m-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo.src} alt="" className="max-w-[150px]" />
        <ul className="w-[50%] items-center justify-evenly hidden lg:flex">
          <li className="">
            <a
              href=""
              className="text-[#494949] hover:text-[#3F5C9A] font-body lg:text-xl hover:after:w-full after:w-0  hover:after:h-[2px] after:bg-[#3F5C9A] hover:after:block after:transition-all relative after:absolute after:bottom-[-5px] "
            >
              Venture Capital
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-[#494949]  font-body lg:text-xl  hover:text-[#3F5C9A]  hover:after:w-full after:w-0  hover:after:h-[2px] after:bg-[#3F5C9A] hover:after:block after:transition-all relative after:absolute after:bottom-[-5px]"
            >
              Real State
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-[#494949]  font-body lg:text-xl  hover:text-[#3F5C9A] hover:after:w-full after:w-0  hover:after:h-[2px] after:bg-[#3F5C9A] hover:after:block after:transition-all relative after:absolute after:bottom-[-5px]"
            >
              Contato
            </a>
          </li>
        </ul>
        {/* mobile */}
        <div
          className={`lg:hidden block h-full} cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`bg-[#494949] relative transition-all rounded-md before:rounded-md after:rounded-md before:transition-all after:transition-all flex flex-col gap-5 h-1 w-6 after:absolute after:top-2 after:h-1 after:bg-[#494949] after:w-6 before:absolute ${
              isOpen &&
              " before:rotate-45 before:translate-x-[2px] before:translate-y-[10px] after:rotate-[-45deg] after:translate-x-[2px] after:translate-y-[-6px] bg-transparent "
            } before:bottom-2 before:h-1 before:mt-2 before:bg-[#494949] before:w-6`}
          ></span>
        </div>
        <ul
          className={`lg:w-[50%] top-24 z-[99] h-96 flex flex-col bg-white  transition-opacity w-full left-0 items-center justify-evenly  absolute ${
            isOpen === true && "opacity-75"
          }
            ${isOpen === false && "hidden"}
          } `}
        >
          <li className="hover:before:w-full hover:before:h-2 before:bg-red-400">
            <a href="" className="text-[#494949] font-body lg:text-xl  ">
              Venture Capital
            </a>
          </li>
          <li>
            <a href="" className="text-[#494949]  font-body lg:text-xl">
              Real State
            </a>
          </li>
          <li>
            <a href="" className="text-[#494949]  font-body lg:text-xl">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
