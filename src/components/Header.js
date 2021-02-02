import React from "react";

// styles for Header component
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

// Header components function

function Header() {
     return (
          <div style={styles.headerStyle} className="jumbotron">
               <h1 style={styles.headerStyle}>Employee Directory</h1>
               <p style={styles.headerStyle}>
                    Click on Name column to filter by firstName or use search
                    box to narrow your result
               </p>
          </div>
     );
}

export default Header;
