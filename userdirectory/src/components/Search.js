import React, { Component } from "react";

const styles1 = {
     headerStyle: {
          Width: "0",
          marginLeft: "500px",
          marginTop: "30px",
     },
};

//Search component

function Search(props) {
     return (
          <form
               style={styles1.headerStyle}
               className="form-inline my-2 my-lg-0"
          >
               <div className="form-group">
                    <label htmlFor="search"></label>
                    <input
                         onChange={props.handleInputChange}
                         value={props.value}
                         name="search"
                         type="text"
                         className="form-control"
                         placeholder="Search For a user"
                         id="search"
                    />
                    <br />
               </div>
          </form>
     );
}
export default Search;
