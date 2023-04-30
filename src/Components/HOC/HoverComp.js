import React, { useState } from "react";
import withCounter from "./withCounter";

const HoverComp = ({count, onHandleIncrement}) => {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px"
      }}
    >
      <div
        style={{
          backgroundColor: "cyan",
          border: "1px solid",
          width: "200px"
        }}
        onMouseOver={onHandleIncrement}
      >
        {count}
      </div>
    </div>
  );
};

export default withCounter(HoverComp);
