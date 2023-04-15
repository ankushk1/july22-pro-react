import React from "react";

const PropsComp = (props) => {
  console.log(props);

  const {
    from,
    num,
  } = props;

  return (
    <div>
      The props coming from {from} <br />
      The age is {num}
      <br />
      <br />
    </div>
  );
};

export default PropsComp;
