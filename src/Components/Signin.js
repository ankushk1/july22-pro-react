import React from "react";
import { useFormHook } from "../utils/CustomHooks";

const Signin = () => {

  const {inputValues, handleInputChange} = useFormHook();

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="email"
            value={inputValues.email}
            name="email"
            onChange={(event) => handleInputChange(event)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            value={inputValues.password}
            name="password"
            onChange={(event) => handleInputChange(event)}
          />
        </div>
      </form>
    </div>
  );
};

export default Signin;
