import React from "react";

function generateRandomData() {
  const data = [];
  for (let i = 1; i <= 20; i++) {
    data.push({
      sNo: i,
      email: `user${i}@example.com`,
      totalOtp: Math.floor(Math.random() * 100),
      totalRecharge: Math.floor(Math.random() * 1000),
      totalBalance: Math.floor(Math.random() * 500),
      status: Math.random() > 0.5 ? "active" : "inactive",
      action: "edit",
    });
  }
  return data;
}

const data = generateRandomData();

export default function BuyerTabel() {
  return (
    <>
      <div className="w-full mt-10">
        <div className="bg-blue-500 shadow-lg rounded-lg py-2 px-5">
          <h3 className="text-white font-medium text-lg">Top 20 OTP Buyer</h3>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  S.no
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Total OTP
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Recharge
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Balance
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${
                    index === data.length - 1 ? "" : "border-b"
                  }`}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.sNo}
                  </th>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.totalOtp}</td>
                  <td className="px-6 py-4">{item.totalRecharge}</td>
                  <td className="px-6 py-4">{item.totalBalance}</td>
                  <td className="px-6 py-4">{item.status}</td>
                  <td className="px-6 py-4">{item.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
