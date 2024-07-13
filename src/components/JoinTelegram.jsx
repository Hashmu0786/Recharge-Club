import React from "react";
import { FaBell } from "react-icons/fa";

export default function JoinTelegram({ detail, btndata }) {
  return (
    <>
      <div className="font-roboto mr-2 mt-3 ">
        <div className="flex bg-white shadow-lg justify-start gap-2 md:gap-5 items-center  rounded-lg py-3 px-6 ">
          <div>
            <FaBell size={20} className="text-blue-800" />
          </div>
          <div>
            <p className="text-blue-800 text-sm">{detail}</p>
          </div>

          <div>
            <button className="bg-blue-800 text-white rounded-lg py-2 px-2 text-sm md:text-xs">
              {btndata}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
