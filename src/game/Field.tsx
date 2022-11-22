import React from "react";
import Keyboard from "./Keyboard";
import { useState } from "react";
import { range } from "../utils/array";

const WORD_LENGTH = 5;
const ROWS = 6;

type CellState = {
  letter: string;
  variant?: "correct" | "semi-correct" | "incorrect";
};

type Board = CellState[][];

const deepCopyBoard = (data: Board): Board => JSON.parse(JSON.stringify(data));

const getEmptyCeil = () => ({
  letter: "",
});

const getEmptyBoard = () =>
  range(ROWS).map(() => range(WORD_LENGTH).map(getEmptyCeil));

const Field = () => {
  const [board, setBoard] = useState<Board>(getEmptyBoard());

  const handleBackspace = () => {
    console.log("bsp");
  };

  const handlePressed = (letter: string) => {
    setBoard((prev) => {
      const nexState = deepCopyBoard(prev);
      nexState[0][0].letter;
      return nexState;
    });
  };

  return (
    <>
      <div className="board">
        {board.map((row, index) => (
          <div key={index} className="board-row">
            {row.map((cell, index) => (
              <div key={index} className={`cell ${cell.variant}`}>
                {cell.letter}
              </div>
            ))}
          </div>
        ))}
      </div>
      <Keyboard onPressed={handlePressed} onBackspace={handleBackspace} />
    </>
  );
};

export default Field;
