import React from 'react'
import {useLocation, useNavigate, useParams} from 'react-router-dom';
const Signup = () => {

  const navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  console.log(params)
  const signUp = () => {
    // validations
    // hit api 

    // redirect automatically to home
    // navigate("/home" , {
    //   state : {
    //     message: "Data from signup",
    //     id: 120
    //   }
    // })
    navigate(1)
  }

  return (
    <div>Signup

      <div>
      <button className='btn btn-secondary' onClick={signUp}>Sign up</button>
      </div>
    </div>
  )
}

export default Signup