import React from "react";
const styles = {
     headerStyle: {
          marginTop: "50px",
     },
};

const styles1 = {
     headerStyle: {
          Width: "0",
          marginLeft: "500px",
          marginTop: "30px",
     },
};

const styles2 = {
     headerStyle: {
          borderStyle: "ridge",
     },
};

function Card() {
     return (
          <div style={styles2.headerStyle}>
               <form
                    style={styles1.headerStyle}
                    className="form-inline my-2 my-lg-0"
               >
                    <input
                         className="form-control mr-sm-2"
                         type="search"
                         placeholder="Search"
                         aria-label="Search"
                    />
               </form>
               <table class="table">
                    <thead>
                         <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                         </tr>
                         <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                         </tr>
                         <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                         </tr>
                    </tbody>
               </table>
          </div>
     );
}

export default Card;
