import React from "react";
import withApiCall from "./withApiCall";

const Todos = ({ loading, apiData, renderData }) => {
  return (
    <div>
      {loading && <h1>Loading.....</h1>}
      {!loading && (
        <div className="d-flex flex-wrap justify-content-center">
          {apiData.slice(0, 10).map((elem, index) => renderData(elem, index))}
        </div>
      )}
    </div>
  );
};

export default withApiCall(Todos, "todos");
