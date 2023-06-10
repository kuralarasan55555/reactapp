import React from 'react'

function FunctionClick() {
  function clickf(){
    document.getElementById("dem").innerHTML="function click";
  }
  return (
    <div>
      <button onClick={clickf}>Click Function</button>
      <p id="dem"></p>
    </div>
  )
}

export default FunctionClick
