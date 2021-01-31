import React, { Component } from "react";

function TableRow(props) {
     console.log(props);
     return (
          <tr>
               <td>
                    <img src={props.picture} alt={props.firstName} />
               </td>

               <td>
                    {props.firstName}
                    {props.lastName}
               </td>
               <td>{props.phone}</td>
               <td>{props.email}</td>
               <td>{props.dob}</td>
          </tr>
     );
}

export default TableRow;
