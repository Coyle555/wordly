import React, { useContext } from "react";
import { AppContent } from "../App";
function Key({ keyVal, soloKey, clizzy, onBaby }) {
  const { onEnter, onDelete, onSelectLetter } = useContext(AppContent);
  const selLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div className={clizzy} id={soloKey && onBaby} onClick={selLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
