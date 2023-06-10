import React from 'react'

function Column({regno,name,dept}) {
  return (
      <tr>
        <td>{regno}</td>
        <td>{name}</td>
        <td>{dept}</td>
      </tr>
  )
}

export default Column
