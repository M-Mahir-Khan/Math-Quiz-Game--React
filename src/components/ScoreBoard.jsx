import React from "react";

const Scoreboard = ({ score }) => {
  return (
    <div className="scoreboard">
      <p>Score: {score}</p>
    </div>
  );
};

export default Scoreboard;
