import React from "react";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

import { BsFillSendFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6 p-10 sm:h-[35vh] bg-lime-400 border-t">
      <div>
        <h1 className="text-xl font-semibold">Trialem</h1>
        <div>
          <p>
            We are cycling enthusiasts, fall in love with our city, and tour
            guides obsessed with showing it.
          </p>
        </div>
        <div className="flex justify-start items-center gap-4">
          <FaFacebookF />
          <FaTwitter />
          <FaGooglePlusG />
          <FaInstagram />
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Facebook</h1>
        <div className="w-56 bg-white items-center rounded-md">
          <img
            src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZWJvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60 "
            alt=""
            className="w-56 p-0.5 rounded-md"
          />
        </div>
      </div>

      <div>
        <h1 className="text-xl font-semibold">Contact US</h1>
        <div className="flex flex-col gap-2">
          <p>
            <span className="font-semibold text-red-600">Phone:</span> + 123 –
            456 – 7890{" "}
          </p>
          <p>
            <span className="font-semibold text-red-600">Adress:</span> 470 Lucy
            Forks,{" "}
          </p>
          <p>Patriciafurt, YC7B3UT </p>
          <p>
            {" "}
            <span className="font-semibold text-red-600">Mail:</span>{" "}
            info@demolink.org
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Subscribe</h1>
        <div className=" flex flex-col gap-4">
          <div className="flex justify-start items-center gap-4">
            <form action="">
              <input type="mail" className="p-2 rounded-md bg-gray-200" />
            </form>
            <BsFillSendFill className="hover:cursor-pointer" />
          </div>
          <p>
            By renting our bikes you 100% guarantee yourself a healthy life!
          </p>
        </div>
      </div>

      <div>2023 – Trialem. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
