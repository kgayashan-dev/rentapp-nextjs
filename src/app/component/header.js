"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaBicycle,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import Topbar from "./topbar";
import Link from "next/link";

const Header = ({ navLinks }) => {
  // console.log(navLinks[0].label);

  const [nav, setNav] = useState(false);

  const haddleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <Topbar />
      <div
        className={
          "min-h-[50px] flex justify-between items-center  z-30 bg-lime-400  p-5 border-b  w-full "
        }
      >
        <div className="">
          <h1 className="flex items-center justify-center gap-1 text-2xl  ">
            Trialem
          </h1>
        </div>

        <nav className="hidden  sm:flex px-4 justify-around gap-4">
          {navLinks.map((link, key) => {
            return (
              <Link aria-label={link.label} key={link.id} href={link.link}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* 
    Icons
    
    */}

        <div className="sm:hidden z-50">
          <FaBars
            onClick={haddleNav}
            size={20}
            className="mr-4 cursor-pointer"
          />
        </div>
        {/* mobile menu */}
        <div
          onClick={haddleNav}
          className={
            nav
              ? "overflow-y-hidden ease-in duration-300 absolute text-gray-300 left-0 w-full top-0 h-screen  bg-black/90 px-4 py-7 flex flex-col"
              : "absolute top-0 h-screen hidden ease-in duration-500"
          }
        >
          <ul className="h-full w-full text-center pt-12 ">
            <li className="flex flex-col gap-5 text-2xl">
              {navLinks.map((link, key) => {
                return (
                  <Link aria-label={link.label} key={link.id} href={link.link}>
                    {link.label}
                  </Link>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
