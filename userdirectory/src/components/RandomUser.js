import React, { Component } from "react";

import Header from "./Header";
import Search from "./Search";
import Table from "./Table";
import API from "../utils/API";
import TableRow from "./TableRow";

const styles2 = {
     headerStyle: {
          borderStyle: "ridge",
          marginTop: "30px",
     },
};

class RandomUser extends Component {
     state = {
          users: [],
          result: {},
          search: "",
     };

     // When this component mounts, search for the movie "The Matrix"

     componentDidMount() {
          API.search()
               .then((res) =>
                    // console.log(this.state.result);
                    this.setState({ users: res.data.results })
               )

               .catch((err) => console.log(err));
          // console.log(users);
          // console.log(this.state.users);
     }

     // searchRandomUsers() {
     //      API.search().then((res) => {
     //           // console.log(this.state.result);
     //           this.setState({ result: res.data.results });

     //           // .catch((err) => console.log(err));
     //      });
     // .catch((err) => console.log(err));
     // }

     // componentDidMount() {
     //      API.Search().then((res) => {
     //           this.setState({ Userss: res.data.Userss });
     //           console.log(this.state.Userss).catch((err) => console.log(err));
     //      });
     // }

     // searchRandomUsers = () => {
     //      API.search()
     //        .then(res => this.setState({ Users: res.data.Userss }))
     //        console.log(this.state.Userss);
     //        .catch(err => console.log(err));

     //    };

     handleInputChange = (event) => {
          this.setState({ search: event.target.value });
          this.SearchEmployee(this.state.search);
     };

     // SearchEmployee = (value) => {
     //      const filteredList = this.state.users.sort((a, b) => {
     //           return (
     //                (a.name.first + a.name.last > b.name.first + b.name.last) *
     //                     2 -
     //                1
     //           );
     //      });

     //      this.setState({ users: filteredList });

     //      console.log(this.state.users);
     // };

     SearchEmployee = (value) => {
          const filterdList = this.state.users.filter((user) => {
               return (user.name.first + "" + user.name.last)
                    .toLowerCase()
                    .includes(value.toLowerCase());
          });
          this.setState({ users: filterdList });

          console.log(this.state.users);
     };

     // When the form is submitted, search the OMDB API for the value of `this.state.search`
     // handleFormSubmit = (event) => {
     //      event.preventDefault();
     //      this.searchMovies(this.state.search);
     // };

     render() {
          return (
               <div>
                    <div>
                         <Search
                              value={this.state.search}
                              handleInputChange={this.handleInputChange}
                         />
                    </div>

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
                                   {[...this.state.users].map((item, index) => (
                                        <TableRow
                                             key={index}
                                             picture={item.picture.medium}
                                             firstName={item.name.first}
                                             lastName={item.name.last}
                                             phone={item.cell}
                                             email={item.email}
                                             dob={new Date(
                                                  Date.parse(item.dob.date)
                                             ).toLocaleDateString()}
                                        />
                                   ))}
                              </tbody>
                         </table>
                    </div>
               </div>
          );
     }
}

export default RandomUser;
