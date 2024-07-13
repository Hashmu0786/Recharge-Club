import React from "react";
import RechargeMethods from "./RechargeMethods";
import JoinTelegram from "../../components/JoinTelegram";

const detail = "If You Are Facing Any Problem Please Contact Us";
const btndata = "Contact Us";

export default function Recharge() {
  return (
    <>
      <div className="ml-5 lg:ml-80 xl:pl-5 ">
        <JoinTelegram detail={detail} btndata={btndata} />
        <RechargeMethods />
      </div>
    </>
  );
}
