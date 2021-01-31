import React from "react";

const styles = {
     headerStyle: {
          background: "black",
          color: "white",
          textAlign: "center",
          marginTop: "30px",
     },
     headingStyle: {
          fontSize: 100,
     },
};

function Header() {
     return (
          <div style={styles.headerStyle} className="jumbotron">
               <h1 style={styles.headerStyle}>Employee Directory</h1>
               <p style={styles.headerStyle}>
                    Click on carrots to filter by heading or use search box to
                    narrow your result
               </p>
          </div>

          // <div class="container">
          //      <div class="page-header">
          //           <h1>Example Page Header</h1>
          //      </div>
          // </div>
     );
}

export default Header;
