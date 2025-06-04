import React, { useState, useMemo } from "react";

const App = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  // function multiply() {
  //   return add * 10;
  // }

  const multiplication = useMemo(
    function multiply() {
      console.log("8888888");
      return add * 10;
    },
    [add]
  );

  return (
    <div>
      <button onClick={() => setAdd(add + 1)}>addition</button>
      <span>{add}</span>
      <br />
      {multiplication}
      <br />
      <br />
      <button onClick={() => setMinus(minus - 1)}>subtraction</button>
      <span>{minus}</span>
    </div>
  );
};

export default App;
