
import React, { Component } from 'react'

class Eventbind extends Component {
  constructor(props){
    super(props)
    this.state={
        message:'hello'
    }
    // this.cbind=this.cbind.bind(this)
  }
  cbind=()=>{
    this.setState({message:'bye'})
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.cbind.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.cbind()}>Click</button> */}
        {/* <button onClick={this.cbind}>Click</button> */}
        <button onClick={this.cbind}><h5>Click</h5></button>
      </div>
    )
  }
}

export default Eventbind;
