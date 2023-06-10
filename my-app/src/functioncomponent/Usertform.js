import React, { useState } from 'react'
import useInput from '../Hook/useInput'

function Usertform() {
  const[firstname,bindfn,resetfn]=useInput('')
  const[lastname,bindln,resetln]=useInput('')
  const submithandler=(e)=>{
    e.preventDefault()
    alert(`Hello ${firstname} ${lastname}`)
    resetfn()
    resetln()
  }
  return (
    <form onSubmit={submithandler}>
    <div><label>FirstName</label>
      <input type="text" {...bindfn}/>
    </div>
    <div><label>LastName</label>
      <input type="text" {...bindln}/>
    </div>
    <button>Submit</button>
    </form>
  )
}

export default Usertform
