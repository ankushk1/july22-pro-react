import React, { useState } from "react";

const StateComp = () => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(5);

  const handleIncrement = (num) => {
    // setCount((prevState) => { // 1 3 5
    //   console.log(prevState + 1);
    //   return prevState + 1;
    // });
    // setCount((prevState) => { // 2 4 6
    //   console.log('2 -- ',prevState + 1);
    //   return prevState + 1;
    // });
  };

  const handleIncrement2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div className="State Comp">
      {console.log("render")}
      StateComp rendered {count} times
      <div>
        {/* <div>{count2}</div> */}
        <button onClick={() => handleIncrement(5)}>Increment</button>
        {/* <button onClick={handleIncrement2}>Increment</button> */}
      </div>
    </div>
  );
};

export default StateComp;
