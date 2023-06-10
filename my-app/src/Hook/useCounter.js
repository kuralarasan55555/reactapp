import { useState } from 'react'

function useCounter(initialcount=0,value) {
  const [count,setcount]=useState(initialcount)
  const increment=()=>{
    setcount(prevcount=>prevcount+value)
  }
  const decrement=()=>{
    setcount(prevcount=>prevcount-value)
  }
  const reset=()=>{
    setcount(initialcount)
  }
  return [count,increment,decrement,reset]
}

export default useCounter
