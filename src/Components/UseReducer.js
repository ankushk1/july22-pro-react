import React, { useReducer } from "react";

const UseReducer = () => {
  const initialState = {
    count: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return { count: state.count + action.payload };
      case "dec":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count = {state.count}
      <div>
        <button
          className="btn btn-success me-2"
          onClick={() => dispatch({ type: "inc", payload: 5 })}
        >
          Increase
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "dec" })}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
