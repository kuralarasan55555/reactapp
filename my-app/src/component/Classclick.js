import React, { Component } from 'react'

export class Classclick extends Component {
  funclass(){
    document.getElementById("deo").innerHTML="Class clicked";
  }
  render() {
    return (
      <div>
        <button onClick={this.funclass}>click class</button>
        <p id="deo"></p>
      </div>
    )
  }
}

export default Classclick
