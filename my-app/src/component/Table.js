import React from 'react'
import Column from './Column'
import './table.css'
function Table() {
  return (
    <table>
         <thead>
           <tr>
                <th>REGISTER NO</th>
                <th>NAME</th>
                <th>DEPARTMENT</th>
            </tr>
          </thead>
            <tbody>
            <Column regno="1" name="Ramesh" dept="CSE"/>
            <Column regno="2" name="Arun" dept="IT"/>
            <Column regno="3" name="Suresh" dept="BME"/>
          </tbody>
    </table>
  )
}

export default Table
