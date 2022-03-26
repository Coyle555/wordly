import "./App.css";
import Keyboard from "./components/Keyboard";
import Board from "./components/Board";
import wordBank from "./wordbank";
import { createContext, useState, useEffect } from "react";
import { boardDefault } from "./Words";
import { getRandomWord } from "./Words";
import "bootstrap/dist/css/bootstrap.min.css";

export const AppContent = createContext();

const correctWord = getRandomWord().toUpperCase();

let lettersGuessed = [];

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, pos: 0 });
  const onSelectLetter = (keyVal) => {
    if (currentAttempt.pos > 4) return;
    const currBoard = [...board];
    currBoard[currentAttempt.attempt][currentAttempt.pos] = keyVal;
    setBoard(currBoard);
    setCurrentAttempt({ ...currentAttempt, pos: currentAttempt.pos + 1 });
  };

  useEffect(() => {}, []);
  const onEnter = () => {
    if (currentAttempt.pos !== 5) return;
    // We need to check the word is in the wordbank
    //
    // get the array at the current row
    // create array -> string
    // if string NOT in wordbank ,return
    const currBoard = [...board];
    // could be gibberish: i.e. "asdfg"
    // could be real word: "could"

    // ["C", "O", "U", "L", "D"]
    // .join() -> "C,O,U,L,D"
    // .join("") -> "COULD"
    // toLowerCase() -> could
    let maybeWord = currBoard[currentAttempt.attempt].join("").toLowerCase();
    // if the word is not a valid guess.
    if (!wordBank.includes(maybeWord)) {
      return;
    }

    let chars = maybeWord.split("");

    chars.forEach((element) => {
      lettersGuessed.push(element);
    });

    setCurrentAttempt({ attempt: currentAttempt.attempt + 1, pos: 0 });
  };

  const onDelete = () => {
    if (currentAttempt.pos === 0) return;
    const currBoard = [...board];
    currBoard[currentAttempt.attempt][currentAttempt.pos - 1] = "";
    setBoard(currBoard);
    setCurrentAttempt({ ...currentAttempt, pos: currentAttempt.pos - 1 });
  };
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContent.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          onDelete,
          onEnter,
          onSelectLetter,
          correctWord,
        }}
      >
        <div className="game">
          <Board />
          <div className="container pt-5">
            <div className="row">
              <Keyboard />
            </div>
          </div>
        </div>
      </AppContent.Provider>
    </div>
  );
}

export default App;

export function getLettersGuessed() {
  return lettersGuessed;
}
