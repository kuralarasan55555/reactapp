import React from "react";
function Students({s}){
    return(
        <div>
            <table>
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>skill</th>
                </tr>
                <tr>
                    <td><h2>{s.id}</h2></td>
                    <td><h2>{s.name}</h2></td>
                    <td><h2>{s.Skill}</h2></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Students;