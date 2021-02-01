import React, { Component } from "react";

// TableRow component to display row data in table

function TableRow(props) {
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
