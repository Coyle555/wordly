import React, { useCallback, useEffect, useContext } from "react";
import { AppContent } from "../App";
import Key from "./Key";
import { getLettersGuessed } from "../App";

function isKeyUsed(key) {
  return getLettersGuessed().includes(key.toLowerCase());
}

function Keyboard() {
  const { board, onEnter, onDelete, onSelectLetter } = useContext(AppContent);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  });

  const handleKeyboard = useCallback((event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  });

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  // Make the key dark gray if the letter is used on baby.
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key) => {
          return (
            <Key
              clizzy="key"
              keyVal={key}
              soloKey={true}
              onBaby={isKeyUsed(key) && "black"}
            />
          );
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return (
            <Key
              clizzy="key"
              soloKey={true}
              onBaby={isKeyUsed(key) && "black"}
              keyVal={key}
            />
          );
        })}
      </div>
      <div className="line3">
        <Key clizzy="key" keyVal={"ENTER"} soloKey={true} onBaby="big" />
        {keys3.map((key) => {
          return (
            <Key
              clizzy="key"
              soloKey={true}
              keyVal={key}
              onBaby={isKeyUsed(key) && "black"}
            />
          );
        })}
        <Key clizzy="key" keyVal={"DELETE"} soloKey={true} onBaby="big" />
      </div>
    </div>
  );
}

export default Keyboard;
