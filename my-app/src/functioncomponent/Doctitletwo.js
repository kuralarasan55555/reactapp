import React,{useEffect,useState} from 'react'
import useDocumenttitle from '../Hook/useDocumenttitle'

function Doctitletwo() {
const [count,setcount]=useState(0)
useDocumenttitle(count,2)//custom hook
  return (
    <div>
      <button onClick={()=>setcount(count+1)}>COUNT - {count}</button>
    </div>
  )
}

export default Doctitletwo
