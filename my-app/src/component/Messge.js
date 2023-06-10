import React,{Component} from "react";
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Photo"
        }
    }
    changemessage(){
        this.setState({
            message:"You liked this photo"
    })}
    render(){
        return <div><h1>{this.state.message}</h1>
        <button onClick={()=>this.changemessage()}>Like</button></div>
    }
}
export default Message;