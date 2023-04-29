import React, { useState } from "react";
import { useFetch } from "../utils/CustomHooks";

const CustomApiCall = () => {
  const [route, setRoute] = useState("products");

  const { apiData } = useFetch("https://dummyjson.com", route);
  console.log(apiData);

  return (
    <div>
      <button onClick={() => setRoute("products")}>Products</button>
      <button onClick={() => setRoute("users")}>Users</button>
    </div>
  );
};

export default CustomApiCall;
