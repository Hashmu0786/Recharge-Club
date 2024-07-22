import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar.jsx";
import Dashboard from "../dashboard/index.jsx";
import BuyNumbers from "../BuyNumbers/index.jsx";
import Recharge from "../Recharge/index.jsx";
import ReferEarn from "../ReferEarn/index.jsx";
import NumberHistory from "../NumberHistory/index.jsx";
import TransactionHistory from "../TransactionHistory/index.jsx";
import SidebarAdmin from "./SidebarAdmin.jsx";
import NavbarAdmin from "./NavbarAdmin.jsx";
import AdminDashboard from "../../Admin Pages/Dashboard/index.jsx";

export default function Layout() {
  // Use useMediaQuery hook to determine if the screen size is lg or larger
  const isLgOrLarger = useMediaQuery({ query: "(min-width: 1024px)" });
  const [showsidebar, setShowSideBar] = useState(false);

  // Update showsidebar state based on screen size
  useEffect(() => {
    setShowSideBar(isLgOrLarger);
  }, [isLgOrLarger]);

  return (
    <>
      {/* user admin dashboard layout */}
      {/* <div>
        <Navbar setShowSideBar={setShowSideBar} />
        <div>
          <Sidebar setShowSideBar={setShowSideBar} showsidebar={showsidebar} />
        </div> */}

      {/* <div className="mt-24"> */}
      {/* <Dashboard /> */}
      {/* <BuyNumbers /> */}
      {/* <Recharge /> */}
      {/* <ReferEarn /> */}
      {/* <NumberHistory /> */}
      {/* <TransactionHistory /> */}
      {/* </div> */}
      {/* </div> */}

      {/* super admin layout start from here */}

      <div>
        <NavbarAdmin setShowSideBar={setShowSideBar} />
        <div>
          <SidebarAdmin
            setShowSideBar={setShowSideBar}
            showsidebar={showsidebar}
          />
        </div>
        <div>
          <AdminDashboard />
        </div>
      </div>
    </>
  );
}
