import React from "react";
import Card from "./Card";
import BuyerTabel from "./BuyerTabel";

export default function AdminDashboard() {
  return (
    <>
      <div className="mt-20 ml-5 mr-2 lg:ml-60 lg:mr-10">
        <div className="flex justify-between mb-2">
          <h1 className="text-lg md:text-2xl font-poppins font-medium">
            Dashboard
          </h1>
          <p className="text-xs font-poppins">
            <span className="text-blue-500">home </span> /Dashboard
          </p>
        </div>
        <div className="">
          <Card />
          <BuyerTabel />
        </div>
      </div>
    </>
  );
}
