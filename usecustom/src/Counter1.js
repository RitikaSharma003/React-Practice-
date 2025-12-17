import React from "react";
import useCounter from "./useCounter";
const Counter1 = () => {
  const [Increment, Decrement, count] = useCounter(0);
  return (
    <div>
      {count}
      <div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter1;
