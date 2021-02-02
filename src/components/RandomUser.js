import React, { Component } from "react";

import Search from "./Search";
import API from "../utils/API";
import TableRow from "./TableRow";

// styles for table
const styles2 = {
     headerStyle: {
          borderStyle: "ridge",
          marginTop: "30px",
     },
};

// class RandomUser which is extends Component

class RandomUser extends Component {
     state = {
          users: [],
          result: {},
          search: "",
          sortOrder: "",
     };

     // When this component mounts, search for the random users"

     componentDidMount() {
          API.search()
               .then((res) => this.setState({ users: res.data.results }))

               .catch((err) => console.log(err));
     }

     // handleInputChange function to fiter the users

     handleInputChange = (e) => {
          this.setState({ search: e.target.value });

          console.log(e.target.value);

          this.SearchEmployee(e.target.value);
     };
     //  SearchEmployee function to filter the uses thru the values enterd in search box

     SearchEmployee = (value) => {
          const search = value.toLowerCase();
          const filterdList = this.state.users.filter((user) => {
               return (
                    user.name.first.toLowerCase().includes(search) ||
                    user.name.last.toLowerCase().includes(search)
               );
          });
          console.log(filterdList);
          this.setState({ users: filterdList });

          console.log(this.state.users);
     };

     //Sorting by firstName thru Name column in header coulmn of the table

     sortByName = () => {
          const sortedList = this.state.users.sort(
               (a, b) => (a.name.first > b.name.first) * 2 - 1
          );
          console.log(sortedList);
          if (this.state.sortOrder === "down") {
               sortedList.reverse();
               console.log(sortedList);
               this.setState({ sortOrder: "up" });
          } else {
               this.setState({ sortOrder: "down" });
          }
          this.setState({ users: sortedList });
     };

     // render the search box and table

     render() {
          return (
               <div>
                    <div>
                         <Search
                              value={this.state.search}
                              handleInputChange={this.handleInputChange.bind(
                                   this
                              )}
                         />
                    </div>

                    <div style={styles2.headerStyle}>
                         <table className="table">
                              <thead>
                                   <tr>
                                        <th scope="col">Image</th>
                                        <th
                                             scope="col"
                                             onClick={() => {
                                                  this.sortByName();
                                             }}
                                        >
                                             Name
                                        </th>
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
