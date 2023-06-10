import React,{useState,useEffect} from 'react'

function UseeffectHookcount() {
const [count,setcount]=useState(0)
const [name,setname]=useState('')
useEffect(()=>{
if(count>0){
console.log('useEffect-Updating document title')
document.title=`you click ${count} times`
}
},[count])
  return (
    <div>
    <input type="text" value={name} onChange={e=>setname(e.target.value)} />
    <button onClick={()=>setcount(count+1)}>Click {count}</button>
    </div>
  )
}

export default UseeffectHookcount
