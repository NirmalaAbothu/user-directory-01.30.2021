import React, { Component } from "react";
import Header from "./Header";

const styles2 = {
     headerStyle: {
          borderStyle: "ridge",
          marginTop: "30px",
     },
};

function Table() {
     return (
          <div style={styles2.headerStyle}>
               <table className="table">
                    <thead>
                         <tr>
                              <th scope="col">Image</th>
                              <th scope="col">Name</th>
                              <th scope="col">Phone</th>
                              <th scope="col">Email</th>
                              <th scope="col">DOB</th>
                         </tr>
                    </thead>
                    <tbody>
                         {/* <tr>
                                   <td></td>

                                   <td>{item.name}</td>
                                   <td>{item.cell}</td>
                                   <td>{item.email}</td>
                                   <td>{item.dob}</td>
                              </tr>
                          */}
                    </tbody>
               </table>
          </div>
     );
}

export default Table;
