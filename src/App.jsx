import React, { useState } from 'react';

const initialBoard = Array(9).fill(null);

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const Square = ({ value, onClick }) => (
  <button className="bg-white border border-gray-300 w-16 h-16 text-2xl font-bold" onClick={onClick}>
    {value}
  </button>
);

const Board = () => {
  const [squares, setSquares] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  const handleClick = (i) => {
    if (winner || squares[i]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => <Square value={squares[i]} onClick={() => handleClick(i)} />;

  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="text-center">
      <div className=" text-4xl text-orange-600 font-bold mb-4">{status}</div>
      <div className="gap-1">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex">
            {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => (
  <div className="App p-8">
    <h1 className="text-6xl text-orange-800 text-center font-bold mb-4">Tic-Tac-Toe Game</h1>
    <Board className=" align-middle" />
  </div>
);

export default App;
