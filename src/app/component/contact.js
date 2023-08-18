import React from "react";
import { TiTickOutline } from "react-icons/ti";

const Contact = () => {
  return (
    <section className="h-screen">
      <div className="flex justify-center h-full items-center ">
        <div className=" w-3/5 h-full flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1558677976-54b5a5bac6d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdvb2dsZSUyMG1hcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            className="w-3/4 h-2/4"
            alt=""
          />
        </div>

        <div className=" w-3/5 justify-start   ">
          <div className="flex flex-col justify-start gap-6 mx-20">
            <h1 className="font-bold text-2xl">Make your Ride</h1>
            <p className="font-medium">
              This can salutandi quo nec elit utinam facer pertinax a fierent,
              virtute dosent.
            </p>
          </div>
          <div className="text-lg mx-20 my-10 ">
            <form action="#" className="space-y-8 text-xl ">
              <div>
                <label
                  htmlFor="email"
                  className="block  text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  // value={email}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5    dark:shadow-sm-light"
                  placeholder="name@account.com"
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  // className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5    dark:shadow-sm-light"

                  className="block  text-sm font-medium text-gray-900 "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  // value={subject}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5    dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  // onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block  text-sm font-medium text-gray-900 "
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  // value={message}
                  // onChange={(e) => setMessage(e.target.value)}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:text-white "
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 bg-lime-500 px-5 text-sm font-medium text-center text-white rounded-lg  sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
              >
                Send message
              </button>
            </form>

            <div className="flex justify-start items-center my-6">
              <TiTickOutline className="text-lime-500" />
              <p> Your data will not be shared with third parties.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
