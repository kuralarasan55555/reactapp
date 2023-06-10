import React,{ Component } from "react";
class Counter extends Component{
constructor(props){
    super(props)
    this.state={co:0}
}
increment(){
    this.setState({co:this.state.co+1})
}
decrement(){
    this.setState(
        {co:this.state.co-1}
    )}
render(){
    return (
        <div>
            <div>Count-{this.state.co}</div>
            <button onClick={()=>this.increment()}>Increment</button>
            <button onClick={()=>this.decrement()}>Decrement</button>
        </div>
    )
}
}
export default Counter;