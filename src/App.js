import React, { useState, useMemo, useCallback } from "react";
import Counter from "./Counter";

import "./styles.css";

const App = () => {
  const [addCounter, setAddCounter] = useState(0);
  const [subtCounter, setSubtCounter] = useState(0);
  const addCounterFunct = useCallback(() => setAddCounter(addCounter + 1), [
    addCounter
  ]);
  const subtCounterFunct = useCallback(() => setSubtCounter(subtCounter - 1), [
    subtCounter
  ]);

  const firstCounter = useMemo(
    () => (
      <Counter
        name="Add number"
        button="Add"
        funct={addCounterFunct}
        value={addCounter}
      />
    ),
    [addCounter, addCounterFunct]
  );
  const secondCounter = useMemo(
    () => (
      <Counter
        name="Subtract number"
        button="Subtract"
        funct={subtCounterFunct}
        value={subtCounter}
      />
    ),
    [subtCounter, subtCounterFunct]
  );
  return (
    <div className="App">
      {firstCounter}
      <p> {addCounter}</p>
      {secondCounter}
      <p> {subtCounter} </p>
    </div>
  );
};
export default App;
