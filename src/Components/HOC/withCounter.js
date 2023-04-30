import React, { useState } from "react";
// const withCounter = (PrevComponent) => {
//   const NewComponent = (props) =>  {
//     const [count, setCount] = useState(0);

//     const onHandleIncrement = () => {
//       setCount(count + 1);
//     };

//     return (
//       <div>
//         <PrevComponent count={count} onHandleIncrement={onHandleIncrement} />
//       </div>
//     );
//   }
//   return NewComponent;
// };

const withCounter = (PrevComponent) => (props) => {
  console.log(props)
  const [count, setCount] = useState(0);

  const onHandleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <PrevComponent count={count} onHandleIncrement={onHandleIncrement}
      message={props.message}
      />
    </div>
  );
};

export default withCounter;
