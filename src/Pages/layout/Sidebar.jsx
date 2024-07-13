import React from "react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { TbRecharging } from "react-icons/tb";
import { VscReferences } from "react-icons/vsc";
import { TiMessageTyping } from "react-icons/ti";
import { FaHistory } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { GiCombinationLock } from "react-icons/gi";
import { RiContactsFill } from "react-icons/ri";
import { FaBoltLightning } from "react-icons/fa6";
import "../../App.css";

export default function Sidebar({ setShowSideBar, showsidebar }) {
  return (
    <div
      className={`h-screen w-auto md:w-[300px] 3xl:w-[400px] fixed top-0 z-20 lg:z-0 flex flex-col bg-white font-[roboto] overflow-x-auto transform transition-transform duration-300 ${
        showsidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="cursur-pointer flex flex-col justify-center gap-2 shadow-lg rounded-lg lg:mt-24">
        <div className="block lg:hidden flex gap-4 items-center mt-2 3xl:m-5 2xl:gap-8 2xl:ml-4 3xl:gap-8">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/8032/8032096.png"
              alt="logo"
              className="h-14 w-14 md:h-14 md:w-14 3xl:h-20 3xl:w-20"
            />
          </div>
          <div>
            <p className="text-xl font-medium 3xl:text-3xl">OTP TOWN</p>
          </div>
          <div
            className="block lg:hidden flex items-center justify-center bg-gray-200 rounded-full h-18 w-18"
            onClick={() => setShowSideBar(false)}
          >
            <MdOutlineKeyboardDoubleArrowLeft className="h-8 w-8 3xl:h-14 3xl:w-14" />
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div className=" cursur-pointer flex flex-col justify-center mx-2 gap-2 text-gray-600 mb-2 3xl:mb-4 3xl:mx-4">
        <div className="flex gap-4 hover:bg-gray-100 p-2 hover:rounded-lg items-center">
          <MdDashboard className="hover:text-blue-400 h-5 w-5 md:h-6 md:w-6 lg:h-5 w-5 3xl:h-8 3xl:w-8" />
          <p className="text-sm md:text-lg lg:text-base 3xl:text-2xl">
            Dashboard
          </p>
        </div>
        <div className="flex gap-4 hover:bg-gray-100 p-2 hover:rounded-l">
          <MdDashboard className="h-5 w-5  md:h-6 md:w-6 hover:text-blue-500 lg:h-5 w-5 3xl:h-8 3xl:w-8" />
          <p className="text-sm md:text-lg lg:text-base 3xl:text-2xl">
            Admin Dashboard
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="flex flex-col gap-4 3xl:gap-6 justify-center">
        <div className="font-bold text-base md:text-xl lg:text-base bg-gray-100 p-2 3xl:p-4 ml-2 3xl:text-3xl 3xl:ml-0">
          <h4 className="text-start ml-2 ">SERVICES</h4>
        </div>
        <div className="flex flex-col shadow-lg rounded-lg 3xl:gap-2">
          <div className="flex gap-2 mx-2 hover:bg-gray-100 p-2 hover:rounded-lg">
            <TiMessageTyping className="hover:text-blue-400 h-5 w-5  md:h-6 md:w-6 lg:h-5 w-5 3xl:h-10 3xl:w-10 3xl:mt-[-6px]" />
            <p className="text-sm md:text-lg lg:text-base 3xl:text-2xl">
              Buy Numbers
            </p>
          </div>
          <div className="flex gap-4 mx-2 hover:bg-gray-100 p-2 hover:rounded-lg">
            <TbRecharging className="hover:text-blue-400 h-5 w-5  md:h-6 md:w-6 lg:h-5 w-5  3xl:h-8 3xl:w-8" />
            <p className="text-sm md:text-lg lg:text-base 3xl:text-2xl">
              Recharge
            </p>
          </div>
          <div className="flex gap-4 mx-2 hover:bg-gray-100 p-2 hover:rounded-lg mb-2 3xl:mb-4">
            <VscReferences className="hover:text-blue-400 h-5 w-5  md:h-6 md:w-6 lg:h-5 w-5 3xl:h-8 3xl:w-8" />
            <p className="text-sm md:text-lg lg:text-base 3xl:text-2xl">
              Refer & Earn
            </p>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="flex flex-col gap-4 justify-center">
        <div className="font-bold text-base md:text-lg lg:text-base bg-gray-100 p-2 ml-2 3xl:p-4 3xl:text-3xl 3xl:ml-0">
          <h4 className="text-start ml-2">HISTORY</h4>
        </div>
        <div className="flex flex-col shadow-lg rounded-lg 3xl:gap-4">
          <div className="flex gap-4 mx-2 hover:bg-gray-100 p-2 hover:rounded-lg">
            <FaHistory className="hover:text-blue-400 h-5 w-5  md:h-6 md:w-6 lg:h-5 w-5  3xl:h-8 3xl:w-8" />
            <p className="text-sm md:text-lg lg:text-base 3xl:text-2xl">
              Number History
            </p>
          </div>
          <div className="flex gap-4 mx-2 hover:bg-gray-100 p-2 hover:rounded-lg mb-2 3xl:mb-4">
            <CgNotes className="hover:text-blue-400 h-5 w-5  md:h-6 md:w-6 lg:h-5 w-5  3xl:h-8 3xl:w-8" />
            <p className="text-sm md:text-lg lg:text-base 3xl:text-2xl">
              Transaction History
            </p>
          </div>
        </div>
      </div>

      {/* Developer tool */}
      <div className="flex flex-col gap-2 justify-center">
        <div className="font-bold text-base md:text-lg lg:text-base bg-gray-100 p-2 ml-2  3xl:p-4 3xl:text-3xl 3xl:ml-0">
          <h4 className="text-start ml-2">DEVELOPER TOOLS</h4>
        </div>
        <div className="flex flex-col shadow-lg rounded-lg">
          <div className="flex items-center gap-4 hover:bg-gray-100 p-2 hover:rounded-lg mb-2 3xl:mb-4 3xl:ml-2">
            <GiCombinationLock className="hover:text-blue-400 h-5 w-5 md:h-6 md:w-6 lg:h-5 w-5  3xl:h-8 3xl:w-8" />
            <p className="text-sm md:text-lg lg:text-base  3xl:text-2xl">
              Api Tools
            </p>
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="flex flex-col gap-4 justify-center">
        <div className="font-bold text-base md:text-lg lg:text-base bg-gray-100 p-2 ml-2 3xl:p-4 3xl:text-3xl 3xl:ml-0">
          <h4 className="text-start ml-2">SUPPORT</h4>
        </div>
        <div className="flex flex-col shadow-lg rounded-lg  3xl:gap-4">
          <div className="flex gap-4 mx-2 hover:bg-gray-100 p-2 hover:rounded-lg">
            <RiContactsFill className="hover:text-blue-400 h-4 w-4  md:h-6 md:w-6 lg:h-5 w-5  3xl:h-8 3xl:w-8" />
            <p className="text-sm md:text-lg lg:text-base 3xl:text-2xl">
              Contact Us
            </p>
          </div>
          <div className="flex gap-4 mx-2 hover:bg-gray-100 p-2 hover:rounded-lg mb-14 lg:mb-4 3xl:mb-20">
            <FaBoltLightning className="hover:text-blue-400 h-4 w-4  md:h-6 md:w-6 lg:h-5 w-5  3xl:h-8 3xl:w-8" />
            <p className="text-sm md:text-lg lg:text-base  3xl:text-2xl">
              Join Channel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
