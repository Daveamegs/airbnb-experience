import React from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [setX, setSetX] = React.useState(true);

  const handlePlayer = (index) => {
    squares[index] = setX ? "X" : "O";
    setSquares(squares);
    setSetX(!setX);
  };

  const showSquare = (index) => {
    return <Square value={squares[index]} player={() => handlePlayer(index)} />;
  };

  return (
    <div className="board">
      <div className="board-row">
        {showSquare(0)}
        {showSquare(1)}
        {showSquare(2)}
      </div>
      <div className="board-row">
        {showSquare(3)}
        {showSquare(4)}
        {showSquare(5)}
      </div>
      <div className="board-row">
        {showSquare(6)}
        {showSquare(7)}
        {showSquare(8)}
      </div>
    </div>
  );
};

export default Board;
