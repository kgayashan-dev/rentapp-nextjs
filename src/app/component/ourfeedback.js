"use client";
import React, { useState } from "react";
import { IoCaretForwardCircleOutline } from "react-icons/io5";
import { IoCaretBackCircleOutline } from "react-icons/io5";
const testimonials = [
  {
    image:
      "https://template101735.motopreview.com/mt-demo/101700/101735/mt-content/uploads/2020/05/mt-2022-home-testimonials_1.png",
    text: "I rented a bike here some time and was satisfied with service. Price is nice and quality of bikes are excellent",
    name: "Adam Vorlok",
    role: "Customer",
  },
  {
    image:
      "https://template101735.motopreview.com/mt-demo/101700/101735/mt-content/uploads/2020/05/mt-2022-home-testimonials_2.png",
    text: "I rented a bike here some time and was satisfied with service. Price is nice and quality of bikes are excellent",

    name: "Jane Doe",
    role: "Customer",
  },

  {
    image:
      "https://template101735.motopreview.com/mt-demo/101700/101735/mt-content/uploads/2020/05/mt-2022-home-testimonials_2.png",

    text: "I rented a bike here some time and was satisfied with service. Price is nice and quality of bikes are excellent",
    name: "Jane Doe",
    role: "Customer",
  },
  // Add more testimonials as needed
];
const Ourfeedback = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // const nextTestimonial = () => {
  //   setCurrentTestimonialIndex(
  //     (prevIndex) => (prevIndex + 1) % testimonials.length
  //   );
  // };

  // const prevTestimonial = () => {
  //   setCurrentTestimonialIndex(
  //     (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
  //   );
  // };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <section className="h-[70vh] w-full bg-slate-100">
      <div className="flex h-full w-full justify-start  items-start ">
        <div className="z-20   w-1/5 h-full  ml-16 flex flex-col justify-center ">
          <div className="p-1 bg-lime-400 w-6 rounded-lg my-8"></div>
          <h1 className="  text-6xl font-bold justify-start  items-right text-start  text-gray-600">
            OUR FEEDBACK
          </h1>
        </div>

        <div className="flex w-full h-full justify-center items-center ">
          <div className="relative w-[110vh] bg-white h-[40vh] flex shadow-xl p-10">
            <div className="w-1/2 flex  justify-start items-center  ">
              <div className="flex flex-col justify-center items-start gap-3">
                <img
                  src="https://template101735.motopreview.com/mt-demo/101700/101735/mt-content/uploads/2020/05/mt-2022-home-testimonials_2.png"
                  alt="Testimonial"
                />
                <p>{currentTestimonial.text}</p>
                <p className="font-semibold">{currentTestimonial.name}</p>
                <p className="text-xs -mt-4">{currentTestimonial.role}</p>
              </div>
            </div>

            {/* tstimonial */}
            <div className="w-1/2 flex  justify-start items-center  ">
              <div className="flex flex-col justify-center items-start gap-3">
                <img
                  src="https://template101735.motopreview.com/mt-demo/101700/101735/mt-content/uploads/2020/05/mt-2022-home-testimonials_2.png"
                  alt="Testimonial"
                />

                <p>{currentTestimonial.text}</p>
                <p className="font-semibold">{currentTestimonial.name}</p>
                <p className="text-xs -mt-4">{currentTestimonial.role}</p>
              </div>
            </div>
            <div className="absolute bottom-7">
              <div className="flex justify-center items-center gap-3">
                <IoCaretBackCircleOutline
                  size={30}
                  className="hover:cursor-pointer"
                  //   onClick={prevTestimonial}
                />
                <IoCaretForwardCircleOutline
                  size={30}
                  className="hover:cursor-pointer"
                  //   onClick={nextTestimonial}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourfeedback;
