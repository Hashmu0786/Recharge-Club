import React from "react";
import { FiPlusSquare } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";

export default function Display() {
  return (
    <>
      <div className="bg-bggradient mt-5 mr-3 h-40 rounded-lg font-roboto text-gray-200">
        <div className="flex flex-col gap-12">
          <div className="flex justify-between px-4 py-4 font-roboto">
            <h2 className="font-normal leading-5 text-base  lg:text-lg">
              Available Balance
            </h2>
            <p className="text-base lg:text-lg">₹ 61</p>
          </div>
          <div className="flex justify-between px-4">
            <div className="flex gap-2 mt-2">
              <FiPlusSquare size={30} className="hover:text-blue-500" />
              <TbReportAnalytics size={30} className="hover:text-blue-500" />
            </div>

            <button className="bg-transparent text-sm md:text-base font-roboto hover:bg-blue-500 text-white font-medium hover:text-white py-1 px-2 md:py-2 md:px-4 border border-white hover:border-blue-500 rounded-lg">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
