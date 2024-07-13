import React from "react";
import { CiBag1 } from "react-icons/ci";
import { FaMonument } from "react-icons/fa";
import { VscReferences } from "react-icons/vsc";

const data = [
  {
    icon: <CiBag1 size={20} className="text-purple-800" />,
    heading: "Total Referred User",
    price: "0",
  },
  {
    icon: <FaMonument size={20} className="text-blue-400" />,
    heading: "Total Transfer Amount",
    price: "₹140",
  },
];

export default function ReferData() {
  return (
    <>
      <div className="mt-8">
        <div className=" bg-white rounded-lg font-roboto shadow-md rounded-lg text-gray-500 px-4 py-8">
          <h1 className="text-black text-xl font-normal text-start">
            Refer Data
          </h1>
          {data.map((items, index) => (
            <div
              key={index}
              className="flex justify-start items-center gap-5 lg:gap-8 bg-white border border-gray-500 rounded-lg py-1 px-4 mt-5"
            >
              <div>{items.icon}</div>
              <div className="mb-2">
                <h3 className="text-sm mb-1">{items.heading}</h3>
                <p className="text-sm text-black">{items.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
