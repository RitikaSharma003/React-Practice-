import React, { useState, useCallback } from "react";
import ChildA from "./components/ChildA";
const App = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  const Learning = useCallback(() => {}, []);
  return (
    <div>
      <ChildA Learning={Learning} count={count} />
      <h1>{add}</h1>

      <button onClick={() => setAdd(add + 1)}>Addition</button>

      <br />

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 2)}>Count</button>
    </div>
  );
};

export default App;
