import React,{Component} from "react";
class Welcome extends Component{
    render(){
        const {name,sur}=this.props;
        return <h1>Happy Learning {name} {sur}</h1>
    }
}
export default Welcome;