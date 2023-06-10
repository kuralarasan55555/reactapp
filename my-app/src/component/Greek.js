import React from 'react';
/*function Greek(){
    return <h1>Hello</h1>
}
export default Greek;*/
//export const Greek=()=><h1>Welcome to React</h1>
export const Greek=()=>{
    /*return(
        <div>
            <h1>Welcome to react</h1>
        </div>

    )*/
    //return React.createElement('div',null,React.createElement('h1',null,"Welcome to react"));
    return React.createElement('div',
    {id:'hi',className:'hello'},React.createElement('h1',null,"Welcome to react"));
}
