import React from "react";

const Timer = ({ timeLeft }) => {
  return (
    <div className="timer">
      <p>Time Left: {timeLeft}s</p>
    </div>
  );
};

export default Timer;
