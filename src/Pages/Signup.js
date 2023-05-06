import React from 'react'
import {useNavigate} from 'react-router-dom';
const Signup = () => {

  const navigate = useNavigate();

  const signUp = () => {
    // validations
    // hit api 

    // redirect automatically to home
    navigate("/home")
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