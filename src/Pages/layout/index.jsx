import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar.jsx";
import Dashboard from "../dashboard/index.jsx";
import BuyNumbers from "../BuyNumbers/index.jsx";

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
      <div>
        <Navbar setShowSideBar={setShowSideBar} />
        <div>
          <Sidebar setShowSideBar={setShowSideBar} showsidebar={showsidebar} />
        </div>
        <div className="mt-24">
          {/* <Dashboard /> */}
          <BuyNumbers />
        </div>
      </div>
    </>
  );
}