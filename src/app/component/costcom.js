import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { CgSandClock } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";

const Cost = () => {
  return (
    <section className="bg-stone-900 text-white min-h-screen">
      <div className="flex flex-row justify-center items-center gap-10">
        <div className="z-20 m-4 ">
          <div className=" w-4/5 mt-36 ">
            <div className="p-1 bg-lime-400 w-6 rounded-lg my-8"></div>

            <h1 className="  text-6xl font-bold justify-start  items-right text-start  text-gray-400">
              COST <span className="flex">OF TRIALEM</span>
            </h1>
          </div>

          <div className="relative flex flex-col  mt-4 w-2/3   h-28">
            <p className="text-gray-200">
              Book a bike for hire at a low price and get the next rental with a
              25% discount!
            </p>
            <div className=" bottom-0 mt-8">
              <button className="bg-lime-400 py-2 px-4 ">RENTAL BIKE</button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 p-8 bg-zinc-800 mt-36 rounded ">
          <div className="w-72 h-48 justify-start flex flex-col gap-4">
            <AiOutlineClockCircle size={30} />
            <h1 className="font-bold">4 Hours ($12)</h1>
            <p>
              {" "}
              You can rent a bike for 4 hours and enjoy your riding around the
              city.
            </p>
          </div>

          <div className="w-60 h-48 justify-start flex flex-col gap-4">
            <PiClockCounterClockwiseFill size={30} />
            <h1 className="font-bold">4 Hours ($12)</h1>
            <p>
              {" "}
              There are a lot of loyal customers, who come back to rent
              bicycles.
            </p>
          </div>
          <div className="w-60 h-48 justify-start flex flex-col gap-4">
            <CgSandClock size={30} />
            <h1 className="font-bold"> 1 Week ($78)</h1>
            <p>
              There is an option to rent a bike for 1 week and learn the all
              corners of the city.
            </p>
          </div>
          <div className="w-60 h-48 justify-start flex flex-col gap-4">
            <SlCalender size={30} />
            <h1 className="font-bold"> 1 Month ($299)</h1>
            <p>
              We provide an opportunity to rent a bike for 1 month and be a real
              city resident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cost;
