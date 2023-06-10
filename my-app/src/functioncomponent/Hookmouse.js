import React, { useEffect, useState } from 'react'

function Hookmouse() {
  const [x,setx]=useState(0) 
  const [y,sety]=useState(0)  
  const mouseposition=e=>{
    console.log('Mouse Event')
    setx(e.clientX)
    sety(e.clientY)
  }
  useEffect(()=>{
    console.log('Useeffect called')
    window.addEventListener('mousemove',mouseposition)
    return()=>{
    console.log('Component unmount')
    window.removeEventListener('mousemove',mouseposition)
    }
  },[]);
  return (
    <div>
      HOOK X-{x} Y-{y}
    </div>
  )
}

export default Hookmouse
