// import React from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { LiaRupeeSignSolid } from "react-icons/lia";
// import { CiLight } from "react-icons/ci";

// export default function Navbar({ setShowSideBar }) {
//   return (
//     <>

//       <div className="w-full h-18 md: h-20  shadow-lg flex justify-between items-center font-[roboto]">
//         <div className="flex gap-4 flex-wrp items-center m-2">
//           <div>
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/8032/8032096.png"
//               alt="logo"
//               className="h-10 w-10 md:h-14 md:w-14"
//             />
//           </div>
//           <div className="hidden md:block lg:block">
//             <p className="text-xl font-medium">OTP TOWN</p>
//           </div>
//           <div
//             className="flex items-center justify-center bg-gray-200 rounded-full h-10 w-10 hover:text-blue-700"
//             onClick={() => setShowSideBar(true)}
//           >
//             <RxHamburgerMenu className="h-6 w-6" />
//           </div>
//         </div>

//         <div className="flex gap-2 flex-wrap m-2 lg:gap-4">
//           <div>
//             <CiLight className="h-8 w-8 md:h-12 md:w-12" />
//           </div>

//           <div className="flex gap-1 justify-center items-center border-2 border-blue-500 rounded-2xl">
//             <LiaRupeeSignSolid
//               size={20}
//               className="m-1 mr-0 mt-1 bg-blue-500 rounded-full text-white md:h-8 md:w-8 md:m-2 lg:m-1 lg:my-0"
//             />
//             <p className="m-1 ml-0 font-medium md:text-2xl">16</p>
//           </div>
//           <div>
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
//               alt="profile"
//               className="h-8 w-8 md:h-12 md:w-12"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiLight } from "react-icons/ci";

export default function Navbar({ setShowSideBar }) {
  return (
    <div className="fixed top-0 left-0 right-0 lg:z-50 bg-white shadow-lg h-18 md:h-14 flex justify-between items-center font-roboto">
      <div className="flex gap-4 items-center m-2">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/8032/8032096.png"
            alt="logo"
            className="h-10 w-10 md:h-10 md:w-10"
          />
        </div>
        <div className="hidden md:block lg:block">
          <p className="text-xl font-medium">OTP TOWN</p>
        </div>
        <div
          className="flex items-center justify-center bg-gray-200 rounded-full h-8 w-8 hover:text-blue-700"
          onClick={() => setShowSideBar(true)}
        >
          <RxHamburgerMenu className="h-4 w-4" />
        </div>
      </div>

      <div className="flex gap-2 flex-wrap m-2 lg:gap-4">
        <div>
          <CiLight className="h-8 w-8" />
        </div>

        <div className="flex  justify-center items-center border-2 border-blue-500 rounded-2xl">
          <LiaRupeeSignSolid
            size={20}
            className="m-1  mr-0 mt-1 bg-blue-500 rounded-full text-white m-1"
          />
          <p className="m-1 ml-0 font-medium md:text-base">16</p>
        </div>
        <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
              alt="profile"
              className="h-8 w-8 "
            />
        </div>
      </div>
    </div>
  );
}
