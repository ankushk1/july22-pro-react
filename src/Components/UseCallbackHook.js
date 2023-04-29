import React, { useCallback, useEffect, useState } from "react";

const set = new Set();

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  const onCountChange = () => {
    setCount(count + 1);
  };

  const onNumChange = useCallback((inc) => {
    setNum(num + inc);
  }, [num])

  // const onNumChange = (inc) => {
  //   setNum(num + inc);
  // };

  set.add(onNumChange);

  console.log(set);
  useEffect(() => {
    console.log("useEffect Called");
  }, [onNumChange]);

  return (
    <div>
      {console.log("render")}
      <div>Count = {count}</div>
      <div>Number = {num}</div>

      <div>
        <button onClick={onCountChange}>Increment Count</button> <br />
        <button onClick={() => onNumChange(5)}>Increment Num</button>
      </div>
    </div>
  );
};

export default UseCallbackHook;
