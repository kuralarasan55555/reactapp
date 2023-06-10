import React from "react";
import Students from "./Students";
export function Namelist(){
    const students=[
        {id:1,name:'krishna',Skill:'Angular'},
        {id:2,name:'kural',Skill:'React'},
        {id:3,name:'Muthu',Skill:'Angular'}
    ]
    return(
        <div>
        <h1>Student details</h1>
        {
            students.map(s=><Students s={s} key={s.id}/>)
        }
        </div>
    )
}