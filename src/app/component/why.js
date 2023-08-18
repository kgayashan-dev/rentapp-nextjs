import React from "react";
import { FaBicycle } from "react-icons/fa";
import { BsChatLeftDots } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const Why = () => {
  return (
    <section className="h-full w-full bg-slate-100">
      <div className=" flex justify-center items-center  gap-14  py-24 bg-stone-900/100 ml-16 ">
        <div>
          <img
            src="https://template101735.motopreview.com/mt-demo/101700/101735/mt-content/uploads/2020/05/home-img-5.png"
            alt=""
            className="w-[600px]"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-10">
          <div className="">
            <div className="p-0.5 bg-lime-400 w-6 rounded-lg my-6"></div>

            <h1 className="font-bold text-6xl text-gray-300">
              WHY <span className="flex justify-center">TRIALEM</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 text-white">
            <div className="w-32  h-auto flex flex-col gap-6">
              <h1 className="text-2xl font-bold">%</h1>

              <h2 className="font-bold text-xl">Low prices </h2>

              <p>We provide affordable prices for renting bikes.</p>
            </div>
            <div className="w-32  h-auto flex flex-col gap-6">
              <h1 className="text-2xl font-bold">
                <FaBicycle />
              </h1>

              <h2 className="font-bold text-xl">Good support</h2>

              <p>We lease new bicycles for your comfort.</p>
            </div>
            <div className="w-32  h-auto flex flex-col gap-6">
              <h1 className="text-2xl font-bold">
                <BsChatLeftDots/>
              </h1>

              <h2 className="font-bold text-xl">Low prices </h2>

              <p>Pick up and return bicycle at our spot easily.</p>
            </div>
            <div className="w-32  h-auto flex flex-col gap-6">
              <h1 className="text-2xl font-bold">
                <FaMapMarkerAlt />
              </h1>

              <h2 className="font-bold text-xl">Convenient location </h2>

              <p>Our maain station is located in the center of the city.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
