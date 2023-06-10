import React,{useState} from 'react'

function Hookcounter() {
  const [count,setcount]=useState(0)
  const incrementfive=()=>{
    setcount(prevcount=>prevcount+5);
  }
  const decrementfive=()=>{
    setcount(prevcount=>prevcount-5);
  }
  return (
    <div>
      Count : {count}<br/>
      <button onClick={()=>setcount(0)}>RESET</button>
      <br/>
      <button onClick={()=>setcount(prevcount=>prevcount+1)}>INCREMENT</button>
      <br/>
      <button onClick={()=>setcount(prevcount=>prevcount-1)}>DECREMENT</button>
      <br/>
      <button onClick={incrementfive}> INCREMENT FIVE</button>
      <br/>
      <button onClick={decrementfive}>DECREMENT FIVE</button>
    </div>
  )
}
export default Hookcounter