import React, { useContext } from "react";
import { AppContent } from "../App";

export default function Letter({ pos, val }) {
  const { board, correctWord, currentAttempt } = useContext(AppContent);
  const letter = board[val][pos];

  const correct = correctWord[pos] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);
  const letterState =
    currentAttempt.attempt > val &&
    (correct ? "correct" : almost ? "almost" : "error");
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}
