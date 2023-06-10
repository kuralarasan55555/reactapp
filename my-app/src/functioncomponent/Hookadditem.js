import React,{useState} from 'react'

function Hookadditem() {
  const [items,setitems]=useState([])
  const additem=()=>{
    setitems([...items,{
        id:items.length,
        value:Math.floor(Math.random()*10)+1
    }])
  }
  return (
    <div>
      <button onClick={additem}>ADD ITEM</button>
      <ul style={{display:'table',margin:0,margin:'auto',textAlign:'center',listStyleType:'square'}}>
      {items.map(item=>(<li key={item.id}>{item.value}</li>))
}
      </ul>
    </div>
  )
}

export default Hookadditem
