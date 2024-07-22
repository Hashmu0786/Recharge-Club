import React from "react";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavbarAdmin({ setShowSideBar }) {
  return (
    <>
      <div className="w-full  top-0 fixed z-20 h-14 bg-indigo-900 text-white overflow-hidden">
        <div className="flex justify-between items-center ml-5 mt-2 md:ml-10">
          <div className="text-white ">
            <GiHamburgerMenu size={20} onClick={() => setShowSideBar(true)} />
          </div>
          <div className="flex justify-between items-center  mx-5 md:gap-10 ">
            <div className="relative flex items-center pr-2 md:ml-72">
              <IoMdSearch size={25} className="absolute ml-1 " />

              <input
                type="text"
                placeholder="Search.."
                className="bg-transparent border border-white rounded-md  md:px-8 py-0.5 text-white pl-10 outline-none"
              />
            </div>
            <div className=" flex gap-2 md:gap-5 items-center border-l border-white h-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                alt="profile"
                className="h-8 w-8 ml-1 md:ml-5"
              />
              <p>H&A</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
