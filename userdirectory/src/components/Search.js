import React, { Component } from "react";
import Header from "./Header";
import Table from "./Table";

const styles1 = {
     headerStyle: {
          Width: "0",
          marginLeft: "500px",
          marginTop: "30px",
     },
};
function Search() {
     return (
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
     );
}
export default Search;
