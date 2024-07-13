import React from "react";
import Nav from "./Nav";
import ReferComp from "./ReferComp";
import ReferData from "./ReferData";

export default function ReferEarn() {
  return (
    <>
      <div className="ml-5 lg:ml-80 xl:pl-5 mb-10 mr-5">
        <Nav />
        <ReferComp />
        <ReferData />
      </div>
    </>
  );
}
