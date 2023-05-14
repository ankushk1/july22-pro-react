import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByNum } from "./Redux/CounterSlice";

const CounterRedux = () => {
  const [count, setCount] = useState(1);

  const stateCount = useSelector((state) => state.counter.count);
  console.log(stateCount);

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementByNum(10));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="">
      Count - {stateCount}
      <div>
        <button onClick={() => handleIncrement()}>Increment</button>
        <button onClick={() => handleDecrement()}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterRedux;
