import React from "react";
import Title from "./Title";
import JoinTelegram from "../../components/JoinTelegram";
import Display from "./Display";
import Summary from "./Summary";
import Transcation from "./Transcation";

const detail = "Join Telegram For Latest Updates";
const btndata = "Join now";

export default function Dashboard() {
  return (
    <>
      <div className="ml-5 lg:ml-80 xl:pl-5">
        <Title />
        <JoinTelegram detail={detail} btndata={btndata} />
        <Display />
        <Summary />
        <Transcation />
      </div>
    </>
  );
}
