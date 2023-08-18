export default function Hero() {
  return (
    <main className="">
      <section className="h-screen w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-100 flex justify-start items-center ">
          <div className="w-full h-full relative flex justify-center items-center  ">
            <img
              // src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              //   src="https://images.unsplash.com/photo-1444491741275-3747c53c99b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              src="https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="object-cover h-[500px] w-[500px]"
            />
          </div>

          <div className="w-full h-full relative flex justify-center items-center  ">
            <div className="z-20 m-4 ">
              <div className="  w-52  ">
                <div className="p-1 bg-lime-400 w-6 rounded-lg my-8"></div>

                <h1 className="  text-6xl font-bold justify-start  items-right text-start  text-gray-600">
                  RENT A BIKE CHEAPLY
                </h1>
              </div>

              <div className="relative flex flex-col  mt-4 w-2/3   h-28">
                <p className="text-gray-700">
                  Book a bike for hire at a low price and get the next rental
                  with a 25% discount!
                </p>
                <div className=" bottom-0 mt-8 flex flex-row justify-between">
                  <button className="bg-lime-400 py-2 px-4 ">
                    RENTAL BIKE
                  </button>
                  <button className="bg-white py-2 px-4 border border-lime-400">
                    RENTAL BIKE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
