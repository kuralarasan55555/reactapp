import React, { Component } from 'react'

class HoverCounter extends Component {
  render() {
    const {count,incrementcount}=this.props
    console.log(count)
    console.log(incrementcount)
    return (
      <div>
        <h1 onMouseOver={incrementcount}>HoverCounter {count} times</h1>
      </div>
    )
  }
}

export default HoverCounter

