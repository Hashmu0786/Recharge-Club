import React, { useState } from "react";
import refer from "../../assets/icons/refer1.png";
import { FaCopy } from "react-icons/fa";
import copy from "copy-text-to-clipboard";

export default function ReferComp() {
  const [copySuccess, setCopySuccess] = useState(false);
  const link = "otptown.club/register?ref_id=pkqybkxin52i4sclmck9xne1z";

  const handleCopy = () => {
    copy(link);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  return (
    <>
      <div className="mt-5">
        <div className="bg-white shadow-lg rounded-lg font-roboto p-5 flex flex-col gap-5">
          <div>
            <h1 className="text-start font-medium text-xl">Refer & Earn</h1>
          </div>
          <div className="flex justify-center items-center ">
            <img src={refer} alt="" className="h-40 w-40" />
          </div>
          <div className="flex justify-between border border-gray-400 rounded-lg p-2 mr-5 mt-5 items-center">
            <p>{link}</p>
            <button onClick={handleCopy}>
              <FaCopy className="cursor-pointer" />
            </button>
          </div>
          {copySuccess && <span className="text-green-500 ml-2">Copied!</span>}
          <div>
            <h1 className="font-medium text-center text-xl">Instructions</h1>
          </div>
          <div className="flex flex-col justify-start gap-2 text-black">
            <p>1. Copy and Share Your link.</p>
            <p>
              2. Whenever your friend register using your link and add money.
            </p>
            <p>
              3. You will receive 5% of the deposit amount in your Refer wallet.
            </p>
            <p>4. You can directly use that balance to buy numbers.</p>
          </div>
        </div>
      </div>
    </>
  );
}
