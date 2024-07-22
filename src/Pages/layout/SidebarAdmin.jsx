import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiDashboard3Line } from "react-icons/ri";
import { RiDashboardFill } from "react-icons/ri";
import { FaUsersLine } from "react-icons/fa6";
import { ImBlocked } from "react-icons/im";
import { MdOutlineFindInPage } from "react-icons/md";
import { PiSlideshowFill } from "react-icons/pi";
import { MdPostAdd } from "react-icons/md";
import { AiOutlineFileAdd } from "react-icons/ai";
import { CiServer } from "react-icons/ci";
import { MdOutlineAddchart } from "react-icons/md";
import { MdTranscribe } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GoCrossReference } from "react-icons/go";
import { MdSettingsInputAntenna } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { MdOutlinePermDataSetting } from "react-icons/md";
import { FaHistory } from "react-icons/fa";

import { AiFillApi } from "react-icons/ai";

export default function SidebarAdmin({ setShowSideBar, showsidebar }) {
  return (
    <>
      <div
        className={` font-roboto px-2 fixed top-0 z-50 h-full bg-indigo-900 overflow-auto text-sm transform transition-transform duration-300 ${
          showsidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="">
          <div className="flex gap-2 text-white mt-2 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
              alt="profile"
              className="h-10 w-10  md:ml-5"
            />
            <h1 className="text-blue">RADIUM</h1>
            <GiHamburgerMenu
              size={20}
              className="lg:hidden ml-4"
              onClick={() => setShowSideBar(false)}
            />
          </div>

          <div>
            <ul className="text-white mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2   py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <RiDashboardFill size={20} className="ml-5" />
                <li>Dashboard</li>
              </div>
              <div className="flex items-center gap-2  py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <FaUsersLine size={20} className="ml-5" />
                <li>All User</li>
              </div>
              <div className="flex items-center gap-2  py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <ImBlocked size={20} className="ml-5" />
                <li>Blocked User</li>
              </div>
              <div className="flex items-center gap-2 py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <MdOutlineFindInPage size={20} className="ml-5" />
                <li>Find User</li>
              </div>
              <div className="flex items-center gap-2  py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <PiSlideshowFill size={20} className="ml-5" />
                <li>Show Service</li>
              </div>
              <div className="flex items-center gap-2 py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <MdPostAdd size={20} className="ml-5" />
                <li>Add Service</li>
              </div>
              <div className="flex items-center gap-2  py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <AiOutlineFileAdd size={20} className="ml-5" />
                <li>Add server</li>
              </div>
              <div className="flex items-center gap-2 py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <CiServer size={20} className="ml-5" />
                <li>Show Server</li>
              </div>
              <div className="flex items-center gap-2 py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <AiFillApi size={20} className="ml-5" />
                <li>Show APIs</li>
              </div>
              <div className="flex items-center gap-2 py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <MdOutlineAddchart size={20} className="ml-5" />
                <li>Add APIs</li>
              </div>
              <div className="flex items-center gap-2  py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <MdTranscribe size={20} className="ml-5" />
                <li>UPI Transcations</li>
              </div>
              <div className="flex items-center gap-2 py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <FaMoneyBillTransfer size={20} className="ml-5" />
                <li>Crypto Transcation</li>
              </div>
              <div className="flex items-center gap-2  py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <GoCrossReference size={20} className="ml-5" />
                <li>Refer Transactions</li>
              </div>
              <div className="flex items-center gap-2 py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <MdSettingsInputAntenna size={20} className="ml-5" />
                <li>Bharat Pe Setting</li>
              </div>
              <div className="flex items-center gap-2 py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <FaTools size={20} className="ml-5" />
                <li>Number Waiting </li>
              </div>
              <div className="flex items-center gap-2 py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <MdOutlinePermDataSetting size={20} className="ml-5" />
                <li>Promocode Settings</li>
              </div>
              <div className="flex items-center mb-5 gap-2 py-1.5 hover:bg-blue-500 hover:rounded-lg">
                <FaHistory size={20} className="ml-5" />
                <li>Today Number History</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
