import React from "react";

const Square = ({ value, player }) => {
  return (
    <button className="square" onClick={player}>
      {value}
    </button>
  );
};

export default Square;
