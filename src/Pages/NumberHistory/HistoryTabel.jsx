import React from "react";

const Data = [
  {
    method: "Whatsapp",
    phone: "+917017525723",
    price: "₹54",
    date: "Jun 13, 2024 - 11:21 PM",
    otpsms: "552347",
  },
  {
    method: "Whatsapp",
    phone: "+917017525723",
    price: "₹54",
    date: "Jun 13, 2024 - 11:21 PM",
    otpsms: "552347",
  },
  {
    method: "Whatsapp",
    phone: "+917017525723",
    price: "₹54",
    date: "Jun 13, 2024 - 11:21 PM",
    otpsms: "552347",
  },
  {
    method: "Whatsapp",
    phone: "+917017525723",
    price: "₹54",
    date: "Jun 13, 2024 - 11:21 PM",
    otpsms: "552347",
  },
  {
    method: "Whatsapp",
    phone: "+917017525723",
    price: "₹54",
    date: "Jun 13, 2024 - 11:21 PM",
    otpsms: "552347",
  },
];
export default function HistoryTabel() {
  return (
    <>
      <div className="mt-5 mr-5">
        <div className="bg-white shadow-lg rounded-lg p-5">
          <div className="mt-5 mb-3">
            <h1 className="text-lg font-medium text-black text-start">
              Numbers History
            </h1>
          </div>
          <div className="shadow-lg bg-white rounded-lg p-5">
            {Data.map((item, index) => (
              <div className="flex flex-col gap-4">
                <div className="flex justify-between border-b border-gray-500 mt-2 p-2 ">
                  <p>{index + 1}</p>
                  <p>{item.method}</p>
                  <p>{item.phone}</p>
                  <p>{item.price}</p>
                  <p>{item.date}</p>
                  <p>{item.otpsms}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
