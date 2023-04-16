import React, { useEffect, useState } from "react";

const UseEffectComp = () => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(2);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("UseEffect Called");
  }, [count, count2]);

  useEffect(() => {
    console.log("UseEffect2 Called");
  }, [count2]);

  useEffect(() => {
    return () => {
      console.log("useEffect Unmount called");
    };
  }, []);

  return (
    <div>
      {console.log("render")}
      UseEffectComp rendered {count} times
      <br />
      <div>Count 2 = {count2}</div>
      <div>
        <button onClick={handleIncrement}>Re render</button>
      </div>
      <div>
        <button onClick={() => setCount2(count2 + 2)}>Increase Count 2</button>
      </div>
    </div>
  );
};

export default UseEffectComp;
