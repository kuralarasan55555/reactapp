import React, { Component } from 'react'
class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementcount=()=>{
        this.setState(prevstate=>{
           return {count:prevstate.count+1}
        })
    }
  render() {
    console.log(this.state.count)
    console.log(this.incrementcount)
    return (
      <div>
        {this.props.render(this.state.count,this. incrementcount)}
      </div>
    )
  }
}

export default Counter
