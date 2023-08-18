import React from "react";

const Main = () => {
  return (
    <section className="h-auto  w-full ">
      <div className=" relative flex flex-row justify-stretch bg-stone-700">
        <div className="z-20 m-4 absolute pl-16">
          <div className="  w-52 mt-36 ">
            <div className="p-1 bg-lime-400 w-6 rounded-lg my-8"></div>

            <h1 className="  text-6xl font-bold justify-start  items-right text-start  text-gray-600">
              RENT A BIKE CHEAPLY
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

        <div className="w-full h-screen  ">
          <img
            src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="scale-x-[-1] transition-transform  object-cover   h-screen w-screen"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
