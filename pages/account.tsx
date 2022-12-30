import Link from "next/link";
import React from "react";
import { MdPersonOutline } from "react-icons/md";

function onBoarding() {
  return (
    <div className="h-screen w-screen">
      <div className="w-5/6 mx-auto pt-6 h-full">
        <h1 className="text-xl md:text-2xl text-center">Get Started</h1>
        <p className="text-center text-gray-500 text-xs mt-2">
          How would you like to join EppMe ?
        </p>

        <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 md:w-3/5 md:mx-auto">
          <div className="bg-white px-4 py-8  border border-slate-300 rounded-md text-sm shadow-sm h-fit focus:border-sky-500">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 bg-green-600 flex justify-center items-center rounded-full">
                <MdPersonOutline size={20} color="white" />
              </div>
              <h2 className="text-medium text-base mb-2">As a client</h2>
            </div>
            <p className="mb-8 text-xs mt-4">
              Select if you are looking to invest in promising startups
            </p>
            <Link
              href={"/"}
              className="py-2 rounded-md text-purple-700 px-4 border border-purple-700"
            >
              Continue as a client
            </Link>
          </div>

          <div className="bg-white px-4 py-8  border border-slate-300 rounded-md text-sm shadow-sm  focus:border-sky-500">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 bg-purple-700 flex justify-center items-center rounded-full">
                <MdPersonOutline size={20} color="white" />
              </div>
              <h2 className="text-medium text-base mb-2">As a worker</h2>
            </div>
            <p className="mb-8 text-xs mt-4">
              Select if you are looking to invest in promising startups
            </p>
            <Link
              href={"/"}
              className="py-2 rounded-md text-purple-700 px-4 border border-purple-700"
            >
              Continue as a worker
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default onBoarding;
