import React, { useEffect, useState } from "react";
import logo from "./../../public/logo-brock-white.svg";
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
    <div className="bg-transparent absolute top-0 w-full h-24 lg:h-32 flex items-center justify-center flex-col px-6 z-50">
      <div className=" flex items-center justify-between max-w-7xl w-full m-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo.src} alt="" className="max-w-[100px] lg:max-w-[150px]" />
        <ul className="hidden lg:flex gap-10">
          <li>
            <a
              href="/#about"
              className="text-[#c2c2c2]  font-body lg:text-base  hover:text-[#FFFF]  hover:after:w-full after:w-0  hover:after:h-[2px] after:bg-[#3F5C9A] hover:after:block after:transition-all relative after:absolute after:bottom-[-5px]"
            >
              Sobre nós
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="text-[#c2c2c2]  font-body lg:text-base hover:text-[#FFFF] hover:after:w-full after:w-0  hover:after:h-[2px] after:bg-[#3F5C9A] hover:after:block after:transition-all relative after:absolute after:bottom-[-5px]"
            >
              Contato
            </a>
          </li>
        </ul>
        {/* mobile */}
        <div
          className={`lg:hidden block cursor-pointer px-4 py-4 z-[9999] `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`bg-white relative transition-all rounded-md before:rounded-md after:rounded-md before:transition-all after:transition-all flex flex-col gap-5 h-1 w-6 after:absolute after:top-2 after:h-1 after:bg-[#EDEDED] after:w-6 before:absolute ${
              isOpen &&
              "bgTransparent before:rotate-45 before:translate-x-[2px] before:translate-y-[10px] after:rotate-[-45deg] after:translate-x-[2px] after:translate-y-[-6px]"
            } before:bottom-2 before:h-1 before:mt-2 before:bg-[#EDEDED] before:w-6`}
          ></span>
        </div>
        <ul
          className={`lg:w-[50%] w-full z-[99] h-[150px] top-20 absolute flex flex-col bg-[#EDEDED]  transition-opacity  left-0 items-center justify-evenly  ${
            isOpen === true && "translate-x-0 transition-transform duration-500"
          }
            ${
              isOpen === false &&
              "translate-x-[-1000px] transition-transform duration-500 delay-100"
            }
          } `}
        >
          {/* <li className="hover:before:w-full hover:before:h-2 before:bg-red-400">
            <a href="" className="text-[#494949] font-body lg:text-xl  ">
              Venture Capital
            </a>
          </li> */}
          <li>
            <a href="/#about" className="text-[#494949]  font-body lg:text-xl">
              Sobre nós
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="text-[#494949]  font-body lg:text-xl"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
