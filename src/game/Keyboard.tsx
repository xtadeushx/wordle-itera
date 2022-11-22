import React from "react";

const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

const buttons = rows.map((row) => row.split(""));

const Keyboard = ({ onBackspace, onPressed }) => {
  return (
    <div className="keyboard">
      <div>
        {buttons.map((row, index) => (
          <div key={index}>
            {row.map((letter) => (
              <button onClick={() => onPressed(letter)} key={letter}>
                {letter}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => onBackspace()}>Backspace</button>
      </div>
    </div>
  );
};
export default Keyboard;
