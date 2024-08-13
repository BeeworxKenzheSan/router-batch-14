import { useState } from "react";

export const useCounter = (initialState) => {
  const [counter, setCounter] = useState(initialState);

  function increment(param = 1) {
    setCounter((prevState) => prevState + param);
  }
  function decrement(param = 1) {
    setCounter((prevState) => prevState - param);
  }
  return [counter, increment, decrement];
};
