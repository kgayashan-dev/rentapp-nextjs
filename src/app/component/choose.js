import React from "react";

const Chose = () => {
  return (
    <section>
      <div className="flex flex-row ">
        <div className="bg-slate-100 w-[55vh] h-[60vh] flex justify-center items-center pl-8">
          <div className="z-20">
            <div className="w-72 overflow-auto">
              <div className="p-1 bg-lime-400 w-6 rounded-lg my-8"></div>

              <h1 className="text-6xl font-bold justify-start items-right text-start  text-gray-600 flex flex-col">
                CHOOSE
                <span className="flex justify-start items-center">
                  YOU BIKE
                </span>
              </h1>
            </div>

            <div className="relative flex flex-col  mt-4 w-2/3   h-28">
              <div className=" bottom-0 mt-8 flex flex-row justify-between ga">
                <button className="bg-lime-400 py-2 px-4 ">RENTAL BIKE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-4/5 bg-gray-100">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center items-center">
            <div className="relative shadow-md capitalize bg-white rounded-lg  hover:scale-100 duration-300 hover:shadow-xl p-4">
              <img
                src="https://template101735.motopreview.com/mt-demo/101700/101735/mt-content/uploads/2020/05/mt-2022-home-img-2.jpg"
                className="rounded-t-lg object-cover"
              />

              <p className=" text-lg font-bold pt-4">Mountain bike “Storm”</p>
              <div className="text-sm mb-10 min-h-50">
                <p className=" top-0 text-black ">Exclusive choise</p>
                {/* <p className=" top-0 text-black p-2">{text}</p> */}
              </div>

              <div className="absolute mt-4  px-4 py-2 text-sm bottom-0  left-0 ">
                <p>
                  <strong>$ 16.00</strong> / Days
                </p>
              </div>

              <div className="absolute mt-4  px-4 py-2 text-sm bottom-0  right-0 ">
                <button className="text-lime-500">RENT</button>
              </div>
            </div>

            <div className="relative shadow-md capitalize bg-white rounded-lg  hover:scale-100 duration-300 hover:shadow-xl p-4">
              <img
                src="https://template101735.motopreview.com/mt-demo/101700/101735/mt-content/uploads/2020/05/mt-2022-home-img-2.jpg"
                className="rounded-t-lg object-cover"
              />

              <p className=" text-lg font-bold pt-4">Mountain bike “Storm”</p>
              <div className="text-sm mb-10 min-h-50">
                <p className=" top-0 text-black ">Exclusive choise</p>
                {/* <p className=" top-0 text-black p-2">{text}</p> */}
              </div>

              <div className="absolute mt-4  px-4 py-2 text-sm bottom-0  left-0 ">
                <p>
                  <strong>$ 16.00</strong> / Days
                </p>
              </div>

              <div className="absolute mt-4  px-4 py-2 text-sm bottom-0  right-0 ">
                <button className="text-lime-500">RENT</button>
              </div>
            </div>

            <div className="relative shadow-md capitalize bg-white rounded-lg  hover:scale-100 duration-300 hover:shadow-xl p-4">
              <img
                src="https://template101735.motopreview.com/mt-demo/101700/101735/mt-content/uploads/2020/05/mt-2022-home-img-2.jpg"
                className="rounded-t-lg object-cover"
              />

              <p className=" text-lg font-bold pt-4">Mountain bike “Storm”</p>
              <div className="text-sm mb-10 min-h-50">
                <p className=" top-0 text-black ">Exclusive choise</p>
                {/* <p className=" top-0 text-black p-2">{text}</p> */}
              </div>

              <div className="absolute mt-4  px-4 py-2 text-sm bottom-0  left-0 ">
                <p>
                  <strong>$ 16.00</strong> / Days
                </p>
              </div>

              <div className="absolute mt-4  px-4 py-2 text-sm bottom-0  right-0 ">
                <button className="text-lime-500">RENT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chose;
