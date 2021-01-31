import React, { Component } from "react";
import Search from "./components/Search";

import Table from "./components/Table";
import Header from "./components/Header";
import RandomUser from "./components/RandomUser.js";

function App() {
     return (
          <div className="container">
               <Header />
               <Search />

               <RandomUser />
          </div>
     );
}

export default App;
