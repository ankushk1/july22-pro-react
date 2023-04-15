import React, { useContext } from "react";
import { nameContext } from "../../App";

const ComponentB = () => {

  const nameFromContext = useContext(nameContext)
  return (
    <div>
      ComponentB
      <br />
      {nameFromContext} coming from App.js
      {/* <nameContext.Consumer>
        {(name) => {
          return <h1>{name} coming from App.js</h1>;
        }}
      </nameContext.Consumer> */}
    </div>
  );
};

export default ComponentB;
