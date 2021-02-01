import React, { Component } from "react";

import Header from "./components/Header";
import RandomUser from "./components/RandomUser.js";

function App() {
     return (
          <div className="container">
               {/* Header component */}
               <Header />

               {/* RandomUser component */}
               <RandomUser />
          </div>
     );
}

export default App;
