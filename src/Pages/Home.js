import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  let location = useLocation();
  const navigate = useNavigate();

  console.log(location);
  return (
    <div>
      Home
      {/* <div>{location.state.message}</div> */}
      <button
        onClick={() => {
          navigate('/signup/2000/abc');
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default Home;
