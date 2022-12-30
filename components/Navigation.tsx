import Link from "next/link";
import React, { useState } from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import { IoIosClose } from "react-icons/io";
import { Transition } from "@tailwindui/react";

function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="text-sm z-20 border-0 lg:border-0 fixed w-full">
      <div className="flex h-20 justify-between lg:justify-start items-center relative w-5/6 mx-auto">
        <p>Logo</p>

        <div className="hidden lg:flex gap-8 md:w-full md:justify-between">
          <div className="lg:flex justify-between items-center  space-x-8 ml-12">
            <Link href={"/"}>Find Talent</Link>
            <Link href={"/"}>Find Work</Link>
            <Link href={"/"}>About us</Link>
          </div>

          <div className="flex space-x-8 items-center">
            <SearchBar />
            <Link
              href={"/login"}
              className=" hover:bg-purple-50 font-medium border border-purple-700 px-4 h-9 text-purple-700 flex text-xs items-center rounded-md"
            >
              Log In
            </Link>
            <Link
              href={"/account"}
              className="border border-purple-700 px-4 h-9 shadow-md bg-purple-700 text-white text-xs flex items-center rounded-md hover:bg-purple-800 transition-all"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <div tabIndex={0}>
              <IoIosClose size={35} />
            </div>
          ) : (
            <Menu />
          )}
        </div>

        <Transition
          show={isOpen}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute w-full -bottom-0"
        >
          <div className=" md:hidden h-fit p-4 w-full rounded border shadow-md bg-white absolute">
            <ul>
              <li className="text-sm my-4">
                <Link href={"/"}>Find Talent</Link>
              </li>
              <li className="text-sm my-4">
                <Link href={"/"}>Find Work</Link>
              </li>
              <li className="text-sm my-4">
                <Link href={"/"}>About Us</Link>
              </li>
              <li className="text-sm my-4">
                <Link href={"/login"}>Log In</Link>
              </li>
              <li className="text-sm my-4 bg-purple-700 h-12 rounded text-white flex items-center justify-center shadow-md">
                <Link href={"/account"}>Sign Up</Link>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default Navigation;
