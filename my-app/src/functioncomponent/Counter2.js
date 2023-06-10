import React from 'react'
import useCounter from '../Hook/useCounter'

function Counter2() {
    const [count,increment,decrement,reset]=useCounter(10,5)
  return (
    <div>
        <h1>COUNT={count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter2
