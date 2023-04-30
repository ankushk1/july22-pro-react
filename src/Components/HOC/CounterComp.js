import React, { useState } from 'react'
import withCounter from './withCounter'

const CounterComp = (props) => {
  console.log(props);
  const {count, onHandleIncrement, message} = props
  
  return (
    <div>
      {count}
      <div>
        <button onClick={onHandleIncrement}>Increase</button>
      </div>
    </div>
  )
}

export default withCounter(CounterComp)