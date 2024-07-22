import React from "react";
import { FaUser } from "react-icons/fa6";

export default function Card() {
  const data = [
    {
      heading: "TOTAL USER",
      amount: "5501",
      notifi: "+42 Register Today",
      icon: <FaUser size={30} className="text-blue-500" />,
    },
    {
      heading: "TOTAL USER",
      amount: "5501",
      notifi: "+42 Register Today",
      icon: <FaUser size={30} className="text-blue-500" />,
    },
    {
      heading: "TOTAL USER",
      amount: "5501",
      notifi: "+42 Register Today",
      icon: <FaUser size={30} className="text-blue-500" />,
    },
    {
      heading: "TOTAL USER",
      amount: "5501",
      notifi: "+42 Register Today",
      icon: <FaUser size={30} className="text-blue-500" />,
    },
    {
      heading: "TOTAL USER",
      amount: "5501",
      notifi: "+42 Register Today",
      icon: <FaUser size={30} className="text-blue-500" />,
    },
    {
      heading: "TOTAL USER",
      amount: "5501",
      notifi: "+42 Register Today",
      icon: <FaUser size={30} className="text-blue-500" />,
    },
    {
      heading: "TOTAL USER",
      amount: "5501",
      notifi: "+42 Register Today",
      icon: <FaUser size={30} className="text-blue-500" />,
    },
    {
      heading: "TOTAL USER",
      amount: "5501",
      notifi: "+42 Register Today",
      icon: <FaUser size={30} className="text-blue-500" />,
    },
  ];

  return (
    <>
      {/* <div className="flex flex-col md:flex-row flex-wrap gap-5 w-full"> */}
      <div className="grid  md:gap-5 mr-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg   font-roboto p-5 mt-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2 font-medium">
                <h3 className="text-gray-500 text-sm">{item.heading}</h3>
                <p className="text-gray-800 text-lg">{item.heading}</p>
                <p className="text-green-500 text-xs">{item.notifi}</p>
              </div>
              <div>{item.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
