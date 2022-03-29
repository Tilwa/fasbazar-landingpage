import React from "react";
import CountdownTimer from "../../hooks/CountdownTimer";

import "./Timer.css";

export default function App() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  );
}
