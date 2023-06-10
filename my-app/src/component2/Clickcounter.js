import React, { Component } from 'react'

class Clickcounter extends Component {
  render() {
    const {count,incrementcount}=this.props
    console.log(count)
    console.log(incrementcount)
    return (
      <div>
        <button onClick={incrementcount}>clickCounter {count} times</button>
      </div>
    )
  }
}

export default Clickcounter
