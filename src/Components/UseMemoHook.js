import React, { useMemo, useState } from "react";

export const multiple = (num) => {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  const multipleOfNum = useMemo(() => {
    console.log('useMemo Called')
    return multiple(num);
  }, [num, count])

  return (
    <div>
      <div>
        Count - {count} <br />
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
      <br />
      <br />
      <br />
      <div>
        {num} x 2 = {multipleOfNum}
      </div>
      <button onClick={() => setNum(num + 1)}>Increment Num</button>
    </div>
  );
};

export default UseMemoHook;
