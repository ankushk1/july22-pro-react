import React from "react";
import withApiCall from "./withApiCall";

const Users = ({ loading, apiData, renderData }) => {
  return (
    <div>
      <div>
        {loading && <h1>Loading.....</h1>}
        {!loading && (
          <div className="d-flex flex-wrap justify-content-center">
            {apiData.slice(0, 10).map((elem, index) => renderData(elem, index))}
          </div>
        )}
      </div>
    </div>
  );
};

export default withApiCall(Users, "users");
