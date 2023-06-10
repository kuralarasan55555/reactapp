import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
    this.state= {
        userid:'',
         comments: '',
         topic: ''
      }
    }
    handlecommentchanges=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleidchanges=(event)=>{
        this.setState({
            userid:event.target.value
        })
    }
    handletopicchange=event=>{
        this.setState({
            topic:event.target.value
        })
    }
    handlesubmitchange=event=>{
        alert('form submitted successfully');
        console.log(typeof userid)
    }
  render() {
    const {userid,comments,topic}=this.state;
    return (
        <form onSubmit={this.handlesubmitchange}>
            <h1>FORM DETAILS</h1>
            <label>UserId
            <br></br>
            <input 
            type="text"
            value={userid} 
            onChange={this.handleidchanges}/>
            </label>
            <div>
                <label>Comments</label>
                <textarea value={comments} onChange={this.handlecommentchanges}/>
            </div>
            <div>
                <label>Topic</label>
                <select value={topic} onChange={this.handletopicchange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="JQuery">JQuery</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
  }
}

export default Form
