import React from "react";

const name = "ABCD"
const num = 20
const arr = [1,2,3]

const obj = {
  name: "SAM",
  number: 22222
}

const FirstComp = (props) => {
  return (
    <>
      <div className="innerChild">Some Text {name} and {num}</div>
      <div>{obj.number}</div>
      {/* <div>New Div</div> */}
    </>
  );
};

export default FirstComp;
