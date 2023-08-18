import React from "react";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { detials } from "../data/data";
const Topbar = () => {
  return (
    <div
      className={
        "w-full min-h-[50px] flex justify-between gap-4 items-center  z-10 border px-5  font-thin "
      }
    >
      <div className=" flex justify-between items-center gap-32 ">
        <div className=" sm:flex md:flex flex-row justify-center items-center gap-2 hidden ">
          <FaMapMarkerAlt  /> <p>{detials[0]}</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <BsFillTelephoneFill /> <p>{detials[1]}</p>
        </div>
      </div>

      <div className="flex ">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>
    </div>
  );
};

export default Topbar;
