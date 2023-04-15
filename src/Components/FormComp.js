import React, { useState } from "react";

const FormComp = () => {
  const [userInfo, setUserInfo] = useState({
    firstName:"",
    lastName: "",
    email:""
  });

  const handleInputChange = (event) => {
    setUserInfo({...userInfo, [event.target.name]: event.target.value});
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="first name"
            value={userInfo.firstName}
            name="firstName"
            onChange={(event) => handleInputChange(event)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="last name"
            value={userInfo.lastName}
            name="lastName"
            onChange={(event) => handleInputChange(event)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="email"
            value={userInfo.email}
            name="email"
            onChange={(event) => handleInputChange(event)}
          />
        </div>
      </form>
      <br /> <br /> <br /> <br /> <br />
      <div>
        firstName - {userInfo.firstName} <br />
        lastName - {userInfo.lastName} <br />
        email - {userInfo.email} <br />
      </div>
    </div>
  );
};

export default FormComp;
