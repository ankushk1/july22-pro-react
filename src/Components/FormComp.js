import React, { useState } from "react";
import { useFormHook } from "../utils/CustomHooks";

const FormComp = () => {
  const { inputValues, handleInputChange } = useFormHook();

  // const [userInfo, setUserInfo] = useState({
  //   firstName:"",
  //   lastName: "",
  //   email:""
  // });

  // const handleInputChange = (event) => {
  //   setUserInfo({...userInfo, [event.target.name]: event.target.value});
  // };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="first name"
            value={inputValues.firstName}
            name="firstName"
            onChange={(event) => handleInputChange(event)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="last name"
            value={inputValues.lastName}
            name="lastName"
            onChange={(event) => handleInputChange(event)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="email"
            value={inputValues.email}
            name="email"
            onChange={(event) => handleInputChange(event)}
          />
        </div>
      </form>
      <br /> <br /> 
      <div>
        firstName - {inputValues.firstName} <br />
        lastName - {inputValues.lastName} <br />
        email - {inputValues.email} <br />
      </div>
    </div>
  );
};

export default FormComp;
