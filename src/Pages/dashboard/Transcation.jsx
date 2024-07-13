import React from "react";

const data = [
  {
    id: "#1",
    date: "Jun 16, 2024 - 12:45 PM",
    type: "Promocode Redeem",
    amount: "₹50",
  },
  {
    id: "#2",
    date: "Jun 16, 2024 - 12:45 PM",
    type: "Promocode Redeem",
    amount: "₹50",
  },
  {
    id: "#3",
    date: "Jun 16, 2024 - 12:45 PM",
    type: "Promocode Redeem",
    amount: "₹50",
  },
  {
    id: "#4",
    date: "Jun 16, 2024 - 12:45 PM",
    type: "Promocode Redeem",
    amount: "₹50",
  },
  {
    id: "#5",
    date: "Jun 16, 2024 - 12:45 PM",
    type: "Upi Recharge",
    amount: "₹50",
  },
];

export default function Transcation() {
  return (
    <>
      <div className="mt-8 mr-3">
        <div className=" rounded-lg font-roboto shadow-md rounded-lg text-gray-500 px-4 py-8">
          <h1 className="text-black text-xl font-normal text-start">
            Recent 15 Transactions
          </h1>

          <table className="w-full mt-5">
            <thead className="bg-gray-200 flex justify-between text-black font-medium px-4 py-2 rounded-lg">
              <th>ID</th>
              <th>DATE</th>
              <th className="pl-20">TYPE</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
            </thead>
            <tbody>
              {data.map((items, index) => (
                <tr
                  key={index}
                  className="flex items-center justify-between text-black py-4 px-4 text-sm border-b"
                >
                  <td className="">{items.id}</td>
                  <td>{items.date}</td>
                  <td className="pr-5">{items.type}</td>
                  <td className="pr-14">{items.amount}</td>
                  <td>
                    <button className="text-xs font-medium py-1 px-2 rounded-full bg-green-200 text-green-800">
                      Success
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
