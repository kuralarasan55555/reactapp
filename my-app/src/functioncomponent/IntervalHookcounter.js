import React,{useState,useEffect} from 'react'

function IntervalHookcounter() {
  const [count,setcount]=useState(0)
  const tick=()=>{
    setcount(count+1)
  }
  function doSomething(){
    console.log('Function mount')
  }
  useEffect(()=>{
    doSomething()
    const interval=setInterval(tick,1000)
    return ()=>{
        console.log('Function unmount')
        clearInterval(interval)
    }
  },[count])
  return (
    <div>
      <h1>Counter {count}</h1>  
    </div>
  )
}

export default IntervalHookcounter
