import wordBank from "./wordbank.js";
export const newBoard = ["", "", "", "", "", "", ""];
export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

// Feature: wordle.
// 1. get a random word
// 2. for i in 6: guesses on that random word
// 3. if letter in the right place, turn green, if not in right place, turn yellow, if not in word turn gray
// 4. at the end, show word.

export function getRandomWord() {
  let words = wordBank;
  let randomIndex = Math.round(Number(Math.random() * words.length - 1));
  return words[randomIndex];
}
