import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import upi from "../../assets/icons/upi.svg";
import gift from "../../assets/icons/gift.png";

export default function RechargeMethods() {
  return (
    <>
      <div className="font-roboto mt-10">
        <div className="bg-white shadow-lg rounded-lg p-5 mr-10 ">
          <h1 className="text-lg font-medium text-center">Recharge Methods</h1>
          {/*  */}
          <div className="flex justify-between mt-10 border-2 rounded-lg border-gray-400 p-2 items-center">
            <div className="flex gap-4 ">
              <div>
                <img src={upi} alt="" className="h-14 w-14" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base font-medium">UPI</h4>
                <p className="text-sm">Phonepe, Paytm, Gpay</p>
              </div>
            </div>
            <div>
              <FaArrowRight size={30} className="text-indigo-800" />
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between mt-10 border-2 rounded-lg border-gray-400 p-2 items-center">
            <div className="flex gap-4 ">
              <div>
                <img src={gift} alt="" className="h-14 w-14" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base font-medium">Promocode</h4>
                <p className="text-sm">Giveaway</p>
              </div>
            </div>
            <div>
              <FaArrowRight size={30} className="text-indigo-800" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
