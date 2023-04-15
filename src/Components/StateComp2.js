import React from "react";
import { useState } from "react";

const StateComp2 = () => {
  // const [numArr, setNumArr] = useState([1, 2, 3]);

  // const changeArr = () => {
  //   const newArr = [...numArr]
  //   newArr.push(4)
  //   newArr.push(5)
  //   setNumArr(newArr)
  // }

  const [userInfo, setUserInfo] = useState({
    name: "Tom",
    lastName: " Jerry",
    email: "tom@gmail.com"
  });

  const nameChange = () => {
    setUserInfo({ ...userInfo,  name: "SAM" });
  };

  const emailChange = () => {
    setUserInfo({ ...userInfo, email: "sam@gmail.com" });
  };

  return (
    <div>
      <div>
        <button onClick={() => nameChange()}>Change Name</button>
        <button onClick={() => emailChange()}>Change Email</button>
      </div>
      Name = {userInfo.name} <br />
      lastName = {userInfo.lastName} <br />
      Email = {userInfo.email}
    </div>
  );
};

export default StateComp2;
